<?php
//ini_set('display_errors',1);
//ini_set('memory_limit','256M');
error_reporting(0);
//ini_set('display_errors',1);
session_start();


include_once "./inc/db_conf.php";
include_once "./inc/pdo.php";

include_once "./inc/class_admin.php";


include_once "./lib/phpmailer/config.php";
include_once "./lib/phpmailer/class.phpmailer.php";
include_once "./inc/functions.php";

 //require './../lib/yasdk/autoload.php'; 
 //use YandexCheckout\Client;
//include_once "./../lib/wideimage-11.02.19-lib/WideImage.php";

if(isset($_POST['task'])){ $task = trim($_POST['task']);}elseif(isset($_GET['task'])){ $task = trim($_GET['task']);} else{ $task = 'main';}

if(!isset($_SESSION['admin_id']) || !intval($_SESSION['admin_id'])){
 $can_edit = false;
}

$admin = new se_admin();
$admin->admin_checkCookies();
if($admin->admin_exists != 1){
 $can_edit = false;
 //exit;
}
else{
 $can_edit = true;
}

//hack
//$can_edit = true;

switch($task){ 
 //doLogin авторизация
 case "doLogin":
  $login = trim($_REQUEST['login']);
  $password = trim($_REQUEST['password']);
  $remember = (trim($_REQUEST['remember']) == "true")? true : false;
  
  if($login == "" || $password == ""){
   $data['is_err'] = 1;
   $data['err'] = "Empty login or password";
   echo json_encode($data);
   exit;
  }
  
  $sql_admin = "SELECT * FROM `admins` WHERE (`login` = :login OR `email` = :login) AND `password` = :password LIMIT 1 ";  
  $res_admin = $DBH->prepare($sql_admin);
  $arr_admin = Array(
             'login' => $login,
             'password' => $password
             );
  
  $res_admin->execute($arr_admin);
  $row_admin = $res_admin->fetch();
  
  if(!$row_admin){
   $data['is_err'] = 1;
   $data['err'] = "Wrong login or password";
   echo json_encode($data);
   exit;
  }
  if($remember){
    //var_dump($_REQUEST);
    setcookie("admin_id",$row_admin['id'],time()+3600*24*30,"/");
    setcookie("admin_hash",md5($salt . ":" . $row_admin['id'] . ":" . $row_admin['password']),time()+3600*24*30,"/");
  }
  $_SESSION['admin_id'] = $row_admin['id'];
  $data['is_err'] = 0;
  echo json_encode($data);
  exit;
 break;
 
//doReg регистрация
 case "doReg":
  $login = trim($_REQUEST['login']);
  $email = trim($_REQUEST['email']);
  $password = trim($_REQUEST['password']);
  if(!$login || !$email || !$password){
   $data['is_err'] = 1;
   $data['err'] = "Не заполнены обязательные поля";
   echo json_encode($data);
   exit;
  }
  
  $sql_admin = "SELECT * FROM `admins` WHERE `login` = :login OR `email` = :email LIMIT 1 ";  
  $res_admin = $DBH->prepare($sql_admin);
  $arr_admin = Array(
             'login' => $login,
             'email' => $email
             );
  
  $res_admin->execute($arr_admin);
  $row_admin = $res_admin->fetch();
  
  if($row_admin){
   $data['is_err'] = 1;
   $data['err'] = "Login или Email уже зарегистрированы";
   echo json_encode($data);
   exit;
  }
  
  //$pass = substr(md5(time()), rand(0,5), rand(6,8));
  
  $time = time();
  
  $sql_ins = "INSERT INTO `admins` SET 
  		`login` = :login, 
  		`email` = :email,
  		`name` = :login,
  		`root` = 0,
  		`password` = :pass ";
  $res_ins = $DBH->prepare($sql_ins);
  $arr_ins = Array(
             'login' => $login,
             'email' => $email,
             'pass' => $password
             );
  
  $res_ins->execute($arr_ins);  
  $data['is_err'] = ($res_ins)? 0 : 1;
  
  echo json_encode($data);
  exit;
 break; 
 
 //doForgot напомнить пароль
 case "doForgot":  
  $email = trim($_REQUEST['email']);
  if(!$email){
   $data['is_err'] = 1;
   $data['err'] = "Не заполнены обязательные поля";
   echo json_encode($data);
   exit;
  }
  
  $sql_admin = "SELECT * FROM `admins` WHERE `email` = :email LIMIT 1 ";  
  $res_admin = $DBH->prepare($sql_admin);
  $arr_admin = Array(
             'email' => $email
             );
  
  $res_admin->execute($arr_admin);
  $row_admin = $res_admin->fetch();
  $data['is_err'] = 0;
  if(!$row_admin){
   $data['is_err'] = 1;
   $data['err'] = "Email не найден";
   echo json_encode($data);
   exit;
  }
   
   $subject = "Напоминание пароля на сайте imap.prettysites.ru";
    $message = "<html><head><meta charset='utf-8'></head><body>";
    $message .= "<h3>Напоминание пароля на сайте imap.prettysites.ru</h3>";
    $message .= "<h3>Данные для входа в систему:</h3>";    
    $message .= "<p>Логин: <b>".$row_admin['login']."</b></p>";
    $message .= "<p>Пароль: <b>".$row_admin['password']."</b></p>";
    $message .= "</body></html>";
    
 
  if($row_admin){
    $res = notify_admin($row_admin['email'],$subject,$message);
  }
  
  echo json_encode($data);
  exit;
 break; 
 
 
 case "getAdmins":
  $sql_admins = "SELECT * FROM `admins` WHERE 1 ORDER BY `name` ";
  $admins_arr = $DBH->query($sql_admins)->fetchAll();
  foreach($admins_arr As $ob){
   $t = Array();
   $t['value'] = $ob['id'];
   $t['text'] = $ob['name'];
   $admins[] = $t;
  }
  echo json_encode($admins);
  exit;
 break; 
 
 //edit редактировать
 case "edit_admin":
  //var_dump($_REQUEST);
  if(!intval($admin->admin_info['id'])){   
   exit;
  }
  $id = intval($_REQUEST['pk']);
  $field = trim($_REQUEST['name']);
  $value = trim($_REQUEST['value']);
   
   $sql_upd = "UPDATE `admins` SET `".$field."` = :value WHERE `id` = '".$admin->admin_info['id']."' LIMIT 1 ";
   //echo $sql_upd;
   $arr_upd = Array('value'=>$value);
   $res_upd = $DBH->prepare($sql_upd);
   $res_upd->execute($arr_upd);        
    
  exit;
 break;

 case "checkImapConnection":
  if(!intval($admin->admin_info['id'])){   
	$data['err'] = "Обновите страницу";
	$data['is_err'] = 1;
	echo json_encode($data);  
   exit;
  }
  $host = trim($admin->admin_info['imap_host']);
  $port = trim($admin->admin_info['imap_port']);
  $ssl = trim($admin->admin_info['imap_ssl']);
  $login = trim($admin->admin_info['imap_login']);
  $password = trim($admin->admin_info['imap_password']);
  $str_host = "{" . $host . ":" . $port . "/imap/" . $ssl . "}INBOX";
  //var_dump($str_host,$login,$password); 
  $imap = imap_open($str_host, $login, $password);
  //var_dump($imap);
  if(!$imap){
    $data['err'] = "Ошибка при соединении";
	 $data['is_err'] = 1;
	 echo json_encode($data);  
    exit;
  }
  $mails_id = imap_search($imap, 'UNSEEN');
 
  $cnt = (is_array($mails_id) && count($mails_id))? count($mails_id) : 0;
  //var_dump($mails_id);
  /*
  if(!$mails_id){
    $data['err'] = "Ошибка при соединении";
	 $data['is_err'] = 1;
	 echo json_encode($data);  
    exit;
  }
  */
  imap_close($imap);
  $data['text_html'] = "Соединение успешно. <br>Кол-во непрочитанных писем: " . $cnt;
  $data['is_err'] = 0;
  echo json_encode($data);  
  exit;
 break;  
 
 case "addNewWord":
   if(!intval($admin->admin_info['id'])){   
	 $data['err'] = "Обновите страницу";
	 $data['is_err'] = 1;
	 echo json_encode($data);  
    exit;
   }
   $word = trim($_REQUEST['word']);
   
   if($word == ""){   
	 $data['err'] = "Не указано слово для поиска";
	 $data['is_err'] = 1;
	 echo json_encode($data);  
    exit;
   }
   
   $sql_ins = "INSERT INTO `words` SET `id_admin` = :admin,`word` = :word ";
   $arr_ins = array('admin' => $admin->admin_info['id'],'word' => $word);
   $res_ins = $DBH->prepare($sql_ins);
   $res_ins->execute($arr_ins);
   $data['is_err'] = ($res_ins)? 0 : 1;
   $data['new_id'] = $DBH->lastInsertId();
   $data['new_word'] = $word;
   echo json_encode($data);
   exit;
 break;
 
 case "edit_word":
   if(!intval($admin->admin_info['id'])){   
	 $data['err'] = "Обновите страницу";
	 $data['is_err'] = 1;
	 echo json_encode($data);  
    exit;
   }
   
   $id = intval($_REQUEST['pk']);
   $field = trim($_REQUEST['name']);
   $value = trim($_REQUEST['value']);
   
   $sql_upd = "UPDATE `words` SET `".$field."` = :value WHERE `id` = '".$id."' AND `id_admin` = '".$admin->admin_info['id']."' LIMIT 1 ";
   //echo $sql_upd;
   $arr_upd = Array('value'=>$value);
   $res_upd = $DBH->prepare($sql_upd);
   $res_upd->execute($arr_upd);        
    
   exit;
 break;
 
 case "delWord":
   if(!intval($admin->admin_info['id'])){   
	 $data['err'] = "Обновите страницу";
	 $data['is_err'] = 1;
	 echo json_encode($data);  
    exit;
   }
   
   $id = intval($_REQUEST['id_word']);
         
   $sql_del = "DELETE FROM `words` WHERE `id` = '".$id."' AND `id_admin` = '".$admin->admin_info['id']."' LIMIT 1 ";
   //echo $sql_upd;
   $res_del = $DBH->query($sql_del);
   $data['is_err'] = ($res_del)? 0 : 1;
   echo json_encode($data); 
   exit;
 break;
 
 case "delMessage":
   if(!intval($admin->admin_info['id'])){   
	 $data['err'] = "Обновите страницу";
	 $data['is_err'] = 1;
	 echo json_encode($data);  
    exit;
   }
   
   $id = intval($_REQUEST['id_message']);
   
   $sql_del = "DELETE FROM `messages` WHERE `id` = '".$id."' AND `id_admin` = '".$admin->admin_info['id']."' LIMIT 1 ";
   //echo $sql_upd;
   $res_del = $DBH->query($sql_del);
   $data['is_err'] = ($res_del)? 0 : 1;
   echo json_encode($data); 
   exit;
 break;
 
 case "checkAdmin":
  $data['is_err'] = 0;
  echo json_encode($data);
  exit;
 break;
 
 
}


?>

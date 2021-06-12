<?php
 require_once __DIR__ . "/../inc/pdo.php";
 require_once __DIR__ . "/../inc/functions.php";
 $sql_admins = "SELECT * FROM `admins` WHERE 1 AND `imap_host` <> '' AND `imap_port` <> '' AND `imap_login` <> '' AND `imap_password` <> '' ";
 $res_admins = $DBH->query($sql_admins);
 //получаем пользователей с заполеннными полями для imap
 while($row_admin = $res_admins->fetch()){
  //var_dump($row_admin); 
  //получаем непрочитанные сообщения
  $host = trim($row_admin['imap_host']);
  $port = trim($row_admin['imap_port']);
  $ssl = trim($row_admin['imap_ssl']);
  $login = trim($row_admin['imap_login']);
  $password = trim($row_admin['imap_password']);
  $str_host = "{" . $host . ":" . $port . "/imap/" . $ssl . "}INBOX";
  //var_dump($str_host,$login,$password); 
  $imap = imap_open($str_host, $login, $password);
  if(!$imap){
	continue;	  
  }
  $mails_id = imap_search($imap, 'UNSEEN');
  $i=0;  
  foreach ($mails_id As $num) {
  	$i++;
  	if($i > 100){ continue;}
   //заголовок
	$msg_header = imap_header($imap, $num);
	$msg_title = get_imap_title($msg_header->subject);	
	//var_dump($msg_title);exit;
 
	// Тело письма
	$msg_structure = imap_fetchstructure($imap, $num);
	$msg_body      = imap_fetchbody($imap, $num, 1);

	$recursive_data = recursive_search($msg_structure);
	$body = get_imap_body($recursive_data,$msg_body);
	//var_dump($body);exit;
   if($msg_title && $body){
   	$time = time();
		$sql_ins = "INSERT INTO `messages` SET `id_admin` = :admin,
															`subject` = :subject,
															`message_html` = :message_html,
															`message_text` = :message_text,
															`added` = :added_time,
															`status` = 0,
															`status_res` = '' ";
		$arr_ins = array('admin' => $row_admin['id'], 'subject' => $msg_title, 'message_html' => $body,'message_text' => strip_tags($body), 'added_time' => $time);
		$res_ins = $DBH->prepare($sql_ins);
		$res_ins->execute($arr_ins);														   
   } 
  }
  echo "\n admin " . $row_admin['id'] . " cnt: " . $i;	
 }
 echo "\nEnd";
?>
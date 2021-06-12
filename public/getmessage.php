<?php
//ini_set('display_errors',1);
//ini_set('memory_limit','256M');
error_reporting(0);
//ini_set('display_errors',1);
session_start();


include_once "./inc/db_conf.php";
include_once "./inc/pdo.php";

include_once "./inc/class_admin.php";


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

if(!$can_edit){ 
 echo "Error authorization";
 exit;
}
$id = isset($_GET['id'])? intval($_GET['id']) : 0;
$sql_message = "SELECT * FROM `messages` WHERE `id` = '" . $id . "' AND `id_admin` = '".$admin->admin_info['id']."' LIMIT 1";
$row_message = $DBH->query($sql_message)->fetch();

if(!$row_message){
 echo "Message not found";
}

echo $row_message['message_html'];
?>
<?php
$page = 'messages';
include_once "header.php";

$p = isset($_GET['p'])? intval($_GET['p']) : 0;
$num_per_page = 50;

$sql_messages_cnt = "SELECT COUNT(`id`) As cnt FROM `messages` WHERE `id_admin` = '".$admin->admin_info['id']."' ";
$row_messages_cnt = $DBH->query($sql_messages_cnt)->fetch();

$num_pages = ceil($row_messages_cnt['cnt']/$num_per_page);
if(!$num_pages){ $num_pages = 1;}

$sql_messages = "SELECT * FROM `messages` WHERE `id_admin` = '".$admin->admin_info['id']."' ORDER BY `id` DESC LIMIT ".($p*$num_per_page).",".$num_per_page." ";
$res_messages = $DBH->query($sql_messages);
$messages = array();
while($row_message = $res_messages->fetch()){
 $row_message['added_date'] = date('Y-m-d H:i',$row_message['added']);
 $row_message['status_text'] = ($row_message['status'] == 0)? "В обработке" : "Обработан";
 $messages[] = $row_message;
} 

$smarty->assign('messages',$messages);
$smarty->assign('num_pages',$num_pages);
$smarty->assign('p',$p);
include_once "footer.php";
?>
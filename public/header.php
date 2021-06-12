<?php
error_reporting(0);
//error_reporting(E_ALL);
//ini_set("display_errors", true);
session_start();
require_once('./inc/smarty_admin_conf.php');
require_once('./inc/db_conf.php');
require_once('./inc/pdo.php');

require_once('./inc/functions.php');

require_once('./inc/class_admin.php');
/*
if($page == 'answers_from_wheel' || $page == 'edit_from_wheel'){
 $_SESSION['admin_id'] = 1;
}
*/
//var_dump($_SESSION);
$admin = new se_admin();
$admin->admin_checkCookies();
//var_dump($admin);

//echo "ex ".$admin->admin_exists;
if(!isset($page)){
 $page = 'index';
}
//var_dump($admin);exit;
if($admin->admin_exists != 1 && ($page != 'login' && $page != 'register' && $page != 'forgot')){
 header("Location: /login.php");
}
$time = time();

$page_name = "Содержание";
$page_title = "IMAP";
switch($page){
 case "login":
  $page_title = $page_title." | Авторизация"; 
  $page_name = "Авторизация";
 break;
 case "index":
  $page_title = $page_title." | Главная"; 
  $page_name = "Главная";
 break; 
 case "settings":
  $page_title = $page_title." | Настройки профиля"; 
  $page_name = "Настройки профиля";
 break;
 case "settings_imap":
  $page_title = $page_title." | Настройки IMAP"; 
  $page_name = "Настройки IMAP";
 break;
 case "settings_words":
  $page_title = $page_title." | Настройки ключевых слов"; 
  $page_name = "Настройки ключевых слов";
 break;
 case "messages":
  $page_title = $page_title." | История писем"; 
  $page_name = "История писем";
 break;
 case "accounts":
  $page_title = $page_title." | Пользователи"; 
  $page_name = "Пользователи";
 break; 
}


$smarty->assign('page_title', $page_title);
$smarty->assign('page_name', $page_name);;
$smarty->assign('page', $page);
?>

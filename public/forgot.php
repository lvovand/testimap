<?php
$page = "forgot";
//ini_set("display_errors", 1);
include "header.php";
// USER IS LOGGED IN, FORWARD TO USER HOME
if($admin->admin_exists != 0) { header("Location: index.php"); exit(); }
//if($user->user_exists != 0) { header('Location: profile.php?user=".$user->user_info[user_username]."'); exit();}
if(isset($_POST['task'])) { $task = $_POST['task']; } else { $task = "main"; }

// INITIALIZE ERROR VARS
$is_error = 0;
$error_message = "";
// GET login

// ASSIGN VARIABLES AND INCLUDE FOOTER
//$smarty->assign('login', $login);
//$smarty->assign('is_error',$admin->is_error);
//$smarty->assign('error_message', "Ошибка авторизации: ".$error_message);
include "footer.php";

?>
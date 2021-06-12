<?php
$page = 'settings_words';
include_once "header.php";

$sql_words = "SELECT * FROM `words` WHERE `id_admin` = '".$admin->admin_info['id']."' ORDER BY `word` ";
$res_words = $DBH->query($sql_words);
$words = array();
while($row_word = $res_words->fetch()){
 $words[] = $row_word;
} 

$smarty->assign('words',$words);
include_once "footer.php";
?>
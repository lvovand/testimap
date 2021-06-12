<?php
//тестирование подключения imap
ini_set("display_errors",1);
include_once "./inc/pdo.php";
include_once "./inc/functions.php";

 $imap = imap_open("{imap.yandex.ru:993/imap/ssl}INBOX", "test", "12345");
$mails_id = imap_search($imap, 'ALL');
$num = 0;
var_dump($mails_id[$num]); 

//заголовок
$msg_header = imap_header($imap, $mails_id[$num]);
$msg_title = get_imap_title($msg_header->subject);
var_dump($msg_title);
 
// Тело письма
// Тело письма
$msg_structure = imap_fetchstructure($imap, $mails_id[$num]);
$msg_body      = imap_fetchbody($imap, $mails_id[$num], 1);

$recursive_data = recursive_search($msg_structure);
$body = get_imap_body($recursive_data,$msg_body);

var_dump($body);
imap_close($imap);
exit;
foreach ($mails_id as $num) {
	// Заголовок письма
	$header = imap_header($imap, $num);
	var_dump($header);
 
	// Тело письма
	$body = imap_body($imap, $num);
	var_dump($body);
}
 
?>

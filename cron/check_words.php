<?php
 require_once __DIR__ . "/../inc/pdo.php";

 $sql_messages = "SELECT * FROM `messages` WHERE 1 AND `status` = 0 ORDER BY `id` ASC LIMIT 1 ";
 $res_messages = $DBH->query($sql_messages);
 while($row_message = $res_messages->fetch()){
  $words = array();	
  $sql_words = "SELECT `word` FROM `words` WHERE `id_admin` = '" . $row_message['id_admin'] . "' "; 
  $words = $DBH->query($sql_words)->fetchAll();
  //var_dump($words);
  //exit; 
  $res_arr = false;
  $res_str = "";
  if(is_array($words) && count($words)){
	foreach($words As $word){
		$res_search_subj = mb_stripos ($row_message['subject'] , $word['word']);
		$res_search_msg = mb_stripos ($row_message['message_text'] , $word['word']);
		
		if($res_search_subj !== false || $res_search_msg !== false){
			$res_arr[] = $word['word'];		
		}	
	}	  
  }
  if($res_arr){
	$res_str = implode(',', $res_arr);	  
  }
  //var_dump($res_str);
  $sql_upd = "UPDATE `messages` SET `status` = 1,`status_res` = :res_txt WHERE `id` = '".$row_message['id']."' LIMIT 1 ";
  $arr_upd = array('res_txt' => $res_str);
  $res_upd = $DBH->prepare($sql_upd);
  $res_upd->execute($arr_upd);
 }
 echo "\nEnd";
?>
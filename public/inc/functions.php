<?php
if(!function_exists('mb_ucfirst')) {
    function mb_ucfirst($str, $enc = 'utf-8') { 
    		return mb_strtoupper(mb_substr($str, 0, 1, $enc), $enc).mb_substr($str, 1, mb_strlen($str, $enc), $enc); 
    }
}


if (!function_exists('json_encode')) {  
    function json_encode($value) 
    {
        if (is_int($value)) {
            return (string)$value;   
        } elseif (is_string($value)) {
	        $value = str_replace(array('\\', '/', '"', "\r", "\n", "\b", "\f", "\t"), 
	                             array('\\\\', '\/', '\"', '\r', '\n', '\b', '\f', '\t'), $value);
	        $convmap = array(0x80, 0xFFFF, 0, 0xFFFF);
	        $result = "";
	        for ($i = mb_strlen($value) - 1; $i >= 0; $i--) {
	            $mb_char = mb_substr($value, $i, 1);
	            if (mb_ereg("&#(\\d+);", mb_encode_numericentity($mb_char, $convmap, "UTF-8"), $match)) {
	                $result = sprintf("\\u%04x", $match[1]) . $result;
	            } else {
	                $result = $mb_char . $result;
	            }
	        }
	        return '"' . $result . '"';                
        } elseif (is_float($value)) {
            return str_replace(",", ".", $value);         
        } elseif (is_null($value)) {
            return 'null';
        } elseif (is_bool($value)) {
            return $value ? 'true' : 'false';
        } elseif (is_array($value)) {
            $with_keys = false;
            $n = count($value);
            for ($i = 0, reset($value); $i < $n; $i++, next($value)) {
                        if (key($value) !== $i) {
			      $with_keys = true;
			      break;
                        }
            }
        } elseif (is_object($value)) {
            $with_keys = true;
        } else {
            return '';
        }
        $result = array();
        if ($with_keys) {
            foreach ($value as $key => $v) {
                $result[] = json_encode((string)$key) . ':' . json_encode($v);    
            }
            return '{' . implode(',', $result) . '}';                
        } else {
            foreach ($value as $key => $v) {
                $result[] = json_encode($v);    
            }
            return '[' . implode(',', $result) . ']';
        }
    } 
}



 function remove_tags($html){
  $search = array ("'<script***91;^>***93;*?".">.*?</script>'si",  // Вырезает javaScript
                 "'<***91;\/\!***93;*?***91;^<>***93;*?".">'si",           // Вырезает HTML-теги
                 "'(***91;\r\n***93;)***91;\s***93;+'",                 // Вырезает пробельные символы
                 "'&(quot|#34);'i",                 // Заменяет HTML-сущности
                 "'&(amp|#38);'i",
                 "'&(lt|#60);'i",
                 "'&(gt|#62);'i",
                 "'&(nbsp|#160);'i",
                 "'&(iexcl|#161);'i",
                 "'&(cent|#162);'i",
                 "'&(pound|#163);'i",
                 "'&(copy|#169);'i",
                 "'&#(\d+);'e");                    // интерпретировать как php-код

	$replace = array ("",
                  "",
                  "\\1",
                  "\"",
                  "&",
                  "<",
                  ">",
                  " ",
                  chr(161),
                  chr(162),
                  chr(163),
                  chr(169),
                  "chr(\\1)");

	$n_text = preg_replace($search, $replace, $html);
	var_dump($html);
	return($document); 
 }

 function translit($str) {
 $str = trim($str);
 $tr = array(
	            "А"=>"a",
	            "Б"=>"b",
	            "В"=>"v",
	            "Г"=>"g",
	            "Д"=>"d",
              "Е"=>"e",
              "Ё"=>"e",
	            "Ж"=>"j",
	            "З"=>"z",
	            "И"=>"i",
	            "Й"=>"y",
	            "К"=>"k",
	            "Л"=>"l",
	            "М"=>"m",
	            "Н"=>"n",
	            "О"=>"o",
	            "П"=>"p",
	            "Р"=>"r",
	            "С"=>"s",
	            "Т"=>"t",
	            "У"=>"u",
	            "Ф"=>"f",
	            "Х"=>"h",
	            "Ц"=>"ts",
	            "Ч"=>"ch",
	            "Ш"=>"sh",
	            "Щ"=>"sch",
	            "Ъ"=>"",
	            "Ы"=>"i",
	            "Ь"=>"j",
	            "Э"=>"e",
	            "Ю"=>"yu",
	            "Я"=>"ya",
	            "а"=>"a",
	            "б"=>"b",
	            "в"=>"v",
	            "г"=>"g",
	            "д"=>"d",
	            "е"=>"e",
	            "ё"=>"e",
	            "ж"=>"j",
	            "з"=>"z",
	            "и"=>"i",
	            "й"=>"y",
	            "к"=>"k",
	            "л"=>"l",
	            "м"=>"m",
	            "н"=>"n",
	            "о"=>"o",
	            "п"=>"p",
	            "р"=>"r",
	            "с"=>"s",
	            "т"=>"t",
	            "у"=>"u",
	            "ф"=>"f",
	            "х"=>"h",
	            "ц"=>"ts",
	            "ч"=>"ch",
	            "ш"=>"sh",
	            "щ"=>"sch",
	            "ъ"=>"y",
	            "ы"=>"i",
	            "ь"=>"j",
	            "э"=>"e",
	            "ю"=>"yu",
	            "я"=>"ya",
	            " "=> "_",
	            "."=> "",
	            "/"=> "_",
	            ","=>"_",
	            "-"=>"_",
              "("=>"",
	            ")"=>"",
	            "["=>"",
	            "]"=>"",
	            "="=>"_",
	            "+"=>"_",
	            "*"=>"",
	            "?"=>"",
	            "\""=>"",
	            "'"=>"",
	            "&"=>"",
	            "%"=>"",
	            "#"=>"",
	            "@"=>"",
	            "!"=>"",
	            ";"=>"",
	            "№"=>"",
	            "^"=>"",
	            ":"=>"",
	            "~"=>"",
	            "\\"=>""
	        );
	        return strtr($str,$tr);
}
  
function retranslit($str) {
 $str = trim($str);
 $tr = array(
	            "А"=>"a",
	            "Б"=>"b",
	            "В"=>"v",
	            "Г"=>"g",
	            "Д"=>"d",
              "Е"=>"e",
              "Ё"=>"e",
	            "Ж"=>"j",
	            "З"=>"z",
	            "И"=>"i",
	            "Й"=>"y",
	            "К"=>"k",
	            "Л"=>"l",
	            "М"=>"m",
	            "Н"=>"n",
	            "О"=>"o",
	            "П"=>"p",
	            "Р"=>"r",
	            "С"=>"s",
	            "Т"=>"t",
	            "У"=>"u",
	            "Ф"=>"f",
	            "Х"=>"h",
	            "Ц"=>"ts",
	            "Ч"=>"ch",
	            "Ш"=>"sh",
	            "Щ"=>"sch",
	            "Ъ"=>"",
	            "Ы"=>"i",
	            "Ь"=>"j",
	            "Э"=>"e",
	            "Ю"=>"yu",
	            "Я"=>"ya",
	            "а"=>"a",
	            "б"=>"b",
	            "в"=>"v",
	            "г"=>"g",
	            "д"=>"d",
	            "е"=>"e",
	            "ё"=>"e",
	            "ж"=>"j",
	            "з"=>"z",
	            "и"=>"i",
	            "й"=>"y",
	            "к"=>"k",
	            "л"=>"l",
	            "м"=>"m",
	            "н"=>"n",
	            "о"=>"o",
	            "п"=>"p",
	            "р"=>"r",
	            "с"=>"s",
	            "т"=>"t",
	            "у"=>"u",
	            "ф"=>"f",
	            "х"=>"h",
	            "ц"=>"ts",
	            "ч"=>"ch",
	            "ш"=>"sh",
	            "щ"=>"sch",
	            "ъ"=>"y",
	            "ы"=>"i",
	            "ь"=>"j",
	            "э"=>"e",
	            "ю"=>"yu",
	            "я"=>"ya",
	            " "=> "_",
	            "."=> "",
	            "/"=> "_",
	            ","=>"_",
	            "-"=>"_",
              "("=>"",
	            ")"=>"",
	            "["=>"",
	            "]"=>"",
	            "="=>"_",
	            "+"=>"_",
	            "*"=>"",
	            "?"=>"",
	            "\""=>"",
	            "'"=>"",
	            "&"=>"",
	            "%"=>"",
	            "#"=>"",
	            "@"=>"",
	            "!"=>"",
	            ";"=>"",
	            "№"=>"",
	            "^"=>"",
	            ":"=>"",
	            "~"=>"",
	            "\\"=>""
	        );
	        return strtr($str,$tr);
}  
  
 
 function crop_str($string, $limit){
  $dop = "";
  $string = strip_tags($string);
	$length = mb_strlen($string);
	if($length > $limit){
	 $dop = " ... ";
	}
	$substring_limited = mb_substr($string,0, $limit+1);        //режем строку от 0 до limit
	$pos = mb_strrpos($substring_limited, ' ');
	if($pos === false){
	 $pos = $length;
	}
	if($string[$limit+1] == " " || mb_strlen($string) == mb_strlen($substring_limited)){
	 $new_str = $substring_limited;
	}
	else{
		$new_str = mb_substr($substring_limited, 0, $pos);    //берем часть обрезанной строки от 0 до последнего пробела
	}
	//var_dump($new_str);
	return($new_str . $dop);  
 }

 function check_str($str){
  if(!preg_match("/^[-a-zA-Z\x7F-\xFF0-9_.\(\)\+\s]+$/i", $str)){
   return "";
  }
  return($str);
 }
 
 function array_search_byid($array,$key,$value){
  $flag = false;
  //echo $array[5]['id'];
  for ($i=0; $i<count($array);$i++){
   if($array[$i][$key] == $value){
    $flag = true;
    return($array[$i]);
   }
  }
  return($flag);
 }
 
 function stripslashes_array($array){
  if(is_array($array)){
   foreach($array AS $key=>$value){
    $array[$key] = stripslashes($value);
  
   }
  }
  return($array);
 } 
 
 function utf_substr($str,$from,$to,$max_len = 0){
  global $text_len;
  if(!$max_len){
   $max_len = $text_len;
  }
  $str = iconv("UTF8", "CP1251", $str);
  $len = strlen($str);
  if($len > $max_len){
    $str = substr($str, $from, $to)."...";
  }
  $str = iconv("CP1251","UTF8",$str);
  return($str);
 }

function smtpmail($to, $subject, $content,$attach=false){
 global $__smtp;
 
 //$subject = iconv("utf-8", "iso-8859-1", $subject);
 //$content = iconv("utf-8", "iso-8859-1", $content);
 $mail = new PHPMailer(true);
 
 // return;
 $mail->IsSMTP();
 try {
  $mail->Charset = "UTF-8";
  $mail->Host       = $__smtp['host'];
  $mail->SMTPDebug  = $__smtp['debug'];
  $mail->SMTPAuth   = $__smtp['auth'];
  $mail->Port       = $__smtp['port'];
  $mail->Username   = $__smtp['username'];
  $mail->Password   = $__smtp['password'];
  $mail->SMTPSecure = $__smtp['secure'];
  $mail->AddReplyTo($__smtp['addreply'], $__smtp['username']);
  $mail->AddAddress($to);                //кому письмо
  $mail->SetFrom($__smtp['addreply'], $__smtp['username']); //от кого (желательно указывать свой реальный e-mail на используемом SMTP сервере
  $mail->AddReplyTo($__smtp['addreply'], $__smtp['username']);
  $mail->Subject = htmlspecialchars($subject);
  $mail->MsgHTML($content);
  if($attach)  {
  	$mail->AddAttachment($attach);
  }	
   $mail->Send();
   //echo "Message sent Ok!</p>\n";
   $res = true;
  } 
  catch (phpmailerException $e) {
   //echo $e->errorMessage();
   $res = false;
  } 
  catch (Exception $e) {
   //echo $e->getMessage();
   $res = false;
  }
  return($res);
 }

function notify_admin($email,$subj,$text,$attach = false){  
	$res = @smtpmail($email, $subj, $text,$attach);
	//$text = iconv("UTF-8", "CP1251", $text);
	//$res = @mail($email, $subj, $text, "Content-Type: text/html; charset=UTF-8\r\n");
   return($res);
}


function detect_ip() {
    $ip = false;
    if (isset($_SERVER["HTTP_X_FORWARDED_FOR"]) and preg_match("#^[0-9.]+$#", $_SERVER["HTTP_X_FORWARDED_FOR"])) {
        $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
    }
    else if (isset($_SERVER["HTTP_X_REAL_IP"]) and preg_match("#^[0-9.]+$#", $_SERVER["HTTP_X_REAL_IP"])) {
        $ip = $_SERVER["HTTP_X_REAL_IP"];
    }
    else if (preg_match("#^[0-9.]+$#", $_SERVER["REMOTE_ADDR"])) {
        $ip = $_SERVER["REMOTE_ADDR"];
    }
    return $ip;
} 

function getUnitCase( $value, $unit1, $unit2, $unit3 ){
    $value = abs( (int)$value );
    if( ($value % 100 >= 11) && ($value % 100 <= 19) ){
        return $unit3;
    }else{
        switch( $value % 10 ){
            case 1:
                return $unit1;
            case 2:case 3:case 4:
                return $unit2;
            default:
                return $unit3;
        }
    }
}

function my_mb_strlen($str){
 return(strlen(iconv("UTF-8", "CP1251", $str)));
}

function my_mb_substr($str,$from,$len){
 $str_ = iconv("UTF-8", "CP1251", $str);
 $str_ = substr($str_, $from, $len);
 $str_ = iconv("CP1251","UTF-8",$str_);
 return($str_);
}

function arr2utf($arr){
 for($i=0; $i<count($arr); $i++){
  for($j=0; $j<count($arr[$i]); $j++){	 
	 $arr[$i][$j] = iconv("windows-1251", "UTF-8", $arr[$i][$j]);
	}
 }
 return($arr);
}

function utf8mail($to,$s,$body,$from_name,$from_email,$reply){
  $s= "=?utf-8?b?".base64_encode($s)."?=";
  $headers =  "From: ".$from_name." <".$from_email.">\r\n"
      ."Reply-To: ".$reply."\r\n"
      ."Content-type: text/html; charset=UTF-8\r\n"
      ."X-Mailer: PHP/" . phpversion();
  
  $res = mail($to, $s, $body, $headers);
}


function check_utf8($charset){

  if(strtolower($charset) != "utf-8"){

      return false;
   }

   return true;
}

function convert_to_utf8($in_charset, $str){
   return iconv(strtolower($in_charset), "utf-8", $str);
}

function get_imap_title($str){
  $mime = imap_mime_header_decode($str);
  $title = "";
  foreach($mime as $key => $m){
     if(!check_utf8($m->charset)){
      $title .= convert_to_utf8($m->charset, $m->text);
     }else{
     		$title .= $m->text;
     }
   }

   return $title;
}

function recursive_search($structure){
   $encoding = "";
   if($structure->subtype == "HTML" ||
       $structure->type == 0){
       if($structure->parameters[0]->attribute == "charset"){
          $charset = $structure->parameters[0]->value;
       }
       return array(
           "encoding" => $structure->encoding,
           "charset"  => strtolower($charset),
           "subtype"  => $structure->subtype
       );
  }else{
      if(isset($structure->parts[0])){
         return recursive_search($structure->parts[0]);
       }else{
          if($structure->parameters[0]->attribute == "charset"){
              $charset = $structure->parameters[0]->value;
          }
          return array(
               "encoding" => $structure->encoding,
             "charset"  => strtolower($charset),
                "subtype"  => $structure->subtype
           );
      }
   }
}

function structure_encoding($encoding, $msg_body){

 switch((int) $encoding){
      case 4:
         $body = imap_qprint($msg_body);
         break;

      case 3:
         $body = imap_base64($msg_body);
         break;

      case 2:
         $body = imap_binary($msg_body);
         break;

      case 1:
         $body = imap_8bit($msg_body);
           break;

      case 0:
         $body = $msg_body;
          break;
      
        default:
            $body = "";
           break;
  }

   return $body;
}

function get_imap_body($recursive_data,$msg_body){
 $body = "";
 switch(intval($recursive_data["encoding"])){
 	case 0:
 	case 1:
 		$body = $msg_body;
 	break;
 	case 2:
 	case 3:
 	case 4:
 		$body = structure_encoding($recursive_data["encoding"], $msg_body);
 	break;
 } 

 if(!check_utf8($recursive_data["charset"])){
    $body = convert_to_utf8($recursive_data["charset"], $msg_body);
 }
 //$body = base64_encode($body);
 return($body); 
} 
?>

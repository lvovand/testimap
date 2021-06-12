<?php

//var_dump($user);

$smarty->assign('global_page', $page);
$smarty->assign('admin', $admin);
//var_dump($smarty);
$out = $smarty->fetch($page.'.tpl');
//var_dump($page,$out);
//$out = $smarty->fetch('index.tpl');
//var_dump($page,$out);
$out = preg_replace('!\r!', '', $out);
$out = preg_replace('!\t!', ' ', $out);
$out = preg_replace('! +\n!si', "\n", $out);
$out = preg_replace('!\n +!si', "\n", $out);
$out = preg_replace('!\n+!', "\n", $out);
//$out = preg_replace('! {2,}!', ' ', $out);
echo $out;

exit();
?>
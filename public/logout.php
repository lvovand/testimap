<?php
 $page = "logout";
 include "header.php";
 $admin->admin_logout();
 header("Location: /admin");
 exit();
?>
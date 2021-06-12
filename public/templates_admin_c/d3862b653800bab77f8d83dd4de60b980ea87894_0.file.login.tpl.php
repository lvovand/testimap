<?php
/* Smarty version 3.1.38, created on 2021-06-11 11:50:32
  from '/var/www/html/imap.prettysites.ru/public/templates_admin/login.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_60c323d8cc9765_00584196',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd3862b653800bab77f8d83dd4de60b980ea87894' => 
    array (
      0 => '/var/www/html/imap.prettysites.ru/public/templates_admin/login.tpl',
      1 => 1623401419,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_60c323d8cc9765_00584196 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="ru" class="h-100">

<head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Рерайт-онлайн" />
	<meta property="og:title" content="Рерайт-онлайн" />
	<meta property="og:description" content="Рерайт-онлайн" />
	<meta property="og:image" content=""/>
	<meta name="format-detection" content="telephone=no">
	
	<!-- PAGE TITLE HERE -->
	<title>Рерайт-онлайн | Войти в аккаунт</title>
	
	<!-- FAVICONS ICON -->
	<link rel="shortcut icon" type="image/png" href="/admin_template/images/favicon.png" />
    <link href="./css/style.css" rel="stylesheet">

</head>

<body class="vh-100">
    <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
									<div class="text-center mb-3">
										<a href="index.html"><img src="/admin_template/images/logo-full.png" alt=""></a>
									</div>
                                    <h4 class="text-center mb-4">Войти в аккаунт</h4>
                                    <form class="form_login" action="" method="post" onsubmit="adminLogin();return(false);">
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="text" name="login" class="form-control" value="hello@example.com">
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Пароль</strong></label>
                                            <input type="password" name="password" class="form-control" value="Password">
                                        </div>
                                        <div class="row d-flex justify-content-between mt-4 mb-2">
                                            <div class="mb-3">
                                               <div class="form-check custom-checkbox ms-1">
													<input type="checkbox" name="remember" class="form-check-input" id="remember">
													<label class="form-check-label" for="basic_checkbox_1">Запомнить</label>
												</div>
                                            </div>
                                            <div class="mb-3">
                                                <a href="/forgot.php">Забыли пароль?</a>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">Войти</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Нет аккаунта? <a class="text-primary" href="/register.php">Зарегистрироваться</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!--**********************************
        Scripts
    ***********************************-->
    <!-- Required vendors -->
    <?php echo '<script'; ?>
 src="vendor/global/global.min.js"><?php echo '</script'; ?>
>
    <!--<?php echo '<script'; ?>
 src="js/plugins-init/jquery.nice-select.js"><?php echo '</script'; ?>
>-->
    <link href="vendor/jquery-nice-select/css/nice-select.css" rel="stylesheet">
    <?php echo '<script'; ?>
 src="vendor/jquery-nice-select/js/jquery.nice-select.min.js"><?php echo '</script'; ?>
>
   
   <link href="vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet"> 
   <?php echo '<script'; ?>
 src="vendor/sweetalert2/dist/sweetalert2.min.js"><?php echo '</script'; ?>
>
   <!--<?php echo '<script'; ?>
 src="js/plugins-init/sweetalert.init.js"><?php echo '</script'; ?>
>-->   
    
    <?php echo '<script'; ?>
 src="js/custom.min.js"><?php echo '</script'; ?>
>    
    <?php echo '<script'; ?>
 src="js/deznav-init.js"><?php echo '</script'; ?>
>
	<!--<?php echo '<script'; ?>
 src="js/styleSwitcher.js"><?php echo '</script'; ?>
>-->
	 <?php echo '<script'; ?>
 src="js_my/functions.js"><?php echo '</script'; ?>
>
</body>
</html><?php }
}

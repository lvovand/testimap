<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<!-- Apple devices fullscreen -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<!-- Apple devices fullscreen -->
	<meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />

	<title>Admin | Login</title>

	<!-- Bootstrap -->
	<link rel="stylesheet" href="/admin_template/css/bootstrap.min.css">
	<!-- icheck -->
	<link rel="stylesheet" href="/admin_template/css/plugins/icheck/all.css">
	<!-- Theme CSS -->
	<link rel="stylesheet" href="/admin_template/css/style.css">
	<!-- Color CSS -->
	<link rel="stylesheet" href="/admin_template/css/themes.css">


	<!-- jQuery -->
	<script src="/admin_template/js/jquery.min.js"></script>
   <!--
   <script src="/lib/jquery.maskedinput.js"></script>
   -->
   <script src="/getcode/assets_wheel/maskedinput/jquery.inputmask.bundle.min.js"></script>
	<!-- Nice Scroll -->
	<script src="/admin_template/js/plugins/nicescroll/jquery.nicescroll.min.js"></script>
	<!-- Validation -->
	<script src="/admin_template/js/plugins/validation/jquery.validate.min.js"></script>
	<script src="/admin_template/js/plugins/validation/additional-methods.min.js"></script>
	<!-- icheck -->
	<script src="/admin_template/js/plugins/icheck/jquery.icheck.min.js"></script>
	<!-- Bootstrap -->
	<script src="/admin_template/js/bootstrap.min.js"></script>
	<script src="/admin_template/js/eakroko.js"></script>

    <script src="/lib/sweetalert2/sweetalert2.all.js"></script>
    
    <script src="/admin/js/functions.js"></script>
    
    <!-- Optional: include a polyfill for ES6 Promises for IE11 and Android browser -->
    <script src="https://unpkg.com/promise-polyfill"></script>

	<!--[if lte IE 9]>
		<script src="/admin_template/js/plugins/placeholder/jquery.placeholder.min.js"></script>
		{literal}
        <script>
			$(document).ready(function() {
				$('input, textarea').placeholder();
			});
		</script>
        {/literal}
	<![endif]-->


	<!-- Favicon -->
	<!--
	<link rel="shortcut icon" href="/admin_template/img/favicon.ico" />
	-->
	<!-- Apple devices Homescreen icon -->
	<!--
	<link rel="apple-touch-icon-precomposed" href="/admin_template/img/apple-touch-icon-precomposed.png" />
	-->
	<link rel="icon" type="image/png" href="/favicon.png">

</head>

<body class='login'>
	<div class="wrapper" style="width: 300px;">
		<h1>
			<a href="/admin/">
				<img src="/admin_template/img/logo-big.png" alt="" class='retina-ready' width="59" height="49">Авторизация</a>
		</h1>
		<div class="login-body">
		   <ul class="tabs tabs-inline tabs-top">
									<li {if !$smarty.get.view}class='active'{/if}>
										<a href="#div_auth" data-toggle='tab'>
											<i class="fa fa-unlock"></i>Авторизация</a>
									</li>
									<!--
									<li {if $smarty.get.view =='reg'}class='active'{/if}>
										<a href="#div_reg" data-toggle='tab'>
											<i class="fa fa-user"></i>Регистрация</a>
									</li>
									-->
									<!--
									<li {if $smarty.get.view =='forget'}class='active'{/if}>
										<a href="#div_forget" data-toggle='tab'>
											<i class="fa fa-envelope"></i>Напомнить пароль</a>
									</li>
									-->									
								</ul>
								<div class="tab-content padding tab-content-inline tab-content-bottom">
									<div class="tab-pane {if !$smarty.get.view}active{/if}" id="div_auth">
			<h2>Авторизация</h2>
			<form action="" method='post' class='form-validate' id="form_login" onsubmit="adminLogin();return(false);">
				<div class="form-group">
					<div class="email controls">
						<input type="text" id='login' name='login' placeholder="Сайт" class='form-control' data-rule-required="true">
					</div>
				</div>
				<div class="form-group">
					<div class="pw controls">
						<input type="password" name="password" placeholder="Password" class='form-control' data-rule-required="true">
					</div>
				</div>
				<div class="submit">
					<div class="remember">
						<input type="checkbox" name="remember" class='icheck-me' data-skin="square" data-color="blue" id="remember">
						<label for="remember">Запомнить</label>
					</div>
					<input type="submit" value="Войти" class='btn btn-primary'>
				</div>
			</form>
			<div class="forget">
				<a href="#" onClick="$('#div_forget').toggle();return(false);"><span>Забыли пароль?</span></a>
				<div id="div_forget" style="display: none;">
<h2>Напомнить пароль.</h2>
<div>Укажите емейл, указанный при регистрации, на него будет отправлен пароль для входа в административную часть <br><br></div>
			<form action="" method='post' class='form-validate' id="form_forget" onsubmit="adminForgot();return(false);">				
				<div class="form-group">
					<div class="pw controls">
						<input type="text" name="email_forget" placeholder="Email*" class='form-control' data-rule-required="true">
					</div>
				</div>			
				<div class="submit">
					<input type="submit" value="Отправить пароль на емейл" class='btn btn-primary'>
				</div>
			</form>				
				</div>
			</div>										
									</div>
									<div class="tab-pane {if $smarty.get.view == 'reg'}active{/if}" id="div_reg">
<h2>Регистрация нового пользователя</h2>
			<form action="" method='post' class='form-validate' id="form_reg" onsubmit="adminReg();return(false);">
				<div class="form-group">
					<div class="email controls">
						<input type="text" id='login_reg' name='login_reg' placeholder="Сайт*" class='form-control' data-rule-required="true">
					</div>
				</div>
				<div class="form-group">
					<div class="pw controls">
						<input type="text" name="email_reg" placeholder="Email*" class='form-control' data-rule-required="true">
					</div>
				</div>
				<div class="form-group">
					<div class="pw controls">
						<input type="text" id="phone_reg" name="phone_reg" placeholder="Тел*" class='form-control' data-rule-required="true">
					</div>
				</div>
				<div class="submit">
					<input type="submit" id="reg_button" value="Отправить данные" class='btn btn-primary'>
				</div>
			</form>										
									</div>
									<div class="tab-pane {if $smarty.get.view == 'forget'}active{/if}" id="div_forget">
<h2>Напомнить пароль.</h2>
<div>Укажите емейл, указанный при регистрации, на него будет отправлен пароль для входа в административную часть <br><br></div>
			<form action="" method='post' class='form-validate' id="form_forget" onsubmit="adminForgot();return(false);">				
				<div class="form-group">
					<div class="pw controls">
						<input type="text" name="email_forget" placeholder="Email*" class='form-control' data-rule-required="true">
					</div>
				</div>			
				<div class="submit">
					<input type="submit" value="Отправить пароль на емейл" class='btn btn-primary'>
				</div>
			</form>										
									</div>

								</div>
			
		</div>
	</div>
{literal}
<script type="text/javascript">
$(document).ready(function(){
 //$("#phone_reg").mask("+7(999) 999-9999");
  $('#phone_reg').inputmask("+7(999) 999-9999");
});
</script>
{/literal}	
{literal}
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(51592976, "init", {
id:51592976,
clickmap:true,
trackLinks:true,
accurateTrackBounce:true,
webvisor:true,
trackHash:true
});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/51592976" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
{/literal}
</body>

</html>

<?php
/* Smarty version 3.1.38, created on 2021-06-12 11:12:48
  from '/var/www/html/imap.prettysites.ru/public/templates_admin/left_menu.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_60c46c8020bd99_38990298',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '48a9154a9c5bd1088800b6cd5173f0b3a5993fe0' => 
    array (
      0 => '/var/www/html/imap.prettysites.ru/public/templates_admin/left_menu.tpl',
      1 => 1623485564,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_60c46c8020bd99_38990298 (Smarty_Internal_Template $_smarty_tpl) {
?><!--**********************************
            Sidebar start
        ***********************************-->
        <div class="deznav">
            <div class="deznav-scroll">
				<ul class="metismenu" id="menu">
					
                    
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="true">
							<i class="fa fa-cogs"></i><span class="nav-text">Настройки</span>
						</a>
                        <ul aria-expanded="true">
                            <li><a href="settings.php">Профиль</a></li>
                            <li><a href="settings_imap.php">IMAP</a></li>
                            <li><a href="settings_words.php">Слова для поиска</a></li>
                        </ul>
                    </li>

                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="fa fa-envelope"></i><span class="nav-text">Сообщения</span>
							</a>
                        <ul aria-expanded="false">
                            <li><a href="messages.php">Сообщения</a></li>
                        </ul>
                    </li>

                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i class="fa fa-sign-out"></i><span class="nav-text">Выход</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="logout.php">Выйти из системы</a></li>                            
                        </ul>
                    </li>
                    
                </ul>

			</div>
        </div>
        <!--**********************************
            Sidebar end
        ***********************************--><?php }
}

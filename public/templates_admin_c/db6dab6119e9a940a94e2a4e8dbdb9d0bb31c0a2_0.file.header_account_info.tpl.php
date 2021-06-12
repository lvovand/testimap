<?php
/* Smarty version 3.1.38, created on 2021-06-11 12:07:03
  from '/var/www/html/imap.prettysites.ru/public/templates_admin/header_account_info.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_60c327b7bb84e9_32717403',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'db6dab6119e9a940a94e2a4e8dbdb9d0bb31c0a2' => 
    array (
      0 => '/var/www/html/imap.prettysites.ru/public/templates_admin/header_account_info.tpl',
      1 => 1623402360,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_60c327b7bb84e9_32717403 (Smarty_Internal_Template $_smarty_tpl) {
?><!--**********************************
            Header start
        ***********************************-->
        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
							
                        </div>

                        <ul class="navbar-nav header-right">
                           
                            <li class="nav-item dropdown header-profile">
                                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown">
									<div class="header-info me-3">
										<span class="fs-16 font-w600 "><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['name'];?>
</span>
										<?php if ($_smarty_tpl->tpl_vars['admin']->value->admin_info['root'] == 1) {?>
											<small class="text-end fs-14 font-w400">Super Admin</small>
										<?php } else { ?>
											<small class="text-end fs-14 font-w400">Администратор</small>
										<?php }?>
									</div>
                                    <img src="images/avatar/tools_128.png" width="20" alt=""/>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="settings.php" class="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span class="ms-2">Profile </span>
                                    </a>                                    
                                    <a href="logout.php" class="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span class="ms-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
				</nav>
			</div>
		</div>
                    
        <!--**********************************
            Header end ti-comment-alt
        ***********************************--><?php }
}

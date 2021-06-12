<?php
/* Smarty version 3.1.38, created on 2021-06-12 11:05:49
  from '/var/www/html/imap.prettysites.ru/public/templates_admin/settings.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_60c46add3cb963_39213637',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '388137dd2d3dd2b3f8f50b3bc5ebb47cd16655d7' => 
    array (
      0 => '/var/www/html/imap.prettysites.ru/public/templates_admin/settings.tpl',
      1 => 1623485146,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.tpl' => 1,
    'file:footer.tpl' => 1,
  ),
),false)) {
function content_60c46add3cb963_39213637 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender('file:header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
<div class="content-body">
<div class="container-fluid">
				
				<div class="row">
					<div class="col-sm-12">
						<div class="box box-color box-bordered lightgrey">
							<div class="box-title">
								<h3>
									<i class="fa fa-user"></i> Настройки аккаунта</h3>
								
							</div>
							<div class="box-content nopadding">
								<table style="width: 500px;" class="table table-hover table-nomargin">
									<thead>
									</thead>
									<tbody>
										<tr>
											<th style="width: 150px;">Имя</th>
											<td style="width: 350px;">
												<span class="edit editable" id="name"
																		data-title="Введите имя"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['id'];?>
"
																		data-type="text"><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['name'];?>
</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Логин</th>
											<td style="width: 350px;">
												<span class="edit editable" id="login"
																		data-title="Введите логин"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['id'];?>
"
																		data-type="text"><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['login'];?>
</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Email</th>
											<td style="width: 350px;">
												<span class="edit editable" id="login"
																		data-title="Введите логин"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['id'];?>
"
																		data-type="text"><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['email'];?>
</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Пароль</th>
											<td style="width: 350px;">
												<span class="edit editable" id="password"
																		data-title="Введите пароль"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['id'];?>
"
																		data-type="password"><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['password_star'];?>
</span>
											</td>
										</tr>
									</tbody>										
								</table>
								
							</div>
						</div>
					</div>
				</div>
				
				
</div>
</div>
		
<?php $_smarty_tpl->_subTemplateRender('file:footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
}
}

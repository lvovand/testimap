<?php
/* Smarty version 3.1.38, created on 2021-06-12 11:06:14
  from '/var/www/html/imap.prettysites.ru/public/templates_admin/settings_imap.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_60c46af617fc68_61042009',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a1e2ec31592ed38c8047484c47e4190b378299ed' => 
    array (
      0 => '/var/www/html/imap.prettysites.ru/public/templates_admin/settings_imap.tpl',
      1 => 1623485171,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.tpl' => 1,
    'file:footer.tpl' => 1,
  ),
),false)) {
function content_60c46af617fc68_61042009 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender('file:header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
<div class="content-body">
<div class="container-fluid">
				
				<div class="row">
					<div class="col-sm-12">
						<div class="box box-color box-bordered lightgrey">
							<div class="box-title">
								<h3>
									<i class="fa fa-envelope"></i> Настройки IMAP</h3>
								
							</div>
							<div class="box-content nopadding">
								<table style="width: 500px;" class="table table-hover table-nomargin">
									<thead>
									</thead>
									<tbody>
										<tr>
											<th style="width: 150px;">Host</th>
											<td style="width: 350px;">
												<span class="edit editable" id="imap_host"
																		data-title="Введите имя"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['id'];?>
"
																		data-type="text"><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['imap_host'];?>
</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Порт</th>
											<td style="width: 350px;">
												<span class="edit editable" id="imap_port"
																		data-title="Введите логин"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['id'];?>
"
																		data-type="text"><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['imap_port'];?>
</span>
											</td>
										</tr>									
										<tr>
											<th style="width: 150px;">SSL</th>
											<td style="width: 350px;">
												<span class="edit editable" id="imap_ssl"
																		data-title="Введите логин"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['id'];?>
"
																		data-type="text"><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['imap_ssl'];?>
</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Логин</th>
											<td style="width: 350px;">
												<span class="edit editable" id="imap_login"
																		data-title="Введите логин"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['id'];?>
"
																		data-type="text"><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['imap_login'];?>
</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Пароль</th>
											<td style="width: 350px;">
												<span class="edit editable" id="imap_password"
																		data-title="Введите пароль"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['id'];?>
"
																		data-type="password"><?php echo $_smarty_tpl->tpl_vars['admin']->value->admin_info['imap_password_star'];?>
</span>
											</td>
										</tr>
										<tr>
											<th class="text-center" colspan="2">
												<button class="btn btn-primary " onClick="checkConnection()">Проверить соединение</button>
											</th>											
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

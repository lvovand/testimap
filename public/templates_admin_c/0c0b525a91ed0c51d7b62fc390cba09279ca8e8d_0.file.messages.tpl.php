<?php
/* Smarty version 3.1.38, created on 2021-06-12 18:08:32
  from '/var/www/html/imap.prettysites.ru/public/templates_admin/messages.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_60c4cdf0ebe084_75065540',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '0c0b525a91ed0c51d7b62fc390cba09279ca8e8d' => 
    array (
      0 => '/var/www/html/imap.prettysites.ru/public/templates_admin/messages.tpl',
      1 => 1623510505,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.tpl' => 1,
    'file:footer.tpl' => 1,
  ),
),false)) {
function content_60c4cdf0ebe084_75065540 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender('file:header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
<div class="content-body">
<div class="container-fluid">
				
				<div class="row">
					<div class="col-sm-12">
						<div class="box box-color box-bordered lightgrey">
							<div class="box-title">
								<h3>
									<i class="fa fa-file-text"></i> Обработка сообщений</h3>
								
							</div>
							<div class="box-content nopadding">
								<table class="table table-hover table-nomargin">
									<thead>
										<tr>
											<th class="text-center" colspan="5"> 
											<?php if ($_smarty_tpl->tpl_vars['p']->value > 0) {?><a href="messages.php?p=<?php echo $_smarty_tpl->tpl_vars['p']->value-1;?>
">&larr;</a><?php }?> 
											Страница <?php echo $_smarty_tpl->tpl_vars['p']->value+1;?>
 из <?php echo $_smarty_tpl->tpl_vars['num_pages']->value;?>
 
											<?php if ($_smarty_tpl->tpl_vars['p']->value+1 < $_smarty_tpl->tpl_vars['num_pages']->value) {?><a href="messages.php?p=<?php echo $_smarty_tpl->tpl_vars['p']->value+1;?>
">&rarr;</a><?php }?>
											</th>
										</tr>
										<tr>
											<th style="width: 50px;"></th>											
											<th style="width: 150px;">Дата получения</th>
											<th style="width: 550px;">Тема сообщения</th>
											<th style="width: 150px;">Статус</th>
											<th style="width: 350px;">Результат</th>
										</tr>
									</thead>
									<tbody>										
										<?php
$__section_messages_loop_0_loop = (is_array(@$_loop=$_smarty_tpl->tpl_vars['messages']->value) ? count($_loop) : max(0, (int) $_loop));
$__section_messages_loop_0_total = $__section_messages_loop_0_loop;
$_smarty_tpl->tpl_vars['__smarty_section_messages_loop'] = new Smarty_Variable(array());
if ($__section_messages_loop_0_total !== 0) {
for ($__section_messages_loop_0_iteration = 1, $_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index'] = 0; $__section_messages_loop_0_iteration <= $__section_messages_loop_0_total; $__section_messages_loop_0_iteration++, $_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index']++){
?>
										<tr class="mini" id="tr_<?php echo $_smarty_tpl->tpl_vars['messages']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index'] : null)]['id'];?>
">
											<td style="width: 50px;"><button title="Удалить" onClick="delMessage(<?php echo $_smarty_tpl->tpl_vars['messages']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index'] : null)]['id'];?>
)" class="btn btn-mini btn-danger"><i class="fas fa-trash"></i></button></td>
											<td style="width: 150px;"><?php echo $_smarty_tpl->tpl_vars['messages']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index'] : null)]['added_date'];?>
</td>
											<td style="width: 550px;"><a data-fancybox="messages" data-type="iframe" href="getmessage.php?id=<?php echo $_smarty_tpl->tpl_vars['messages']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index'] : null)]['id'];?>
" class="colorbox"><?php echo $_smarty_tpl->tpl_vars['messages']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index'] : null)]['subject'];?>
</a></td>
											<td style="width: 150px;"><?php echo $_smarty_tpl->tpl_vars['messages']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index'] : null)]['status_text'];?>
</td>
											<td style="width: 350px;"><?php echo $_smarty_tpl->tpl_vars['messages']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_messages_loop']->value['index'] : null)]['status_res'];?>
</td>
										</tr>
										<?php
}
}
?>										
									</tbody>										
								</table>
								
							</div>
						</div>
					</div>
				</div>
				
										
</div>
</div>

<style>
	.btn-mini{
		padding: 0.3rem;	
	}
	.btn-mini i{
		font-size: 14px;	
	}
	
	tr.mini td{
		padding: 12px 10px;
	}
</style>
		
<?php $_smarty_tpl->_subTemplateRender('file:footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
}
}

<?php
/* Smarty version 3.1.38, created on 2021-06-12 11:06:23
  from '/var/www/html/imap.prettysites.ru/public/templates_admin/settings_words.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_60c46aff2b0912_22471675',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'dfe3b6b0b93913405350214a966673ba772a062f' => 
    array (
      0 => '/var/www/html/imap.prettysites.ru/public/templates_admin/settings_words.tpl',
      1 => 1623485063,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.tpl' => 1,
    'file:footer.tpl' => 1,
  ),
),false)) {
function content_60c46aff2b0912_22471675 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender('file:header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
<div class="content-body">
<div class="container-fluid">
				
				<div class="row">
					<div class="col-sm-12">
						<div class="box box-color box-bordered lightgrey">
							<div class="box-title">
								<h3>
									<i class="fa fa-check"></i> Ключевые слова для поиска</h3>
								
							</div>
							<div class="box-content nopadding">
								<table style="width: 500px;" class="table table-hover table-nomargin">
									<thead>
									</thead>
									<tbody>
										<tr class="tr_first">
											<td colspan='2'>
												<div class="input-group mb-3">
                                         <input type="text" class="form-control" id="new_word" placeholder="Слово для поиска">
													  <button onClick="addNewWord()" class="btn btn-primary" type="button">Добавить</button>
                                        </div>
											</td>
										</tr>
										<?php
$__section_words_loop_0_loop = (is_array(@$_loop=$_smarty_tpl->tpl_vars['words']->value) ? count($_loop) : max(0, (int) $_loop));
$__section_words_loop_0_total = $__section_words_loop_0_loop;
$_smarty_tpl->tpl_vars['__smarty_section_words_loop'] = new Smarty_Variable(array());
if ($__section_words_loop_0_total !== 0) {
for ($__section_words_loop_0_iteration = 1, $_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index'] = 0; $__section_words_loop_0_iteration <= $__section_words_loop_0_total; $__section_words_loop_0_iteration++, $_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index']++){
?>
										<tr class="mini" id="tr_<?php echo $_smarty_tpl->tpl_vars['words']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index'] : null)]['id'];?>
">
											<td style="width: 50px;"><button title="Удалить" onClick="delWord(<?php echo $_smarty_tpl->tpl_vars['words']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index'] : null)]['id'];?>
)" class="btn btn-mini btn-danger"><i class="fas fa-trash"></i></button></td>
											<td style="width: 350px;">
												<span class="edit editable_word" id="word"
																		data-title="Введите слово"
																		data-pk="<?php echo $_smarty_tpl->tpl_vars['words']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index'] : null)]['id'];?>
"
																		data-type="text"><?php echo $_smarty_tpl->tpl_vars['words']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_words_loop']->value['index'] : null)]['word'];?>
</span>
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

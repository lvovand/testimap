{include file='header.tpl'}
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
										{section name='words_loop' loop=$words}
										<tr class="mini" id="tr_{$words[words_loop].id}">
											<td style="width: 50px;"><button title="Удалить" onClick="delWord({$words[words_loop].id})" class="btn btn-mini btn-danger"><i class="fas fa-trash"></i></button></td>
											<td style="width: 350px;">
												<span class="edit editable_word" id="word"
																		data-title="Введите слово"
																		data-pk="{$words[words_loop].id}"
																		data-type="text">{$words[words_loop].word}</span>
											</td>
										</tr>
										{/section}										
									</tbody>										
								</table>
								
							</div>
						</div>
					</div>
				</div>
				
										
</div>
</div>
{literal}
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
{/literal}		
{include file='footer.tpl'}
{include file='header.tpl'}
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
											{if $p > 0}<a href="messages.php?p={$p-1}">&larr;</a>{/if} 
											Страница {$p+1} из {$num_pages} 
											{if $p+1 < $num_pages}<a href="messages.php?p={$p+1}">&rarr;</a>{/if}
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
										{section name='messages_loop' loop=$messages}
										<tr class="mini" id="tr_{$messages[messages_loop].id}">
											<td style="width: 50px;"><button title="Удалить" onClick="delMessage({$messages[messages_loop].id})" class="btn btn-mini btn-danger"><i class="fas fa-trash"></i></button></td>
											<td style="width: 150px;">{$messages[messages_loop].added_date}</td>
											<td style="width: 550px;"><a data-fancybox="messages" data-type="iframe" href="getmessage.php?id={$messages[messages_loop].id}" class="colorbox">{$messages[messages_loop].subject}</a></td>
											<td style="width: 150px;">{$messages[messages_loop].status_text}</td>
											<td style="width: 350px;">{$messages[messages_loop].status_res}</td>
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
{include file='header.tpl'}
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
																		data-pk="{$admin->admin_info.id}"
																		data-type="text">{$admin->admin_info.imap_host}</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Порт</th>
											<td style="width: 350px;">
												<span class="edit editable" id="imap_port"
																		data-title="Введите логин"
																		data-pk="{$admin->admin_info.id}"
																		data-type="text">{$admin->admin_info.imap_port}</span>
											</td>
										</tr>									
										<tr>
											<th style="width: 150px;">SSL</th>
											<td style="width: 350px;">
												<span class="edit editable" id="imap_ssl"
																		data-title="Введите логин"
																		data-pk="{$admin->admin_info.id}"
																		data-type="text">{$admin->admin_info.imap_ssl}</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Логин</th>
											<td style="width: 350px;">
												<span class="edit editable" id="imap_login"
																		data-title="Введите логин"
																		data-pk="{$admin->admin_info.id}"
																		data-type="text">{$admin->admin_info.imap_login}</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Пароль</th>
											<td style="width: 350px;">
												<span class="edit editable" id="imap_password"
																		data-title="Введите пароль"
																		data-pk="{$admin->admin_info.id}"
																		data-type="password">{$admin->admin_info.imap_password_star}</span>
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
		
{include file='footer.tpl'}
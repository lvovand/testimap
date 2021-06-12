{include file='header.tpl'}
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
																		data-pk="{$admin->admin_info.id}"
																		data-type="text">{$admin->admin_info.name}</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Логин</th>
											<td style="width: 350px;">
												<span class="edit editable" id="login"
																		data-title="Введите логин"
																		data-pk="{$admin->admin_info.id}"
																		data-type="text">{$admin->admin_info.login}</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Email</th>
											<td style="width: 350px;">
												<span class="edit editable" id="login"
																		data-title="Введите логин"
																		data-pk="{$admin->admin_info.id}"
																		data-type="text">{$admin->admin_info.email}</span>
											</td>
										</tr>
										<tr>
											<th style="width: 150px;">Пароль</th>
											<td style="width: 350px;">
												<span class="edit editable" id="password"
																		data-title="Введите пароль"
																		data-pk="{$admin->admin_info.id}"
																		data-type="password">{$admin->admin_info.password_star}</span>
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
		
{include file='footer.tpl'}
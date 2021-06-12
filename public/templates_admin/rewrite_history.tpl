{include file='header.tpl'}
<!--**********************************
            Content body start
***********************************-->
<div class="content-body">
  <!-- row -->
  <div class="container-fluid">
		<div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Список обработанных текстов</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="rewrite_hist table header-border table-hover table-responsive-sm">
                                        <thead>
                                        	  <tr>
                                        	  	<th colspan='4'>
                                        	  	Страница {$p} из {$num_pages} 
                                        	  	</th>
                                        	  </tr>	
                                            <tr>
                                                <th style="width: 70px;">ID</th>
                                                <th style="width: 100px;">Дата</th>
                                                <th>Текст до обработки</th>
                                                <th>Текст после обработки</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section name='texts_loop' loop=$texts}
                                            <tr class="tr_big_block">
                                                <td>{$texts[texts_loop].id}</td>
                                                <td>{$texts[texts_loop].added_date}</td>
                                                <td><div class="rewrite_text_big">{$texts[texts_loop].text_before}</div></td>
                                                <td><div class="rewrite_text_big">{$texts[texts_loop].text_after}</div></td>
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
<!--**********************************
            Content body end
***********************************-->
{include file='footer.tpl'}
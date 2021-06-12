{include file='header.tpl'}
<!--**********************************
            Content body start
***********************************-->
<div class="content-body">
	<!-- row -->
	<div class="container-fluid">
		<div class="row">
			<div class="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Рерайт текста</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <form>
                                        <div class="mb-3 row">
                                            <div class="col-12">
                                                <textarea class="rewrite_text form-control" style="height: 150px;" placeholder="Текст для рерайта"></textarea>
                                            </div>
                                        </div>                                        
                                        <div class="mb-3 row">
                                            <div class="col-12">
                                                <button onClick="rewriteText('.rewrite_text');" type="button" class="btn_send_rewrite btn btn-primary"><i class="fa fa-wpforms"></i> Отправить текст</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
					</div>
		</div>
		
		<div class="row">
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
           <div class="card">
            <div class="card-header">
             <h4 class="card-title">Текст до обработки:</h4>
            </div>
            <div class="card-body text_before_rewrite">
             
            </div>
           </div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
           <div class="card">
            <div class="card-header">
             <h4 class="card-title">Текст после рерайта:</h4>
            </div>
            <div class="card-body text_after_rewrite">
             
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
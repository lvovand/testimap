<?php
/* Smarty version 3.1.38, created on 2021-06-12 12:14:55
  from '/var/www/html/imap.prettysites.ru/public/templates_admin/footer.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.38',
  'unifunc' => 'content_60c47b0fc34ea1_70888413',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'ec7c6183a6a7dcc61987b2bff95f0a5c0ad4026c' => 
    array (
      0 => '/var/www/html/imap.prettysites.ru/public/templates_admin/footer.tpl',
      1 => 1623489077,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_60c47b0fc34ea1_70888413 (Smarty_Internal_Template $_smarty_tpl) {
?><!--**********************************
            Footer start
        ***********************************-->
        <div class="footer">
            <div class="copyright">
                <p>©2021</p>
            </div>
        </div>
        <!--**********************************
            Footer end
        ***********************************-->

		<!--**********************************
           Support ticket button start
        ***********************************-->

        <!--**********************************
           Support ticket button end
        ***********************************-->
			


	</div>
    <!--**********************************
        Main wrapper end
    ***********************************-->

    <!--**********************************
        Scripts
    ***********************************-->
    <!-- Required vendors -->
	    
	<?php echo '<script'; ?>
 src="https://kit.fontawesome.com/354f225750.js" crossorigin="anonymous"><?php echo '</script'; ?>
>
	     
   <?php echo '<script'; ?>
 src="vendor/global/global.min.js"><?php echo '</script'; ?>
>
    <!--<?php echo '<script'; ?>
 src="https://code.jquery.com/jquery-2.2.4.min.js"><?php echo '</script'; ?>
>--> 
    <!--<?php echo '<script'; ?>
 src="//code.jquery.com/jquery-migrate-3.3.2.min.js"><?php echo '</script'; ?>
>-->
	<?php echo '<script'; ?>
 src="vendor/jquery-nice-select/js/jquery.nice-select.min.js"><?php echo '</script'; ?>
>
	
	<link href="vendor/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet"> 
   <?php echo '<script'; ?>
 src="vendor/sweetalert2/dist/sweetalert2.min.js"><?php echo '</script'; ?>
>
   
    <?php echo '<script'; ?>
 src="js/custom.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="js/deznav-init.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="js/demo.js"><?php echo '</script'; ?>
>
   <!--<?php echo '<script'; ?>
 src="js/styleSwitcher.js"><?php echo '</script'; ?>
>-->
	<!--editable-->   
   <?php echo '<script'; ?>
 type="text/javascript" src="/lib/poshytip/src/jquery.poshytip.min.js"><?php echo '</script'; ?>
>
   <link href="/lib/jquery-editable-1.5.1/jquery-editable//css/jquery-editable.css" rel="stylesheet"/>
   <?php echo '<script'; ?>
 src="/lib/jquery-editable-1.5.1/jquery-editable/js/jquery-editable-poshytip.min.js"><?php echo '</script'; ?>
>
   <!--fancybox-->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
   <?php echo '<script'; ?>
 src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"><?php echo '</script'; ?>
>
   
   <?php echo '<script'; ?>
 src="js_my/functions.js"><?php echo '</script'; ?>
>}
   
   <?php echo '<script'; ?>
 type="text/javascript" >
		jQuery(document).ready(function(){
			editable_input_text(".editable","edit_admin");
			editable_input_text(".editable_word","edit_word");		
		});   
   <?php echo '</script'; ?>
>
   
</body>
</html><?php }
}

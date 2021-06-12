//redirect
//explode
//adminLogin
//adminReg
//adminForgot
//editable_input_text
//editable_from_wheel_input_text
//searchProject
//redirect
//gotoWheel(project)

function redirect(url){
  location.href = url;
}

function $_GET(key) {
    var p = window.location.search;
    p = p.match(new RegExp(key + '=([^&=]+)'));
    return p ? p[1] : false;
}

//explode
function explode( delimiter, string ) { // Split a string by string
    //
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: kenneth
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    var emptyArray = { 0: '' };
    if ( arguments.length != 2
        || typeof arguments[0] == 'undefined'
        || typeof arguments[1] == 'undefined' )
    {
        return null;
    }
    if ( delimiter === ''
        || delimiter === false
        || delimiter === null )
    {
        return false;
    }
    if ( typeof delimiter == 'function'
        || typeof delimiter == 'object'
        || typeof string == 'function'
        || typeof string == 'object' )
    {
        return emptyArray;
    }
    if ( delimiter === true ) {
        delimiter = '1';
    }
    return string.toString().split ( delimiter.toString() );
}


//adminLogin
function adminLogin(){
    var err = true;
    var login = $(".form_login input[name=login]").val();
    var password = $(".form_login input[name=password]").val();
    var remember = $(".form_login input[name=remember]").is(":checked");
    if(!login || !password){
        return;
    }
    //alert(login + ' ' + password + ' ' + remember);
    //return(false);
    $.ajax({
    url: '/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "doLogin",
      login: login,
      password: password,
      remember: remember
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    
    },
    ajaxError: function(){
     if(err == true){
     
     } 
    },
    complete: function(){
     if(err == true){
     
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        
        if(data && data.is_err == 0){
         location.href = "/index.php";
        }
        else{
         var txt = (data && data.err)? data.err : "Ошибка при авторизации!";
         swal({
            type: 'error',
            title: 'Ошибка!',
            text: data.err            
            });       
        }
        //return(data);
    } 
  });
  
}

//adminReg
function adminReg(){
    var err = true;
    var login = $(".form_reg input[name=login]").val();
    var email = $(".form_reg input[name=email]").val();
    var password = $(".form_reg input[name=password]").val();
    if(!login || !email || !password){
    	   swal({
            type: 'error',
            title: 'Ошибка!',
            text: 'Не заполнены обязательные поля'            
            });  
        return;
    }
    //alert(login + ' ' + email);
    //return(false);
    $('#reg_button').val('Отправка...');
    $.ajax({
    url: '/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "doReg",
      login: login,
      email: email,
      password: password
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    
    },
    ajaxError: function(){
     if(err == true){
     
     } 
    },
    complete: function(){
     if(err == true){
     
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        
        if(data && data.is_err == 0){
         swal({
            type: 'success',
            title: 'Аккаунт добавлен!',
            html: '<p>Перейти на страницу <a href="login.php">Авторизации</a></p>'            
            });
         $('#reg_button').hide(); 
          
        }
        else{
         var txt = (data && data.err)? data.err : "Ошибка при регистрации!";
         swal({
            type: 'error',
            title: 'Ошибка!',
            text: data.err            
            });  
         $('#reg_button').val('Отправить данные');        
        }
        //return(data);
    } 
  });
  
}

//adminForgot
function adminForgot(){
    var err = true;
    var email = $(".form_forgot input[name=email]").val();
    if(!email){
    	   swal({
            type: 'error',
            title: 'Ошибка!',
            text: 'Не указан email'            
            });  
        return;
    }
    //alert(login + ' ' + email);
    //return(false);
    $.ajax({
    url: '/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "doForgot",      
      email: email      
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    
    },
    ajaxError: function(){
     if(err == true){
     
     } 
    },
    complete: function(){
     if(err == true){
     
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        
        if(data && data.is_err == 0){
         swal({
            type: 'success',
            title: 'Данные отправлены!',
            text: 'Данные для авторизации отправлены на указанный емейл'            
            });
        }
        else{
         var txt = (data && data.err)? data.err : "Ошибка при проверке!";
         swal({
            type: 'error',
            title: 'Ошибка!',
            text: data.err            
            });       
        }
        //return(data);
    } 
  });
  
}

//editable input text
 function editable_input_text(filter,task){
  $(filter).each(function(){
     var pk = $(this).attr('data-pk');
     var type = $(this).attr('data-type');
     var title = $(this).attr('data-title');
     var mode = $(this).attr('data-mode');  
     var placement = $(this).attr('data-placement')? $(this).attr('data-placement') : "top";
     var source = $(this).attr('data-source')? $(this).attr('data-source') : "";
     if(source && type != "checklist"){
       var value = $(this).attr('data-value')? $(this).attr('data-value') : "";
     }   
     //alert(value);
     if(!mode){ mode = 'inline';}
     var toggle = $(this).attr('data-toggle');     
     //var width = $(this).attr('data-width')? $(this).attr('data-width') : "auto";     
     //var height = $(this).attr('data-height')? $(this).attr('data-height') : "auto";
     var inputclass = $(this).attr('data-class')? $(this).attr('data-class') : "";
     var inp_class =  $(this).attr('data-class')? $(this).attr('data-class') : ''; //data-inputclass="some_class"
     if(!toggle){ toggle = 'click';}
     
     //alert(pk);
     $(this).editable(
             {
              emptytext: '...',              
              type: type,
              pk: pk,
              title: title,
              mode: mode,
              toggle: toggle,
              placement: placement,
              source: source,
              value: value,
              escape: false,              
              inputclass: inputclass,
              //height: height,
              inputclass: inp_class,
              wysihtml5: {
                html: true
              },
              
              url: "/ajax.php?task=" + task
             }
             );

    });
}


 
//tr_big_hover
function tr_big_hover() {
  $(document).ready(function(){
		$(".tr_big_block").hover(function(){
			//console.log('hover');
			var block = $(this).find('.rewrite_text_big');
			block.each(function(){
				if(!$(this).hasClass('rewrite_text_big_block')){
				 $(this).addClass('rewrite_text_big_block');
				}			
			});
		},function(){
			//console.log('hover out');
			var block = $(this).find('.rewrite_text_big');
			block.each(function(){
				if($(this).hasClass('rewrite_text_big_block')){
				 $(this).removeClass('rewrite_text_big_block');
				}			
			});
		});  
  });
}	 

//checkAdmin
function checkAdmin(){
    var err = true;
   
    //alert(login + ' ' + password + ' ' + remember);
    //return(false);
    $.ajax({
    url: '/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "checkAdmin"
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    
    },
    ajaxError: function(){
     if(err == true){
     
     } 
    },
    complete: function(){
     if(err == true){
     
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
    } 
  });
  
}

function checkConnection(){ 
    //alert(login + ' ' + email);
    //return(false);
    $.ajax({
    url: '/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "checkImapConnection"            
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    
    },
    ajaxError: function(){
     
    },
    complete: function(){
     
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        
        if(data && data.is_err == 0){
         swal({
            type: 'success',
            title: 'Соединение успешно!',
            html: '<p>' + data.text_html + '</p>'            
            });
        }
        else{
         var txt = (data && data.err)? data.err : "Ошибка при проверке соединения!";
         swal({
            type: 'error',
            title: 'Ошибка!',
            text: data.err            
            });       
        }
        //return(data);
    } 
  });
}

function addBlockWord(id, word){
	var txt = "";
	txt += '<tr class="mini" id="tr_' + id+ '">';
   txt += '<td style="width: 50px;"><button onClick="delWord(' + id + ')" title="Удалить" class="btn btn-mini btn-danger"><i class="fas fa-trash"></i></button></td>';
	txt += '<td style="width: 350px;">';
	txt += '<span class="edit editable_word" id="word"';
	txt += 'data-title="Введите слово"';
	txt += 'data-pk="' + id + '"';
	txt += 'data-type="text"> ' + word + '</span>';
   txt += '</td>';
	txt += '</tr>';
   return(txt);
}

function addNewWord(){
 var word = $('#new_word').val();
 if(word == ""){
	swal({
            type: 'error',
            title: 'Ошибка!',
            text: 'Не введено слово для поиска'            
        }); 
   return;         
 }
 $.ajax({
    url: '/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "addNewWord",
      word: word            
    },
    timeout: 10000,
    beforeSend: function(){
    },
    ajaxError: function(){
    },
    complete: function(){
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        
        if(data && data.is_err == 0 && data.new_id){
         var tr_txt = addBlockWord(data.new_id,data.new_word);
         $(tr_txt).insertAfter('.tr_first');
         editable_input_text(".editable_word","edit_word");
        }
        else{
         var txt = (data && data.err)? data.err : "Ошибка при сохранении!";
         swal({
            type: 'error',
            title: 'Ошибка!',
            text: data.err            
            });       
        }
        //return(data);
    } 
  });
}

function delWord(id){
	
 if(!confirm("Удалить слово?")){
  return; 
 }	
 
 $.ajax({
    url: '/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delWord",
      id_word: id            
    },
    timeout: 10000,
    beforeSend: function(){
    },
    ajaxError: function(){
    },
    complete: function(){
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        
        if(data && data.is_err == 0){
         $('#tr_' + id).remove();        
        }
        else{
         var txt = (data && data.err)? data.err : "Ошибка при удалении!";
         swal({
            type: 'error',
            title: 'Ошибка!',
            text: data.err            
            });       
        }
        //return(data);
    } 
  });
}

function delMessage(id){
	
 if(!confirm("Удалить сообщение?")){
  return; 
 }	
 
 $.ajax({
    url: '/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delMessage",
      id_message: id            
    },
    timeout: 10000,
    beforeSend: function(){
    },
    ajaxError: function(){
    },
    complete: function(){
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        
        if(data && data.is_err == 0){
         $('#tr_' + id).remove();        
        }
        else{
         var txt = (data && data.err)? data.err : "Ошибка при удалении!";
         swal({
            type: 'error',
            title: 'Ошибка!',
            text: data.err            
            });       
        }
        //return(data);
    } 
  });
}



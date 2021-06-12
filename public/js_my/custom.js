/* NUMBER ANIMATION */
(function(a){a.fn.animateNumber=function(b,c,d){var e=a(this),f=d?parseInt(e.val()):parseInt(e.html());var g=b>f,h=1;var i=function(){f=Math.floor(g?f+h:f-h);if(g&&f>b||!g&&f<b){f=b;clearInterval(j)}e.html(f);if(d){e.val(f);d()}};var j=setInterval(i,c)}})(jQuery);
/*
 Fusionfile v0.1
 Author: Bruno Quaranta (fusiondevs)
 Licensed under the MIT license.
*/
(function(a){fusionFileObj=function(a,b){this.constructor(a,b)};a.extend(fusionFileObj.prototype,{version:"1.0.1",constructor:function(b,c){this.defaults={};this.options={};this.options=a.extend(true,this.defaults,c);b.each(function(b){var c=a(this);c.addClass("file-file");c.wrap('<div class="input-field">');var d=c.parent(".input-field");d.prepend('<input type="text" class="file-text" disabled="disabled"><span class="file-button">Select file</span>');c.live("change",function(){d.find(".file-text").val(c.val().replace("C:\\fakepath\\",""))});c.hover(function(){d.find(".file-text").addClass("hover");d.find(".file-button").addClass("hover")},function(){d.find(".file-text").removeClass("hover");d.find(".file-button").removeClass("hover")})})}});a.fn.fusionFile=function(b){new fusionFileObj(a(this),b)}})(jQuery);

// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// releated under the MIT license
(function(a){function b(a){if(a.attr("title")||typeof a.attr("original-title")!="string"){a.attr("original-title",a.attr("title")||"").removeAttr("title")}}function c(c,d){this.$element=a(c);this.options=d;this.enabled=true;b(this.$element)}c.prototype={show:function(){var b=this.getTitle();if(b&&this.enabled){var c=this.tip();c.find(".tipsy-inner")[this.options.html?"html":"text"](b);c[0].className="tipsy";c.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).appendTo(document.body);var d=a.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var e=c[0].offsetWidth,f=c[0].offsetHeight;var g=typeof this.options.gravity=="function"?this.options.gravity.call(this.$element[0]):this.options.gravity;var h;switch(g.charAt(0)){case"n":h={top:d.top+d.height+this.options.offset,left:d.left+d.width/2-e/2};break;case"s":h={top:d.top-f-this.options.offset,left:d.left+d.width/2-e/2};break;case"e":h={top:d.top+d.height/2-f/2,left:d.left-e-this.options.offset};break;case"w":h={top:d.top+d.height/2-f/2,left:d.left+d.width+this.options.offset};break}if(g.length==2){if(g.charAt(1)=="w"){h.left=d.left+d.width/2-15}else{h.left=d.left+d.width/2-e+15}}c.css(h).addClass("tipsy-"+g);if(this.options.fade){c.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{c.css({visibility:"visible",opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){a(this).remove()})}else{this.tip().remove()}},getTitle:function(){var a,c=this.$element,d=this.options;b(c);var a,d=this.options;if(typeof d.title=="string"){a=c.attr(d.title=="title"?"original-title":d.title)}else if(typeof d.title=="function"){a=d.title.call(c[0])}a=(""+a).replace(/(^\s*|\s*$)/,"");return a||d.fallback},tip:function(){if(!this.$tip){this.$tip=a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};a.fn.tipsy=function(b){function d(d){var e=a.data(d,"tipsy");if(!e){e=new c(d,a.fn.tipsy.elementOptions(d,b));a.data(d,"tipsy",e)}return e}function e(){var a=d(this);a.hoverState="in";if(b.delayIn==0){a.show()}else{setTimeout(function(){if(a.hoverState=="in")a.show()},b.delayIn)}}function f(){var a=d(this);a.hoverState="out";if(b.delayOut==0){a.hide()}else{setTimeout(function(){if(a.hoverState=="out")a.hide()},b.delayOut)}}if(b===true){return this.data("tipsy")}else if(typeof b=="string"){return this.data("tipsy")[b]()}b=a.extend({},a.fn.tipsy.defaults,b);if(!b.live)this.each(function(){d(this)});if(b.trigger!="manual"){var g=b.live?"live":"bind",h=b.trigger=="hover"?"mouseenter":"focus",i=b.trigger=="hover"?"mouseleave":"blur";this[g](h,e)[g](i,f)}return this};a.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,offset:0,opacity:.8,title:"title",trigger:"hover"};a.fn.tipsy.elementOptions=function(b,c){return a.metadata?a.extend({},c,a(b).metadata()):c};a.fn.tipsy.autoNS=function(){return a(this).offset().top>a(document).scrollTop()+a(window).height()/2?"s":"n"};a.fn.tipsy.autoWE=function(){return a(this).offset().left>a(document).scrollLeft()+a(window).width()/2?"e":"w"}})(jQuery);

/*
 *
 * jqTransform
 * by mathieu vilaplana mvilaplana@dfc-e.com
 * Designer ghyslain armand garmand@dfc-e.com
 *
 *
 * Version 1.0 25.09.08
 * Version 1.1 06.08.09
 * Add event click on Checkbox and Radio
 * Auto calculate the size of a select element
 * Can now, disabled the elements
 * Correct bug in ff if click on select (overflow=hidden)
 * No need any more preloading !!
 * 
 ******************************************** */
(function(a){var b={preloadImg:true};var c=false;var d=function(a){a=a.replace(/^url\((.*)\)/,"$1").replace(/^\"(.*)\"$/,"$1");var b=new Image;b.src=a.replace(/\.([a-zA-Z]*)$/,"-hover.$1");var c=new Image;c.src=a.replace(/\.([a-zA-Z]*)$/,"-focus.$1")};var e=function(b){var c=a(b.get(0).form);var d=b.next();if(!d.is("label")){d=b.prev();if(d.is("label")){var e=b.attr("id");if(e){d=c.find('label[for="'+e+'"]')}}}if(d.is("label")){return d.css("cursor","pointer")}return false};var f=function(b){var c=a(".jqTransformSelectWrapper ul:visible");c.each(function(){var c=a(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);if(!(b&&c.oLabel&&c.oLabel.get(0)==b.get(0))){a(this).hide()}})};var g=function(b){if(a(b.target).parents(".jqTransformSelectWrapper").length===0){f(a(b.target))}};var h=function(){a(document).mousedown(g)};var i=function(b){var c;a(".jqTransformSelectWrapper select",b).each(function(){c=this.selectedIndex<0?0:this.selectedIndex;a("ul",a(this).parent()).each(function(){a("a:eq("+c+")",this).click()})});a("a.jqTransformCheckbox, a.jqTransformRadio",b).removeClass("jqTransformChecked");a("input:checkbox, input:radio",b).each(function(){if(this.checked){a("a",a(this).parent()).addClass("jqTransformChecked")}})};a.fn.jqTransCheckBox=function(){return this.each(function(){if(a(this).hasClass("jqTransformHidden")){return}var b=a(this);var c=this;var d=e(b);d&&d.click(function(){f.trigger("click")});var f=a('<a href="#" class="jqTransformCheckbox"></a>');b.addClass("jqTransformHidden").wrap('<span class="jqTransformCheckboxWrapper"></span>').parent().prepend(f);b.change(function(){this.checked&&f.addClass("jqTransformChecked")||f.removeClass("jqTransformChecked");return true});f.click(function(){if(b.attr("disabled")){return false}b.trigger("click").trigger("change");return false});this.checked&&f.addClass("jqTransformChecked")})};a.fn.jqTransRadio=function(){return this.each(function(){if(a(this).hasClass("jqTransformHidden")){return}var b=a(this);var c=this;oLabel=e(b);oLabel&&oLabel.click(function(){d.trigger("click")});var d=a('<a href="#" class="jqTransformRadio" rel="'+this.name+'"></a>');b.addClass("jqTransformHidden").wrap('<span class="jqTransformRadioWrapper"></span>').parent().prepend(d);b.change(function(){c.checked&&d.addClass("jqTransformChecked")||d.removeClass("jqTransformChecked");return true});d.click(function(){if(b.attr("disabled")){return false}b.trigger("click").trigger("change");a('input[name="'+b.attr("name")+'"]',c.form).not(b).each(function(){a(this).attr("type")=="radio"&&a(this).trigger("change")});return false});c.checked&&d.addClass("jqTransformChecked")})};a.fn.jqTransSelect=function(){return this.each(function(b){var c=a(this);if(c.hasClass("jqTransformHidden")){return}if(c.attr("multiple")){return}var d=e(c);var g=c.addClass("jqTransformHidden").wrap('<div class="jqTransformSelectWrapper"></div>').parent().css({zIndex:10-b});g.prepend('<div><span></span><a href="#" class="jqTransformSelectOpen"></a></div><ul></ul>');var h=a("ul",g).css("width",c.width()).hide();a("option",this).each(function(b){var c=a('<li><a href="#" index="'+b+'">'+a(this).html()+"</a></li>");h.append(c)});h.find("a").click(function(){a("a.selected",g).removeClass("selected");a(this).addClass("selected");if(c[0].selectedIndex!=a(this).attr("index")&&c[0].onchange){c[0].selectedIndex=a(this).attr("index");c[0].onchange()}c[0].selectedIndex=a(this).attr("index");a("span:eq(0)",g).html(a(this).html());h.hide();return false});a("a:eq("+this.selectedIndex+")",h).click();a("span:first",g).click(function(){a("a.jqTransformSelectOpen",g).trigger("click")});d&&d.click(function(){a("a.jqTransformSelectOpen",g).trigger("click")});this.oLabel=d;var i=a("a.jqTransformSelectOpen",g).click(function(){if(h.css("display")=="none"){f()}if(c.attr("disabled")){return false}h.slideToggle("fast",function(){var b=a("a.selected",h).offset().top-h.offset().top;h.animate({scrollTop:b})});return false});var j=c.outerWidth();var k=a("span:first",g);var l=j>k.innerWidth()?j+i.outerWidth():g.width();g.css("width",l);h.css("width",l-2);k.css({width:j});h.css({display:"block",visibility:"hidden"});var m=a("li",h).length*a("li:first",h).height();m<h.height()&&h.css({height:m,overflow:"hidden"});h.css({display:"none",visibility:"visible"})})};a.fn.jqTransform=function(c){var d=a.extend({},b,c);return this.each(function(){var b=a(this);if(b.hasClass("jqtransformdone")){return}b.addClass("jqtransformdone");a("input:checkbox:not(.ios)",this).jqTransCheckBox();a("input:radio",this).jqTransRadio();if(a("select:not(.chzn-select)",this).jqTransSelect().length>0){h()}b.bind("reset",function(){var a=function(){i(this)};window.setTimeout(a,10)})})}})(jQuery);


function apprise(a,b,c){var d={confirm:false,verify:false,input:false,animate:false,textOk:"Ok",textCancel:"Cancel",textYes:"Yes",textNo:"No"};if(b){for(var e in d){if(typeof b[e]=="undefined")b[e]=d[e]}}var f=$(document).height();var g=$(document).width();$("body").append('<div class="appriseOverlay" id="aOverlay"></div>');$(".appriseOverlay").css("height",f).css("width",g).fadeIn(100);$("body").append('<div class="appriseOuter"></div>');$(".appriseOuter").append('<div class="appriseInner"></div>');$(".appriseInner").append(a);$(".appriseOuter").css("left",($(window).width()-$(".appriseOuter").width())/2+$(window).scrollLeft()+"px");if(b){if(b["animate"]){var h=b["animate"];if(isNaN(h)){h=400}$(".appriseOuter").css("top","-200px").show().animate({top:"10%"},h)}else{$(".appriseOuter").css("top","100px").fadeIn(200)}}else{$(".appriseOuter").css("top","100px").fadeIn(200)}if(b){if(b["input"]){if(typeof b["input"]=="string"){$(".appriseInner").append('<div class="aInput"><input type="text" class="aTextbox" t="aTextbox" value="'+b["input"]+'" /></div>')}else{$(".appriseInner").append('<div class="aInput"><input type="text" class="aTextbox" t="aTextbox" /></div>')}$(".aTextbox").focus()}}$(".appriseInner").append('<div class="aButtons"></div>');if(b){if(b["confirm"]||b["input"]){$(".aButtons").append('<button value="ok">'+b["textOk"]+"</button>");$(".aButtons").append('<button value="cancel">'+b["textCancel"]+"</button>")}else if(b["verify"]){$(".aButtons").append('<button value="ok">'+b["textYes"]+"</button>");$(".aButtons").append('<button value="cancel">'+b["textNo"]+"</button>")}else{$(".aButtons").append('<button value="ok">'+b["textOk"]+"</button>")}}else{$(".aButtons").append('<button value="ok">Ok</button>')}$(document).keydown(function(a){if($(".appriseOverlay").is(":visible")){if(a.keyCode==13){$('.aButtons > button[value="ok"]').click()}if(a.keyCode==27){$('.aButtons > button[value="cancel"]').click()}}});var i=$(".aTextbox").val();if(!i){i=false}$(".aTextbox").keyup(function(){i=$(this).val()});$(".aButtons > button").click(function(){$(".appriseOverlay").remove();$(".appriseOuter").remove();if(c){var a=$(this).attr("value");if(a=="ok"){if(b){if(b["input"]){c(i)}else{c(true)}}else{c(true)}}else if(a=="cancel"){c(false)}}})};

/* OPERA FIX FOR WINDOW LOAD */
history.navigationMode = 'compatible';

/* IPHONE */
function isiPhone(){
    return (
        (navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1)
    );
}

/* LOADER */
jQuery(document).ready(function() {
	//if (isiPhone()) { jQuery('#loading-block').hide();  }
  jQuery('#loading-block').hide();
});
/*
jQuery(window).load(function() { 
	jQuery('#loading-block').fadeOut(function() {
		// increase widgets numbers
		if (jQuery('.arrow-up, .arrow-down, .arrow-right').length) {
			jQuery('.arrow-up, .arrow-down, .arrow-right').each(function() {
				var t = jQuery(this);
				var e = t.find('.perc span');
				var v = parseInt(e.attr('data-value'), 10);
				
				e.data('counter', '');
				e.html('0');
		
				var $counter = e;
				e.animateNumber(v, 20);
			});
		}
		
		if (jQuery('.knob').length) {
			jQuery('.knob').each(function() {
				var t = jQuery(this);
				var e = t;
				var v = parseInt(e.attr('data-value'), 10);
				
				e.data('counter', '');
				e.val(0);
		
				var $counter = e;
				e.animateNumber(v, 20, function() { e.change(); });
				
			});
		}
	
	}); 
});
*/
/* Caffeine */
jQuery(document).ready(function() {
	// add plus to nav
	var plus = '<span class="plus"></span>';
	jQuery('.nav li').each(function() {
		var t = jQuery(this);
		if (t.find('.submenu').length) {
			t.find('a').eq(0).append(plus);
			t.addClass('has-menu');
		}
	});
	// nav toggle
	jQuery('.nav li.has-menu > a').live('click', function(event) {
		event.preventDefault();
		var t = jQuery(this).parent('li');
		t.find('ul.submenu').slideToggle();
	});
	// active nav
	jQuery('.nav li.active').each(function() {
		var t = jQuery(this);
		if (t.parent().attr('class') == 'submenu') {
			t.parent().slideToggle();
		}
		else {
			t.find('a').append('<span class="arrow"></span>');
		}
	});
	
	// Knob widgets
	
	jQuery(".knob").each(function() {
		jQuery(this).val(0);
		jQuery(this).knob({
			class : 'widget-knob',
			draw : function () {
				var a = this.angle(this.cv)  		// Angle
					, sa = this.startAngle          // Previous start angle
					, sat = this.startAngle         // Start angle
					, ea                            // Previous end angle
					, eat = sat + a                 // End angle
					, r = 1;
				this.g.lineWidth = this.lineWidth;
				this.o.cursor
					&& (sat = eat - 0.3)
					&& (eat = eat + 0.3);
				this.g.beginPath();
				this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth*1.5, sat, eat, false);
				this.g.stroke();
				this.g.lineWidth = 2;
				this.g.beginPath();
				this.g.strokeStyle = this.o.fgColor;
				this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
				this.g.stroke();
				return false;
			}
		});
	});
	
	// Mask
	if (jQuery('input.mask').length) {
		jQuery('input.mask').each(function() {
			var t = jQuery(this);
			var mask = t.attr('data-mask');
			t.mask(mask);
		});
	}
	// Chozen
	if (jQuery('.chzn-select').length) {
		jQuery('.chzn-select').chosen();
	}
	// Alerts 
	jQuery('.alert-small .close').click(function() {
		var p = jQuery(this).parent();
		p.fadeOut();
	});

	// File fields
	if (jQuery('input:file').length) {
		jQuery('input:file').fusionFile();
	}
	
	// iPhone checkbox
	if (jQuery(':checkbox.ios').length) {
		jQuery(':checkbox.ios').iphoneStyle();
	}
	
	// Spinner
	jQuery('.spinner').each(function() {
		var t = jQuery(this);
		var v_max = 100;
		var v_min = 0;
		if (t.attr('data-max')) { v_max = parseInt(t.attr('data-max'), 10); }
		if (t.attr('data-min')) { v_min = parseInt(t.attr('data-min'), 10); }
		t.spinner({min: v_min, max: v_max});
	});
	
	// ColorPicker
	if (jQuery(".color-picker").length) {
		jQuery(".color-picker").miniColors({
			letterCase: 'uppercase'
		});
	}
	
	// Data tables
	if (jQuery('table.data-table').length) {
		jQuery('table.data-table').dataTable( {
			"sPaginationType": "full_numbers"
		});
	}
	
	// Tipsy 
	if (jQuery('.tipsy-trigger').length) {
		jQuery('.tipsy-trigger').each(function() {
			jQuery(this).tipsy({
				gravity: ((jQuery(this).attr('data-tipsy-direction')) ? jQuery(this).attr('data-tipsy-direction') : 's'), 
				fade: true
			});
		});
	}
	jQuery('.tipsy-header').tipsy({gravity: 'n', fade: true});
	
	
	// Progress bars
	jQuery('.progress-bar:not(.vertical) .complete').each(function() {
		var t = jQuery(this);
		var p = t.parent();
		var size = parseInt(p.attr('data-size'), 10);
		if (size) { p.width(size); }
		
		var progress = parseInt(t.attr('data-progress'), 10);
		
		var p_w = p.width();
		var complete_width = (((p_w-12)/100)*progress);
		t.css({'width': complete_width+'px'});
		p.find('.label').html(progress+'%');
		
		var l_w = p.find('.label').width();
		p.find('.label').css('left', ((p_w/2)-(l_w/2)));
	});
	
	jQuery('.progress-bar.vertical .complete').each(function() {
		var t = jQuery(this);
		var p = t.parent();
		var size = parseInt(p.attr('data-size'), 10);
		if (size) { p.height(size); }
		
		var progress = parseInt(t.attr('data-progress'), 10);
		
		var p_h = p.height();
		var complete_height = (((p_h-12)/100)*progress);
		t.css({'height': complete_height+'px'});
		p.find('.label').html(progress+'%');
		
		var l_h = p.find('.label').height();
		p.find('.label').css('top', ((p_h/2)-(l_h/2)));
		var l_w = p.find('.label').width();
		var p_w = p.width();
		p.find('.label').css('left', ((p_w/2)-(l_w/2)));
	});
	
	// Tabs
	jQuery('.tabs-set').each(function() {
		var p = jQuery(this);
		p.find('.tabs li').click(function() {
			p.find('.tabs li').removeClass('active');
			jQuery(this).addClass('active');
			var ix = jQuery(this).index();
			p.find('.tab-panel').hide().eq(ix).show();
		}).eq(0).click();
	});
	
	// Search form
	jQuery('.search-box.closed').live('click', function() {
		var t = jQuery(this);
		t.removeClass('closed').addClass('opened');
		t.animate({'width': '230px'}, function() {
			t.find('input').fadeIn().focus();
		});
	});
	
	// SliderNav
	if (jQuery('.slider-contact').length) {
		jQuery('.slider-contact').sliderNav();
	}
	
	// prettyPhoto
	if (jQuery("a[rel^='prettyPhoto']").length) {
		jQuery("a[rel^='prettyPhoto']").prettyPhoto();
	}
	
	// Widget Sparkline
	if (jQuery(".widget .sparkline").length) {
		jQuery(".widget .sparkline").each(function() {
			jQuery(this).sparkline('html', {
				type: 'bar',
				barWidth: 7,
				barSpacing: 2,
				barColor: ((jQuery(this).attr('data-color')) ? jQuery(this).attr('data-color') : '#63D844'),
				negBarColor: '#bd5151',
				height: 35,
				width: 70
			});
		});
	};
	// jqTransform
	if ((jQuery('select:not(.chzn-select)').length) || (jQuery('input[type=checkbox]').length) || (jQuery('input[type=radio]:not(.ios)').length)) {
		if (!jQuery('.dataTables_length select').length) {
			jQuery('body').jqTransform({imgPath:'img/'});
		}
	}
	

});




function addslashes( str ) {    // Quote string with slashes
	    return str.replace('/(["\'\])/g', "\\$1").replace('/\0/g', "\\0");
	}
 
 
 function changeChecked(id,task){
  //var value = $('#button_menu_' + id).attr('data-value');
  //if(value != 0 || value != 1){ return;}
  //$('#button_menu_' + id).html("<i class='icon-eye-open'></i>");
   var button = task;
   var task_post = "";
   //alert(id);
   switch(task){
    case "menu":
     task_post = "changeIsMenu";
    break;
    case "visible_page":
     task_post = "changeIsVisiblePage";
    break;
    case "visible_action":
     task_post = "changeIsVisibleAction";
    break;
    case "visible_news":
     task_post = "changeIsVisibleNews";
    break;
    case "menu_page":
     task_post = "changeIsMenuPage";
    break;
    case "visible_cartridge":
     task_post = "changeIsVisibleCartridge";
    break;
    case "new_cartridge":
     task_post = "changeIsNewCartridge";
    break;
    case "original_cartridge":
     task_post = "changeIsOriginalCartridge";
    break;
    case "top_cartridge":
     task_post = "changeIsTopCartridge";
    break;
    case "unavaible_cartridge":
     task_post = "changeIsUnavaibleCartridge";
    break;
   }
   //alert(task_post);
   $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: task_post,
      id: parseInt(id)
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
     var txt1 = "Сохранение";
     //show_message(txt1,"<img src='/admin/images/ajax-loader.gif' />",false);
     $('#tr_' + id).block({ 
                //message: '<h3>Wait...</h3>', 
                message: null,
                css: { border: '3px solid #a00' } 
            });
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    complete: function(){
     if(err == true){
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        //show_message("Завершение отправки заявки","Заявка на участие в конкурсе отправлена",true);
        $('#tr_' + id).unblock();
        
        if(data.is_err == 0){
         
         switch(task){
          case "menu":
            if(data.is_menu){
              $('#button_' + button + '_' + id).html("<i class='icon-eye-open'></i>");
            }
            else{
              $('#button_' + button + '_' + id).html("<i class='icon-eye-close'></i>");
            }
          break;
          case "visible_page":
          case "visible_action":
          case "visible_news":
            if(data.visible){
              $('#button_' + button + '_' + id).html("<i class='icon-eye-open'></i>");
            }
            else{
              $('#button_' + button + '_' + id).html("<i class='icon-eye-close'></i>");
            }
          break;
          case "menu_page":
            if(data.menu){
              $('#button_' + button + '_' + id).html("<i class='icon-eye-open'></i>");
            }
            else{
              $('#button_' + button + '_' + id).html("<i class='icon-eye-close'></i>");
            }
          break;
          case "visible_cartridge":
            if(data.visible){
              $('#button_' + button + '_' + id).html("<i class='icon-eye-open'></i>");
            }
            else{
              $('#button_' + button + '_' + id).html("<i class='icon-eye-close'></i>");
            }
          break;
          case "new_cartridge":
            if(data.new){
              $('#button_' + button + '_' + id).html("<i class='icon-eye-open'></i>");
            }
            else{
              $('#button_' + button + '_' + id).html("<i class='icon-eye-close'></i>");
            }
          break;
          case "original_cartridge":
            if(data.original){
              $('#button_' + button + '_' + id).html("<i class='icon-eye-open'></i>");
            }
            else{
              $('#button_' + button + '_' + id).html("<i class='icon-eye-close'></i>");
            }
          break;
          case "top_cartridge":
            if(data.top){
              $('#button_' + button + '_' + id).html("<i class='icon-eye-open'></i>");
            }
            else{
              $('#button_' + button + '_' + id).html("<i class='icon-eye-close'></i>");
            }
          break;
          case "unavaible_cartridge":
            if(data.unavaible){
              $('#button_' + button + '_' + id).html("<i class='icon-eye-open'></i>");
            }
            else{
              $('#button_' + button + '_' + id).html("<i class='icon-eye-close'></i>");
            }
          break;
          
        }
         
        }
        else{
         var txt7 = "Ошибка!";
         //show_message(txt7,data.err,true);
         alert("Ошибка при сохранении значения");
        }
        //return(data);
    } 
  });
 } 

function addCatalog(parent,type){
  var err = true;	
  parent = typeof(parent) != 'undefined' ? parent : 0;
  type = typeof(type) != 'undefined' ? type : 'firm';
  //alert(parent + ' ' + type);
  $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "add_catalog",
      parent: parseInt(parent),
      type: type
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
     var txt1 = "Сохранение";
     //show_message(txt1,"<img src='/admin/images/ajax-loader.gif' />",false);
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    complete: function(){
     if(err == true){
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        //show_message("Завершение отправки заявки","Заявка на участие в конкурсе отправлена",true);
        if(data.is_err == 0){
         if(data.parent == 0){
          $("#div_catalog").fancytree("getRootNode").addChildren([{title: data.name, key: data.key, href: data.url, tooltip: data.tooltip, data: {'type' : data.data.type}}]);
         }
         else{
          if(data.key_first){
           $("#div_catalog").fancytree("getActiveNode").addChildren([{title: data.name,key: data.key,href: data.url, tooltip: data.tooltip, data: {'type' : data.data.type,'id' : data.data.id}}],data.key_first); 
          }else{
           $("#div_catalog").fancytree("getActiveNode").addChildren([{title: data.name,key: data.key,href: data.url, tooltip: data.tooltip, data: {'type' : data.data.type,'id' : data.data.id}}]);
          }
         }
        }
        else{
         if(data.err){
				  alert(data.err);
				 }
				 else{
				 	alert('Ошибка при добавлении');
         }
				}
        //return(data);
    } 
  });
 }

function updateFirmImage(id){
 var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "getFirmImage",
      id_firm: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data && data.is_err == 0){         
         if(data.firm.image){
          $('#img_' + id).attr('src','/images_firms/'  + data.firm.image);          
          $('#photo_' + id).show();                    
         }
         $('.f_perc').html("");
        }        
    } 
  });   
}    

function delFirmImage(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delFirmImage",
      id_firm: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){         
         $('#photo_' + id).hide('slow');
        }
        else{
            alert('Ошибка при удалении');
        }
    } 
  });   
}

function updateModelImage(id){
 var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "getPrinterImage",
      id_printer: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data && data.is_err == 0){         
         if(data.printer.image){
          $('#img_' + id).attr('src','/images_printers/'  + data.printer.image);          
          $('#photo_' + id).show();                    
         }
         $('.f_perc').html("");
        }        
    } 
  });   
}    

function delModelImage(id){
 var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delPrinterImage",
      id_printer: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){         
         $('#photo_' + id).hide('slow');
        }
        else{
            alert('Ошибка при удалении');
        }
    } 
  });   
}

function updateCartridgeImage(id){
 var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "getCartridgeImage",
      id_cartridge: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data && data.is_err == 0){         
         if(data.cartridge.image){
          $('#img_' + id).attr('src','/images_cartridges/'  + data.cartridge.image);          
          $('#photo_' + id).show();                    
         }
         $('.f_perc').html("");
        }        
    } 
  });   
}    

function delCartridgeImage(id){
 var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delCartridgeImage",
      id_cartridge: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){         
         $('#photo_' + id).hide('slow');
        }
        else{
            alert('Ошибка при удалении');
        }
    } 
  });   
}

function updateActionImage(id){
 var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "getActionImage",
      id_action: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data && data.is_err == 0){         
         if(data.action.image){
          $('#img_' + id).attr('src','/images_actions/'  + data.action.image);          
          $('#photo_' + id).show();                    
         }
         $('.f_perc').html("");
        }        
    } 
  });   
}    

function delActionImage(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delActionImage",
      id_action: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){         
         $('#photo_' + id).hide('slow');
        }
        else{
            alert('Ошибка при удалении');
        }
    } 
  });   
}

function updateNewsImage(id){
 var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "getNewsImage",
      id_news: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data && data.is_err == 0){         
         if(data.news.image){
          $('#img_' + id).attr('src','/images_news/'  + data.news.image);          
          $('#photo_' + id).show();                    
         }
         $('.f_perc').html("");
        }        
    } 
  });   
}    

function delNewsImage(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delNewsImage",
      id_news: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){         
         $('#photo_' + id).hide('slow');
        }
        else{
            alert('Ошибка при удалении');
        }
    } 
  });   
}


function alert_delFirm(id){
  apprise('Удалить производителя без возможности восстановления?', {'animate': true, 'confirm': true}, function(r) {
	if (r) { 
    //alert('Your name is '+r);
   //location.href = "pages.php?task=delpage&id="+page_id;  
    delFirm(id);
   }
  });
}

function delFirm(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delFirm",
      id_firm: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         $('#div_goods_'+id).html("Удалено");
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при удалении';
            alert(txt_err);
        }
    } 
  });   
}

function alert_delSeries(id){
  apprise('Удалить серию без возможности восстановления?', {'animate': true, 'confirm': true}, function(r) {
	if (r) { 
    //alert('Your name is '+r);
   //location.href = "pages.php?task=delpage&id="+page_id;  
    delSeries(id);
   }
  });
}

function delSeries(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delSeries",
      id_series: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         $('#div_goods_'+id).html("Удалено");
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при удалении';
            alert(txt_err);
        }
    } 
  });   
}

function alert_delModel(id){
  apprise('Удалить модель без возможности восстановления?', {'animate': true, 'confirm': true}, function(r) {
	if (r) { 
    //alert('Your name is '+r);
   //location.href = "pages.php?task=delpage&id="+page_id;  
    delModel(id);
   }
  });
}

function delModel(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delModel",
      id_model: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         $('#div_goods_'+id).html("Удалено");
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при удалении';
            alert(txt_err);
        }
    } 
  });   
}

function alert_delCartridge(id){
  apprise('Удалить без возможности восстановления?', {'animate': true, 'confirm': true}, function(r) {
	if (r) { 
    //alert('Your name is '+r);
   //location.href = "pages.php?task=delpage&id="+page_id;  
    delCartridge(id);
   }
  });
}

function delCartridge(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delCartridge",
      id: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         $('#div_goods_'+id).html("Удалено");
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при удалении';
            alert(txt_err);
        }
    } 
  });   
}   


function alert_delPage(id){
  apprise('Удалить страницу без возможности восстановления?', {'animate': true, 'confirm': true}, function(r) {
	if (r) { 
    //alert('Your name is '+r);
   //location.href = "pages.php?task=delpage&id="+page_id;  
    delPage(id);
   }
  });
}

function delPage(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delPage",
      id_page: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         $('#tr_'+id).hide();
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при удалении';
            alert(txt_err);
        }
    } 
  });   
}

function alert_delAction(id){
  apprise('Удалить страницу без возможности восстановления?', {'animate': true, 'confirm': true}, function(r) {
	if (r) { 
    //alert('Your name is '+r);
   //location.href = "pages.php?task=delpage&id="+page_id;  
    delAction(id);
   }
  });
}

function delAction(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delAction",
      id_action: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         $('#tr_'+id).hide();
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при удалении';
            alert(txt_err);
        }
    } 
  });   
}

function alert_delNews(id){
  apprise('Удалить страницу без возможности восстановления?', {'animate': true, 'confirm': true}, function(r) {
	if (r) { 
    //alert('Your name is '+r);
   //location.href = "pages.php?task=delpage&id="+page_id;  
    delNews(id);
   }
  });
}

function delNews(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delNews",
      id_news: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         $('#tr_'+id).hide();
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при удалении';
            alert(txt_err);
        }
    } 
  });   
}

function alert_delZakaz(id){
  apprise('Удалить заказ ID:'+id+' без возможности восстановления?', {'animate': true, 'confirm': true}, function(r) {
	if (r) { 
    //alert('Your name is '+r);
   //location.href = "pages.php?task=delpage&id="+page_id;  
    delZakaz(id);
   }
  });
}

function delZakaz(id){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "delZakaz",
      id_zakaz: id
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         $('#tr_'+id).hide('slow');
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при удалении';
            alert(txt_err);
        }
    } 
  });   
}

function addPage(){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "addPage"
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         //alert('ok' + data.page.id);
         var txt = '';
         txt += '<tr id="tr_'+data.page.id+'">';
         txt += '<td style="text-align: center;"><a target="_blank" href="editpage.php?id='+data.page.id+'">'+data.page.id+'</a></td>';
         txt += '<td style="text-align: center;"><button onClick="alert_delPage('+data.page.id+')" class="btn btn-mini btn-danger"><i class="icon-remove">&nbsp;</i></button></td>';
         txt += '<td style="text-align: center;"><button id="button_visible_page_'+data.page.id+'" onClick="changeChecked('+data.page.id+',\'visible_page\')" class="btn btn-mini"><i class="icon-eye-close">&nbsp;</i></button></td>';
         txt += '<td style="text-align: center;"><button id="button_menu_page_'+data.page.id+'" onClick="changeChecked('+data.page.id+',\'menu_page\')" class="btn btn-mini"><i class="icon-eye-close">&nbsp;</i></button></td>';
         txt += '<td style=""><div class="edit" id="name__'+data.page.id+'">'+data.page.name+'</div></td>';
         txt += '<td style=""><div class="edit" id="url__'+data.page.id+'">'+data.page.url+'</div></td>';
         txt += '<td style="text-align: center;"><div class="edit" id="order__'+data.page.id+'">0</div></td>';
         txt += '</tr>';
         $(txt).insertAfter('#tr_first');
         
         $('.edit').editable('/admin/ajax.php?task=edit_page',{
            indicator : 'Сохранение...',
            tooltip   : 'Кликните для редактирования...',
            cancel    : 'Отмена',
            submit    : 'OK',
            cssclass : 't1',
            width: 150,
            height: 25
          });
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при добавлении';
            alert(txt_err);
        }
    } 
  });   
}

function addAction(){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "addAction"
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         //alert('ok' + data.page.id);
         var txt = '';
         txt += '<tr id="tr_'+data.action.id+'">';
         txt += '<td style="text-align: center;"><a target="_blank" href="editaction.php?id='+data.action.id+'">'+data.action.id+'</a></td>';
         txt += '<td style="text-align: center;"><button title="Удалить" onClick="alert_delAction('+data.action.id+')" class="btn btn-mini btn-danger"><i class="icon-remove">&nbsp;</i></button></td>';
         txt += '<td style="text-align: center;"><button id="button_visible_action_'+data.action.id+'" onClick="changeChecked('+data.action.id+',\'visible_action\')" class="btn btn-mini"><i class="icon-eye-close">&nbsp;</i></button></td>';        
         txt += '<td style=""><div class="edit" id="name__'+data.action.id+'">'+data.action.name+'</div></td>';
         txt += '<td style=""><div class="edit" id="url__'+data.action.id+'">'+data.action.url+'</div></td>';
         txt += '<td style="text-align: center;"><div class="edit" id="order__'+data.action.id+'">0</div></td>';
         txt += '</tr>';
         $(txt).insertAfter('#tr_first');
         
         $('.edit').editable('/admin/ajax.php?task=edit_action',{
            indicator : 'Сохранение...',
            tooltip   : 'Кликните для редактирования...',
            cancel    : 'Отмена',
            submit    : 'OK',
            cssclass : 't1',
            width: 150,
            height: 25
          });
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при добавлении';
            alert(txt_err);
        }
    } 
  });   
}   

function addNews(){
var err = true; 
 $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "addNews"
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
     } 
    },
    complete: function(){
     if(err == true){
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false;         
        
        if(data.is_err == 0){                  
         //alert('ok' + data.page.id);
         var txt = '';
         txt += '<tr id="tr_'+data.news.id+'">';
         txt += '<td style="text-align: center;"><a target="_blank" href="editnews.php?id='+data.news.id+'">'+data.news.id+'</a></td>';
         txt += '<td style="text-align: center;"><button title="Удалить" onClick="alert_delNews('+data.news.id+')" class="btn btn-mini btn-danger"><i class="icon-remove">&nbsp;</i></button></td>';
         txt += '<td style="text-align: center;"><button id="button_visible_news_'+data.news.id+'" onClick="changeChecked('+data.news.id+',\'visible_news\')" class="btn btn-mini"><i class="icon-eye-close">&nbsp;</i></button></td>';        
         txt += '<td style=""><div class="edit" id="name__'+data.news.id+'">'+data.news.name+'</div></td>';
         txt += '<td style=""><div class="edit" id="url__'+data.news.id+'">'+data.news.url+'</div></td>';
         txt += '<td style="text-align: center;"><div class="edit" id="order__'+data.news.id+'">0</div></td>';
         txt += '</tr>';
         $(txt).insertAfter('#tr_first');
         
         $('.edit').editable('/admin/ajax.php?task=edit_news',{
            indicator : 'Сохранение...',
            tooltip   : 'Кликните для редактирования...',
            cancel    : 'Отмена',
            submit    : 'OK',
            cssclass : 't1',
            width: 150,
            height: 25
          });
        }
        else{
            var txt_err = (data.err)? data.err : 'Ошибка при добавлении';
            alert(txt_err);
        }
    } 
  });   
} 

function savePageText(id){
  var text = CKEDITOR.instances.text.getData();
   $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "edit_page_text",
      id: parseInt(id),
      text: text
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
     var txt1 = "Сохранение";
     //show_message(txt1,"<img src='/admin/images/ajax-loader.gif' />",false);
     $('#button_save').block({ 
                //message: '<h3>Wait...</h3>', 
                message: null,
                css: { border: '3px solid #a00' } 
            });
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    complete: function(){
     if(err == true){
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        //show_message("Завершение отправки заявки","Заявка на участие в конкурсе отправлена",true);
        if(data.is_err == 1){
         alert('Ошибка при сохранении текста');
        }
        else{
         alert('Данные сохранены');
        }
        $('#button_save').unblock();
        
        //return(data);
    } 
  });
 }
 
function saveActionText(id){
  var text = CKEDITOR.instances.text.getData();
   $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "edit_action_text",
      id: parseInt(id),
      text: text
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
     var txt1 = "Сохранение";
     //show_message(txt1,"<img src='/admin/images/ajax-loader.gif' />",false);
     $('#button_save').block({ 
                //message: '<h3>Wait...</h3>', 
                message: null,
                css: { border: '3px solid #a00' } 
            });
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    complete: function(){
     if(err == true){
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        //show_message("Завершение отправки заявки","Заявка на участие в конкурсе отправлена",true);
        if(data.is_err == 1){
         alert('Ошибка при сохранении текста');
        }
        else{
         alert('Данные сохранены');
        }
        $('#button_save').unblock();
        
        //return(data);
    } 
  });
 }    

function saveNewsText(id){
  var text = CKEDITOR.instances.text.getData();
   $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "edit_news_text",
      id: parseInt(id),
      text: text
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
     var txt1 = "Сохранение";
     //show_message(txt1,"<img src='/admin/images/ajax-loader.gif' />",false);
     $('#button_save').block({ 
                //message: '<h3>Wait...</h3>', 
                message: null,
                css: { border: '3px solid #a00' } 
            });
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    complete: function(){
     if(err == true){
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        //show_message("Завершение отправки заявки","Заявка на участие в конкурсе отправлена",true);
        if(data.is_err == 1){
         alert('Ошибка при сохранении текста');
        }
        else{
         alert('Данные сохранены');
        }
        $('#button_save').unblock();
        
        //return(data);
    } 
  });
 }
 
function saveCartridgeText(id){
  var text = CKEDITOR.instances.text.getData();
   $.ajax({
    url: '/admin/ajax.php',             // указываем URL и
    dataType: 'json',                     // тип загружаемых данных
    type: 'POST',
    data: {
      task: "edit_cartridge_text",
      id: parseInt(id),
      text: text
    },
    timeout: 10000,
    beforeSend: function(){
     //блок с гифкой
     var txt1 = "Сохранение";
     //show_message(txt1,"<img src='/admin/images/ajax-loader.gif' />",false);
     $('#button_save').block({ 
                //message: '<h3>Wait...</h3>', 
                message: null,
                css: { border: '3px solid #a00' } 
            });
    },
    ajaxError: function(){
     if(err == true){
      //блок с ошибкой
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    complete: function(){
     if(err == true){
      var txt2 = "Ошибка!";
      //show_message(txt2,txt2,true);
     } 
    },
    success: function (data) { // вешаем свой обработчик на функцию success
        err = false; 
        //show_message("Завершение отправки заявки","Заявка на участие в конкурсе отправлена",true);
        if(data.is_err == 1){
         alert('Ошибка при сохранении текста');
        }
        else{
         alert('Данные сохранены');
        }
        $('#button_save').unblock();
        
        //return(data);
    } 
  });
 }     


function translit(id_obj_text,id_obj){
// Символ, на который будут заменяться все спецсимволы
var space = '-'; 
// Берем значение из нужного поля и переводим в нижний регистр
var text = $('#'+id_obj_text).text();
text = text.toLowerCase();

// Массив для транслитерации
var transl = {
'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 
'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space, 'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya',
' ': space, '_': space, '`': space, '~': space, '!': space, '@': space,
'#': space, '$': space, '%': space, '^': space, '&': space, '*': space, 
'(': space, ')': space,'-': space, '\=': space, '+': space, '[': space, 
']': space, '\\': space, '|': space, '/': space,'.': space, ',': space,
'{': space, '}': space, '\'': space, '"': space, ';': space, ':': space,
'?': space, '<': space, '>': space, '№':space
}
                
var result = '';
var curent_sim = '';
                
for(i=0; i < text.length; i++) {
    // Если символ найден в массиве то меняем его
    if(transl[text[i]] != undefined) {
         if(curent_sim != transl[text[i]] || curent_sim != space){
             result += transl[text[i]];
             curent_sim = transl[text[i]];
                                                        }                                                                             
    }
    // Если нет, то оставляем так как есть
    else {
        result += text[i];
        curent_sim = text[i];
    }                              
}          
                
result = TrimStr(result);               
                
// Выводим результат
//alert(result);
$('#'+id_obj).text(result);
$('#'+id_obj).click();
return(result); 
    
}
function TrimStr(s) {
    s = s.replace(/^-/, '');
    return s.replace(/-$/, '');
}
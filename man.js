

$.fn.simpleEdit = function(options) {
    
    // Save Text
    var textcontainer = this;
    var textcontent   = this.text();
    var textarea      = $("<div class='textarea'/>");

    // Options
    options = $.extend({
        defaultText: textcontent
    }, options);
    
    // Initiate
    textcontainer.text("").addClass("texteditor");
    textcontainer.append(textarea);
    textarea.attr({contenteditable: 'true', designmode: 'on'}).text(options.defaultText);
    
    //  Buttons
  
    
	
    
	textcontainer.prepend("<button class='girinti'></button>");
	textcontainer.prepend("<button class='girinti2'></button>");
	
	textcontainer.prepend("<button class='sag'></button>");
	textcontainer.prepend("<button class='ortala'></button>");
	textcontainer.prepend("<button class='sol'></button>");
	textcontainer.prepend("<button class='sirali_list'></button>");
	textcontainer.prepend("<button class='list'></button>");
	textcontainer.prepend("<button class='underline'></button>");
	textcontainer.prepend("<button class='italic'></button>");
	textcontainer.prepend("<button class='bold'></button>");    
	 
	
	// Button Handlers
  $(".bold").live("click", function(){
		document.execCommand('bold', false, null);
	});
	
	
	
  $(".italic").live("click", function(){
		document.execCommand('italic', false, null);
	});	
	
	$(".list").live("click", function(){
		document.execCommand('insertunorderedlist', false, null);
	});
	
	$(".sirali_list").live("click", function(){
		document.execCommand('insertOrderedList', false, null);
	});
	
	 $(".underline").live("click", function(){
		document.execCommand('underline', false, null);
	});
	

	$(".ortala").live("click", function(){
		document.execCommand('justifyCenter', false, null);
	});
	
	
	 $(".sol").live("click", function(){
		document.execCommand('justifyLeft', false, null);
	}); 
	
	$(".sag").live("click", function(){
		document.execCommand('justifyRight', false, null);
	});	
	
	$(".girinti").live("click", function(){
		document.execCommand('outdent', false, null);
	});
	$(".girinti2").live("click", function(){
		document.execCommand('indent', false, null);
	});
	
	
};//main

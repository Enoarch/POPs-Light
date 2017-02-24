/* Jquery Add On - Copyright : Thomas RENAUD */

(function($)
{
    $.fn.myPOP=function(options)
    {
    	var basicOptions=
    	{
    		"eventObj":$(".launcher"),
    		"title":"",
    		"width":"600px",
    		"height":"800px",
    		"color1":"white",
        "color2":"blue"
    	};
    	var myParameters=$.extend(basicOptions, options)
     	var pop ;
      this.each(function()/*pour chaque liste des elt */
       {	
       		pop = $(this);
       		pop.hide();//Nous la cachons au début
       		myParameters.eventObj.addClass('popLauncher');
       		pop.addClass('myPopupBlibioLight ');
          pop.css("background-color",myParameters.color1);
       		pop.html("<h3 class='titre' style='background-color:"+myParameters.color2+";color:"+ myParameters.color1+";'>"+myParameters.title+"</h3>" +pop.html());
       		pop.draggable().append( "<div class='close'>X</div>" ).css('width',myParameters.width).css('height',myParameters.height).css('margin-left',-pop.width()/2).css('margin-top',-pop.height()/2);
       		pop.children(".close" ).css('color',myParameters.color1);
          pop.mouseover(function(){
				    $('.myPopupBlibioLight').css('z-index',1); //indexage Popup
				    $(this).css('z-index',5);
			     });
		      pop.children(".close" ).click(function(){
				    $(this).parent().hide();
	        });
          pop.children(".close" ).hover(function(){
            $(this).css('color','#C8FE2E');},
            function() {$(this).css('color',myParameters.color1);
          });
			    myParameters.eventObj.click(function(){
				    $('myPopupBlibioLight').css('z-index',1);
            pop.css('z-index',6);
            pop.show();
			   });
		});
    return this;//Bonne pratique pour pouvoir enchainer plusieurs fct apres celle là
    };
})(jQuery);
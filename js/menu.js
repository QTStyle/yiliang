/**
 * 
 */
 $(document).ready(function(){
    $("nav img").hover(function(){
    	var temp=$(this).attr("src");
    	$(this).attr("src",$(this).attr("alt"));
    	$(this).attr("alt",temp);
    })
    
    $("#g ul,#g li,#g").addClass("list-unstyled");
    
    });
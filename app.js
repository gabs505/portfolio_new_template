ScrollOut({
  targets: 'h1,h2,p,div.skill, div.tool, div.gear, div.line, div.project-image,div.profile-photo, div.contact-me'
})

var scroll = new SmoothScroll('a[href*="#"]');

$(".shape-1").bind("animationend", function(){
    $(this).removeClass("shape-animation")  
  })
$(".shape-3").bind("animationend", function(){
    $(this).removeClass("shape-animation")  
  })
$(".shape-2").bind("animationend", function(){
    $(this).removeClass("shape2-animation")  
  })

$(".shape-1").hover(function(){
    $(this).addClass("shape-animation");        
  })
$(".shape-3").hover(function(){
    $(this).addClass("shape-animation");        
  })
$(".shape-2").hover(function(){
    $(this).addClass("shape2-animation");        
  })




    


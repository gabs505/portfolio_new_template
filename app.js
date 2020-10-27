ScrollOut({
  targets: 'h1,h2,p,div.skill, div.tool, div.gear, div.line, div.project-image,div.profile-photo, div.contact-me, p.welcome-paragraph'
})

var scroll = new SmoothScroll('a[href*="#"]');

// Burger menu
const burger=$(".burger-menu");
const nav=$(".nav");
const navWrapper=$(".nav-wrapper")
const navItem=$(".nav-item")
const navItemLink=$(".nav-item a")

const clickHandler=()=>{

  navWrapper.toggleClass('active');
  burger.toggleClass('burger--active');
  
  
  
}

burger.click(clickHandler);

navItemLink.click(function(){
  if(burger.hasClass('burger--active')){
    clickHandler();
  }
}
)

//Detecting current section and highlighting it in nav

const homeOffset=$(".main-section").offset()["top"]-100;
console.log(homeOffset);
const skillsOffset=$(".skills-section").offset()["top"]-100;
const projectsOffset=$(".projects-section").offset()["top"]-100;
const aboutMeOffset=$(".about-me-section").offset()["top"]-100;
const contactOffset=$(".contact-section").offset()["top"]-100;
//nav items
const homeNav=$(".item-1");
const skillsNav=$(".item-2");
const projectsNav=$(".item-3");
const aboutMeNav=$(".item-4");
const contactNav=$(".item-5");

homeNav.addClass("highlited")

const navList=document.querySelectorAll(".nav-wrapper ul li")
// const navAnchorsList=document.querySelectorAll(".nav-wrapper ul li a");
// for(let i=0;i<navAnchorsList.length;i++){
//   navAnchorsList[i].addEventListener("click",(e)=>{
//     e.target.parentElement.classList.add("highlited")
//   })
  
// }

$(window).scroll(function (event) {
  const scroll = $(window).scrollTop();
  
  for(let i=0;i<navList.length;i++){
    navList[i].classList.remove("highlited");
    
  }
    
  
  if(scroll<skillsOffset){
    
    homeNav.addClass("highlited")
  }
  else if(scroll>=skillsOffset && scroll<projectsOffset){
    
    skillsNav.addClass("highlited")
  }
  else if(scroll>=projectsOffset && scroll<aboutMeOffset){
    
    projectsNav.addClass("highlited")
  }
  else if(scroll>=aboutMeOffset && scroll<contactOffset){
    
    aboutMeNav.addClass("highlited")
  }
  else if(scroll>=contactOffset){
    
    contactNav.addClass("highlited")
  }
});
  





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




    


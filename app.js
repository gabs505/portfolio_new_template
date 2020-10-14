
const projectCards=document.getElementsByClassName("project");
let projectClass;
let lastMouseOverEvent=false;


const animationListener=(event)=>{
    
    console.log(event.target)
        if(event.target.tagName.toLowerCase()=="div"){
            let paragraph=event.target.getElementsByTagName('p')[0]
            let button=event.target.getElementsByTagName('button')[0];
            paragraph.classList.replace("hidden", "animated")
            
            button.classList.replace("hidden", "animated-button")
            
            
        }
        
        
        
}

const deleteAnimationListener=(event)=>{
    
        let paragraph=event.target.getElementsByTagName('p')[0]
        let button=event.target.getElementsByTagName('button')[0]
        
        paragraph.classList.replace("animated","hidden" )
        button.classList.replace("animated-button","hidden" ) 
        

        
    
 }
console.log(projectCards.length)
for(let i=0;i<projectCards.length;i++){
    projectCards[i].addEventListener("mouseover",(event)=>{animationListener(event);});
    projectCards[i].addEventListener("mouseleave",(event)=>deleteAnimationListener(event));

}



    


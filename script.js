const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function landinganim(){  
    gsap.from("#page1 h1",{
        y:30,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.2
        
    })
    gsap.from("#page1 #video-container",{
        y:90,
        opacity:0,
        delay:0.7,
        duration:0.5,
        stagger:0.2
        
    })
    
}
landinganim();


function videoanim(){
    let bgvideo =document.querySelector("#video-container")
    let playbtn =document.querySelector("#play")

bgvideo.addEventListener("mouseenter",function(){

    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})


bgvideo.addEventListener("mouseleave",function(){

    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
bgvideo.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-80,
        top:dets.y-70
    })
})
}
videoanim()






document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})
document.querySelector("#child6").addEventListener("mouseenter",function(){
     gsap.to("#cursor",{
     backgroundColor:"#B4D5B6",
     transform:'translate(-50%,-50%)scale(1)'
     })
 })

 document.querySelector("#child6").addEventListener("mouseleave",function(){
     gsap.to("#cursor",{
        backgroundColor:"lightgray",
         transform:'translate(-50%,-50%)scale(0)'
     })
 })



 document.querySelectorAll("#child3,#child4,#child5").forEach(function(elem){ 
        elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            Transform:'translate(-50%,-50%)scale(1)',
        })
      }); 
    }); 

    document.querySelectorAll("#child3,#child4,#child5").forEach(function(elem){ 
        elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            Transform:'translate(-50%,-50%)scale(0)',
        })
      }); 
    }); 

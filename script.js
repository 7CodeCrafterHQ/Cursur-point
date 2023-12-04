document.addEventListener("mousemove", e=>{
    let x = document.querySelector(".mouse").offsetWidth;
    let y = document.querySelector(".mouse").offsetHeight;

    let cursorX = document.querySelector(".cursor").offsetWidth;
    let cursorY = document.querySelector(".cursor").offsetHeight;
    
    gsap.to(".cursor",{
        left:`${e.pageX - cursorX/2}px`,
        top:`${e.pageY - cursorY/2}px`
    });
    
    // document.querySelector(".cursor").style.transform = `translate(${e.pageX - cursorX/2}px,${e.pageY - cursorY/2}px)`;

    if(e.movementX>0){
        gsap.to(".mouse",{
            left:`${e.pageX - x/2}px`,
            top:`${e.pageY - y/2}px`,
            rotate:10
        });
        // document.querySelector(".mouse").style.transform = `translate(${e.pageX - x/2}px,${e.pageY - y/2}px) rotate(${20}deg)`;
    }else{
        gsap.to(".mouse",{
            left:`${e.pageX - x/2}px`,
            top:`${e.pageY - y/2}px`,
            rotate:-10
        });
        // document.querySelector(".mouse").style.transform = `translate(${e.pageX - x/2}px,${e.pageY - y/2}px) rotate(${-20}deg)`;
    }

    document.querySelectorAll(".div").forEach(elem=>{
        elem.addEventListener("mouseenter",()=>{
            document.querySelector(".mouse").style.backgroundImage = `url(${elem.getAttribute("data-img")})`
        })
    })
})
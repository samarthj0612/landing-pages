var tl = gsap.timeline();


tl.to("#coverup h1:nth-child(1)", {
    delay : 5,
    opacity : 0
})
.to("#coverup", {
    y : "-100%",
    duration : 1.2,
    ease : "power2.in"
})

document.querySelectorAll("#coverup #countdown h1").forEach(function(elem, i){

    setTimeout(() => {
        $(elem).textillate({
            in : {
                effect : "fadeInUp",
            },
            out : {
                effect : "fadeOutUp",
            }
        });
        elem.style.opacity = "1";
      }, i * 1000);


})
gsap.to("#coverup #countdown h1", {
    delay : 1,
    duration : 0.5,
    opacity : 0,
    stagger : 1
})




window.addEventListener("mousemove", function(dets){
    function cur(){
        document.querySelector("#cursor").style.top = `${dets.clientY}px`;
    document.querySelector("#cursor").style.left = `${dets.clientX}px`;
    }
    this.window.requestAnimationFrame(cur);
})

document.querySelector("#content #img").addEventListener("mousemove", function(dets){
    document.querySelector("#cursor").style.display = "initial";
})
document.querySelector("#content #img").addEventListener("mouseleave", function(dets){
    document.querySelector("#cursor").style.display = "none";
})


// $('#main #content h1').textillate({minDisplayTime:1000, initialDelay: 1000, in: { effect: 'fadeInUp', delay:50} });
$('#main #content h1').textillate({initialDelay: 3500,in: { effect: 'fadeInUp', delayScale:1} });

gsap.from("#nav", {
    delay : 7,
    opacity : 0,
    y : -30
})
gsap.from("#content #img div", {
    delay : 7,
    y : "100%"
})
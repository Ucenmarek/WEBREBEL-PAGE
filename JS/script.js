

(function($) {

    // premenné
    var mainMenu = $(".mainmenu"),
        toogleA = $(".toogle a"),
        toogle = $(".toogle "),
        close = $(".close svg")
    mainMenu.hide();
    console.log(toogle);

    // Zobrazenie menu
    toogleA.on("click",function (event) {
        mainMenu.removeClass("animate__fadeOutUp , animate__fadeInDown , animate__slow");
        mainMenu.fadeIn(1000).addClass("animate__fadeInDown , animate__slow");
        toogle.fadeOut(500);
        event.preventDefault();
        
     });

     //Skrytie menu
     close.on("click",menuOut);

     function menuOut() {
         mainMenu.removeClass("animate__fadeOutUp , animate__fadeInDown , animate__slow")
         mainMenu.fadeOut(1000).addClass("animate__fadeOutUp , animate__slow");
         toogle.fadeIn(500);
     }

     //***Skrollovanie */

     var mainMenuLink = $(".mainmenu_list"),
         menuLinks =mainMenuLink.find("a");
         console.log(menuLinks)

         menuLinks.on("click",function(event){
             console.log(this)
             console.log($(this.hash))
             $("html,body").animate({scrollTop:$(this.hash).offset().top},2000);
            event.preventDefault();
            menuOut();
         })

    

        //  ********video slider animacie *******//
        //  var overlay = $("#overlay"),
        //      sliderImage =$(".slider-image");

        //      sliderImage.find("a").on("click",function(event){
        //          console.log($(this).attr("href"))
        //         event.preventDefault()
        //      })

        //  console.log(overlay)
    //  *********Pridanie  clasu animacie po zoskroloani**************
    // var win = $(window),
    //     boxImageMain = $(".box-image_main"),
    //     boxImageSide = $(".box-image_side");
    //     boxImageMain.hide();
    //     boxImageSide.hide();
    // win.on("scroll", function () {
    //     if (win.scrollTop() >= 800){
    //         boxImageMain.fadeIn(100).addClass(" animate__fadeInLeft animate__slower animate_delay-2s");
    //         boxImageSide.fadeIn(1000).addClass("animate__fadeInRight animate__slower animate_delay-2s")
    //     }

    //     console.log(win.scrollTop());


        
    // })

// ***************Slider*****************

    //  var rightNext = $(".next"),
    //      leftPrev = $(".prev"),
    //      firstSlide = $(".slide").first(),
    //      lastSlide = $(".slide").last();

    //      rightNext.on("click",function () {
    //         var currentSlide = $(".slider .active"),
    //              nextSlide = currentSlide.next(),
                
    //              leftPrev = $(".prev");

    //          leftPrev.removeClass("show_hidden").addClass("hidden");
    //          currentSlide.fadeOut().removeClass("active");
    //          nextSlide.fadeIn(1000,function () {
    //              var  leftPrev = $(".prev");
    //              leftPrev.addClass("show_hidden");

                 
    //          }).addClass("active animate__fadeInLeft");
               
             
                   
    //          console.log(nextSlide.length);
    //          if (nextSlide.length == 0) {
    //              firstSlide.fadeIn(1000, function () {
    //                  var leftPrev = $(".prev");
    //                  leftPrev.addClass("show_hidden");


    //              }).addClass("active animate__fadeInLeft"); 
                 
                 
    //          }                       
    //      });

    //      leftPrev.on("click",function(){
    //          var currentSlide = $(".slider .active"),
    //              prevSlide = currentSlide.prev(),
    //              rightNext = $(".next");


    //              rightNext.removeClass("show_hidden").addClass("hidden");
    //              currentSlide.fadeOut().removeClass("active");
    //               prevSlide.fadeIn(1000,function () {
    //              var rightNext = $(".next");
    //                 rightNext.addClass("show_hidden");
                 
    //          }).addClass("active animate__fadeInRight");


    //              if(prevSlide.length == 0){
    //                  lastSlide.fadeIn(1000,function () {
    //                      rightNext.addClass("show_hidden");
    //                  }).addClass("active animate__fadeInRight");
    //              }
    //      });

}) (jQuery);

// ***************about and skills************
const overlaySkills = document.getElementById("overlay_skills")
const skills = document.querySelector("#skills")
const closeSkills = document.querySelector(".close_skills")
skills.addEventListener("click",()=>{
  overlaySkills.style.display="block"
})
closeSkills.addEventListener("click",()=>overlaySkills.style.display="none")

const overlayAbout = document.getElementById("overlay_about")
const oMne = document.querySelector("#omne")
const closeAbout = document.querySelector(".close_about")
oMne.addEventListener("click",()=>{
  overlayAbout.style.display="block"
})
closeAbout.addEventListener("click",()=>overlayAbout.style.display="none")

//Slider new
const sliderImage = document.querySelector(".slider-image")
const image = document.querySelector(".image")
const picture = document.querySelector(".picture")
const slide = document.querySelector(".slide")
const slideLenght = sliderImage.querySelectorAll(".slide").length
const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")
let activeNumber = 0

arrowRight.addEventListener("click",function(){
    
    changeSlide("right")
})
arrowLeft.addEventListener("click",function(){
    changeSlide("left")
})

function changeSlide(direction){
    if(direction=="right"){
        activeNumber++
        if(activeNumber > slideLenght - 1){
            activeNumber = 0
        }
        

    }
    else{
        activeNumber--
        if(activeNumber < 0){
            activeNumber = slideLenght - 1
        }
    }

sliderImage.style.transform =`translateX(-${activeNumber * picture.width}px)`
console.log(activeNumber)
console.log(slide.offsetWidth)
}

//*********Overlay pri videu bez scrool body */

let playVideo = document.querySelectorAll(".image_link")
let closeVideo = document.querySelector(".close_video")
let videoCenter = document.querySelector(".video-center")
console.log(playVideo)
playVideo.forEach(item =>item.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log(overlay)
    let href =item.href
    let hrefR =href.replace("watch","embed")
    console.log(hrefR)
    videoCenter.innerHTML = `
                        <iframe width="640" height="360" src="https://www.youtube.com/embed?v=5mgrioodze8&t" title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                
    
    `
    showOwerlay()
    
    // var attribute = this.parentElement.getAttribute("data-page-number")
    // window.onload = ()=>console.log(item.parent.getAttribue("src"))
     
     console.log(href)
    //  showOwerlay()
})) 

closeVideo.addEventListener("click",closeOverlay)



const showOwerlay= () => {
  document.getElementById('overlay').classList.add('show')
  const body = document.body;
  body.style.height = '100vh';
  body.style.width = '100vw'
  body.style.overflow = 'hidden';
};
  function closeOverlay(){
  const body = document.body;
 
  body.style.position = '';
  body.style.width= '';
  body.style.height = '';
  body.style.overflow = '';

  document.getElementById('overlay').classList.remove('show');
}

//**********mail content *******/
let mail = document.querySelector(".mail")
console.log(mail.textContent)
mail.addEventListener("mouseenter",()=> mail.textContent="napíš mi mail")
// mail.addEventListener("mouseleave",()=> mail.textContent="ucenmarek@gmail.com")     

// ***********snow effect******
const mode = document.querySelector(".mode")
const snowFlakes = document.querySelector(".snowflakes")
const showSnowFlake = document.querySelector(".showsnowflake")
mode.addEventListener("click",()=>{
    snowFlakes.classList.toggle("showsnowflake")
    console.log(mode.textContent)
    if(mode.textContent==="yablko&vaso mode"){
       mode.textContent="stop yablko&vaso mode" 
    }
    else mode.textContent="yablko&vaso mode"
    
})


// Incializacia AOS****************
AOS.init({
    duration: 3000,
})
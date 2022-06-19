let colormain = localStorage.getItem("color-option");

if (colormain !== null) {
    document.documentElement.style.setProperty("--main-color", colormain);
    document.querySelectorAll(".color-list li").forEach(ele => {
        
        ele.classList.remove("active");

        if (ele.dataset.color === colormain) {
            
            ele.classList.add("active")
        }
    })
}
// switch Coloers  
const colorsli = document.querySelectorAll(".color-list li");

colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        
     document.documentElement.style.setProperty("--main-color", e.target.dataset.color) 
     
        localStorage.setItem("color-option", e.target.dataset.color);

        handleActive(e);
    })
     
})

let backgroundoption = true;
// variable to control the interval
let backgroundInterval;
// function to randomize image

let mainrandimback = localStorage.getItem("background_option");

if (mainrandimback !== null) {
    
    if (mainrandimback === 'true') {
       
        backgroundoption = true;
    } else {
       
        backgroundoption = false;
    }
    
    document.querySelectorAll(".random-backgrounds span").forEach(span => {
        
        span.classList.remove("active");
       
        if (mainrandimback === "true") {
            document.querySelector(".random-backgrounds .yes").classList.add("active")
        } else {
            document.querySelector(".random-backgrounds .no").classList.add("active")
        }       
            // target.classList.add("active");
    })
}

function randomizeimgs() {
    if (backgroundoption === true) {
        
      backgroundInterval =  setInterval(function () {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgArray.length);
            // Change Background Image Url 
            landingPage.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")';
            landingPage.style.backgroundPosition = "center";
            landingPage.style.backgroundSize = "cover";
        }, 1000)
    }
}
randomizeimgs();
// switch Random background Option  
const randomBackEL = document.querySelectorAll(".random-backgrounds span");

randomBackEL.forEach(span => {
    span.addEventListener("click", (e) => {

          handleActive(e);

        if (e.target.dataset.background === "yes") {
            backgroundoption = true;
            randomizeimgs();
            localStorage.setItem("background_option" ,true )

        } else {
            backgroundoption = false;
            clearInterval(backgroundInterval);
            
            localStorage.setItem("background_option", false)
        }    
    })
})

// Toggle Spin Class On Icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
    //Toggle  Class Fa-gear For Rotation on aelf
    this.classList.toggle("fa-spin");  

    // Toggle  Class Open On Main Setting Box
    document.querySelector(".setting-box").classList.toggle("open");
}; 


//Select Landing Page Element
    let landingPage = document.querySelector(".landing-page")
// Get Array of Img
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]


//   Sellect Skill Selector
let ourskills = document.querySelector(".skill");

window.onscroll = function () {
   
    // skills offset Top
    let skilloffsettop = ourskills.offsetTop;

    // skills outer hight
    let skillouterhight = ourskills.offsetHeight;
    
    // window hight
    let windowheight = this.innerHeight;
      
    // window Scrool top
    let windowScrollTop = this.pageYOffset;
    
     
    if (windowScrollTop > (skilloffsettop + skillouterhight - windowheight) ){
        
        let allskill = document.querySelectorAll(".skill-box .skill-progress span");
        
        allskill.forEach(skill => {
            
            skill.style.width = skill.dataset.progress;
        });
    }
}
// create pop with Image
let ourGallary = document.querySelectorAll(".image-box img");
        
ourGallary.forEach(img => {
                
    img.addEventListener("click", (e) => {
                
        //   create over-lay
        let overlay = document.createElement("div");
                
        // Add class to over-lay
        overlay.className = "over-lay";
                
        // Add over-lay to body
        document.body.appendChild(overlay);

        let popupbox = document.createElement("div");

        popupbox.className = "popup-box";

        if (img.alt !== null) {
            let imageHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imageHeading.appendChild(imgText);

            popupbox.appendChild(imageHeading);
        }

        let popimage = document.createElement("img");
               
        popimage.src = img.src;

        popupbox.appendChild(popimage);

        document.body.appendChild(popupbox);

        // creat button close 
        let closeButton = document.createElement("span");
                
        closeButton.className = "close-button"

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        popupbox.appendChild(closeButton)

        document.addEventListener("click", (e) => {
            if (e.target.className === "close-button") {
                        
                //Remove The Currenty popup
                e.target.parentElement.remove();

                // Remove overlay
                document.querySelector(".over-lay").remove();
            };
        });
    });
});


// Select All Bullets
let allBullets = document.querySelectorAll(".nav-Bullets .Bullet");

let alllinks = document.querySelectorAll(".links a");

function Scroolsomewhere(element) {
    
         element.forEach(e => {
        
           e.addEventListener("click", (e) => {
       
            e.preventDefault();
        
            document.querySelector(e.target.dataset.section).scrollIntoView({
              
                behavior: 'smooth'
            })
        })
    })
};
Scroolsomewhere(allBullets);
Scroolsomewhere(alllinks);

function handleActive(ev) {
    
      ev.target.parentElement.querySelectorAll(".active").forEach(e => {

            e.classList.remove("active");
        })

        ev.target.classList.add("active"); 
};

let BulletsSpan = document.querySelectorAll(".Bullets-option span");

Bulletcontainer = document.querySelector(".nav-Bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

        BulletsSpan.forEach(span => {
            
          span.classList.remove("active");
    })
        
    if (bulletLocalItem === 'block') {
            
        document.querySelector(".Bullets-option .yes").classList.add("active")

        Bulletcontainer.style.display = bulletLocalItem ;
    
    } else {
        
        Bulletcontainer.style.display = bulletLocalItem;
        document.querySelector(".Bullets-option .no").classList.add("active")
    }
};
         
    BulletsSpan.forEach(span => {

        span.addEventListener("click", (e) => {

            if (span.dataset.display === "Show") {
                
                Bulletcontainer.style.display = "block";
                
                localStorage.setItem("bullets_option", 'block')
            
            } else {
                
                Bulletcontainer.style.display = "none";

                localStorage.setItem("bullets_option", 'none')
            }

            handleActive(e);
        });
    });

// Reset Button

document.querySelector(".reset-option").onclick = function () {

    localStorage.clear();
    
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("color-option");
    localStorage.removeItem("background_option");

    // Relaod window
    window.location.reload();
};

// Toggle Menu

let toggleBtn = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");


toggleBtn.addEventListener ("click" , () => {
   
    //  Toggle class = "menu-active" on Buttton
  toggleBtn.classList.toggle("menu-active");
   
  //  Toggle class = "open" on Links
  links.classList.toggle("open");
   
})

// Click anywhere Outside Menu Toggle Button
 document.addEventListener("click" , (e) => {
   
    if(e.target !== toggleBtn && e.target !== links){

        if (links.classList.contains("open")){
            
            links.classList.toggle("open");
           
            toggleBtn.classList.toggle("menu-active");
        };
        
    };
 });
 
 //  StopPropagation
 toggleBtn.onclick = function(e) {
    e.stopPropagation();
};
 
//  StopPropagation
 links.onclick = function(e) {
    e.stopPropagation();
};

    
 

 
















// script file

// home section starts

var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuBtn = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('.active');
    menuList.classList.toggle('.active');
});

for(var i = 0; i < menuListItems.length; 1++){
    menuListItems[i].addEventListener('click', menuListItemClicked);
}

function menuListItemClicked(){
    menuBtn.classList.remove('active');
    menuBtn.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
    if (window.scrollY > 120){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}

// partner section start here
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:2,
    nav:true,
    navText: ["<i class= 'fa-solid fa-arrow-left'></i>",
              "<i class= 'fa-solid fa-arrow-right'></i>"
            ],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// section partner end here
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText: ["<i class= 'fa-solid fa-arrow-left'></i>",
              "<i class= 'fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// Start of testimonial section

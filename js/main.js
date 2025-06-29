

// // Age Verification Sidebar
//   document.addEventListener('DOMContentLoaded', function() {
//     if (!localStorage.getItem('cigior_age_verified')) {
//       document.getElementById('ageSidebar').style.display = 'flex';
//     }
//     document.getElementById('ageYes').onclick = function() {
//       localStorage.setItem('cigior_age_verified', 'true');
//       document.getElementById('ageSidebar').style.display = 'none';
//     };
//     document.getElementById('ageNo').onclick = function() {
//       window.location.href = "https://www.google.com";
//     };
// });



(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


// Contact Form Submission using Formspree
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    var form = this;
    var data = new FormData(form);
    fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            document.getElementById('formResult').innerHTML = '<div class="alert alert-success">Thank you! Your message has been sent.</div>';
            form.reset();
        } else {
            response.json().then(data => {
                document.getElementById('formResult').innerHTML = '<div class="alert alert-danger">' + (data.errors ? data.errors.map(e=>e.message).join("<br>") : 'There was an error sending your message.') + '</div>';
            });
        }
    }).catch(() => {
        document.getElementById('formResult').innerHTML = '<div class="alert alert-danger">Network error. Please try again.</div>';
    });
});
 "use strict";
 /*-----------------------------------
  Quick Mobile Detection
  -----------------------------------*/

 var isMobile = {
     Android: function() {

         return navigator.userAgent.match(/Android/i);
     },
     BlackBerry: function() {

         return navigator.userAgent.match(/BlackBerry/i);
     },
     iOS: function() {

         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
     },
     Opera: function() {

         return navigator.userAgent.match(/Opera Mini/i);
     },
     Windows: function() {

         return navigator.userAgent.match(/IEMobile/i);
     },
     any: function() {

         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
     }
 };



 //=================================== Sticky nav ===================================//
 $(".nav-wrapper").sticky({
     topSpacing: 0
 });

 //=================================== Hover Efects =====================================//
 $('.item-service, .feature-element li').hover(function() {
     $(this).toggleClass('animated pulse');
 });




 /*-----------------------------------
 REVOLUTION Slider + Shop tabs +
 -----------------------------------*/




 $(document).ready(function() {





     $('.revolution-slider').revolution({
         dottedOverlay: "none",
         delay: 6000,
         startwidth: 1170,
         //startheight:windowsHeight,
         startheight: 740,
         onHoverStop: "on",
         hideThumbs: 0,
         fullWidth: "on",
         fullScreen: 'off',
         forceFullWidth: "off",
         navigationType: "none",
         shadow: 0,
         spinner: "spinner4",
         hideTimerBar: "on"

     });


     $('.view-switcher ul li').on('click', function(e) {
         if ($(this).hasClass('listview')) {
             $('.listing-main').removeClass('gridview').addClass('listview');
         } else if ($(this).hasClass('gridview')) {
             $('.listing-main').removeClass('listview').addClass('gridview');
         }
     });
     $('.view-switcher ul li').on('click', function(e) {
         if ($(this).hasClass('listview')) {
             $('.view-switcher ul li.gridview').removeClass('active');
             $('.view-switcher ul li.listview').addClass('active');
         } else if ($(this).hasClass('gridview')) {
             $('.view-switcher ul li.listview').removeClass('active');
             $('.view-switcher ul li.gridview').addClass('active');
         }
     });


     new WOW().init();

 });

 $(window).scroll(function() {
     var st = $(this).scrollTop();
     $('.no-touch #inner-page-header .header-content').css({
         'opacity': (1 - st / 350),
         'transform': 'translateY(' + st / 3 + 'px)'
     });
 });


 $(".detail-view").click(function() {
     alert("hello");
     $(this).parents().eq(4).find(".detail").toggleClass("show");
 });
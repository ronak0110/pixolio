// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

 $(document).ready(function () {  
  var top = $('#navigationbar1').offset().top - parseFloat($('#navigationbar1').css('marginTop').replace(/auto/, 100));
  
  $(window).scroll(function (event) {
  	
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#navigationbar1').addClass('navbar-fixed-top');
    } else {
      // otherwise remove it
      $('#navigationbar1').removeClass('navbar-fixed-top');
    }
  });
 });


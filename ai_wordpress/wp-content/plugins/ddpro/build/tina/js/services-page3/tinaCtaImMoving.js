!function(t){var i=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(i=5e3),t("body").hasClass("et-fb")&&(i=1e4),setTimeout(function(){if(0!==t(".tina_cta_im_moving").length){var i=t(".tina_cta_im_moving .bg_text_row .et_pb_text").height(),o=t(".tina_cta_im_moving").outerHeight();t(window).scroll(function(){if(t(".tina_cta_im_moving").offset().top<t(window).scrollTop()+t(window).height()&&t(".tina_cta_im_moving").offset().top+t(".tina_cta_im_moving").outerHeight()>t(window).scrollTop()){var n=(i-o)/(t(window).height()+o)*(t(window).scrollTop()+t(window).height()-t(".tina_cta_im_moving").offset().top);t(".tina_cta_im_moving .bg_text_row .et_pb_text").css("transform","translate(0,-"+n+"px)")}})}},i)}(jQuery);
!function(t){var _=0;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(_=5e3),t("body").hasClass("et-fb")&&(_=1e4),setTimeout(function(){if(0!==t(".tina_your_kiss_optin").length){t(".tina_your_kiss_optin  .et_pb_newsletter_form p input#et_pb_signup_lastname").parent("p").addClass("first_name"),t(".tina_your_kiss_optin  .et_pb_newsletter_form p input#et_pb_signup_firstname").parent("p").addClass("first_name"),t(".tina_your_kiss_optin  .et_pb_newsletter_form p input#et_pb_signup_email").parent("p").addClass("email"),t(".tina_your_kiss_optin .et_pb_newsletter_button_wrap .et_pb_newsletter_button ").each(function(){t('<div class="button_arrow_icon"><div class="arrow"></div></div>').appendTo(t(this))}),t(".tina_your_kiss_optin .et_pb_newsletter p.email").prepend('<div class="blur_bg"></div>'),t(".tina_your_kiss_optin .et_pb_newsletter p.first_name").prepend('<div class="blur_bg"></div>');var _=t(".tina_your_kiss_optin").css("background-image");t(".tina_your_kiss_optin").css("background-size");if(_){var i=t(".tina_your_kiss_optin").width()+1,e=t(".tina_your_kiss_optin").outerHeight()+1;t(".tina_your_kiss_optin .et_pb_newsletter p").each(function(s){t(this).offset({left:s.pageX,top:s.pageY}),t(".tina_your_kiss_optin").offset({top:s.pageY});var n=t(this).offset().top-t(".tina_your_kiss_optin").offset().top;t(this).find(".blur_bg").css("cssText","background-image: "+_+"; top: -"+n+"px; left: -"+t(this).offset().left+"px; width: "+i+"px; height: "+e+"px;")})}var s=t(".tina_your_kiss_optin p.et_pb_newsletter_field:not(.et_pb_signup_custom_field)").length;s>1&&(t(".tina_your_kiss_optin .et_pb_newsletter_form form").addClass("form_fields_count"),t(".tina_your_kiss_optin p.et_pb_newsletter_field:not(.et_pb_signup_custom_field)").addClass("form_field fields_count_"+s))}},_)}(jQuery);
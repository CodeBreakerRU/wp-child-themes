!function(t){var e=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=1e4),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(0!==t(".ragnar_content_sten").length){var e=t(window).scrollTop(),n=t("body:not(.et-fb) .ragnar_content_sten").offset().top;t("body:not(.et-fb) .ragnar_content_sten .fixed_text").css("transform","translate(0,"+(e-n)+"px)"),t(window).scroll(function(){var e=t(window).scrollTop(),n=t("body:not(.et-fb) .ragnar_content_sten").offset().top;t("body:not(.et-fb) .ragnar_content_sten .fixed_text").css("transform","translate(0,"+(e-n)+"px)")});new SplitText(t(".ragnar_content_sten .et_pb_blurb .et_pb_module_header span"),{type:"words",wordsClass:"word",position:"reletive"});t(".ragnar_content_sten .et_pb_blurb .et_pb_module_header span").each(function(){if(t(window).scrollTop()>t(this).offset().top-t(window).height()/1.25){t(this).addClass("visible");this.t1Torriate=new TimelineLite;var e=t(this).find(".word").toArray();this.t1Torriate.staggerTo(e,.2,{scaleY:"1",ease:Power0.easeNone},.01)}}),t(window).scroll(function(){t(".ragnar_content_sten .et_pb_blurb .et_pb_module_header span").each(function(){if(t(window).scrollTop()>t(this).offset().top-t(window).height()/1.25){t(this).addClass("visible");this.t1Torriate=new TimelineLite;var e=t(this).find(".word").toArray();this.t1Torriate.staggerTo(e,.2,{scaleY:"1",ease:Power0.easeNone},.01)}})})}},e)}(jQuery);
!function(e){var a=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(a=5e3),e("body").hasClass("et-fb")&&(a=1e4),setTimeout(function(){0!==e(".grace_alterf_header_v2").length&&(e(".grace_alterf_header_v2 ").each(function(){e(this).prepend(e("<div class='images_wrap' style='background-image: "+e(this).css("background-image")+"'></div>")),e(this).css("background-image","none");var a=e(this);e(this).find(".buttons_row .et_pb_text").each(function(){var t=e(this).css("background-image");e("<div class='bg_images' style='background-image: "+t+"'></div>").appendTo(a.find(".images_wrap"))})}),e(".grace_alterf_header_v2 .buttons_row .et_pb_text").hover(function(){var a=e(this);a.addClass("active");var t=a.prevAll(".et_pb_text").length;e(".grace_alterf_header_v2 .images_wrap .bg_images").removeClass("active"),e(".grace_alterf_header_v2 .images_wrap .bg_images:nth-child("+(t+1)+")").addClass("active")},function(){e(this).removeClass("active"),e(".grace_alterf_header_v2 .images_wrap .bg_images").removeClass("active")}))},a)}(jQuery);
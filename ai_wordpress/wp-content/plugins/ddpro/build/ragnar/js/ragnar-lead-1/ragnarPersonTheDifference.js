!function(e){var i=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(i=1e4),e("body").hasClass("et-fb")&&(i=1e4),setTimeout(function(){if(0!==e(".ragnar_person_the_difference").length){var i=3.655;e(window).width()<=980&&(i=3),e(window).width()<=767&&(i=2),e(window).width()<=480&&(i=1);var t=0;e(".ragnar_person_the_difference").each(function(){e(this).find(".et_pb_slider .et_pb_slide:first-child").clone().insertAfter(e(this).find(".et_pb_slider .et_pb_slide:last-child")),e(this).find(".et_pb_slider .et_pb_slide:nth-child(2)").clone().insertAfter(e(this).find(".et_pb_slider .et_pb_slide:last-child")),e(this).find(".et_pb_slider .et_pb_slide:nth-last-child(3)").clone().insertBefore(e(this).find(".et_pb_slider .et_pb_slide:first-child")),e(this).find(".et_pb_slider .et_pb_slide:nth-last-child(4)").clone().insertBefore(e(this).find(".et_pb_slider .et_pb_slide:first-child")),e(this).find(".et_pb_slider .et_pb_slide:nth-child(3)").addClass("active_slide");var s=e(this).find(".et_pb_slider").width(),d=e(this).find(".et_pb_slider .et_pb_slide").length,_=s/i,l=d*_;e(this).find(".et_pb_slider .et_pb_slide").width(_),e(this).find(".et_pb_slider .et_pb_slides").width(l),e('<div class="slide_title"></div>').insertAfter(e(this).find(e(".et-pb-slider-arrows a.et-pb-arrow-prev")));var r=0,n=0;e(this).find(".et_pb_slider .et_pb_slide").each(function(){n<e(this).find(".et_pb_slide_description").outerWidth()&&(n=e(this).find(".et_pb_slide_description").outerWidth()),t<e(this).find(".et_pb_slide_description").outerHeight()&&(t=e(this).find(".et_pb_slide_description").outerHeight()),e(this).find(".et_pb_slide_description").addClass("description_"+r).appendTo(e(this).closest(".et_pb_slider").find(".slide_title")),r++});var p=e(this).find(".et_pb_slider .active_slide").prevAll().length;e(this).find(".et_pb_slider .et_pb_slide_description").css("cssText","width: "+n+"px !important; height: 0px"),e(this).find(".et_pb_slider .et_pb_slide_description:nth-child("+(p+1)+")").css("cssText","width: "+n+"px !important; height: "+t+"px");var c=e(this).find(".et_pb_slider .et_pb_slide").width(),h=(e(this).find(".et_pb_slider").width()-c)/2,a=e(this).find(".et_pb_slider .et_pb_slide.active_slide").prevAll().length*c;e(this).find(".et_pb_slider .et_pb_slides").css("margin-left","-"+(a-h)+"px")}),e(".ragnar_person_the_difference .et-pb-slider-arrows a.et-pb-arrow-next").on("click",function(i){i.preventDefault();var t=e(this);setTimeout(function(){t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").nextAll().length<=2?(t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide"),t.closest(".et_pb_slider").find(".et_pb_slide:nth-child(3)").addClass("active_slide")):t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide").next(".et_pb_slide").addClass("active_slide")},100)}),e(".ragnar_person_the_difference .et-pb-slider-arrows a.et-pb-arrow-prev").on("click",function(i){i.preventDefault();var t=e(this);setTimeout(function(){if(t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").prevAll().length<=2){t.closest(".et_pb_slider").find(".et_pb_slide").length;t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide"),t.closest(".et_pb_slider").find(".et_pb_slide:nth-last-child(3)").addClass("active_slide")}else t.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide").prev(".et_pb_slide").addClass("active_slide")},100)}),e(".ragnar_person_the_difference .et-pb-slider-arrows a").on("click",function(i){i.preventDefault();var s=e(this);setTimeout(function(){var e=s.closest(".et_pb_slider").find(".et_pb_slide.active_slide").prevAll().length,i=s.closest(".et_pb_slider").find(".et_pb_slide_description:nth-child("+e+")").width(),d=s.closest(".et_pb_slider").find(".et_pb_slide").width(),_=s.closest(".et_pb_slider").find(".et_pb_slide.active_slide").prevAll().length-2;s.closest(".et_pb_slider").find(".et_pb_slides").css("transform","translate(-"+_*d+"px, 0)");var l=s.closest(".et_pb_slider").find(".et_pb_slide.active_slide").prevAll().length+1;s.closest(".et_pb_slider").find(".et_pb_slide_description").css("cssText","width: "+i+"px !important; height: 0px"),s.closest(".et_pb_slider").find(".et_pb_slide_description:nth-child("+l+")").css("cssText","width: "+i+"px !important; height: "+t+"px")},100)})}},i)}(jQuery);
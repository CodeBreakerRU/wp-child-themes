!function(e){var _=1e3;e("body").hasClass("et-fb")&&(_=1e4),setTimeout(function(){e("body.et-fb .coco_tall_person_module .et_pb_team_member.et-first-child").addClass("active_member"),e(".coco_tall_person_module .et_pb_team_member:first-child").addClass("active_member"),e('<div class="coco-person-slider-arrows"><a class="coco-arrow-prev" href="#"><span class="icon">4</span></a><a class="coco-arrow-next" href="#"><span class="icon">5</span></a></div>').appendTo(e(".coco_tall_person_module .et_pb_column_4_4")),e(".coco_tall_person_module .et_pb_team_member").on("click",function(_){e(".coco_tall_person_module .et_pb_team_member").removeClass("active_member"),e(this).addClass("active_member")}),e(".coco_tall_person_module .coco-person-slider-arrows a.coco-arrow-next").on("click",function(_){_.preventDefault(),e(".coco_tall_person_module .et_pb_team_member.active_member").next(".et_pb_team_member").length>=1?e(".coco_tall_person_module .et_pb_team_member.active_member").removeClass("active_member").next(".et_pb_team_member").addClass("active_member"):(e(".coco_tall_person_module .et_pb_team_member.active_member").removeClass("active_member"),e(".coco_tall_person_module .et_pb_team_member:first-child").addClass("active_member"),e("body.et-fb .coco_tall_person_module .et_pb_team_member.et-first-child").addClass("active_member"))});var _=e(".coco_tall_person_module .et_pb_team_member").length;e(".coco_tall_person_module .coco-person-slider-arrows a.coco-arrow-prev").on("click",function(t){t.preventDefault(),e(".coco_tall_person_module .et_pb_team_member.active_member").prev(".et_pb_team_member").length>=1?e(".coco_tall_person_module .et_pb_team_member.active_member").removeClass("active_member").prev(".et_pb_team_member").addClass("active_member"):(e(".coco_tall_person_module .et_pb_team_member.active_member").removeClass("active_member"),e(".coco_tall_person_module .et_pb_team_member:nth-child("+_+")").addClass("active_member"))}),e(window).width()>=480&&e(".coco_catwalk_person_module .coco_tall_person_module .et_pb_team_member").each(function(){e(this).find(".et_pb_team_member_image").insertAfter(e(this).find(".et_pb_team_member_description"))})},_),setTimeout(function(){var _=e(".coco_catwalk_person_module .coco_tall_person_module .et_pb_team_member.active_member").height()-e(".coco_catwalk_person_module .coco_tall_person_module .et_pb_team_member:not(.active_member)").height();e(window).width()>=481&&e(".coco_catwalk_person_module .et_pb_row:first-child").attr("style","padding-bottom:"+_+"px!important;");var t=e(".coco_tall_person_module .et_pb_team_member").length;e('<div class="slider_number"><span class="slider_active_number">01</span>/<span>0'+t+"</span></div>").appendTo(e(".coco_tall_person_module .et_pb_column_4_4")),e(".coco_tall_person_module .et_pb_team_member, .coco_tall_person_module .coco-person-slider-arrows a").on("click",function(_){_.target===this&&(_.preventDefault(),setTimeout(function(){var _=e(".coco_tall_person_module .et_pb_team_member.active_member").prevAll().length+1;e(".coco_tall_person_module .slider_number .slider_active_number").text("0"+_)},200))})},_),setTimeout(function(){if(0!==e(".coco_sleek_person_module").length){var _=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide").length;e('<div class="slider_number"><span class="slider_active_number">01</span>/<span>0'+_+"</span></div>").insertBefore(e(".coco_sleek_person_module .et_pb_slider .et-pb-slider-arrows"));var t=e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").next().find(".et_pb_slide_image img").attr("src"),o=e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").next().find("h2.et_pb_slide_title").text(),l=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:last-child").find(".et_pb_slide_image img").attr("src"),s=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:last-child").find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .et-pb-slider-arrows a.et-pb-arrow-next").html('<div class="next_post_image"><h2 class="next_post_title">'+o+"</h2></div>"),e(".coco_sleek_person_module .et-pb-slider-arrows a.et-pb-arrow-prev").html('<div class="prev_post_image"><h2 class="prev_post_title">'+s+"</h2></div>"),e(".coco_sleek_person_module .next_post_image").css("background-image","url("+t+")"),e(".coco_sleek_person_module .prev_post_image").css("background-image","url("+l+")"),e(".coco_sleek_person_module .et_pb_slider .et-pb-slider-arrows a.et-pb-arrow-next").on("click",function(){setTimeout(function(){if(e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").nextAll().length>0){var _=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide.et-pb-active-slide").next().find(".et_pb_slide_image img").attr("src"),t=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide.et-pb-active-slide").next().find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .next_post_image").css("background-image","url("+_+")"),e(".coco_sleek_person_module .next_post_title").text(t)}else{_=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:first-child").find(".et_pb_slide_image img").attr("src"),t=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:first-child").find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .next_post_image").css("background-image","url("+_+")"),e(".coco_sleek_person_module .next_post_title").text(t)}var o=e(".coco_sleek_person_module .et_pb_slider .et-pb-moved-slide").find(".et_pb_slide_image img").attr("src"),l=e(".coco_sleek_person_module .et_pb_slider .et-pb-moved-slide").find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .prev_post_image").css("background-image","url("+o+")"),e(".coco_sleek_person_module .prev_post_title").text(l)},0)}),e(".coco_sleek_person_module .et_pb_slider .et-pb-slider-arrows a.et-pb-arrow-prev").on("click",function(){setTimeout(function(){if(e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").prevAll().length>0){var _=e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").prev().find(".et_pb_slide_image img").attr("src"),t=e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").prev().find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .prev_post_image").css("background-image","url("+_+")"),e(".coco_sleek_person_module .prev_post_title").text(t)}else{_=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:last-child").find(".et_pb_slide_image img").attr("src"),t=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:last-child").find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .prev_post_image").css("background-image","url("+_+")"),e(".coco_sleek_person_module .prev_post_title").text(t)}var o=e(".coco_sleek_person_module .et_pb_slider .et-pb-moved-slide").find(".et_pb_slide_image img").attr("src"),l=e(".coco_sleek_person_module .et_pb_slider .et-pb-moved-slide").find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .next_post_image").css("background-image","url("+o+")"),e(".coco_sleek_person_module .next_post_title").text(l)},0)}),e(".coco_sleek_person_module .et-pb-slider-arrows a").on("click",function(_){_.preventDefault(),setTimeout(function(){var _=e(".coco_sleek_person_module .et_pb_slide.et-pb-active-slide").prevAll().length+1;e(".coco_sleek_person_module .slider_number .slider_active_number").text("0"+_)},200)})}},_),setInterval(function(){if(e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").nextAll().length>0){var _=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide.et-pb-active-slide").next().find(".et_pb_slide_image img").attr("src"),t=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide.et-pb-active-slide").next().find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .next_post_image").css("background-image","url("+_+")"),e(".coco_sleek_person_module .next_post_title").text(t)}else{_=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:first-child").find(".et_pb_slide_image img").attr("src"),t=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:first-child").find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .next_post_image").css("background-image","url("+_+")"),e(".coco_sleek_person_module .next_post_title").text(t)}if(e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").prevAll().length>0){var o=e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").prev().find(".et_pb_slide_image img").attr("src"),l=e(".coco_sleek_person_module .et_pb_slider .et-pb-active-slide").prev().find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .prev_post_image").css("background-image","url("+o+")"),e(".coco_sleek_person_module .prev_post_title").text(l)}else{o=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:last-child").find(".et_pb_slide_image img").attr("src"),l=e(".coco_sleek_person_module .et_pb_slider .et_pb_slide:last-child").find("h2.et_pb_slide_title").text();e(".coco_sleek_person_module .prev_post_image").css("background-image","url("+o+")"),e(".coco_sleek_person_module .prev_post_title").text(l)}var s=e(".coco_sleek_person_module .et_pb_slide.et-pb-active-slide").prevAll().length+1;e(".coco_sleek_person_module .slider_number .slider_active_number").text("0"+s)},50)}(jQuery);
!function(t){var e=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){0!==t(".tina_video_talk_much").length&&(t(".tina_video_talk_much").each(function(){t('<div class="nn-cursor"><div class="nn-cursor-text">I</div></div>').appendTo(t(this))}),t(".tina_video_talk_much .et_pb_button_module_wrapper").each(function(){t('<div class="arrow"></div>').appendTo(t(this).find(".et_pb_button "))}),t(".tina_video_talk_much .et_pb_video").hover(function(e){t(this).closest(".tina_video_talk_much").addClass("-text")},function(){t(this).closest(".tina_video_talk_much").removeClass("-text")}),t(".tina_video_talk_much ").mousemove(function(e){hoverBoxWidth=t(this).find(".nn-cursor").width()/2,hoverBoxHeight=t(this).find(".nn-cursor").outerHeight()/2,t(this).find(".nn-cursor").offset({left:e.pageX-hoverBoxWidth,top:e.pageY-hoverBoxHeight})}))},e)}(jQuery);
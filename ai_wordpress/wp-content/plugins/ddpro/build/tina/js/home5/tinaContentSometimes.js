!function(t){var e=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(0!==t(".tina_sometimes_content ").length){t(".tina_sometimes_content .et_pb_promo").each(function(){t('<div class="cta_content"></div>').appendTo(t(this).find(".et_pb_promo_description")),t(this).find(".et_pb_promo_description > div").appendTo(t(this).find(".cta_content")),t(this).find(".et_pb_button_wrapper").appendTo(t(this).find(".cta_content"));var e=t(this).find(" h2.et_pb_module_header").text();t(this).find(" h2.et_pb_module_header").html("<span>"+e+"</span>")}),t(".tina_sometimes_content  .et_pb_promo:first-child").addClass("first_promo");var e=new TimelineLite;t(".tina_sometimes_content  .et_pb_promo:not(:first-child)").hover(function(){t(".tina_sometimes_content  .et_pb_promo:first-child").removeClass("first_promo"),t(this).addClass("hovered"),t(".tina_sometimes_content  .et_pb_promo").addClass("no_hovered"),t(window).width()>=768?(t(".tina_sometimes_content  .et_pb_promo:first-child .cta_content").hide(0),t(this).find(".cta_content").show(0)):(t(".tina_sometimes_content  .et_pb_promo:first-child .cta_content").hide("slow"),t(this).find(".cta_content").show("slow"));var o=t(this).find(".cta_content > div").toArray();e.staggerFromTo(o,.8,{opacity:0,y:40},{opacity:1,y:0,ease:Power3.easeOut},.08)},function(){t(this).removeClass("hovered"),t(".tina_sometimes_content  .et_pb_promo").removeClass("no_hovered"),t(".tina_sometimes_content  .et_pb_promo:first-child").addClass("first_promo"),e.clear();var o=new TimelineLite,i=new TimelineLite,n=t(this).find(".cta_content > div").toArray();o.to(n,0,{opacity:0,y:40}),t(window).width()>=768?(t(this).find(".cta_content").hide(0),t(".tina_sometimes_content .et_pb_promo:first-child .cta_content").show(0)):(t(this).find(".cta_content").hide("slow"),t(".tina_sometimes_content .et_pb_promo:first-child .cta_content").show("slow"));var s=t(".tina_sometimes_content  .et_pb_promo:first-child .cta_content > div").toArray();i.staggerFromTo(s,.8,{opacity:0,y:40},{opacity:1,y:0,ease:Power3.easeOut},.08)})}},e)}(jQuery);
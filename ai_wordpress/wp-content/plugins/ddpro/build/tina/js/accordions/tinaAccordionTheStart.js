!function(t){var e=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){0!==t(".tina_accordion_the_start").length&&(t(".tina_accordion_the_start .et_pb_accordion .et_pb_toggle_open").addClass("et_pb_toggle_close").removeClass("et_pb_toggle_open"),t(".tina_accordion_the_start .et_pb_toggle").each(function(){t(this).find(".et_pb_toggle_content").html('<div class="content_inner">'+t(this).find(".et_pb_toggle_content").html()+"</div>"),t(this).find(".et_pb_toggle_content").attr("height",t(this).find(".et_pb_toggle_content").height()),t(this).find(".et_pb_toggle_content").css("cssText","max-height: 0 !important;")}),t(".tina_accordion_the_start .et_pb_toggle:first-child .et_pb_toggle_content").css("cssText","max-height: "+t(".tina_accordion_the_start .et_pb_toggle:first-child .et_pb_toggle_content").attr("height")+"px !important;"),t(".tina_accordion_the_start .et_pb_toggle:first-child").addClass("opened"),t(".tina_accordion_the_start .et_pb_toggle_title").click(function(t){t.preventDefault()}),t(".tina_accordion_the_start .et_pb_toggle").click(function(e){var _=t(this);_.hasClass("opened")||(t(".tina_accordion_the_start .et_pb_toggle .et_pb_toggle_content").css("cssText"," max-height: 0 !important;"),t(".tina_accordion_the_start .et_pb_toggle").removeClass("et_pb_toggle_close"),t(".tina_accordion_the_start .et_pb_toggle").removeClass("et_pb_toggle_open"),t(".tina_accordion_the_start .et_pb_toggle").removeClass("opened"),t(".tina_accordion_the_start .et_pb_toggle").addClass("closed"),_.addClass("opened"),setTimeout(function(){_.find(".et_pb_toggle_content").css("cssText","max-height: "+_.find(".et_pb_toggle_content").attr("height")+"px !important;")},50))}),t(".tina_accordion_the_start .et_pb_accordion").css("opacity",1))},e)}(jQuery);
!function(t){var e=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(0!==t(".tina_accordion_chardge_of").length){t(".tina_accordion_chardge_of .et_pb_accordion .et_pb_toggle_open").addClass("et_pb_toggle_close").removeClass("et_pb_toggle_open"),t(".tina_accordion_chardge_of .et_pb_toggle").each(function(){t(this).find(".et_pb_toggle_content").attr("height",t(this).find(".et_pb_toggle_content").height()),t(this).find(".et_pb_toggle_content").css("cssText","max-height: 0 !important;"),t(this).attr("height",t(this).height()),t(this).attr("margin-bottom",parseInt(t(this).css("margin-bottom"),10))});var e=t(".tina_accordion_chardge_of .et_pb_accordion").height();t(".tina_accordion_chardge_of .et_pb_toggle").each(function(){t(this).find(".et_pb_toggle_content").attr("height")>e-t(this).find("h5.et_pb_toggle_title").outerHeight()&&t(this).find(".et_pb_toggle_content").addClass("scrollable")}),t(".tina_accordion_chardge_of .accordion_col").height(e),t(".tina_accordion_chardge_of .et_pb_toggle_title").click(function(o){o.preventDefault();var _=t(this).closest(".et_pb_accordion");_.find(".et_pb_toggle").each(function(){t(this).removeClass("et_pb_toggle_close"),t(this).removeClass("et_pb_toggle_open"),t(this).height(t(this).attr("height")),t(this).find(".et_pb_toggle_content").css("cssText"," max-height: 0 !important;")});var i=t(this).closest(".et_pb_toggle");if(i.hasClass("opened"))_.find(".et_pb_toggle").removeClass("closed"),i.removeClass("opened"),i.height(i.attr("height")),i.find(".et_pb_toggle_content").css("cssText","max-height: 0px !important;"),_.css("top","0px");else{var a=0;i.prevAll().each(function(){a+=parseInt(t(this).attr("height"))+parseInt(t(this).attr("margin-bottom"))}),_.css("top","-"+a+"px"),_.find(".et_pb_toggle").addClass("closed"),i.addClass("opened"),i.height(e);var n=t(this);setTimeout(function(){var t=n.outerHeight();i.find(".et_pb_toggle_content").css("cssText","max-height: "+(e-t-60)+"px !important;")},300)}}),t(".tina_accordion_chardge_of .et_pb_accordion .et_pb_toggle .et_pb_toggle_content").on("scrollstart",function(){t(".tina_accordion_chardge_of .et_pb_accordion .et_pb_toggle.opened .et_pb_toggle_title").css("box-shadow","0 0 10px rgba(0,0,0,0.1)")}),t(".tina_accordion_chardge_of .et_pb_accordion .et_pb_toggle .et_pb_toggle_content").scroll(function(){clearTimeout(t.data(this,"scrollTimer")),t.data(this,"scrollTimer",setTimeout(function(){t(".tina_accordion_chardge_of .et_pb_accordion .et_pb_toggle.opened .et_pb_toggle_title").css("box-shadow","0 0 0 rgba(0,0,0,0)")},250))}),t(".tina_accordion_chardge_of .et_pb_accordion").css("opacity",1)}},e)}(jQuery);
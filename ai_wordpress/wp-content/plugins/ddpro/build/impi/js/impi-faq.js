!function(t){t(".et_pb_toggle_title").click(function(){t(".et_pb_toggle_title").removeClass("opened"),t(this).addClass("opened");var e=t(this).closest(".et_pb_toggle");if(!e.hasClass("et_pb_accordion_toggling")){var _=e.closest(".et_pb_accordion");e.hasClass("et_pb_toggle_open")&&(_.addClass("et_pb_accordion_toggling"),e.find(".et_pb_toggle_content").slideToggle(700,function(){e.removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close")})),setTimeout(function(){_.removeClass("et_pb_accordion_toggling")},750)}}),t(".blue_accordion .et_pb_accordion  .et_pb_toggle.et_pb_toggle_open").addClass("toggle_opening"),t(".blue_accordion .et_pb_accordion  .et_pb_toggle .et_pb_toggle_title").click(function(){t(this).closest(".et_pb_accordion").find(".et_pb_toggle").removeClass("toggle_closing").removeClass("toggle_opening"),t(this).parent(".et_pb_toggle").hasClass("et_pb_toggle_open")?t(this).parent(".et_pb_toggle").addClass("toggle_closing"):t(this).parent(".et_pb_toggle").addClass("toggle_opening")}),t(".impi_faq2_accordion .et_pb_column:first-child .et_pb_accordion").each(function(){t(this).find(".et_pb_toggle.et_pb_toggle_open").removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close")}),t(".impi_pink_faq_accordion .cta2_choose_topic.et_pb_text ul li").each(function(){var e=t(this).text().toLowerCase().replace(/\s/g,"_");t(this).attr("topic",e)}),t(".impi_pink_faq_accordion .cta2_choose_topic.et_pb_text ul li:first-child").addClass("active_menu_item");var e=t(".impi_pink_faq_accordion .cta2_choose_topic.et_pb_text ul li:first-child").attr("topic");t(".impi_pink_faq_accordion .et_pb_column .et_pb_accordion").each(function(){t(this).hasClass(e)?t(this).addClass("active_item"):t(this).addClass("deactive_item")}),t(".impi_pink_faq_accordion .et_pb_column .et_pb_accordion:not(:first-child)").each(function(){t(this).find(".et_pb_toggle.et_pb_toggle_open").removeClass("et_pb_toggle_open").addClass("et_pb_toggle_close")}),t(".impi_pink_faq_accordion .cta2_choose_topic.et_pb_text ul li").click(function(){t(".impi_pink_faq_accordion .cta2_choose_topic.et_pb_text ul li").removeClass("active_menu_item"),t(this).addClass("active_menu_item"),t(this).addClass("active_menu_item"),e=t(this).attr("topic"),t(".impi_pink_faq_accordion .et_pb_column .et_pb_accordion").each(function(){t(this).hasClass(e)?t(this).show("slow"):t(this).hide("slow")})})}(jQuery);
!function(i){i(".impi_box_pricing_tables .et_pb_pricing .et_pb_pricing_table").each(function(){i(this).find(".et_pb_frequency").text(i(this).find(".et_pb_frequency").text().replace("/","")),i('<div class="price_info"></div>').appendTo(i(this)),i(this).find(".et_pb_pricing_content_top").appendTo(i(this).find(".price_info")),i(this).find(".et_pb_button_wrapper").appendTo(i(this).find(".price_info"))}),setTimeout(function(){i(".impi_victor_pricing_tables .et_pb_text ul li").each(function(){var t=i(this).text().toLowerCase().replace(/\s/g,"_");i(this).attr("price_topic",t)}),i(".impi_victor_pricing_tables").each(function(){i(this).find(".et_pb_text ul li:first-child").addClass("active_menu_item");var t=i(this).find(".et_pb_text ul li:first-child").attr("price_topic");i(this).find(".et_pb_column .et_pb_module.et_pb_pricing ").each(function(){i(this).hasClass(t)?i(this).show("slow"):i(this).hide("slow")})}),i(".impi_victor_pricing_tables .et_pb_text ul li").click(function(){i(this).closest(".impi_victor_pricing_tables").find(".et_pb_text ul li").removeClass("active_menu_item"),i(this).addClass("active_menu_item"),attrPromo=i(this).attr("price_topic"),i(this).closest(".impi_victor_pricing_tables").find(".et_pb_column .et_pb_module.et_pb_pricing ").each(function(){i(this).hasClass(attrPromo)?i(this).show("slow"):i(this).hide("slow")})}),i(".impi_victor_pricing_tables .et_pb_pricing .et_pb_pricing_table").each(function(){var t=i(this).css("background-image");t=t.replace("url(","").replace(")","").replace(/\"/gi,""),i('<div class="pricing_image"><img src="'+t+'"></div>').insertBefore(i(this).find(".et_pb_pricing_heading")),i(this).css("background-image","none")})},1e3)}(jQuery);
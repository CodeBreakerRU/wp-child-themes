!function(o){var t=1e3;function i(){setTimeout(function(){o(".pleasing_portfolio .et_pb_portfolio_items").masonry({columnWidth:".project",itemSelector:".project",gutter:".gutter_width"})},0)}o("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){o(".pleasing_portfolio .et_pb_portfolio .type-project .et_portfolio_image img").each(function(){o(this).removeAttr("loading")}),o('<div class="gutter_width"></div>').appendTo("body.et-fb .pleasing_portfolio .et_pb_portfolio_items"),i()},t),setTimeout(function(){var t=1;o("body.et-fb .pleasing_portfolio").hover(function(){1===t&&(o('<div class="gutter_width"></div>').appendTo("body.et-fb .pleasing_portfolio .et_pb_portfolio_items"),i(),t=0)})},t),setTimeout(function(){o("body").hasClass("et-fb")&&setInterval(function(){o("body.et-fb .pleasing_portfolio .et_pb_column").hasClass("divi_added")||(o('<div class="gutter_width"></div>').appendTo("body.et-fb .pleasing_portfolio .et_pb_portfolio_items"),i(),o("body.et-fb .pleasing_portfolio .et_pb_column").addClass("divi_added"))},200),o('<div class="gutter_width"></div>').appendTo(".pleasing_portfolio .et_pb_portfolio_items"),o(".pleasing_portfolio .et_pb_portfolio_filters .et_pb_portfolio_filter a").on("click",function(){setTimeout(function(){o('<div class="gutter_width"></div>').appendTo(".pleasing_portfolio .et_pb_portfolio_items"),o(".pleasing_portfolio .et_pb_portfolio_items").masonry("destroy"),i()},50)})},t)}(jQuery);
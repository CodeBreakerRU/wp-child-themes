!function(e){setTimeout(function(){e(".et_mobile_menu:not(.changed)").prepend('<span class="close"></span>'),e(".et_mobile_menu li:not(.changed)").prepend('<span class="close"></span>'),e(".et_mobile_menu, .et_mobile_menu li:not(.changed)").addClass("changed"),e(".et_mobile_menu li.menu-item-has-children").addClass("menu-closed"),e(this).addClass("changed"),e(".et_mobile_menu > span.close").on("click",function(){e(".mobile_menu_bar_toggle").click()}),e(".et_mobile_menu li span.close").on("click",function(n){n.preventDefault(),e(this).parent("li.menu-item-has-children").toggleClass("menu-closed").toggleClass("menu-opened")}),e(".et_mobile_menu li.menu-item-has-children a").on("click",function(n){void 0===e(this).attr("href")&&(n.preventDefault(),e(this).parent("li.menu-item-has-children").toggleClass("menu-closed").toggleClass("menu-opened"))})},1e3)}(jQuery);
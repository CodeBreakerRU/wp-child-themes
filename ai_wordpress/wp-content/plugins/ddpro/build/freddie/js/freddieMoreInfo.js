!function(e){var i=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(i=5e3),e("body").hasClass("et-fb")&&(i=1e4),setTimeout(function(){function i(){setTimeout(function(){var i=e(window).scrollTop();if(e("body").hasClass("os-host"))i=e(".os-viewport").scrollTop();0!==e("header#main-header").length&&(r=e("header#main-header").height()),e("body").hasClass("et_fixed_nav")&&(s=0+r),e("body").hasClass("logged-in")&&(s=32),e("body").hasClass("logged-in")&&e("body").hasClass("et_fixed_nav")&&(s=32+r),e(".freddie_more_info .et_pb_row .et_pb_text ").css("top",s+"px"),e("body").hasClass("et_fixed_nav")?i>=_?e(".freddie_more_info .et_pb_row .et_pb_text ").css("position","fixed"):(e(".freddie_more_info .et_pb_row .et_pb_text ").css("position","static"),e(".freddie_more_info .hover_bg").width(0)):i>=_+r?e(".freddie_more_info .et_pb_row .et_pb_text ").css("position","fixed"):(e(".freddie_more_info .et_pb_row .et_pb_text").css("position","static"),e(".freddie_more_info .hover_bg").width(0)),function(){var i=e(window).scrollTop();e("body").hasClass("os-host")&&(i=e(".os-viewport").scrollTop());e(".et_pb_section").each(function(){if(e(this).position().top-s-r<=i&&i<=e(this).position().top-s-r+e(this).outerHeight()){var _=e(this).attr("id"),d=e(this).outerHeight(),n=i-e(this).position().top+s+r;n=n/d*100,e(".freddie_more_info .et_pb_row .et_pb_text ul li").each(function(){if(_)if(e(this).find("a").attr("href").replace("#","")===_){e(this).addClass("active_menu_item");var i=e(this).width();t=e(this).position().left,o=i*n/100}else e(this).removeClass("active_menu_item")}),e(this).addClass("visible_section")}else e(this).removeClass("visible_section")})}(),e(".freddie_more_info .et_pb_row .et_pb_text ul li").removeClass("prev_item"),e(".freddie_more_info .et_pb_row .et_pb_text ul li.active_menu_item").prevAll().addClass("prev_item"),TweenMax.to(e(".freddie_more_info .hover_bg"),.5,{width:t+o,ease:Power2.easeOut}),i+e(window).height()===e(document).height()&&TweenMax.to(e(".freddie_more_info .hover_bg"),.5,{width:"100%",ease:Power2.easeOut}),e("body").hasClass("et_fixed_nav")?i<_&&TweenMax.to(e(".freddie_more_info .hover_bg"),.5,{width:0,ease:Power2.easeOut}):i<_+r&&TweenMax.to(e(".freddie_more_info .hover_bg"),.5,{width:0,ease:Power2.easeOut})},250)}if(0!==e(".freddie_more_info").length&&e('<div class="hover_bg"></div>').appendTo(".freddie_more_info .et_pb_row .et_pb_text ul"),0!==e(".freddie_more_info").length){var o=0,t=0,s=0,_=0;0!==e(".freddie_more_info img").length&&(_=e(".freddie_more_info img").height());var r=0;i()}e(window).scroll(function(){i()}),setTimeout(function(){if(e("body").hasClass("os-host")&&0!==e(".freddie_more_info").length)OverlayScrollbars(e("body"),{callbacks:{onScroll:function(){i()}}})},3e3)},i)}(jQuery);
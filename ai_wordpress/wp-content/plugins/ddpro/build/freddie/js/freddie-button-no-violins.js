!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_no_violins").each(function(){var t=e(this).text();e(this).html("<span>"+t+"</span>"),e('<div class="arrows"><div class="arrow arrow_first"></div><div class="arrow arrow_last"></div></div>').appendTo(e(this))}),e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_no_violins  ").hover(function(){this.tlCircle=new TimelineLite,this.tlCircle.to(e(this).find("span"),.2,{y:-30,ease:Linear.easeNone},0).to(e(this).find(".arrows"),.2,{y:"-50%",ease:Linear.easeNone},0).to(e(this).find(".arrow"),.2,{opacity:1,ease:Linear.easeNone},0).to(e(this).find(".arrow_last"),.3,{y:0,ease:Linear.easeNone},0),this.tlCircle.play()},function(){this.tlCircle.reverse()})},t)}(jQuery);
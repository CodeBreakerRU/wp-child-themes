!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){if(0!==e(".freddie_prowl_footer").length){function t(){var t=e(window).scrollTop(),r=e(window).height();e(".freddie_prowl_footer").each(function(){var o=e(this).offset().top,i=e(this).css("padding-top").replace("px",""),s=e(this).outerHeight(),_=parseInt(o)+parseInt(i),a=o+s/2;parseInt(t)+parseInt(r)>=_+210&&t<=a&&(e(this).addClass("visible"),(new TimelineLite).to(e(this).find(".image_overlay"),.7,{width:"100%",ease:Circ.easeOut},0).to(e(this).find(".image_overlay"),.7,{height:0,ease:Circ.easeOut},.7))})}if(e(".freddie_prowl_footer .et_pb_button_module_wrapper .et_pb_button ").each(function(){e('<span class="button_circle"></span>').appendTo(e(this)),e('<span class="button_circle hover"></span>').appendTo(e(this))}),e(".freddie_prowl_footer .et_pb_row.row_first").each(function(){e(this).prepend('<div class="image_overlay"></div>')}),e(window).scroll(function(){t()}),e("body").hasClass("os-host"))OverlayScrollbars(e("body"),{callbacks:{onScroll:function(){t()}}})}if(setTimeout(function(){if(0!==e(".freddie_dear_friends_footer").length){e(".freddie_dear_friends_footer .et_pb_promo.explore_cta ").each(function(){e('<span class="button_circle"></span>').appendTo(e(this).find(".et_pb_button_wrapper .et_pb_button")),e('<span class="button_circle hover"></span>').appendTo(e(this).find(".et_pb_button_wrapper .et_pb_button"))});var t=e(".freddie_dear_friends_footer .explore_cta").css("background-image"),r=e(".freddie_dear_friends_footer .et_parallax_bg.et_pb_parallax_css").css("background-image");if(e(".freddie_dear_friends_footer .explore_cta").css("background-image","none"),e(".freddie_dear_friends_footer .explore_cta").hover(function(){e(".freddie_dear_friends_footer .et_parallax_bg.et_pb_parallax_css").css("cssText","background-image: "+t+" !important"),e(".freddie_dear_friends_footer .explore_cta").addClass("hovered")},function(){e(".freddie_dear_friends_footer .et_parallax_bg.et_pb_parallax_css").css("cssText","background-image: "+r+" !important"),e(".freddie_dear_friends_footer .explore_cta").removeClass("hovered")}),e(".freddie_dear_friends_footer .et_pb_subscribe .et_pb_button").each(function(){e(this).prepend(e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15.5" class="circle__progress"/> </svg>'))}),TweenMax.set(".freddie_dear_friends_footer .et_pb_subscribe .et_pb_button .circle__progress",{drawSVG:"82%"}),e(".freddie_dear_friends_footer .et_pb_subscribe .et_pb_button").hover(function(){this.tl=new TimelineLite,this.tl.to(e(this).find(".circle__progress"),.5,{drawSVG:"100%",ease:Power3.easeInOut},0),this.tl.play()},function(){this.tl.reverse()}),0!==e(".freddie_dear_friends_footer #circle_text .et_pb_text_inner p").length){var o=e(".freddie_dear_friends_footer #circle_text .et_pb_text_inner p").text();e(".freddie_dear_friends_footer #circle_text .et_pb_text_inner").html(o)}for(var i=new SplitText(".freddie_dear_friends_footer #circle_text .et_pb_text_inner",{type:"chars",charsClass:"char char++",position:"absolute"}),s=e(".freddie_dear_friends_footer .char"),_=0;_<s.length;_++)s[_].style.display="inline",s[_].style.width="100%",s[_].style.top=0,s[_].style.left=0;var a=new TimelineLite,d=(i.chars,e(".freddie_dear_friends_footer #circle_text"));TweenLite.set(".freddie_dear_friends_footer #circle_text .et_pb_text_inner",{perspective:400});var n=350/(c=s.length);for(_=1;_<=c;_++)e(".freddie_dear_friends_footer #circle_text .et_pb_text_inner .char:nth-child("+_+")").css("transform","rotate("+n*_+"deg)");a.to(d,40,{rotation:"360",repeat:-1,ease:Linear.easeNone})}function l(){var t=e(window).scrollTop(),r=e(window).height(),o=e(".freddie_dear_friends_footer .left_menu .et_pb_text ul li").toArray();0!==e(".freddie_dear_friends_footer").length&&e(".freddie_dear_friends_footer").each(function(){var i,s=e(this).offset().top,_=e(this).css("padding-top").replace("px",""),a=e(this).outerHeight(),d=parseInt(s)+parseInt(_),n=s+a/2;parseInt(t)+parseInt(r/2)>=d&&t<=n?e(this).hasClass("visible")||(e(this).addClass("visible"),setTimeout(function(){TweenMax.staggerTo(o,.3,{marginLeft:"0",opacity:1},.1)},1e3),(i=this).tl=new TimelineLite,i.tl.to(e(this).find(".left_menu"),1.4,{left:0,ease:Power3.easeInOut},0).to(e(this).find(".et_pb_promo.animate_cta"),1,{opacity:1,ease:Power3.easeInOut},0),i.tl.play()):e(this).hasClass("visible")&&(e(this).removeClass("visible"),TweenMax.staggerTo(o,.3,{marginLeft:"-50px",opacity:0},.2),(i=this).tl=new TimelineLite,i.tl.to(e(this).find(".left_menu"),1.4,{left:-317,ease:Power3.easeInOut},0).to(e(this).find(".et_pb_promo.animate_cta"),1,{opacity:0,ease:Power3.easeInOut},0),i.tl.play())})}if(l(),e(window).scroll(function(){l()}),e("body").hasClass("os-host"))OverlayScrollbars(e("body"),{callbacks:{onScroll:function(){l()}}});if(0!==e(".freddie_days_of_our_lifes_footer").length&&0!==e(".freddie_days_of_our_lifes_footer .circle_text_promo").length){e(".freddie_days_of_our_lifes_footer .circle_text_promo .et_pb_promo_description").each(function(){0!==e(this).find("p").length?e(this).find("p").addClass("circle_text"):(e(this).contents().filter(function(){return 3===this.nodeType}).wrap("<div class='circle_text'></div>"),e(this).find(".circle_text:nth-child(1)").remove());var t=e(this).find(".circle_text").text();t=t.replace(/ /g,"&nbsp;"),e(this).find(".circle_text").html(t)});for(i=new SplitText(".freddie_days_of_our_lifes_footer .circle_text_promo .et_pb_promo_description .circle_text",{type:"chars",charsClass:"char char++",position:"absolute"}),s=e(".freddie_days_of_our_lifes_footer .char"),_=0;_<s.length;_++)s[_].style.display="inline",s[_].style.width="100%",s[_].style.top=0,s[_].style.left=0;a=new TimelineLite,i.chars,d=e(".freddie_days_of_our_lifes_footer .circle_text_promo .et_pb_promo_description .circle_text");TweenLite.set(".freddie_days_of_our_lifes_footer .circle_text_promo .et_pb_promo_description .circle_text",{perspective:400});var c;for(n=350/(c=s.length),_=1;_<=c;_++)e(".freddie_days_of_our_lifes_footer .circle_text_promo .et_pb_promo_description .char:nth-child("+_+")").css("transform","rotate("+n*_+"deg)");a.to(d,30,{rotation:"360",repeat:-1,ease:Linear.easeNone},0),setInterval(function(){e("body.et-tb .freddie_days_of_our_lifes_footer .circle_text_promo").each(function(){var t=e(this);0!==t.find("p").length?t.find("p").addClass("circle_text"):(t.contents().filter(function(){return 3===this.nodeType}).wrap("<div class='circle_text'></div>"),t.find(".circle_text:nth-child(1)").remove());var r=t.find(".circle_text").text();r=r.replace(/ /g,"&nbsp;"),t.find(".circle_text").html(r);for(var o=new SplitText(t.find(".circle_text"),{type:"chars",charsClass:"char char++",position:"absolute"}),i=t.find(".char"),s=0;s<i.length;s++)i[s].style.display="inline",i[s].style.width="100%",i[s].style.top=0,i[s].style.left=0;new TimelineLite,o.chars,t.find(".et_pb_promo_description .circle_text");TweenLite.set(t.find(".et_pb_promo_description .circle_text"),{perspective:400});var _=i.length,a=350/_;for(s=1;s<=_;s++)t.find(".et_pb_promo_description .char:nth-child("+s+")").css("transform","rotate("+a*s+"deg)")})},20)}},1500),0!==e(".freddie_we_created_footer").length){e(".freddie_we_created_footer").prepend(e('<svg class="module__wave" viewBox="0 0 1000 162"> <path id="end" d="M 1000 20.1 V 162 H 0 V 22 c 88 178.5 375.3 -35 440.6 40.8 C 634.7 308.2 669.9 6.6 1000 36.1 Z"></path> <path id="start2" d="M1000,162v1H0v-1h502.6H1000z"></path><path id="start" d="M1000,162v1H0v-1h502.6H1000z"></path> </svg>'));e(".module__wave path");var r=e(window).height(),o=e(".freddie_we_created_footer").position().top-r/2;e(window).scroll(function(){o=e(".freddie_we_created_footer").position().top-r/2,e(window).scrollTop()>=o?TweenLite.to(".freddie_we_created_footer .module__wave #start",.7,{morphSVG:".freddie_we_created_footer #end",ease:Power1.easeOut}):TweenLite.to(".freddie_we_created_footer .module__wave #start",.7,{morphSVG:".freddie_we_created_footer #start2",ease:Power1.easeOut})}),e("body").hasClass("os-host")&&setTimeout(function(){OverlayScrollbars(e("body"),{callbacks:{onScroll:function(){o=e(".freddie_we_created_footer").position().top-r/2,e(".os-viewport").scrollTop()>=o?TweenLite.to(".module__wave #start",.7,{morphSVG:"#end",ease:Power1.easeOut}):TweenLite.to(".module__wave #start",.7,{morphSVG:"#start2",ease:Power1.easeOut})}}})},4e3)}if(0!==e(".freddie_wavy_footer").length){e(".freddie_wavy_footer").prepend(e('<svg class="module__wave" viewBox="0 0 1000 162"> <path id="end" d="M 1000 20.1 V 162 H 0 V 22 c 88 178.5 375.3 -35 440.6 40.8 C 634.7 308.2 669.9 6.6 1000 36.1 Z"></path> <path id="start2" d="M1000,162v1H0v-1h502.6H1000z"></path><path id="start" d="M1000,162v1H0v-1h502.6H1000z"></path> </svg>'));e(".module__wave path");r=e(window).height(),o=e(".freddie_wavy_footer").position().top-r;e(window).scroll(function(){o=e(".freddie_wavy_footer").position().top-r,e(window).scrollTop()>=o?TweenLite.to(".freddie_wavy_footer .module__wave #start",.7,{morphSVG:".freddie_wavy_footer #end",ease:Power1.easeOut}):TweenLite.to(".freddie_wavy_footer .module__wave #start",.7,{morphSVG:".freddie_wavy_footer #start2",ease:Power1.easeOut})}),e("body").hasClass("os-host")&&setTimeout(function(){OverlayScrollbars(e("body"),{callbacks:{onScroll:function(){o=e(".freddie_wavy_footer").position().top-r,e(".os-viewport").scrollTop()>=o?TweenLite.to(".module__wave #start",.7,{morphSVG:"#end",ease:Power1.easeOut}):TweenLite.to(".module__wave #start",.7,{morphSVG:"#start2",ease:Power1.easeOut})}}})},6e3)}},t)}(jQuery);
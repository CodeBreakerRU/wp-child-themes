!function(e){var t=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){0!==e(".freddie_race_content").length&&(e(".freddie_race_content .circle_text_promo .et_pb_promo_description").each(function(){0!==e(this).find("p").length?e(this).find("p").addClass("circle_text"):(e(this).contents().filter(function(){return 3===this.nodeType}).wrap("<div class='circle_text'></div>"),e(this).find(".circle_text:nth-child(1)").remove());var t=e(this).find(".circle_text").text();t=t.replace(/ /g,"&nbsp;"),e(this).find(".circle_text").html(t)}),e(".freddie_race_content").each(function(){for(var t=new SplitText(e(this).find(".circle_text_promo .et_pb_promo_description .circle_text"),{type:"chars",charsClass:"char char++",position:"absolute"}),i=e(this).find(".char"),r=0;r<i.length;r++)i[r].style.display="inline",i[r].style.width="100%",i[r].style.top=0,i[r].style.left=0;var c=new TimelineLite,n=(t.chars,e(this).find(".circle_text_promo .et_pb_promo_description .circle_text"));TweenLite.set(".freddie_race_content .circle_text_promo .et_pb_promo_description .circle_text",{perspective:400});var o=i.length,s=350/o;for(r=1;r<=o;r++)e(this).find(".circle_text_promo .et_pb_promo_description .char:nth-child("+r+")").css("transform","rotate("+s*r+"deg)");c.to(n,30,{rotation:"360",repeat:-1,ease:Linear.easeNone},0)}))},t)}(jQuery);
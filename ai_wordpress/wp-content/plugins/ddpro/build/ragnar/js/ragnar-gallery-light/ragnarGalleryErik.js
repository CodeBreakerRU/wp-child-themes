!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=1e4),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){0!==e(".ragnar_gallery_erik").length&&(e(".ragnar_gallery_erik .et_pb_gallery_item").each(function(){e(this).find("h3.et_pb_gallery_title").appendTo(e(this).find(".et_pb_gallery_image a"));var t=e(this).find("img").attr("src"),i=e(this).find("img").attr("srcset");i=(t=t.replace(/-([0-9][0-9][0-9]x[0-9][0-9])\w+/g,"")).replace(/-([0-9][0-9][0-9]x[0-9][0-9])\w+/g,""),e(this).find("img").attr("src",t),e(this).find("img").attr("srcset",i),"block"===e(this).css("display")&&e(this).addClass("show_item");var a=e(this).find(".et_pb_gallery_caption").text();a?e('<span class="item_link link_exist"><span class="icon_box" urlText="'+a+'" title=""></span></span>').insertBefore(e(this).find(".et_pb_gallery_image > a")):e('<span class="item_link"><span class="icon_box" title=""></span></span>').insertBefore(e(this).find(".et_pb_gallery_image > a"));var r=e(this).find(".et_pb_gallery_title").outerHeight();e(this).find(".et_overlay").height(e(this).outerHeight()-r-25),e(this).find(".et_overlay").width(e(this).outerHeight()-r-25)}),e(".ragnar_gallery_erik .et_pb_gallery_item .item_link.link_exist .icon_box").on("click",function(){var t=e(this);setTimeout(function(){e(".mfp-gallery").remove(),e(".mfp-fade").remove(),window.location.href=t.attr("urlText")},10)}))},t)}(jQuery);
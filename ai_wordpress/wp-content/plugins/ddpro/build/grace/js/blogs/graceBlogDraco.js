!function(e){var t=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=1e4),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){0!=e(".grace_blog_draco").length&&(e(".grace_blog_draco article.et_pb_post").each(function(){e('<div class="hover_arrow"></div>').appendTo(e(this));e(this).find("img").attr("src").replace(/-([0-9][0-9][0-9]x[0-9][0-9])\w+/g,"")}),e("#page-container .grace_blog_draco  article.et_pb_post .post-meta").each(function(){e(this).html(e(this).html().replace(/\|/g,"").replace("by",""))}),e("#page-container .grace_blog_draco  article.et_pb_post").on("click",function(){window.location.href=e(this).find(".entry-title a").attr("href")}))},t)}(jQuery);
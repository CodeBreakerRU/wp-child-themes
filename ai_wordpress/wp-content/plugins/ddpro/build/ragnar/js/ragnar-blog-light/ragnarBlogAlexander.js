!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=1e4),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){if(0!==e(".ragnar_blog_alexander").length){var t=0;e("#page-container .ragnar_blog_alexander article.et_pb_post").each(function(){e(this).find(".post-meta").insertBefore(e(this).find(".entry-title"));var i=e(this).find(".entry-featured-image-url img").attr("src");e(this).css("background-image","url("+i+")"),e(this).find(".entry-featured-image-url").remove(),e(this).children().wrapAll('<div class="post_info_box"></div>'),t<e(this).find(".post_info_box").outerHeight()&&(t=e(this).find(".post_info_box").outerHeight()),e('<div class="hover_arrow"></div>').appendTo(e(this))}),e("#page-container .ragnar_blog_alexander  article.et_pb_post .post_info_box").outerHeight(t),e("#page-container .ragnar_blog_alexander  article.et_pb_post").on("click",function(){window.location.href=e(this).find(".entry-title a").attr("href")})}},t)}(jQuery);
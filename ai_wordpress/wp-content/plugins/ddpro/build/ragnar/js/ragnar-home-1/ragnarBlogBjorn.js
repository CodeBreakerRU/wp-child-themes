!function(t){var e=500;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=1e4),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(0!==t(".ragnar_blog_bjorn").length){var e=1e5;t(".ragnar_blog_bjorn .et_pb_posts  .et_pb_post  .post-meta").each(function(){var e=t(this).find("span.author")[0],a=t(this).find("span.published")[0],s=t(this).find('a[rel="tag"]').toArray(),n=t(this).find(".published").text(),i=n.replace(/\d+/g,""),r=parseInt(n);if(r<=9&&(r="0"+r),n&&(a='<span class="published"><span class="day"> '+r+'</span><span class="month"> '+i+"</span></span>"),s&&(s=(s=t.map(s,function(t){return t.outerHTML})).join(", ")),e){var o=e.outerHTML+" | ";o+=a}else o=a;o+="<span class='categories'>"+s+"</span>",t(this).html(o)}),t(".ragnar_blog_bjorn .et_pb_posts .et_pb_post").each(function(){0==t(this).find(".entry-featured-image-url").length&&t(this).addClass("no_image"),t(this).find(".post-meta").insertBefore(t(this).find(".entry-title")),0!=t(this).find(".entry-featured-image-url").length&&t(this).find(".entry-featured-image-url").height()<e&&(e=t(this).find(".entry-featured-image-url").height())}),t(".ragnar_blog_bjorn article.et_pb_post .entry-featured-image-url").height(e),t(".ragnar_blog_bjorn .et_pb_posts .et_pb_post").on("click",function(){var e=t(this).find(".entry-title a").attr("href");e&&(window.location.href=e)}),setInterval(function(){t("body .ragnar_blog_bjorn .et_pb_posts  .et_pb_post  .post-meta").each(function(){if(!t(this).hasClass("div_added")){var e=t(this).find("span.author")[0],a=t(this).find("span.published")[0],s=t(this).find('a[rel="tag"]').toArray(),n=t(this).find(".published").text(),i=n.replace(/\d+/g,""),r=parseInt(n);if(r<=9&&(r="0"+r),n&&(a='<span class="published"><span class="day"> '+r+'</span><span class="month"> '+i+"</span></span>"),s&&(s=(s=t.map(s,function(t){return t.outerHTML})).join(", ")),e){var o=e.outerHTML+" | ";o+=a}else o=a;o+="<span class='categories'>"+s+"</span>",t(this).html(o),t(this).addClass("div_added")}}),t(".ragnar_blog_bjorn .et_pb_posts .et_pb_post").hasClass("div_added")||(t(".ragnar_blog_bjorn .et_pb_posts .et_pb_post").each(function(){0==t(this).find(".entry-featured-image-url").length&&t(this).addClass("no_image"),t(this).find(".post-meta").insertBefore(t(this).find(".entry-title")),0!=t(this).find(".entry-featured-image-url").length&&t(this).find(".entry-featured-image-url").height()<e&&(e=t(this).find(".entry-featured-image-url").height()),t(".ragnar_blog_bjorn .et_pb_posts .et_pb_post").addClass("div_added")}),t(".ragnar_blog_bjorn article.et_pb_post .entry-featured-image-url").height(e))},200)}},e)}(jQuery);
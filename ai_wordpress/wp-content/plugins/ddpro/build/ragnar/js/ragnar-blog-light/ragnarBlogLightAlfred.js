!function(t){var e=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=1e4),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(0!==t(".ragnar_blog_light_alfred").length){t(".ragnar_blog_light_alfred .et_pb_posts  .et_pb_post  .post-meta").each(function(){t(this).html(t(this).html().replace(/\|/g,""));var e=t(this).find("span.author")[0],a=t(this).find("span.published")[0],i=t(this).find('a[rel="tag"]').toArray(),n=t(this).find(".published").text(),r=(n.replace(/\d+/g,""),parseInt(n));n.slice(n.length-4);r<=9&&(r="0"+r),i&&(i=(i=t.map(i,function(t){return t.outerHTML})).join(", ")),n&&(a='<span class="published">'+n+"</span>");var s="<span class='categories'>"+i+"</span>";e?(s+=a,s+='<span class="auther_posted">By '+e.outerHTML+"</span>"):s+=a,t(this).html(s)}),t("#page-container .ragnar_blog_light_alfred  article.et_pb_post").each(function(){t(this).prepend(t(this).find(".post-meta")),t(this).find(".auther_posted").insertAfter(t(this).find(".entry-title")),t(this).children().wrapAll('<div class="post_info_box"></div>')}),t('<div class="gutter_width"></div>').appendTo("#page-container .ragnar_blog_light_alfred .et_pb_ajax_pagination_container "),setTimeout(function(){t(".ragnar_blog_light_alfred .et_pb_ajax_pagination_container").masonry({columnWidth:"article.et_pb_post",itemSelector:"article.et_pb_post",gutter:".gutter_width"})},2500),t("#page-container .ragnar_blog_light_alfred  article.et_pb_post").on("click",function(){window.location.href=t(this).find(".entry-title a").attr("href")})}},e)}(jQuery);
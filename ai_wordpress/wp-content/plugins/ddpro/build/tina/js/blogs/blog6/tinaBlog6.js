!function(t){var n=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(n=5e3),t("body").hasClass("et-fb")&&(n=1e4),setTimeout(function(){0!==t("body .tina_blog_6").length&&(t(".tina_blog_6 .et_pb_post_content .wp-caption").each(function(){"full_width"===t(this).find("p.wp-caption-text").text()&&t(this).addClass("full_width")}),t(".tina_blog_6 .et_pb_posts_nav span.nav-label").each(function(){t(this).html('<span class="line"></span>')}),t(".tina_blog_6 .et_pb_posts_nav > span").each(function(){var n=t(this).find("a").attr("href");n=n.substring(0,n.length-1).split("/").pop().replace(/\-/g," "),t('<div class="post-title">'+n+"</div>").appendTo(t(this).find("a"))}),t("#page-container .tina_blog_6  form.comment-form p.comment-form-comment").insertBefore(t("#page-container .tina_blog_6  form.comment-form p.form-submit")),t("#page-container .tina_blog_6 form.comment-form p textarea, #page-container .tina_blog_6 form.comment-form p input").focus(function(){t(this).parent("p").addClass("focus")}),t("#page-container .tina_blog_6 form.comment-form p textarea, #page-container .tina_blog_6 form.comment-form p input").blur(function(){t(this).val()===t(this).closest("p").find("label").text()&&t(this).val(""),t(this).val()?t(this).parent().addClass("filled"):t(this).parent().removeClass("filled"),t(this).parent("p").removeClass("focus")}))},n)}(jQuery);
!function(e){var n=0;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(n=5e3),e("body").hasClass("et-fb")&&(n=1e4),setTimeout(function(){e("body.single.single-post .diana_single_post_banner").insertBefore(e("body.single.single-post  #main-content")),e("body.single.single-post article.et_pb_post .post-meta").each(function(){var n=e(this).find("span.author")[0],t=(e(this).find("span.published")[0],e(this).find('a[rel="category tag"]').toArray()),s=e(this).find(".published").html(),i="";n&&(i+="<div><span class='meta_title'>Author:</span>"+n.outerHTML+"</div>"),s&&(i+="<div><span class='meta_title'>Published on:</span>"+s+"</div>"),t&&(i+="<div><span class='meta_title'>Published in:</span><span class='categories'>"+(t=(t=e.map(t,function(e){return e.outerHTML})).join(", "))+"</span></div>"),e(this).html(i)}),e("body.single.single-post #comment-wrap #respond").insertBefore(e("body.single.single-post #comment-wrap ol.commentlist ")),e("#comment-wrap #respond p.comment-form-comment").insertAfter(e("#comment-wrap #respond p.comment-form-email"))},n)}(jQuery);
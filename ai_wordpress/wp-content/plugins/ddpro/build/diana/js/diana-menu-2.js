!function(e){e("input,textarea").focus(function(){""!==e(this).attr("placeholder")&&(e(this).attr("data-placeholder",e(this).attr("placeholder")),e(this).attr("placeholder",""))}),e("input,textarea").blur(function(){""===e(this).attr("placeholder")&&e(this).attr("placeholder",e(this).attr("data-placeholder"))});var t=1e3;e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){e(".et_pb_section.menu2_page_menu").appendTo(".menu2_top_section .et_pb_column_1_2 ")},t),setTimeout(function(){if(0!==e(".menu2_top_section").length&&e("#custom-ddp-menu").css("cssText","z-index: 99 !important;     position: relative;"),e("body").hasClass("et-tb")||(e(".menu_item").each(function(){var t=e(this).attr("id");e(".menu2_top_section .fullwidth-menu li").each(function(){e(this).hasClass(t)&&(e('<ul class="sub-menu mega"></ul>').appendTo(e(this)),e("#"+t+".menu_item").addClass("moved").appendTo(e(this).find("ul.sub-menu")))})}),e('.menu_item:not(".moved")').remove()),e(".menu2_page_menu .fullwidth-menu #News .et_pb_newsletter p.et_pb_newsletter_field.et_pb_signup_custom_field").insertAfter(e(".menu2_page_menu .fullwidth-menu #News .et_pb_newsletter p.et_pb_newsletter_button_wrap")),e(".menu2_page_menu .fullwidth-menu #News .et_pb_button_module_wrapper").appendTo(e(".menu2_page_menu .fullwidth-menu #News .et_pb_newsletter p.et_pb_newsletter_field.et_pb_signup_custom_field .et_pb_contact_field_checkbox label")),e(window).width()<=980){var t=e(".menu2_top_section .et_mobile_nav_menu .mobile_nav span.mobile_menu_bar").html();e(".menu2_top_section .et_mobile_nav_menu .mobile_nav").html(""),e('<span class="mobile_menu_bar"></span>').appendTo(e(".menu2_top_section .et_mobile_nav_menu .mobile_nav")),e(".menu2_top_section .et_mobile_nav_menu .mobile_nav span.mobile_menu_bar").html(t),e('<span class="sub_menu_close_icon">Q</span>').appendTo(".menu2_top_section .fullwidth-menu-nav .sub-menu.mega"),e(".menu2_top_section .et_mobile_nav_menu .mobile_nav span.mobile_menu_bar").on("click",function(t){t.preventDefault(),"block"===e(".menu2_top_section .fullwidth-menu-nav").css("display")?(e(".menu2_top_section .fullwidth-menu-nav").hide("slow"),e(".menu2_top_section .et_mobile_nav_menu .mobile_nav span.mobile_menu_bar").removeClass("opened")):"none"===e(".menu2_top_section .fullwidth-menu-nav").css("display")&&(e(".menu2_top_section .fullwidth-menu-nav").show("slow"),e(".menu2_top_section .et_mobile_nav_menu .mobile_nav span.mobile_menu_bar").addClass("opened"))});var n=e(window).height(),s=e(".menu1_logo_section").height();console.log(n),console.log(s);var o=n-s;e(".menu2_top_section .et_pb_fullwidth_menu > .et_pb_row .fullwidth-menu-nav .fullwidth-menu .sub-menu.mega").css("min-height",o+"px"),e(".menu2_top_section .fullwidth-menu-nav").css("min-height",o+"px"),e(".menu2_top_section .fullwidth-menu > li > a").on("click",function(){e(".menu2_top_section .fullwidth-menu-nav .sub-menu.mega").removeClass("closed")}),e(".menu2_top_section .fullwidth-menu-nav .sub_menu_close_icon").on("click",function(){e(this).parent(".sub-menu.mega").addClass("closed")}),e(".menu2_page_menu").insertAfter(".menu2_top_section > .et_pb_row ")}if(e(window).width()<=767&&e(".menu2_page_menu #News.menu_item .et_pb_text").on("click",function(){"none"===e(" .menu2_page_menu #News .et_pb_posts").css("display")?e(" .menu2_page_menu #News .et_pb_posts").show("slow"):e(" .menu2_page_menu #News .et_pb_posts").hide("slow")}),e(".menu2_top_section .search_and_social_icons .et_pb_blurb ").on("click",function(){"none"===e(".menu2_top_section .et_pb_search").css("display")?e(".menu2_top_section .et_pb_search").show("slow"):e(".menu2_top_section .et_pb_search").hide("slow")}),e("body:not(.et-fb) #custom-ddp-menu .menu2_top_section").hasClass("fixed")){e("body:not(.et-fb) #custom-ddp-menu").addClass("fixed");s=e("#custom-ddp-menu").height();e("#et-main-area").css("padding-top",s+"px")}e(".menu2_top_section #Cases .et_pb_blurb:first-child").addClass("active"),e(".menu2_top_section #Cases .et_pb_blurb").hover(function(){e(".menu2_top_section #Cases .et_pb_blurb").removeClass("active"),e(this).addClass("active");var t=e(this).find(".et_pb_main_blurb_image img").attr("src");e(".menu2_top_section #Cases .et_pb_image img").attr("src",t),e(".menu2_top_section #Cases .et_pb_image img").attr("srcset","")}),e(".menu2_page_menu #News .et_pb_post .post-meta").each(function(){var t=e(this).find("span.author")[0],n=e(this).find("span.published")[0],s=e(this).find('a[rel="category tag"]').toArray(),o=e(this).find(".published").text(),_="";0!==s.length&&(_+="<span class='categories'>"+(s=(s=e.map(s,function(e){return e.outerHTML})).join(", "))+"</span><span class='line'>/</span>"),o&&(_+=n='<span class="published"><span class="day"> '+o+"</span></span>"),t&&(o?(_=n+'<span class="line">|</span>',_+=t.outerHTML):_=t.outerHTML),e(this).html(_)}),setInterval(function(){e(".menu2_page_menu #News .et_pb_posts article").hasClass("done")||(e(".menu2_page_menu #News .et_pb_post .post-meta").each(function(){var t=e(this).find("span.author")[0],n=e(this).find("span.published")[0],s=e(this).find('a[rel="category tag"]').toArray(),o=e(this).find(".published").text(),_="";o.replace(/\d+/g,""),parseInt(o);0!==s.length&&(_+="<span class='categories'>"+(s=(s=e.map(s,function(e){return e.outerHTML})).join(", "))+"</span><span class='line'>/</span>"),o&&(_+=n='<span class="published"><span class="day"> '+o+"</span></span>"),t&&(o?(_=n+'<span class="line">|</span>',_+=t.outerHTML):_=t.outerHTML),e(this).html(_)}),e(".menu2_page_menu #News .et_pb_posts article").addClass("done"))},50),e(".menu2_page_menu #News .et_pb_posts article").each(function(){e('<div class="post-info"></div>').appendTo(e(this)),e(this).find("h2.entry-title").appendTo(e(this).find(".post-info")),e(this).find(".post-meta").appendTo(e(this).find(".post-info"))});for(var _=e(" .menu2_page_menu #Portfolio .et_pb_filterable_portfolio .et_pb_portfolio_item").length,i=4;i<=_;i++)e(".menu2_page_menu #Portfolio .et_pb_filterable_portfolio .et_pb_portfolio_item:nth-child("+i+")").addClass("delete");e(".menu2_page_menu #Portfolio .et_pb_filterable_portfolio .et_pb_portfolio_item.delete").remove(),e(".menu2_page_menu #Portfolio .et_pb_portfolio_item").each(function(){e('<div class="project-info"></div>').appendTo(e(this)),e(this).find("h2.et_pb_module_header").appendTo(e(this).find(".project-info")),e(this).find(".myexcerpt").appendTo(e(this).find(".project-info"))})},t)}(jQuery);
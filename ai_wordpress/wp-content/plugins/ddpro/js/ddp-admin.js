var ddd_full_stop=0,json_counters_array=[];jQuery(document).ready(function(t){const{__:e,_x:a,_n:d,_nx:s}=wp.i18n;t("#ddp-success-report").hide(),new Clipboard("#ddp-copy-report").on("success",function(){t("#ddp-success-report").show()}),new Clipboard("#ddp-copy-url").on("success",function(){t("#ddp-success-url").show()}),t(".ddp-assistant .nav-tab.ddp_wl, .ddp-assistant .nav-tab.ddp_options").wrapAll('<div class="nav-tabs-subtabs"></div>'),t(".ddp-assistant .nav-tab.ddp_divi_theme_builder, .ddp-assistant .nav-tab.ddp_settings").wrapAll('<div class="nav-tabs-subtabs-theme-builder"></div>'),jQuery(".wrap.ddp-assistant:not(.activated) a.nav-tab:not(.divi_den_pro_dashboard):not(.ddp_assistant_system_status):not(.ddp_assistant_help_faq):not(.ddp_start_here):not(.ddp_latest_feed)").addClass("disabled"),jQuery("table.ddp-report-table td a, table.ddp-report-table th a").on("click touch",function(t){t.preventDefault()}),jQuery("#wp-ddp_wp_content-wrap").appendTo("tr#wp-ddp-column td:not(.ddp-save-buttons)").show(),jQuery(".form-table.ddp_wl label input[name=ddp_plugin_name]").length>0&&(ddp_n=jQuery(".form-table.ddp_wl label input[name=ddp_plugin_name]").val(),ddp_n=ddp_n.replace(/\s+/g,"_").toLowerCase(),ddp_url_path=window.location.pathname,jQuery(".new_admin_url").html(window.location.protocol+"//"+window.location.hostname+ddp_url_path+"?page="+ddp_n+"_dashboard<strong>_wl</strong>")),jQuery(".form-table.ddp_wl label input[name=ddp_plugin_name]").on("keyup",function(){ddp_n=t(this).val(),ddp_n=ddp_n.replace(/\s+/g,"_").toLowerCase(),ddp_url_path=window.location.pathname,jQuery(".new_admin_url").html(window.location.protocol+"//"+window.location.hostname+ddp_url_path+"?page="+ddp_n+"_dashboard<strong>_wl</strong>")}),jQuery(".ddp-breadcrumbs--end").text(jQuery("a.nav-tab-active").text()),jQuery("p.submit.ddp_wl.save_settings input").on("click touch",function(e){e.preventDefault(),ddd_full_stop=0,jQuery(".form-table.ddp_wl label input, .form-table.ddp_wl label textarea, #wp-ddp_wp_content-wrap").each(function(){"wp-ddp_wp_content-wrap"!==t(this).attr("id")&&"ddp_plugin_icon"!==t(this).attr("name")&&""===t(this).val()&&(ddd_full_stop=1,t(this).addClass("not-filled"),t(this).siblings(".ddp-error-message").remove(),t(this).after('<span class="ddp-error-message">This field is required</span>'))}),0===ddd_full_stop?(t(this).next().hide(),jQuery(".form-table.ddp_wl label input, .form-table.ddp_wl label textarea, #wp-ddp_wp_content-wrap").each(function(){if("wp-ddp_wp_content-wrap"===t(this).attr("id")?(ajax_option="ddp_wp_content",ajax_val=jQuery(".ddp_wl_settings #wp-ddp_wp_content-wrap").hasClass("tmce-active")?tinymce.get("ddp_wp_content").getContent():jQuery("textarea#ddp_wp_content").val()):(ajax_option=t(this).attr("name"),ajax_val=t(this).val()),"ddp_plugin_name"===ajax_option){ajax_val;var e=ajax_val.replace(/\s+/g,"_").toLowerCase();jQuery("input[name=ddp_wl]").is(":checked")?redirect_link=window.location.pathname+"?page="+e+"_dashboard_wl&tab=ddp_wl":redirect_link=window.location.pathname+"?page=divi_den_pro_dashboard&tab=ddp_wl",jQuery("input[name=ddp_hide_menu]").is(":checked")&&(redirect_link=window.location.pathname.replace("admin.php",""))}jQuery.ajax({type:"POST",url:ajaxurl,data:"action=ddp_update_option&ddp_option="+ajax_option+"&ddp_option_val="+ajax_val+"&ddp_nonce="+ddp_wl_options_for_js.ddp_nonce,success:function(t){redirect_link?window.location.replace(redirect_link):window.location.reload()},error:function(t){}})})):t(this).next().show()}),jQuery("p input#submit_wl.submit_wl_disabled, p input#submit_wl.submit_wl_enabled").on("click",function(a){a.preventDefault(),ddd_full_stop=0;let d='<div class="ddp_wl_loaded"><p>'+e("One moment please... Activating white label mode","ddpro")+"</p></div>",s='<div class="ddp_wl_loaded"><p>'+e("One moment please... Deactivating white label mode","ddpro")+"</p></div>";t(this).hasClass("submit_wl_disabled")&&t("#ddp-wl-pop-up").html(d),t(this).hasClass("submit_wl_enabled")&&t("#ddp-wl-pop-up").html(s),jQuery(".form-table.ddp_wl label input, .form-table.ddp_wl label textarea, #wp-ddp_wp_content-wrap").each(function(){"wp-ddp_wp_content-wrap"!==t(this).attr("id")&&"ddp_plugin_icon"!==t(this).attr("name")&&""===t(this).val()&&(ddd_full_stop=1,t(this).addClass("not-filled"),t(this).siblings(".ddp-error-message").remove(),t(this).after('<span class="ddp-error-message">This field is required</span>'))}),0===ddd_full_stop?(t(this).next().hide(),t(".ddp_wl_hidden .et-box-content .et_pb_button_slider").click(),t(".submit.ddp_wl.save_settings input").click()):t(this).next().show()})}),jQuery(document).ready(function(t){function e(){var e=document.getElementById("ondemanIframe");t("#et_pb_loading_animation").remove(),jQuery.ajax({type:"GET",url:ajaxurl,data:"action=ddp_get_option",success:function(t){"enabled"==t+""?null!==e&&null!==e.contentWindow&&e.contentWindow.postMessage("pro_membership_activated","*"):null!==e&&null!==e.contentWindow&&e.contentWindow.postMessage("pro_membership_deactivated","*")}}),function(){for(var t,e=[],a=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),d=0;d<a.length;d++)t=a[d].split("="),e.push(t[0]),e[t[0]]=t[1];return e}().post;var d=window.addEventListener?"addEventListener":"attachEvent",s=window[d],n="attachEvent"===d?"onmessage":"message";t("ul.et_pb_saved_layouts_list").length>0&&t("ul.et_pb_saved_layouts_list li:not(.added_image)").each(function(){this_title=t(this).find("a").text(),this_class=this_title.replace(/-+/g,"").replace(/\s+/g,"-").toLowerCase(),t(this).addClass(this_class),t(this).addClass("added_image"),jQuery.ajax({type:"POST",url:ajaxurl,data:"action=ddp_show_featured_image&ddp_title_image="+this_title+"&ddp_nonce="+ddp_wl_options_for_js.ddp_nonce,success:function(e){""!==e&&(img_link=e.substring(e.indexOf("|")+1),img_post_title=e.replace(img_link,"").replace("|",""),t("ul.et_pb_saved_layouts_list li:not(.with-image)").each(function(){this_title=t(this).find("a").text(),this_title===img_post_title&&(t(this).find("a").before('<img src="'+img_link+'" class="ddp_preview" />'),t(this).addClass("with-image"))}))},error:function(t){}})}),setInterval(function(){t("div.et-fb-settings-options-tab-modules_library ul:not(.ddp_images_sent)").length>0&&t("div.et-fb-settings-options-tab-modules_library ul li:not(.added_image):not(.with-image)").each(function(){this_title=t(this).find("span.et_module_title").text().trim(),this_class=this_title.replace(/-+/g,"").replace(/\s+/g,"-").toLowerCase(),t(this).addClass(this_class),t(this).addClass("added_image"),jQuery.ajax({type:"POST",url:ajaxurl,data:"action=ddp_show_featured_image&ddp_title_image="+this_title+"&ddp_nonce="+ddp_wl_options_for_js.ddp_nonce,success:function(e){""!==e&&(img_link=e.substring(e.indexOf("|")+1),img_post_title=e.replace(img_link,"").replace("|",""),t("div.et-fb-settings-options-tab-modules_library ul li:not(.with-image)").each(function(){this_title=t(this).find("span.et_module_title").text().trim(),this_title===img_post_title&&0===t(this).find("img.ddp_preview").length&&(t(this).find("span.et_module_title").after('<img src="'+img_link+'" class="ddp_preview" />'),t(this).addClass("with-image"))}))},error:function(t){}})})},10),s(n,function(d){var s;if("https://ondemand.divi-den.com"===d.origin&&"string"===jQuery.type(d.data))if(~d.data.indexOf("context")){t("body .ddp-assistant .saving_message").show();var n="off";if(jQuery("#et_pb_main_container > .et_pb_section .et_pb_module_block").length<=0&&(n="on"),s=jQuery.parseJSON(d.data))if(t(e).hasClass("settingsIframe")||t(e).hasClass("vbIframe")||"et_builder"!==s.context)"et_builder_layouts"===s.context||t(e).hasClass("settingsIframe")?(response_data=encodeURIComponent(JSON.stringify(s)),jQuery.ajax({type:"POST",url:ajaxurl,data:"action=ddp_import_posts&posts="+response_data+"&ddp_nonce="+ddp_wl_options_for_js.ddp_nonce,success:function(e){if(0===t("div.sectionSaved").length){t(".ddp-tab-section, .ddp-tab-module").html('<div class="sectionSaved">                                            <p>'+l("<strong>Success!</strong> Your section/module is being saved to your local Divi library.","ddpro")+"</p>                                            <h3>"+l("Choose your next step...","ddpro")+"</h3>                                            <p>"+l("1. Find new modules and save to your library","ddpro")+'</p>                                            <a href="#" class="ddp_close">'+l("Find New Pro Modules","ddpro")+"</a>                                            <p>"+l('2. Begin editing - Use the "Add From Library" tab to load sections/modules from local Divi Library',"ddpro")+'</p>                                            <a href="#" class="ddp_reload">'+l("To Continue - Save and Reload Page","ddpro")+"</a>                                            "+l("(please do it manually if you are in Divi Frontend Builder or Divi Theme Builder)","ddpro")+"</div>"),t("body .ddp-tab-section a.ddp_reload, body .ddp-tab-module a.ddp_reload").on("click",function(e){e.preventDefault(),t("div.sectionSaved").html('<h3 class="ddp_loading_text">Reloading...</h3>'),t("input.button-primary#publish").click(),t("button.et-fb-button--publish").click(),t("li#wp-admin-bar-et-disable-visual-builder a.ab-item").click()});var d=Math.floor(1e6*Math.random()+1);"enabled"===ddp_wl_options_for_js.ddp_status&&"yes"!==ddp_wl_options_for_js.ddp_on_hold_status.replace(/\s/g,"")?(ddp_sections_link="https://ondemand.divi-den.com/sections-search-api-ljljdfre935/?uid="+d,ddp_modules_link="https://ondemand.divi-den.com/modules-search-api-fdge43y/?uid="+d):(ddp_sections_link="https://ondemand.divi-den.com/sections-search-no-api-asdfv324/?uid="+d,ddp_modules_link="https://ondemand.divi-den.com/modules-search-no-api-33jwer3/?uid="+d),t("body .ddp-tab-section a.ddp_close").on("click",function(e){e.preventDefault(),t("div.sectionSaved").html('<h3 class="ddp_loading_text">Loading...</h3>'),t(".ddp-tab-section").html('<iframe id="ondemanIframe" name="ondemandIframe" class="sectionsIframe" style="width: 100%;height: 100%;" src="'+ddp_sections_link+'"></iframe>'),a()}),t("body .ddp-tab-module a.ddp_close").on("click",function(e){e.preventDefault(),t("div.sectionSaved").html('<h3 class="ddp_loading_text">Loading...</h3>'),t(".ddp-tab-module").html('<iframe id="ondemanIframe" name="ondemandIframe" class="sectionsIframe" style="width: 100%;height: 100%;" src="'+ddp_modules_link+'"></iframe>'),a()})}t("body .ddp-assistant .saving_message").hide(),t("body .ddp-assistant .loaded_message").show(),setTimeout(function(){t("body .ddp-assistant .loaded_message").hide()},5500)},error:function(t){console.log(t)}})):s.context;else{layout=JSON.stringify(s);var i=jQuery(".et-pb-all-modules-tab .et-pb-load-layouts"),o=i.children("li").last().clone(!0);o.addClass("layout_here"),o.appendTo(i),jQuery(".layout_here").data("layout_id",{layout:layout,replace_content:n}),jQuery(".layout_here .et_pb_layout_button_load").click()}}else~d.data.indexOf(".")?t("input#_et_pb_custom_css").val(d.data):(~d.data.indexOf(",jpg")||~d.data.indexOf(",png"))&&(ddp_featured_image_url=d.data.replace(/\,/g,"."),setTimeout(function(){jQuery.ajax({type:"POST",url:ajaxurl,data:"action=ddp_import_featured_image&ddp_featured_image="+ddp_featured_image_url+"&ddp_nonce="+ddp_wl_options_for_js.ddp_nonce,success:function(t){},error:function(t){}})},5e3))},!1)}function a(){setTimeout(function(){t("iframe#ondemanIframe").height()>0?e():t("iframe#ondemanIframe").on("load",function(){e()})},300)}function d(){for(var t,e=[],a=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),d=0;d<a.length;d++)t=a[d].split("="),e.push(t[0]),e[t[0]]=t[1];return e}t("#ddp-preview-window").insertAfter("body > :last-child"),t("#ddp-wl-pop-up").insertBefore("body > #ddp-preview-window"),jQuery.fn.center=function(){return this.css("position","absolute"),this.css("top",jQuery(window).height()/10+ +jQuery(window).scrollTop()+"px"),this.css("left",(jQuery(window).width()-this.outerWidth())/2+jQuery(window).scrollLeft()+"px"),this},t("#ddp-preview").on("click",function(){t("button#ddp_wp_content-tmce")[0].click(),t("#ddp-preview-window .ddp_wl_contact_page").html('<div id="ddp-preview-close">×</div>'),t("#ddp-preview-window .ddp_wl_contact_page #ddp-preview-close").after(tinymce.get("ddp_wp_content").getContent()),jQuery("#ddp-preview-window").center(),t("#ddp-preview-window").show(),t("#ddp-preview-close").on("click",function(){t("#ddp-preview-window").hide()})}),t("#ddp-preview-close").on("click",function(){t("#ddp-preview-window").hide()}),t("#submit_wl_pop_up").on("click",function(e){e.preventDefault(),ddd_full_stop=0,jQuery(".form-table.ddp_wl label input, .form-table.ddp_wl label textarea, #wp-ddp_wp_content-wrap").each(function(){"wp-ddp_wp_content-wrap"!==t(this).attr("id")&&"ddp_plugin_icon"!==t(this).attr("name")&&""===t(this).val()&&(ddd_full_stop=1,t(this).addClass("not-filled"),t(this).siblings(".ddp-error-message").remove(),t(this).after('<span class="ddp-error-message">This field is required</span>'))}),0===ddd_full_stop?(t(this).next().hide(),jQuery("#ddp-wl-pop-up").center(),t("#ddp-wl-pop-up").show()):t(this).next().show()}),t("#ddp-wl-pop-up-close, #ddp-wl-pop-up-close-cancel").on("click",function(){t("#ddp-wl-pop-up").hide()}),t("body .ddp-assistant .loaded_message span.close").on("click",function(){t("body .ddp-assistant .loaded_message").hide()}),t("body .ddp-assistant .saving_message span.close").on("click",function(){t("body .ddp-assistant .saving_message").hide()}),"undefined"==typeof ajaxurl&&(ajaxurl=ddp_wl_options_for_js.ddp_ajax_url),(t("body").hasClass("et-fb")||t("body").hasClass("wp-admin"))&&jQuery.ajax({type:"GET",url:ajaxurl,data:"action=ddp_get_option_wl",success:function(e){"disabled"==e+""?(a(),t(document).on("mouseup",".et-pb-layout-buttons-load",function(){setTimeout(function(){var e=Math.floor(1e6*Math.random()+1);"enabled"===ddp_wl_options_for_js.ddp_status&&"yes"!==ddp_wl_options_for_js.ddp_on_hold_status.replace(/\s/g,"")?ddp_layouts_link="https://ondemand.divi-den.com/new-api-layouts-search-ghaser65/?uid="+e:ddp_layouts_link="https://ondemand.divi-den.com/new-no-api-layouts-search-dngfh4q2/?uid="+e;var a=t(".et-pb-saved-modules-switcher");"on"===ddp_wl_options_for_js.ddp_plugin_setting_tab_position?a.length&&(a.append('<li class="ddp" data-open_tab="ddp-tab" data-layout_type="layout"><a href="#"><img height="25" src="'+ddp_wl_options_for_js.ddp_wl_i_for_js+'" /> <span>'+ddp_wl_options_for_js.ddp_wl_pn_for_js+"</span></a></li>"),t(".et_pb_modal_settings").append('<div class="et-pb-main-settings et-pb-main-settings-full ddp-tab ddp-tab-layout">                                <div class="et-dlib-load-options ddp-replace-content et-fb-checkboxes-category-wrap"><p>                                '+l("Important: if you're replacing the content, please manually clear the layout and update the page, then load the new layout.","ddpro")+'</p></div>                                <iframe id="ondemanIframe" name="ondemandIframe" class="layoutsIframe" src="'+ddp_layouts_link+'"></iframe></div>')):(t("li.et-pb-options-tabs-links-active").removeClass("et-pb-options-tabs-links-active"),t("div.active-container").removeClass("active-container").css("opacity",0),a.prepend('<li class="ddp et-pb-options-tabs-links-active" data-open_tab="ddp-tab" data-layout_type="layout"><a href="#"><img height="25" src="'+ddp_wl_options_for_js.ddp_wl_i_for_js+'" /> <span>'+ddp_wl_options_for_js.ddp_wl_pn_for_js+"</span></a></li>"),t(".et_pb_modal_settings").append('<div class="et-pb-main-settings et-pb-main-settings-full ddp-tab ddp-tab-layout active-container" style="opacity: 1;">                                <div class="et-dlib-load-options ddp-replace-content et-fb-checkboxes-category-wrap"><p>                                '+l("Important: if you're replacing the content, please manually clear the layout and update the page, then load the new layout.","ddpro")+'</p></div>                                <iframe id="ondemanIframe" name="ondemandIframe" class="layoutsIframe" src="'+ddp_layouts_link+'"></iframe></div>'))},200),a()}),t(document).on("mouseup",".et-pb-section-add-saved",function(){setTimeout(function(){jQuery(".et_pb_modal_settings.et_pb_modal_no_tabs").removeClass("et_pb_modal_no_tabs");var e=Math.floor(1e6*Math.random()+1);"enabled"===ddp_wl_options_for_js.ddp_status&&"yes"!==ddp_wl_options_for_js.ddp_on_hold_status.replace(/\s/g,"")?ddp_sections_link="https://ondemand.divi-den.com/sections-search-api-ljljdfre935/?uid="+e:ddp_sections_link="https://ondemand.divi-den.com/sections-search-no-api-asdfv324/?uid="+e,"on"===ddp_wl_options_for_js.ddp_plugin_setting_tab_position?jQuery(".et_pb_modal_settings_container h3").after('                         <ul class="et-pb-options-tabs-links et-pb-saved-modules-switcher">                              <li class="et-pb-saved-module et-pb-options-tabs-links-active"" data-open_tab="et-pb-saved-modules-tab" >                                 <a href="#">'+l("Add From Library","ddpro")+'</a>                                </li>                               <li class="ddp" data-open_tab="ddp-tab" data-layout_type="section"><a href="#">                        <img height="25" src="'+ddp_wl_options_for_js.ddp_wl_i_for_js+'" /> <span>'+ddp_wl_options_for_js.ddp_wl_pn_for_js+'</span></a></li>                         </ul>                           <div class="et-pb-main-settings et-pb-main-settings-full ddp-tab ddp-tab-section"                         style="display:block !important;" ><iframe id="ondemanIframe" name="ondemandIframe" class="sectionsIframe"                         src="'+ddp_sections_link+'"></iframe></div>'):(t("li.et-pb-options-tabs-links-active").removeClass("et-pb-options-tabs-links-active"),t("div.active-container").removeClass("active-container").css("opacity",0),jQuery(".et_pb_modal_settings_container h3").after('                         <ul class="et-pb-options-tabs-links et-pb-saved-modules-switcher">                              <li class="ddp et-pb-options-tabs-links-active" data-open_tab="ddp-tab" data-layout_type="section" style="opacity: 1;"><a href="#">                        <img height="25" src="'+ddp_wl_options_for_js.ddp_wl_i_for_js+'" /> <span>'+ddp_wl_options_for_js.ddp_wl_pn_for_js+'</span></a></li>                         <li class="et-pb-saved-module" data-open_tab="et-pb-saved-modules-tab" >                                 <a href="#">'+l("Add From Library","ddpro")+'</a>                                </li>                           </ul>                           <div class="et-pb-main-settings et-pb-main-settings-full ddp-tab ddp-tab-section active-container"                         style="display:block !important; opacity: 1 !important;" ><iframe id="ondemanIframe" name="ondemandIframe" class="sectionsIframe"                         src="'+ddp_sections_link+'"></iframe></div>'))},200),a()}),t(document).on("mouseup",".et-pb-column .et-pb-insert-module",function(){setTimeout(function(){jQuery(".et_pb_modal_settings.et_pb_modal_no_tabs").removeClass("et_pb_modal_no_tabs");var e=Math.floor(1e6*Math.random()+1);"enabled"===ddp_wl_options_for_js.ddp_status&&"yes"!==ddp_wl_options_for_js.ddp_on_hold_status.replace(/\s/g,"")?ddp_modules_link="https://ondemand.divi-den.com/modules-search-api-fdge43y/?uid="+e:ddp_modules_link="https://ondemand.divi-den.com/modules-search-no-api-33jwer3/?uid="+e,t(".et-pb-options-tabs-links.et-pb-saved-modules-switcher").remove(),"on"===ddp_wl_options_for_js.ddp_plugin_setting_tab_position?jQuery(".et_pb_modal_settings_container h3").after('<ul class="et-pb-options-tabs-links et-pb-saved-modules-switcher"><li class="et-pb-new-module et-pb-options-tabs-links-active data-open_tab="et-pb-all-modules-tab"><a href="#">'+l("New Module","ddpro")+'</a></li><li class="et-pb-saved-module" data-open_tab="et-pb-saved-modules-tab" ><a href="#">'+l("Add From Library","ddpro")+'</a></li><li class="ddp" data-open_tab="ddp-tab" data-layout_type="section"><a href="#"><img height="25" src="'+ddp_wl_options_for_js.ddp_wl_i_for_js+'" /> <span>'+ddp_wl_options_for_js.ddp_wl_pn_for_js+'</span></a></li></ul>                       <div class="et-pb-main-settings et-pb-main-settings-full ddp-tab ddp-tab-module"                     style="display:block !important;" ><iframe id="ondemanIframe" name="ondemandIframe" class="sectionsIframe"                     src="'+ddp_modules_link+'"></iframe></div>'):(t("li.et-pb-options-tabs-links-active").removeClass("et-pb-options-tabs-links-active"),t("div.active-container").removeClass("active-container").css("opacity",0),jQuery(".et_pb_modal_settings_container h3").after('                     <ul class="et-pb-options-tabs-links et-pb-saved-modules-switcher">                      <li class="ddp et-pb-options-tabs-links-active" data-open_tab="ddp-tab" data-layout_type="section"><a href="#">                    <img height="25" src="'+ddp_wl_options_for_js.ddp_wl_i_for_js+'" /> <span>'+ddp_wl_options_for_js.ddp_wl_pn_for_js+'</span></a></li>                         <li class="et-pb-new-module data-open_tab="et-pb-all-modules-tab">                            <a href="#">'+l("New Module","ddpro")+'</a>                        </li>                        <li class="et-pb-saved-module" data-open_tab="et-pb-saved-modules-tab" >                             <a href="#">'+l("Add From Library","ddpro")+'</a>                            </li>                           </ul>                       <div class="et-pb-main-settings et-pb-main-settings-full ddp-tab ddp-tab-module active-container"                      style="display:block !important; opacity: 1 !important;" ><iframe id="ondemanIframe" name="ondemandIframe" class="sectionsIframe"                     src="'+ddp_modules_link+'"></iframe></div>                 '))},200),a()}),setInterval(function(){if(this_column_parent=t("a.modules_all").parents("div#et-fb-settings-column"),t(".ddp").length<=0&&this_column_parent.hasClass("et-fb-modal-settings--modules_all")&&!this_column_parent.hasClass("et-fb-tooltip-modal--load_layout")&&!this_column_parent.hasClass("et_fb_add_row_modal")){var e=Math.floor(1e6*Math.random()+1);"enabled"===ddp_wl_options_for_js.ddp_status&&"yes"!==ddp_wl_options_for_js.ddp_on_hold_status.replace(/\s/g,"")?(ddp_sections_link="https://ondemand.divi-den.com/sections-search-api-ljljdfre935/?uid="+e,ddp_modules_link="https://ondemand.divi-den.com/modules-search-api-fdge43y/?uid="+e):(ddp_sections_link="https://ondemand.divi-den.com/sections-search-no-api-asdfv324/?uid="+e,ddp_modules_link="https://ondemand.divi-den.com/modules-search-no-api-33jwer3/?uid="+e),"on"===ddp_wl_options_for_js.ddp_plugin_setting_tab_position?(t("a.modules_all").parents(".et-fb-settings-tabs-nav").append('<li class="ddp et-fb-settings-tabs-nav-item" data-open_tab="ddp-tab" data-layout_type="layout"><a href="#">                                <img width="20" style=" margin-bottom: -5px;margin-right: 5px;     margin-top: -3px;" src="'+ddp_wl_options_for_js.ddp_wl_i_for_js+'" /> <span>'+ddp_wl_options_for_js.ddp_wl_pn_for_js+"</span></a></li>"),this_column_parent.hasClass("et_fb_add_section_modal")&&t(".et-fb-settings-options-wrap > .et-fb-settings-options").append('<div class="et-fb-settings-options-tab et-fb-all-modules et-fb-modules-list et-fb-settings-options ddp-tab ddp-tab-section">                                        <iframe id="ondemanIframe" name="ondemandIframe" class="layoutsIframe"                                     src="'+ddp_sections_link+'" style="width: 100%;height: 100%;"></iframe></div>'),!this_column_parent.hasClass("et-fb-modal-add-module-container")||this_column_parent.hasClass("et_fb_add_row_modal")||this_column_parent.hasClass("et_fb_add_section_modal")||t(".et-fb-settings-options-wrap > .et-fb-settings-options").append('<div class="et-fb-settings-options-tab et-fb-all-modules et-fb-modules-list et-fb-settings-options ddp-tab ddp-tab-section ddp-tab-module">                                    <iframe id="ondemanIframe" name="ondemandIframe" class="layoutsIframe"                                 src="'+ddp_modules_link+'" style="width: 100%;height: 100%;"></iframe></div>')):(t("a.modules_all").parents(".et-fb-settings-tabs-nav").prepend('<li class="ddp et-fb-settings-tabs-nav-item et-fb-settings-tabs-nav-item--active" data-open_tab="ddp-tab" data-layout_type="layout"><a href="#">                                <img width="20" style=" margin-bottom: -5px;margin-right: 5px;     margin-top: -3px;" src="'+ddp_wl_options_for_js.ddp_wl_i_for_js+'" /> <span>'+ddp_wl_options_for_js.ddp_wl_pn_for_js+"</span></a></li>"),this_column_parent.hasClass("et_fb_add_section_modal")&&t(".et-fb-settings-options-wrap > .et-fb-settings-options").prepend('<div class="et-fb-settings-options-tab et-fb-all-modules et-fb-modules-list et-fb-settings-options et-fb-settings-options-tab--active ddp-tab ddp-tab-section">                                    <iframe id="ondemanIframe" name="ondemandIframe" class="layoutsIframe"                                     src="'+ddp_sections_link+'" style="width: 100%;height: 100%; opacity:"></iframe></div>'),!this_column_parent.hasClass("et-fb-modal-add-module-container")||this_column_parent.hasClass("et_fb_add_row_modal")||this_column_parent.hasClass("et_fb_add_section_modal")||t(".et-fb-settings-options-wrap > .et-fb-settings-options").prepend('<div class="et-fb-settings-options-tab et-fb-all-modules et-fb-modules-list et-fb-settings-options et-fb-settings-options-tab--active ddp-tab ddp-tab-section ddp-tab-module">                                    <iframe id="ondemanIframe" name="ondemandIframe" class="layoutsIframe"                                 src="'+ddp_modules_link+'" style="width: 100%;height: 100%;"></iframe></div>'),t(".ddp-tab-section").siblings("div").removeClass("et-fb-settings-options-tab--active"),t(".et-fb-settings-tabs-nav li.ddp a").parent("li").siblings().removeClass("et-fb-settings-tabs-nav-item--active"),t(".ddp").parents(".et-fb-settings-tabs-nav").addClass("ddp-tab-parent"),t(".ddp-tab-section").parents("div.et-fb-settings-options").removeClass("ddp-option-parent")),a()}t('li[data-open_tab="ddp-tab"]').length>0&&(t("li.et-fb-settings-options_tab_modules_library").hasClass("et-fb-settings-tabs-nav-item--active")?t("li.et-fb-settings-options_tab_modules_library.et-fb-settings-tabs-nav-item--active").parents("#et-fb-settings-column").find("div.et-fb-settings-options-tab-modules_library").addClass("et-fb-settings-options-tab--active"):t("li.et-fb-settings-options_tab_modules_library.et-fb-settings-tabs-nav-item--active").parents("#et-fb-settings-column").find("div.et-fb-settings-options-tab-modules_library").removeClass("et-fb-settings-options-tab--active"),t("li.et-fb-settings-options_tab_modules_all").hasClass("et-fb-settings-tabs-nav-item--active")?t("li.et-fb-settings-options_tab_modules_all.et-fb-settings-tabs-nav-item--active").parents("#et-fb-settings-column").find("div.et-fb-settings-options-tab-modules_all").addClass("et-fb-settings-options-tab--active"):t("li.et-fb-settings-options_tab_modules_all.et-fb-settings-tabs-nav-item--active").parents("#et-fb-settings-column").find("div.et-fb-settings-options-tab-modules_all").removeClass("et-fb-settings-options-tab--active")),t(".et-fb-main-settings--add_new_module .et-fb-settings-tabs-nav li:not(.ddp) a").on("click",function(){t(".ddp-tab-section").removeClass("et-fb-settings-options-tab--active"),t(this).parent("li.et-fb-settings-tabs-nav-item").siblings("li").removeClass("et-fb-settings-tabs-nav-item--active"),t(this).parent("li.et-fb-settings-tabs-nav-item").addClass("et-fb-settings-tabs-nav-item--active"),t(this).parents(".et-fb-main-settings").find(".ddp-option-parent").removeClass("ddp-option-parent"),t("a.modules_all").parents("#et-fb-settings-column").removeClass("ddp-column-parent"),t(this).parents(".et-fb-settings-tabs-nav").removeClass("ddp-tab-parent")}),t(".et-fb-main-settings--add_new_module .et-fb-settings-tabs-nav li.ddp a").on("click",function(e){e.preventDefault(),t(this).parent("li.et-fb-settings-tabs-nav-item").siblings().removeClass("et-fb-settings-tabs-nav-item--active"),t(".ddp-tab-section").siblings("div").removeClass("et-fb-settings-options-tab--active"),t(this).parent("li.et-fb-settings-tabs-nav-item ").addClass("et-fb-settings-tabs-nav-item--active"),t(".ddp-tab-section").addClass("et-fb-settings-options-tab--active"),t(".ddp-tab-section").parents("div.et-fb-settings-options-wrap").addClass("ddp-option-parent"),t("a.modules_all").parents("#et-fb-settings-column").addClass("ddp-column-parent"),t(this).parents(".et-fb-settings-tabs-nav").addClass("ddp-tab-parent")}),t(".et-fb-main-settings--add_new_module .et-fb-settings-tabs-nav li.ddp").hasClass("et-fb-settings-tabs-nav-item--active")?(t(".ddp-tab-section").parents("div.et-fb-settings-options-wrap").hasClass("ddp-option-parent")||t(".ddp-tab-section").parents("div.et-fb-settings-options-wrap").addClass("ddp-option-parent"),t("a.modules_all").parents("#et-fb-settings-column").hasClass("ddp-column-parent")||t("a.modules_all").parents("#et-fb-settings-column").addClass("ddp-column-parent"),t(".et-fb-main-settings--add_new_module .et-fb-settings-tabs-nav li.ddp").parents(".et-fb-settings-tabs-nav").hasClass("ddp-tab-parent")||t(".et-fb-main-settings--add_new_module .et-fb-settings-tabs-nav li.ddp").parents(".et-fb-settings-tabs-nav").addClass("ddp-tab-parent")):(t(".ddp-tab-section").parents("div.et-fb-settings-options-wrap").hasClass("ddp-option-parent")&&t(".ddp-tab-section").parents("div.et-fb-settings-options-wrap").removeClass("ddp-option-parent"),t("a.modules_all").parents("#et-fb-settings-column").hasClass("ddp-column-parent")&&t("a.modules_all").parents("#et-fb-settings-column").removeClass("ddp-column-parent"),t(".et-fb-main-settings--add_new_module .et-fb-settings-tabs-nav li.ddp").parents(".et-fb-settings-tabs-nav").hasClass("ddp-tab-parent")&&t(".et-fb-main-settings--add_new_module .et-fb-settings-tabs-nav li.ddp").parents(".et-fb-settings-tabs-nav").addClass("ddp-tab-parent"))},300)):a()},error:function(t){console.log("WL ERROR "),console.log(t)}}),setInterval(function(){t("iframe#ondemandIframe.settingsIframe").length&&a()},1e3),t(".ddp-assistant .yes_no_button").each(function(){var e=t(this),a=e.is(":checked"),d=a?"et_pb_on_state":"et_pb_off_state",s=t(t("#epanel-yes-no-button-template").html()).find(".et_pb_yes_no_button").addClass(d);e.hide().after(s),"et_pb_static_css_file"===e.attr("id")&&(e.parent().addClass(d).next().addClass("et_pb_clear_static_css").on("click",function(){epanel_clear_static_css(!1,!0)}),a||e.parents(".et-epanel-box").next().hide())}),t(".ddp_settings.save_settings input#submit").on("click",function(e){e.preventDefault(),t(".ddp-archive-settings .et-epanel-box select").each(function(){var e=t(this).attr("id"),a=t(this).val();jQuery.ajax({type:"POST",url:ajaxurl,data:"action=ddp_update_option&ddp_option="+e+"&ddp_option_val="+a+"&ddp_nonce="+ddp_wl_options_for_js.ddp_nonce,success:function(t){window.location.reload()},error:function(t){}})})}),t(".ddp-assistant .et-box-content").on("click",".et_pb_yes_no_button",function(e){e.preventDefault();var d=t(this),s=d.parents(".et-box-content"),n=s.find('input[type="checkbox"]'),i=s.find(".et_pb_yes_no_button");if($ddp_option=s.find("input").attr("name"),i.toggleClass("et_pb_on_state et_pb_off_state"),n.is(":checked")?n.prop("checked",!1):n.prop("checked",!0),d.hasClass("et_pb_on_state")){if(ajax_value="enabled",d.hasClass("ddp_enable")){var o=Math.floor(1e6*Math.random()+1);"enabled"===ddp_wl_options_for_js.ddp_status&&"yes"!==ddp_wl_options_for_js.ddp_on_hold_status.replace(/\s/g,"")?ddp_layouts_link="https://ondemand.divi-den.com/new-api-layouts-search-ghaser65/?uid="+o:ddp_layouts_link="https://ondemand.divi-den.com/new-no-api-layouts-search-dngfh4q2/?uid="+o,t('<iframe id="ondemanIframe" name="ondemandIframe" src="'+ddp_layouts_link+'"></iframe>').insertAfter(".ddp-assistant hr"),a()}}else ajax_value="disabled";0===ddd_full_stop&&jQuery.ajax({type:"POST",url:ajaxurl,data:"action=ddp_update_option&ddp_option="+$ddp_option+"&ddp_option_val="+ajax_value+"&ddp_nonce="+ddp_wl_options_for_js.ddp_nonce,success:function(t){},error:function(t){}})}),t(".main > div:not(.ddp-wl-dash) .ddp-accordion .ddp-accordion-header").click(function(){t(this).next(".ddp-accordion-content").slideToggle("fast"),t(this).parent(".ddp-accordion").toggleClass("closed").toggleClass("opened"),t(".ddp-accordion.opened h3 span").html("–"),t(".ddp-accordion.closed h3 span").html("+")}),t(".main > div.ddp-wl-dash .ddp-accordion .ddp-accordion-header .et-box-title").click(function(){t(this).parents(".ddp-accordion-header").next(".ddp-accordion-content").slideToggle("fast"),t(this).parents(".ddp-accordion").toggleClass("closed").toggleClass("opened"),t(".ddp-accordion.opened h3 span").html("–"),t(".ddp-accordion.closed h3 span").html("+")}),setTimeout(function(){t(".ddp-assistant.activated h2.nav-tab-wrapper").length>0&&(t("div[data-dismissible=disable-ddpro-cache-notice-forever]").insertAfter(".ddp-assistant.activated h2.nav-tab-wrapper"),t("div[data-dismissible=disable-ddpro-cache-notice-forever]").show())},300),setInterval(function(){t("iframe#ondemanIframe").length>0&&(t("div[data-dismissible=disable-ddpro-cache-notice-forever]:not(.shown)").insertBefore("iframe#ondemanIframe"),t("div[data-dismissible=disable-ddpro-cache-notice-forever]:not(.shown)").show(),t("div[data-dismissible=disable-ddpro-cache-notice-forever]").addClass("shown")),t("div.ddpdm-active-notice").length>0&&t("div[data-dismissible=disable-ddpwpd-active-notice-forever]").remove()},100),t('input[name="ddp_plugin_name"]').alphanum({allowSpace:!0,allowUpper:!0}),t("input#ddp_plugin_setting_tab_position").length>0&&(jQuery.ajax({type:"GET",url:ajaxurl,data:"action=ddp_get_option_ddp_plugin_setting_tab_position",success:function(e){"on"===e?t("input#ddp_plugin_setting_tab_position").prop("checked",!0):t("input#ddp_plugin_setting_tab_position").prop("checked",!1)},error:function(t){}}),t("input#ddp_plugin_setting_tab_position").on("change",function(){var e=t(this).attr("id");!0===t(this).prop("checked")?t(this).val("on"):t(this).val("off");var a=t(this).val();jQuery.ajax({type:"POST",url:ajaxurl,data:"action=ddp_update_option&ddp_option="+e+"&ddp_option_val="+a+"&ddp_nonce="+ddp_wl_options_for_js.ddp_nonce,success:function(t){},error:function(t){}})}));var s,n=d().tab,i=d().page;if(t(".toplevel_page_divi_den_pro_dashboard ul.wp-submenu-wrap li a").each(function(){t(this).removeClass("current"),t(this).closest("li").removeClass("current"),t(this).attr("href").split("&tab=")[1]===n&&void 0!==n&&(t(this).addClass("current"),t(this).closest("li").addClass("current")),"divi_den_pro_dashboard"===i&&void 0===n&&t("li.toplevel_page_divi_den_pro_dashboard li.wp-first-item").addClass("current")}),"API Key"===t(".ddp-assistant .nav-tab-active").text()){const{__:e,_x:a,_n:d,_nx:s}=wp.i18n;t(".ddp-assistant .main > *").wrapAll('<div class="ddp-api-dash"><div class="ddp-columns"></div></div>'),t(".ddp-assistant .main .ddp-columns > :nth-child(n+9)").wrapAll('<div class="ddp-second-column ddp-hidden"></div>'),t(".ddp-assistant .main .ddp-columns > :nth-child(-n+8)").wrapAll('<div class="ddp-first-column"></div>'),t('<p class="ddp-deactivate-warning">'+e("Caution: While a domain is not actively registered, some plugin functions will not be available. Live layouts and modules may be affected. Proceed with caution.","ddpro")+"</p>").insertAfter(".ddp-assistant.activated:not(.inactive_on_hold) .ddp-first-column p.submit input#submit")}if(t(".ddp-assistant .nav-tabs-subtabs a").each(function(){t(this).hasClass("nav-tab-active")&&(t(".ddp-assistant .nav-tab.ddp_advanced").addClass("nav-tab-active"),t(".ddp-assistant .nav-tabs-subtabs").show())}),t(".ddp-assistant .nav-tab.ddp_advanced").hasClass("nav-tab-active")?t(".ddp-assistant .nav-tabs-subtabs").show():t(".ddp-assistant .nav-tabs-subtabs").hide(),t(".ddp-assistant .nav-tabs-subtabs-theme-builder a").each(function(){t(this).hasClass("nav-tab-active")&&(t(".ddp-assistant .nav-tab.ddp_theme_builder").addClass("nav-tab-active"),t(".ddp-assistant .nav-tabs-subtabs--theme-builder").show())}),t(".ddp-assistant .nav-tab.ddp_theme_builder").hasClass("nav-tab-active")?t(".ddp-assistant .nav-tabs-subtabs-theme-builder").show():t(".ddp-assistant .nav-tabs-subtabs-theme-builder").hide(),t(".ddp-assistant .nav-tab.ddp_advanced").length>0){if(s=t(".ddp-assistant .nav-tab.ddp_advanced").attr("href"))var o=s.replace("ddp_advanced","ddp_wl");t(".ddp-assistant .nav-tab.ddp_advanced").attr("href",o)}(t(".ddp-assistant .nav-tab.ddp_theme_builder").length>0&&((s=t(".ddp-assistant .nav-tab.ddp_theme_builder").attr("href"))&&(o=s.replace("ddp_theme_builder","ddp_divi_theme_builder")),t(".ddp-assistant .nav-tab.ddp_theme_builder").attr("href",o)),t(".ddp-assistant.on_hold:not(.activated) .nav-tab.ddp_subscription_on_hold").length>0)&&((s=t(".ddp-assistant .nav-tab.ddp_theme_builder").attr("href"))&&(o=s.replace("ddp_divi_theme_builder","ddp_subscription_on_hold")),t(".ddp-assistant .nav-tab.ddp_theme_builder").attr("href",o));if(t(".ddp-assistant.on_hold:not(.activated) .nav-tab.ddp_subscription_on_hold").length>0){if("ddp_divi_theme_builder"===n){let t=window.location.href.replace("ddp_divi_theme_builder","ddp_subscription_on_hold");window.location.href=t}if("ddp_settings"===n){let t=window.location.href.replace("ddp_settings","ddp_subscription_on_hold");window.location.href=t}}function p(){if(t(".ddp-assistant").width()>0){let e=0,a=t("body").height(),d=t(".ddp-assistant > h1").outerHeight(),s=t(".ddp-assistant > h2").outerHeight(),n=t("#wpfooter").outerHeight();if(t(".ddp-php-templates").width()>0){let i=t(".nav-tabs-subtabs").outerHeight();e=a-d-s-n-(t(".ddp-first-column > p").outerHeight()+t(".ddp-first-column > a").outerHeight()+40)-i-60}else e=a-d-s-n-10;0!==e&&t("body .ddp-assistant div.main iframe:not(.ddp-youtube):not(.ddp-support-frame):not(#ddp_wp_content_ifr)").height(e)}}t(".ddp-assistant.on_hold.activated.inactive_on_hold .nav-tab.ddp_subscription_on_hold").length>0&&t(".ddp-assistant.on_hold.activated.inactive_on_hold .nav-tab.ddp_subscription_on_hold").remove(),p(),window.addEventListener("resize",function(t){p()}),t(".form-table.ddp_wl th div.ddp-info-icon").on("click",function(){t(this).siblings("span").toggleClass("ddp-info-span-show")});const{__:l,_x:_,_n:r,_nx:c}=wp.i18n;t(".ddp-assistant.activated:not(.inactive_on_hold) .ddp-api-dash p.submit input#submit").val(l("Remove this domain","ddpro")),t(".ddp-assistant.activated .ddp-api-dash p.submit input#submit").addClass("ddp-api-deactivate"),t(".ddp-assistant.activated .ddp-api-dash .ddp-first-column p.submit input#submit.ddp-api-deactivate").on("click",function(e){e.preventDefault(),confirm("Caution: While a domain is not actively registered, some plugin functions will not be available. Live layouts and modules may be affected. Proceed with caution. Remove this domain?")&&(t(".ddp-assistant.activated .ddp-api-dash .et_pb_on_value")[0].click(),t(".ddp-assistant.activated .ddp-second-column input.button.ddp-api-deactivate")[0].click())}),t(".ddp-assistant .ddp_divi_latest_feed").length>0&&t(".ddp-assistant .ddp_divi_latest_feed .ddp-first-column").masonry({itemSelector:".ddp-latest-feed-item"}),t('body.toplevel_page_et_divi_options > .notice, body[class*="divi_page_"] > .notice').insertBefore("#wpbody-content #wrapper")});
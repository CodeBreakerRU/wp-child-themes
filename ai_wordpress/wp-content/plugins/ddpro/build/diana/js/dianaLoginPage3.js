jQuery(document).ready(function(){!function(o){var n=o("body.login #login form label[for='user_login']").text(),l=o("body.login #login form label[for='user_pass']").text(),e=o("body.login #login form label[for='user_email']").text();o("body.login #login form label[for='user_login']").contents().filter(function(){return 1!==this.nodeType}).remove(),o("body.login #login form label[for='user_pass']").contents().filter(function(){return 1!==this.nodeType}).remove(),o("body.login #login form label[for='user_email']").contents().filter(function(){return 1!==this.nodeType}).remove(),o("body.login #login form input#user_login").attr("placeholder",n),o("body.login #login form input#user_pass").attr("placeholder",l),o("body.login #login form input#user_email").attr("placeholder",e);var i=o("body.login #login #nav").html().replace("|","");o("body.login #login #nav").html(i),o("body.login #login #nav a:last-child").addClass("lost_pasword").insertBefore(o(".body.login #login #nav a:first-child")),o('<div class="register_container"></div>').appendTo(o("body.login #login #nav")),o("body.login #login #nav a:not('.lost_pasword')").appendTo(o("body.login #login #nav .register_container"))}(jQuery)});
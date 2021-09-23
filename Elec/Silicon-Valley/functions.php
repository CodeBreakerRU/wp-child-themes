<?php

function remove_footer_admin () {
echo 'Web Development RU';
}
add_filter('admin_footer_text', 'remove_footer_admin');
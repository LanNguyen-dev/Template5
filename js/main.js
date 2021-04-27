$(function(){var html=$('html, body'),navContainer=$('.nav-container'),navToggle=$('.nav-toggle'),navDropdownToggle=$('.has-dropdown');navToggle.on('click',function(e){var $this=$(this);e.preventDefault();$this.toggleClass('is-active');navContainer.toggleClass('is-visible');html.toggleClass('nav-open')});navDropdownToggle.on('click',function(){var $this=$(this);$this.toggleClass('is-active').children('ul').toggleClass('is-visible')});navDropdownToggle.on('click','*',function(e){e.stopPropagation()})})
if (window.innerWidth > 768) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('fixed');
        } else {
            $('.sticky-header').removeClass('fixed');
        }
    });
}
if (window.innerWidth > 320) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('fixed');
        } else {
            $('.sticky-header').removeClass('fixed');
        }
    });
}
if (window.innerWidth < 1200) {
    $(document).ready(function() {
        $('.nav-toggle').click(function() {
            $('.header').toggleClass('z_index');
            $('.opacity_menu').addClass('open_opacity');
        });
        $('.btn_filter').click(function() {
            $('.group_filter').toggleClass('is-visible');
            $('.opacity_menu').addClass('open_opacity');
        });
        $('.opacity_menu').click(function() {
            $('.nav-container').removeClass('is-visible');
            $('.group_filter').removeClass('is-visible');
            $('.opacity_menu').removeClass('open_opacity');
            $('.header').removeClass('z_index');
        });
    });
}
$(document).ready(function() {
    $('.toggle_menu').click(function() {
        $(this).parent().toggleClass('active');
    });
    $('.toggle_cate').click(function() {
        $('.cate_child_new').toggleClass('active');
    });
    $('.cart_top').click(function() {
        $('.show_cart').toggleClass('active');
        $('.opacity_menu').addClass('open_opacity');
    });
    $('.icon_search').click(function() {
        $('.search_pc').toggleClass('is-visible');
        $('.opacity_menu').addClass('open_opacity');
    });
    $('.opacity_menu').click(function() {
        $('.show_cart').removeClass('active');
        $('.search_pc').removeClass('is-visible');
        $('.opacity_menu').removeClass('open_opacity');
    });
    $('.icon_close').click(function() {
        $('.opacity_menu').click();
    });
    
    if (window.innerWidth > 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 400) {
                $('#header').addClass('show_active');
            }else{
                $('#header').removeClass('show_active');
            }
        });
    }
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >=200) {
            $('#go_top').show();
        }
        else {
            $('#go_top').hide();
        }
    });
    if (window.innerWidth > 991) {
        $('.item_dropdown').addClass('in');
    }
    if (window.innerWidth < 768) {
        $('.nav-toggle').click(function(e) {
            e.preventDefault();
            $('.box_menu_left').addClass('is-visible');
            $('.bg_opacity').show();
        });
        $('.close_box').click(function(e) {
            e.preventDefault();
            $('.bg_opacity').hide();
            $('.box_menu_left').removeClass('is-visible');
            $('.nav-container').removeClass('is-visible');
        });
        $('.title_ft').addClass('openmenu');
        $('.list_col').addClass('collapse');
    }

    if (window.innerWidth < 768) {
        // $('.slider_tab').addClass('owl-carousel');
        $('.tab-link').addClass('item');

    }
    $('.open-filters').click(function() {
        $('.group_filter_all').toggleClass('is-visible');
        $('.open-filters').toggleClass('is-visible');
    });
});


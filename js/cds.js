var square_element               = $('.main_square');
var square_elemen_divmenu        = $('.main_square_divmenu');
var square_elemen_menu           = $('.main_square_menu');
var square_elemen_menu_item      = $('.main_square_menu>li');
var square_elemen_menu_itema     = $('.main_square_menu>li>a');
var square_elemen_menu_item_lchld= $('.main_square_menu>li:last-child');
var diamond_element              = $(".main_diamond");
var diamond_element_description  = $(".main_diamond_description");
var mdd_brd                      = $(".mdd_brd");
var close_description            = $('.close_window');

var gtop_element                 = $('.GTop');
var tlc_element                  = $(".tlc");
var gbottom_element              = $('.GBottom');
var blc_element                  = $(".blc");

var footer_element               = $('.footer');
var content_element              = $('.content');

var diamond_menu                 = $('.diamond_menu');
var diamond_menu_item            = $('.menu_item a img');

var description_window_en = 0;

var mrgl;
var mrgb;
var dmih; /*daimond menu item height */
var mr_diamond_element;


var margin_map_top  = [];
var margin_map_left = [];

var resize_blc = function(){

    var minheight = 365;
    var minwidth  = 470;

    $(document.body).css( {'min-width': minwidth,'min-height': minheight});
    $('.bone').css( {'min-width': minwidth,'min-height': minheight});

    var realheight = $(window).height();

    if( realheight< minheight){ realheight= minheight}

    var content_element_wd = realheight- footer_element.height();

    content_element.css('height', content_element_wd +'px');

    square_element.css('height', content_element.height() + 20);
    square_element.css('width',  square_element.height());

    var d_diamond = square_element.height();                       /*ƒË‡„ÓÌ‡Î¸ ÓÏ·‡*/

    var w_diamond = d_diamond / Math.sqrt(2);                      /*—ÚÓÓÌ‡ ÓÏ·‡*/
    var delta_diamond = (square_element.height() - w_diamond)/2;   /*¬ÂÎË˜ËÌ‡ ÒÏÂ˘ÂÌËˇ*/

    diamond_element.css({ 'left': delta_diamond, 'top': delta_diamond, 'right': delta_diamond, 'bottom': delta_diamond});



    var h_gtop    = Math.sqrt( Math.pow((w_diamond/2), 2) - (Math.pow(square_element.height()/2, 2) /4)); /*‚˚ÒÓÚ‡ ‡‚ÌÓ·Â‰ÂÌÌÓ„Ó ÚÂÛ„ÓÎ¸ÌËÍ‡*/
    var h_gbottom = content_element.height() - h_gtop;

    gtop_element.css('height', h_gtop + 'px');
    gbottom_element.css( 'height', h_gbottom + 'px');
    gbottom_element.css( 'top', h_gtop);

    tlc_element.css( 'border-width', gtop_element.height() + 1 + 'px');
    tlc_element.css( 'width', square_element.css('margin-left'));
    blc_element.css( 'border-width', gbottom_element.height() + 1 + 'px');

    var w_blc_element = tlc_element.width() + gtop_element.height() + Math.sqrt( Math.pow( (square_element.height()*Math.sqrt(2) - w_diamond/2) ,2) - Math.pow( gbottom_element.height(), 2)) - gbottom_element.height() - 40;

    blc_element.css( 'width', w_blc_element + 'px');

/* œŒ—“–Œ≈Õ»≈ Ã≈Õﬁ */

        mrgl = diamond_menu.width() *0.05/3;
        mrgb = diamond_menu.height()*0.05/3;

        diamond_menu_item.css({'height': diamond_menu.height()*0.95/4, 'width': diamond_menu.width()*0.95/4});
        $('.itm9 a img').css({'height': diamond_menu.height()*0.95/2 + mrgl, 'width': diamond_menu.width()*0.95/2 + mrgb});

        $('.itm1').css( {'top':   0,                                    'left':  0});
        $('.itm2').css( {'top':   0,                                    'left':  diamond_menu_item.height() + mrgl});
        $('.itm3').css( {'top':   0,                                    'left': (diamond_menu_item.height() + mrgl)*2});
        $('.itm4').css( {'top':   0,                                    'left': (diamond_menu_item.height() + mrgl)*3});
        $('.itm5').css( {'top':   diamond_menu_item.height() + mrgb,    'left':  0});
        $('.itm6').css( {'top':   diamond_menu_item.height() + mrgb,    'left':  diamond_menu_item.height() + mrgl});
        $('.itm7').css( {'top':   diamond_menu_item.height() + mrgb,    'left': (diamond_menu_item.height() + mrgl)*2});
        $('.itm8').css( {'top':   diamond_menu_item.height() + mrgb,    'left': (diamond_menu_item.height() + mrgl)*3});
        $('.itm9').css( {'top':  (diamond_menu_item.height() + mrgb)*2, 'left':  0});
        $('.itm10').css( {'top': (diamond_menu_item.height() + mrgb)*2, 'left': (diamond_menu_item.height() + mrgl)*2});
        $('.itm11').css( {'top': (diamond_menu_item.height() + mrgb)*2, 'left': (diamond_menu_item.height() + mrgl)*3});
        $('.itm12').css( {'top': (diamond_menu_item.height() + mrgb)*3, 'left': (diamond_menu_item.height() + mrgl)*2});
        $('.itm13').css( {'top': (diamond_menu_item.height() + mrgb)*3, 'left': (diamond_menu_item.height() + mrgl)*3});

        margin_map_top = [ 0,0,0,0, diamond_menu_item.height() + mrgb, diamond_menu_item.height() + mrgb, diamond_menu_item.height() + mrgb, diamond_menu_item.height() + mrgb,
            (diamond_menu_item.height() + mrgb)*2, (diamond_menu_item.height() + mrgb)*2, (diamond_menu_item.height() + mrgb)*2,
            (diamond_menu_item.height() + mrgb)*3, (diamond_menu_item.height() + mrgb)*3];

        margin_map_left = [0, diamond_menu_item.height() + mrgl, (diamond_menu_item.height() + mrgl)*2, (diamond_menu_item.height() + mrgl)*3,
                           0, diamond_menu_item.height() + mrgl, (diamond_menu_item.height() + mrgl)*2, (diamond_menu_item.height() + mrgl)*3,
                           0, (diamond_menu_item.height() + mrgl)*2, (diamond_menu_item.height() + mrgl)*3, (diamond_menu_item.height() + mrgl)*2, (diamond_menu_item.height() + mrgl)*3];


        dmih= diamond_menu_item.height();

        diamond_element_description.css({'left': 30+'%', 'top': 50+'%'});


    if (description_window_en == 1)                                     /* Ã≈Õﬁ –¿— –€“Œ */
    {
        ths_obj.css({'height': diamond_menu.height(), 'width': diamond_menu.width(), 'top': 0, 'left': 0, 'z-index': 5});
        ths_obj.parent().parent().css({'top': 0, 'left': 0, 'z-index': 5});

        mr_diamond_element = diamond_element.css('left').replace('px','')*2;

        diamond_left = diamond_element.css('left');
        diamond_right = diamond_element.css('right');
        diamond_top = diamond_element.css('top');
        diamond_bottom= diamond_element.css('bottom');

        diamond_element.css({'left': diamond_element.css('left').replace('px','')- mr_diamond_element, 'right': diamond_element.css('right').replace('px','') - - mr_diamond_element}, 1000);
        diamond_element_description.css({'left': -mr_diamond_element/2, 'top': gtop_element.height() + 1, 'right': -mr_diamond_element/2, 'bottom': mr_diamond_element/2});
        mdd_brd.css({'border-width': diamond_element_description.height(), 'width': square_element.height() - diamond_element_description.height()});
    }

    square_elemen_divmenu.css({'height': diamond_menu_item.height()*0.83, 'top': gtop_element.height()});
    square_elemen_menu_item.css('width', diamond_menu_item.width()*0.83);
    square_elemen_menu.css( 'width', square_elemen_divmenu.height()*4+ 200);
    square_elemen_menu_itema.css( {'height': diamond_menu.height()*0.83, 'width': diamond_menu.width()});

    var mrsquare_elemen_menu_item = (square_elemen_menu.width() - square_elemen_menu_item.width()*4 - 40)/4;

    square_elemen_menu_item.css('margin-right', mrsquare_elemen_menu_item);
    square_elemen_menu_item_lchld.css('margin-right', 0);

    if (d_diamond > footer_element.width())
    {
        var marginleft = (d_diamond - footer_element.width())/2;
        content_element.css('margin-left', -marginleft +'px');
    }
    else
    {
        content_element.css('margin-left', 0);
    }
    content_element.css('min-width', 100 + '%' + marginleft);
};

var ths_height = 0;
var ths_top = 0;
var ths_left = 0;

var diamond_left = 0;
var diamond_right = 0;
var diamond_top = 0;
var diamond_bottom = 0;

var descr_left   = 0;
var descr_top    = 0;
var descr_right  = 0;
var descr_bottom = 0;

var ths_obj;

/* –¿— –€“»≈ Ã≈Õﬁ */

diamond_menu_item.click( function(){

    if( description_window_en== 0)
    {
        description_window_en= 1;

        ths_height = $(this).css('height');

        ths_obj = $(this);

        ths_top = $(this).parent().parent().css('top');
        ths_left = $(this).parent().parent().css('left');

        ths_obj.parent().parent().css( {'z-index': 10});

        ths_obj.parent().parent().animate( {'top': 0, 'left': 0}, 500, function(){

        ths_obj.animate({'height': diamond_element.height(), 'width': diamond_element.height()}, 1000,
            function()
            {
                diamond_element.rotate( {duration: 500, angle: -45, animateTo: 0});

                mr_diamond_element = diamond_element.css('left').replace('px','')*2;

                diamond_left = diamond_element.css('left');
                diamond_right = diamond_element.css('right');
                diamond_top = diamond_element.css('top');
                diamond_bottom= diamond_element.css('bottom');

                diamond_element.animate({'left': diamond_element.css('left').replace('px','')- mr_diamond_element, 'right': diamond_element.css('right').replace('px','') - - mr_diamond_element}, 1000);

                descr_left   = diamond_element_description.css('left');
                descr_top    = diamond_element_description.css('top');
                descr_right  = diamond_element_description.css('right');
                descr_bottom = diamond_element_description.css('bottom');

                diamond_element_description.css({'display': 'inline-block'});
                diamond_element_description.animate({'left': -mr_diamond_element/2, 'top': gtop_element.height() + 1, 'right': -mr_diamond_element/2, 'bottom': mr_diamond_element/2}, 1000,
                function(){
                   mdd_brd.animate({'border-width': diamond_element_description.height(), 'width': square_element.height() - diamond_element_description.height()}, 250);
                });

            });

        });

        square_elemen_divmenu.hide( 500);
    }

});

/* «¿ –€“»≈ Ã≈Õﬁ */

close_description.click( function(){

    if( description_window_en == 1) {
        description_window_en = 0;

        mdd_brd.animate({'border-width': 0, 'width': 0}, 200,
            function () {
                diamond_element_description.animate({
                        'left': descr_left,
                        'top': descr_top,
                        'right': descr_right,
                        'bottom': descr_bottom
                    }, 1000,
                    function () {

                        diamond_element_description.css({'display': 'none'});

                        var item_top;
                        var item_left;

                        if (ths_obj.parent().parent().is('.itm9')) {
                            dmih = diamond_menu.height() * 0.95 / 2 + mrgl;
                        }

                        if (ths_obj.parent().parent().is('.itm1')) {
                            item_top = margin_map_top[0];
                            item_left = margin_map_left[0];
                        }
                        if (ths_obj.parent().parent().is('.itm2')) {
                            item_top = margin_map_top[1];
                            item_left = margin_map_left[1];
                        }
                        if (ths_obj.parent().parent().is('.itm3'))
                        {
                            item_top = margin_map_top[2];
                            item_left= margin_map_left[2];
                        }
                        if ( ths_obj.parent().parent().is('.itm4'))
                        {
                            item_top = margin_map_top[3];
                            item_left= margin_map_left[3];
                        }
                        if ( ths_obj.parent().parent().is('.itm5'))
                        {
                            item_top = margin_map_top[4];
                            item_left= margin_map_left[4];
                        }
                        if ( ths_obj.parent().parent().is('.itm6'))
                        {
                            item_top = margin_map_top[5];
                            item_left= margin_map_left[5];
                        }
                        if ( ths_obj.parent().parent().is('.itm7'))
                        {
                            item_top = margin_map_top[6];
                            item_left= margin_map_left[6];
                        }
                        if ( ths_obj.parent().parent().is('.itm8'))
                        {
                            item_top = margin_map_top[7];
                            item_left= margin_map_left[7];
                        }
                        if ( ths_obj.parent().parent().is('.itm9'))
                        {
                            item_top = margin_map_top[8];
                            item_left= margin_map_left[8];
                        }
                        if ( ths_obj.parent().parent().is('.itm10'))
                        {
                            item_top = margin_map_top[9];
                            item_left= margin_map_left[9];
                        }
                        if ( ths_obj.parent().parent().is('.itm11'))
                        {
                            item_top = margin_map_top[10];
                            item_left= margin_map_left[10];
                        }
                        if ( ths_obj.parent().parent().is('.itm12'))
                        {
                            item_top = margin_map_top[11];
                            item_left= margin_map_left[11];
                        }
                        if ( ths_obj.parent().parent().is('.itm13'))
                        {
                            item_top = margin_map_top[12];
                            item_left= margin_map_left[12];
                        }

                        ths_obj.animate({'height': dmih, 'width': dmih}, 1000, function(){


                            ths_obj.parent().parent().css({ 'z-index': 1});
                            ths_obj.parent().parent().animate( {'left': item_left, 'top': item_top}, 500, function(){

                                diamond_element.rotate({duration: 700, angle: 0, animateTo: -45});
                                setTimeout(function () {
                                    diamond_element.animate({'left': diamond_left, 'right': diamond_right}, 1000,
                                        function () {
                                            $(' a, img', ths_obj).animate({
                                                    'height': ths_height,
                                                    'width': ths_height

                                                }, 1000,
                                                function () {
                                                    ths_obj.animate({
                                                        'top': ths_top,
                                                        'left': ths_left
                                                    }, 1000, function () {
                                                        square_elemen_divmenu.show(250);

                                                    }), 250
                                                });

                                        });
                                }, 250);
                            });
                        });
                    });
            });
    }
});

$(window).load( resize_blc);
$(window).resize( resize_blc);
$(window).on("orientationchange", resize_blc);




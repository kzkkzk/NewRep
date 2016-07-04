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
var diamond_menu_item            = $('.diamond_menu>li');
var diamond_menu_item_lchld      = $('.diamond_menu>li:last-child');
var diamond_menu_item_img        = $('.diamond_menu>li img');
var diamond_menu_video           = $('.diamond_menu_video');

var description_window_en = 0;

var resize_blc = function(){

    var minheight = 365;
    var minwidth  = 470;

    $(document.body).css( {'min-width': minwidth,'min-height': minheight});
    $('.bone').css( {'min-width': minwidth,'min-height': minheight});

    var realheight = $(window).height();
    var realwidth  = $(window).width();

    if( realheight< minheight){ realheight= minheight}

    var content_element_wd = realheight- footer_element.height();

    content_element.css('height', content_element_wd +'px');

    square_element.css('height', content_element.height() + 20);
    square_element.css('width',  square_element.height());

    var d_diamond = square_element.height();                       /*Диагональ ромба*/

    var w_diamond = d_diamond / Math.sqrt(2);                      /*Сторона ромба*/
    var delta_diamond = (square_element.height() - w_diamond)/2;   /*Величина смещения*/

    diamond_element.css({ 'left': delta_diamond, 'top': delta_diamond, 'right': delta_diamond, 'bottom': delta_diamond});



    var h_gtop    = Math.sqrt( Math.pow((w_diamond/2), 2) - (Math.pow(square_element.height()/2, 2) /4)); /*высота равнобедренного треугольника*/
    var h_gbottom = content_element.height() - h_gtop;

    gtop_element.css('height', h_gtop + 'px');
    gbottom_element.css( 'height', h_gbottom + 'px');
    gbottom_element.css( 'top', h_gtop);

    tlc_element.css( 'border-width', gtop_element.height() + 1 + 'px');
    tlc_element.css( 'width', square_element.css('margin-left'));
    blc_element.css( 'border-width', gbottom_element.height() + 1 + 'px');

    var w_blc_element = tlc_element.width() + gtop_element.height() + Math.sqrt( Math.pow( (square_element.height()*Math.sqrt(2) - w_diamond/2) ,2) - Math.pow( gbottom_element.height(), 2)) - gbottom_element.height() - 40;

    blc_element.css( 'width', w_blc_element + 'px');

    diamond_menu.css( 'height', (diamond_element.height() - 30) / 4 );

    var mr_menu_item = ((diamond_menu.width() - diamond_menu.height() * 4) / 4)- 3;

    diamond_element_description.css({'left': delta_diamond*3, 'top': gtop_element.height() + 1, 'right': delta_diamond*3, 'bottom': delta_diamond});

    diamond_menu_item.css( {'height': diamond_menu.height() , 'width': diamond_menu.height(), 'margin-right': mr_menu_item});
    diamond_menu_item_lchld.css('margin-right', 0);

    diamond_menu_item_img.css({'height': diamond_menu.height() , 'width': diamond_menu.height()});

    diamond_menu_video.css('width', diamond_menu_item.width()*2   + diamond_menu_item.css('margin-right').replace('px','')*2);
    diamond_menu_video.css('height', diamond_menu_item.height()*2 + diamond_menu_item.css('margin-right').replace('px','')*2);

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

diamond_menu_item.click( function(){
    description_window_en= 1;
    ths_height = $(this).css('height');

    ths_obj = $(this);

    $(this).css({'height': diamond_element.height(), 'width': diamond_element.height(), 'position': 'absolute'});
    ths_top = $(this).css('top');
    ths_left = $(this).css('top');

    $(this).animate( {'top': 0, 'left': 0, 'opacity': 1}, 500);
    $(' a, img', this).animate({'height': diamond_element.height(), 'width': diamond_element.height()}, 1000,
        function()
        {
            diamond_element.rotate( {duration: 500, angle: -45, animateTo: 0});

            var mr_diamond_element = diamond_element.css('left').replace('px','')*2;

            diamond_left = diamond_element.css('left');
            diamond_right = diamond_element.css('right');
            diamond_top = diamond_element.css('top');
            diamond_bottom= diamond_element.css('bottom');

            diamond_element.animate({'left': diamond_element.css('left').replace('px','')- mr_diamond_element, 'right': diamond_element.css('right').replace('px','') - - mr_diamond_element}, 1000);

            descr_left   = diamond_element_description.css('left');
            descr_top    = diamond_element_description.css('top');
            descr_right  = diamond_element_description.css('right');
            descr_bottom = diamond_element_description.css('bottom');

            diamond_element_description.animate({'left': -mr_diamond_element/2, 'top': gtop_element.height() + 1, 'right': -mr_diamond_element/2, 'bottom': mr_diamond_element/2}, 1000,
            function(){
               mdd_brd.animate({'border-width': diamond_element_description.height(), 'width': square_element.height() - diamond_element_description.height()}, 250);
            });


        });
    square_elemen_divmenu.hide( 500);
});

close_description.click( function(){

    description_window_en= 0;

    mdd_brd.animate({'border-width': 0, 'width': 0}, 200,
        function()
        {
            diamond_element_description.animate({'left': descr_left, 'top': descr_top, 'right': descr_right, 'bottom': descr_bottom}, 1000,
            function()
            {

                ths_obj.css({'height': ths_height, 'width': ths_height});
                diamond_element.rotate({duration: 500, angle: 0, animateTo: -45});
                setTimeout( function ()
                {
                    diamond_element.animate({'left': diamond_left, 'right': diamond_right}, 1000,
                        function()
                        {
                            $(' a, img', ths_obj).animate({'height': ths_height,'width': ths_height,'position': 'relative'}, 1000,
                            function()
                            {
                                    ths_obj.animate({'top': ths_top, 'left': ths_left, 'opacity': 1, position: 'relative'}, 1000, function()
                                    {
                                        square_elemen_divmenu.show( 250);
                                    }), 250
                            });

                        });
                }, 250);




                //      setTimeout(function(){ ths_obj.animate( {'top': ths_top, 'left': ths_left, 'opacity': 1}, 7000)});
            });

        });


  //  ths_obj.animate( {'top': ths_top, 'left': ths_left, 'opacity': 1}, 1500,
    //    function()
      //  {
        //    diamond_element.rotate( {duration: 1000, angle: 0, animateTo: -45});

//            var mr_diamond_element = diamond_element.css('left').replace('px','')*2;

//

  //      });
//    square_elemen_divmenu.show( 1500);
});


$(window).load( resize_blc);
$(window).resize( resize_blc);
$(window).on("orientationchange", resize_blc);
// setInterval( resize_blc, 5000);



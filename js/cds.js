var square_element         = $('.main_square');
var square_elemen_divmenu  = $('.main_square_divmenu');
var square_elemen_menu     = $('.main_square_menu');
var square_elemen_menu_item= $('.main_square_menu>li');
var square_elemen_menu_itema= $('.main_square_menu>li>a')
var square_elemen_menu_item_lchld= $('.main_square_menu>li:last-child');
var diamond_element        = $(".main_diamond");

var gtop_element           = $('.GTop');
var tlc_element            = $(".tlc");
var gbottom_element        = $('.GBottom');
var blc_element            = $(".blc");

var footer_element         = $('.footer');
var content_element        = $('.content');

var diamond_menu           = $('.diamond_menu');
var diamond_menu_item      = $('.diamond_menu>li');
var diamond_menu_item_lchld= $('.diamond_menu>li:last-child');
var diamond_menu_item_img  = $('.diamond_menu>li img');
var diamond_menu_video     = $('.diamond_menu_video');

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

    var w_blc_element = tlc_element.width() + gtop_element.height() + Math.sqrt( Math.pow( (square_element.height()*Math.sqrt(2) - w_diamond/2) ,2) - Math.pow( gbottom_element.height(), 2)) - gbottom_element.height() - 30;

    blc_element.css( 'width', w_blc_element + 'px');

    diamond_menu.css( 'height', (diamond_element.height() - 30) / 4 );

    var mr_menu_item = ((diamond_menu.width() - diamond_menu.height() * 4) / 4)- 3;

    diamond_menu_item.css( {'height': diamond_menu.height() , 'width': diamond_menu.height(), 'margin-right': mr_menu_item});
    diamond_menu_item_lchld.css('margin-right', 0);
    square_elemen_menu_itema.css( {'height': diamond_menu.height(), 'width': diamond_menu.width()});



    diamond_menu_item_img.css({'height': diamond_menu.height() , 'width': diamond_menu.height()});

    diamond_menu_video.css('width', diamond_menu_item.width()*2   + diamond_menu_item.css('margin-right').replace('px','')*2);
    diamond_menu_video.css('height', diamond_menu_item.height()*2 + diamond_menu_item.css('margin-right').replace('px','')*2);

    square_elemen_divmenu.css({'height': diamond_menu_item.height(), 'top': gtop_element.height()});
    square_elemen_menu_item.css('width', diamond_menu_item.width());
    square_elemen_menu.css( 'width', square_elemen_divmenu.height()*4+ 90);

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

$(window).load( resize_blc);
$(window).resize( resize_blc);
$(window).on("orientationchange", resize_blc);
// setInterval( resize_blc, 5000);



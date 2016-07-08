/*ПЕРЕМЕННЫЕ*/

var footer_el= $('.footer');
var content_el= $('.content');
var main_square_el= $('.main_square');

var minheight = 365;     /*ОГРАНИЧЕНИЕ МИНИМАЛЬНОГО РАЗМЕРА САЙТА*/
var minwidth  = 470;

var realheight= 0;      /*РЕАЛЬНЫЙ РАЗМЕР WINDOW*/
var content_el_h= 0;           /*ВЫСОТА КОНТЕНТА*/

$(document.body, '.bone').css( {'min-width': minwidth,'min-height': minheight});


/*ФУНКЦИЯ РЕСАЙЗА WINDOW*/

var resize_window= function()
{
    realheight = $(window).height();
    if( realheight< minheight)
    {
        realheight= minheight;
    }

    /*ВЫСОТА КОНТЕНТА*/
    content_el_h= realheight- footer_el.height();
    content_el.height( content_el_h);



};


/*ПОСТРОЕНИЕ РОМБА*/

var main_diamond_el= $('.main_diamond');
var main_diamond_width= 0; /*СТОРОНА РОМБА*/
var main_diamond_margin= 0; /*СМЕЩЕНИЕ РОМБА ОТНОСИТЕЛЬНО ГЛАВНОГО КВАДРАТА*/

var form_diamond= function()
{
    /*ПОСТРОЕНИЕ ГЛАВНОГО ПРЯМОУГОЛЬНИКА*/
    main_square_el.height( content_el_h+ 20);
    main_square_el.width(  content_el_h+ 20);

    /*ПОСТРОЕНИЕ РОМБА*/
    main_diamond_width= main_square_el.height()/ Math.sqrt(2);  /*Сторона = Диагональ ромба / корень квадратный*/
    main_diamond_margin= (main_square_el.height()- main_diamond_width)/2; /*Смещение = (Диагональ ромба - его ширина)/2*/

    main_diamond_el.css({'left': main_diamond_margin, 'top': main_diamond_margin, 'right': main_diamond_margin, 'bottom':main_diamond_margin});


};

/*ФОРМИРОВАНИЕ ЗАДНЕГО ФОНА*/

var gtop_el= $('.gtop');
var gbottom_el= $('.gbottom');
var tlc_el= $('.tlc');
var blc_el= $('.blc');

var gtop_el_h= 0; /*ВЫСОТА ВЕРХНЕЙ ТРАПЕЦИИ*/
var gbottom_el_h= 0; /*ВЫСОТА НИЖНЕЙ ТРАПЕЦИИ*/
var blc_el_w = 0;   /*ШИРИНА НАЖНЕЙ ТРАПЕЦИИ*/

var form_background= function()
{
    /*ВЫСОТА ВЕРХНЕЙ ТРАПЕЦИИ = высота равнобедренного треугольника= корень квадратный из стороны в квадрате - квадрат основания деленный на 4 */
    gtop_el_h    = Math.sqrt( Math.pow((main_diamond_width/2), 2) - (Math.pow(main_square_el.height()/2, 2) /4));
    /*ВЫСОТА НИЖНЕЙ ТРАПЕЦИИ= высота контента-высота верхней трапеции*/
    gbottom_el_h = content_el.height() - gtop_el_h;

    gtop_el.height( gtop_el_h+ 1);
    gbottom_el.height( gbottom_el_h);
    gbottom_el.css({'top': gtop_el_h});

    tlc_el.css({ 'border-width': gtop_el.height()+ 1, 'width': main_square_el.offset().left});

    /*ШИРИНА НИЖНЕЙ ТРАПЕЦИИ =  ширина верхней трапеции + ширина бордера верхней трапеции*/
    blc_el.css({'width': tlc_el.width()- - tlc_el.css('borderRightWidth').replace('px',''), 'border-width': gbottom_el_h+ 1});

    /*ПОЛОЖЕНИЕ ДИВА С ОПИСАНИЕМ*/
    main_diamond_element_description_el.css( {'top': gtop_el.height(), 'left': tlc_el.width()- - tlc_el.css('borderRightWidth').replace('px','')});
};


/*МЕНЮ РОМБА*/

var diamond_menu_el= $('.diamond_menu');
var diamond_menu_item_el= $('.menu_item');
var diamond_menu_item_el9= $('.menu_item.itm9');

var diamond_menu_marginl= 0; /*СДВИГ ЭЛЕМЕНТОВ МЕНЮ СЛЕВА*/
var diamond_menu_marginb= 0; /*СДВИГ ЭЛЕМЕНТОВ МЕНЮ СНИЗУ*/

var form_diamon_menu= function()
{
    diamond_menu_el.css( {'top': '5%', 'left': '5%', 'bottom': '5%', 'right': '5%'});

    diamond_menu_marginl= diamond_menu_el.width()*0.05/4;
    diamond_menu_marginb= diamond_menu_el.height()*0.05/4;

    diamond_menu_item_el.css({'height': diamond_menu_el.height()*0.95/4, 'width': diamond_menu_el.width()*0.95/4});
    diamond_menu_item_el9.css({'height': diamond_menu_el.height()*0.95/2 + diamond_menu_marginl, 'width': diamond_menu_el.width()*0.95/2 + diamond_menu_marginb});

    var i;
    var mn= 0;

    var marginl= diamond_menu_item_el.height() + diamond_menu_marginl;
    var marginb= diamond_menu_item_el.height() + diamond_menu_marginb;

    for( i=1; i<14; i++ )
    {
        if (i<5)
        {
            $('.menu_item.itm'+i).css({'top': 0, 'left': marginl*mn});
            mn++;

        }
        else if( i>4 && i< 9)
        {
            if (i == 5){ mn= 0}
            $('.menu_item.itm'+i).css({'top': marginb, 'left': marginl*mn});
            mn++;
        }
        else if( i==9){ $('.menu_item.itm'+i).css({'top': marginb*2, 'left': 0});}
        else if( i>9 && i<12)
        {
            if (i == 10){ mn= 2}
            $('.menu_item.itm'+i).css({'top': marginb*2, 'left': marginl*mn});
            mn++;
        }
        else if( i>11 && i<14)
        {
            if (i == 12){ mn= 2}
            $('.menu_item.itm'+i).css({'top': marginb*3, 'left': marginl*mn});
            mn++;
        }
    }

    if( diamond_open == 1)
    {
        menu_item_float_el_img.css({'height': diamond_menu_el.height(), 'width': diamond_menu_el.height()});
    }
};

/*ГЛАВНОЕ МЕНЮ*/

main_square_divmenu_el= $('.main_square_divmenu');
main_square_menu = $('.main_square_menu');
main_square_menu_item= $('.main_square_menu li');
main_square_menu_itemlast= $('.main_square_menu li:last-child');

var main_square_menu_item_mr= 0; /*ОТСТУП СПРАВА МЕЖДУ ЭЛЕМЕНТАМИ*/

var form_mainmenu= function()
{
    main_square_divmenu_el.css({'top': gtop_el_h+ 10});
    main_square_menu.width( main_diamond_width);

    main_square_menu_item.css({ 'width': diamond_menu_item_el.width()*0.8, 'height': diamond_menu_item_el.height()*0.83, 'fontSize': parseFloat(diamond_menu_item_el.width()*0.8)/6+1});

    main_square_menu_item_mr= (main_square_menu.width()- main_square_menu_item.width()*4)/3 - main_square_menu_item.css('borderRightWidth').replace('px','')*4;

    main_square_menu_item.css({'margin-right': main_square_menu_item_mr});
    main_square_menu_itemlast.css({ 'margin-right': 0});
};

/*ОТКРЫТИЕ РОМБА*/


var main_diamond_element_description_el= $('.main_diamond_description');
var mdd_brd_el= $('.mdd_brd');

var ths_obj; /*Переменная текущего item*/
var menu_item_float_el= $('.menu_item_float'); /*Плавающий див для отображения меню*/
var menu_item_float_el_img= menu_item_float_el.find('img'); /*Картинка плавающего дива*/

var diamond_open= 0;  /*триггер на раскрытый ромб*/
var anim_duration= 200; /*Задержка для анимации*/
var marg_diamond= 0; /*Смещение ромба при открытии*/

diamond_menu_item_el.on('click', function()
{
    if( diamond_open== 0)
    {

        ths_obj= $(this);

        main_diamond_element_description_el.css({'bottom': main_diamond_el.css('bottom')});
        mdd_brd_el.css({'border-width': main_diamond_element_description_el.height()});

        menu_item_float_el.css({ 'top': ths_obj.css('top'), 'left': ths_obj.css('left'), 'z-index': 15, 'display': 'inline-block'});
        menu_item_float_el_img.css({ 'width': ths_obj.width(), 'height': ths_obj.height()});
        menu_item_float_el_img.attr('src', ths_obj.find('img').attr('src'));

        menu_item_float_el.animate({'top': 0, 'left': 0}, anim_duration);
        menu_item_float_el_img.animate({'height': diamond_menu_el.height(), 'width': diamond_menu_el.height()}, anim_duration);

        marg_diamond= main_diamond_el.css('left').replace('px','')*2;

        main_diamond_el.animate({'left': main_diamond_el.css('left').replace('px','')- marg_diamond, 'right': main_diamond_el.css('right').replace('px','') - - marg_diamond}, anim_duration,
        function()
        {
            main_diamond_el.rotate( {duration: anim_duration, angle: -45, animateTo: 0});
        }
        );



        diamond_open= 1;




        /*

                mr_diamond_element = diamond_element.css('left').replace('px','')*2;

                diamond_left = diamond_element.css('left');
                diamond_right = diamond_element.css('right');
                diamond_top = diamond_element.css('top');
                diamond_bottom= diamond_element.css('bottom');

                diamond_element.animate({'left': diamond_element.css('left').replace('px','')- mr_diamond_element, 'right': diamond_element.css('right').replace('px','') - - mr_diamond_element}, animation_duration,
                    function()
                    {
                        diamond_element.rotate( {duration: animation_duration, angle: -45, animateTo: 0});
                    });

                setTimeout( function()
                {
                    descr_left   = diamond_element_description.css('left');
                    descr_top    = diamond_element_description.css('top');
                    descr_right  = diamond_element_description.css('right');
                    descr_bottom = diamond_element_description.css('bottom');

                    diamond_element_description.css({'display': 'inline-block'});
                    diamond_element_description.animate({'left': -mr_diamond_element/2, 'top': gtop_element.height() + 1, 'right': -mr_diamond_element/2, 'bottom': mr_diamond_element/2}, animation_duration,
                        function(){
                            mdd_brd.animate({'border-width': diamond_element_description.height(), 'width': square_element.height() - diamond_element_description.height()}, 0);
                        });

                }, animation_duration);

                square_elemen_divmenu.hide( animation_duration);
            }

        */
    }
});


var full_reset= function()
{
    resize_window();
    form_diamond();
    form_background();
    form_diamon_menu();
    form_mainmenu();


};

diamond_menu_item_el.on('mouseover', function()
{
    if( diamond_open == 0)
    {
        $(this).addClass( 'mousehover');
    }
});
diamond_menu_item_el.on( 'mouseout', function()
{
    $(this).removeClass( 'mousehover');
});

$(window).on('load', full_reset);
$(window).on('resize', full_reset);
$(window).on("orientationchange", full_reset);
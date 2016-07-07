/*œ≈–≈Ã≈ÕÕ€≈*/

var footer_el= $('.footer');
var content_el= $('.content');
var main_square_el= $('.main_square');

var minheight = 365;     /*Œ√–¿Õ»◊≈Õ»≈ Ã»Õ»Ã¿À‹ÕŒ√Œ –¿«Ã≈–¿ —¿…“¿*/
var minwidth  = 470;

var realheight= 0;      /*–≈¿À‹Õ€… –¿«Ã≈– WINDOW*/
var content_el_h= 0;           /*¬€—Œ“¿  ŒÕ“≈Õ“¿*/

$(document.body, '.bone').css( {'min-width': minwidth,'min-height': minheight});


/*‘”Õ ÷»ﬂ –≈—¿…«¿ WINDOW*/

var resize_window= function()
{
    realheight = $(window).height();
    if( realheight< minheight)
    {
        realheight= minheight;
    }

    /*¬€—Œ“¿  ŒÕ“≈Õ“¿*/
    content_el_h= realheight- footer_el.height();
    content_el.height( content_el_h);




};


/*œŒ—“–Œ≈Õ»≈ –ŒÃ¡¿*/

var main_diamond_el= $('.main_diamond');
var main_diamond_width= 0; /*—“Œ–ŒÕ¿ –ŒÃ¡¿*/
var main_diamond_margin= 0; /*—Ã≈Ÿ≈Õ»≈ –ŒÃ¡¿ Œ“ÕŒ—»“≈À‹ÕŒ √À¿¬ÕŒ√Œ  ¬¿ƒ–¿“¿*/

var form_diamond= function()
{
    /*œŒ—“–Œ≈Õ»≈ √À¿¬ÕŒ√Œ œ–ﬂÃŒ”√ŒÀ‹Õ» ¿*/
    main_square_el.height( content_el_h+ 20);
    main_square_el.width(  content_el_h+ 20);

    /*œŒ—“–Œ≈Õ»≈ –ŒÃ¡¿*/
    main_diamond_width= main_square_el.height()/ Math.sqrt(2);  /*—ÚÓÓÌ‡ = ƒË‡„ÓÌ‡Î¸ ÓÏ·‡ / ÍÓÂÌ¸ Í‚‡‰‡ÚÌ˚È*/
    main_diamond_margin= (main_square_el.height()- main_diamond_width)/2; /*—ÏÂ˘ÂÌËÂ = (ƒË‡„ÓÌ‡Î¸ ÓÏ·‡ - Â„Ó ¯ËËÌ‡)/2*/

    main_diamond_el.css({'left': main_diamond_margin, 'top': main_diamond_margin, 'right': main_diamond_margin, 'bottom':main_diamond_margin});
};

/*‘Œ–Ã»–Œ¬¿Õ»≈ «¿ƒÕ≈√Œ ‘ŒÕ¿*/

var gtop_el= $('.gtop');
var gbottom_el= $('.gbottom');
var tlc_el= $('.tlc');
var blc_el= $('.blc');

var gtop_el_h= 0; /*¬€—Œ“¿ ¬≈–’Õ≈… “–¿œ≈÷»»*/
var gbottom_el_h= 0; /*¬€—Œ“¿ Õ»∆Õ≈… “–¿œ≈÷»»*/
var blc_el_w = 0;   /*ÿ»–»Õ¿ Õ¿∆Õ≈… “–¿œ≈÷»»*/

var form_background= function()
{
    /*¬€—Œ“¿ ¬≈–’Õ≈… “–¿œ≈÷»» = ‚˚ÒÓÚ‡ ‡‚ÌÓ·Â‰ÂÌÌÓ„Ó ÚÂÛ„ÓÎ¸ÌËÍ‡= ÍÓÂÌ¸ Í‚‡‰‡ÚÌ˚È ËÁ ÒÚÓÓÌ˚ ‚ Í‚‡‰‡ÚÂ - Í‚‡‰‡Ú ÓÒÌÓ‚‡ÌËˇ ‰ÂÎÂÌÌ˚È Ì‡ 4 */
    gtop_el_h    = Math.sqrt( Math.pow((main_diamond_width/2), 2) - (Math.pow(main_square_el.height()/2, 2) /4));
    /*¬€—Œ“¿ Õ»∆Õ≈… “–¿œ≈÷»»= ‚˚ÒÓÚ‡ ÍÓÌÚÂÌÚ‡-‚˚ÒÓÚ‡ ‚ÂıÌÂÈ Ú‡ÔÂˆËË*/
    gbottom_el_h = content_el.height() - gtop_el_h;

    gtop_el.height( gtop_el_h+ 1);
    gbottom_el.height( gbottom_el_h);
    gbottom_el.css({'top': gtop_el_h});

    tlc_el.css({ 'border-width': gtop_el.height()+ 1, 'width': main_square_el.offset().left});

    /*ÿ»–»Õ¿ Õ»∆Õ≈… “–¿œ≈÷»» =  ¯ËËÌ‡ ‚ÂıÌÂÈ Ú‡ÔÂˆËË + ¯ËËÌ‡ ·Ó‰Â‡ ‚ÂıÌÂÈ Ú‡ÔÂˆËË*/
    blc_el.css({'width': tlc_el.width()- - tlc_el.css('borderRightWidth').replace('px',''), 'border-width': gbottom_el_h+ 1});
};


/*Ã≈Õﬁ –ŒÃ¡¿*/

var diamond_menu_el= $('.diamond_menu');
var diamond_menu_item_el= $('.menu_item');
var diamond_menu_item_el9= $('.menu_item.itm9');

var diamond_menu_marginl= 0; /*—ƒ¬»√ ›À≈Ã≈Õ“Œ¬ Ã≈Õﬁ —À≈¬¿*/
var diamond_menu_marginb= 0; /*—ƒ¬»√ ›À≈Ã≈Õ“Œ¬ Ã≈Õﬁ —Õ»«”*/

var form_diamon_menu= function()
{
    diamond_menu_el.css( {'top': '5%', 'left': '5%', 'bottom': '5%', 'right': '5%'});

    diamond_menu_marginl= diamond_menu_el.width()*0.05;
    diamond_menu_marginb= diamond_menu_el.height()*0.05;

    diamond_menu_item_el.css({'height': diamond_menu_el.height()*0.95/4, 'width': diamond_menu_el.width()*0.95/4});
    diamond_menu_item_el9.css({'height': diamond_menu_el.height()*0.95/2 + diamond_menu_marginl, 'width': diamond_menu_el.width()*0.95/2 + diamond_menu_marginb});









};

/*√À¿¬ÕŒ≈ Ã≈Õﬁ*/

    main_square_divmenu_el= $('.main_square_divmenu');
main_square_menu = $('.main_square_menu');


var form_mainmenu= function()
{
    main_square_divmenu_el.css({'top': gtop_el_h+ 10});
    main_square_menu.width( main_diamond_width);

};


var full_reset= function()
{
    resize_window();
    form_diamond();
    form_background();
    form_diamon_menu();
    form_mainmenu();
};

$(window).load( full_reset);
$(window).resize( full_reset);
$(window).on("orientationchange", full_reset);
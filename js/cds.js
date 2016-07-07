/*����������*/

var footer_el= $('.footer');
var content_el= $('.content');
var main_square_el= $('.main_square');

var minheight = 365;     /*����������� ������������ ������� �����*/
var minwidth  = 470;

var realheight= 0;      /*�������� ������ WINDOW*/
var content_el_h= 0;           /*������ ��������*/

$(document.body, '.bone').css( {'min-width': minwidth,'min-height': minheight});


/*������� ������� WINDOW*/

var resize_window= function()
{
    realheight = $(window).height();
    if( realheight< minheight)
    {
        realheight= minheight;
    }

    /*������ ��������*/
    content_el_h= realheight- footer_el.height();
    content_el.height( content_el_h);




};


/*���������� �����*/

var main_diamond_el= $('.main_diamond');
var main_diamond_width= 0; /*������� �����*/
var main_diamond_margin= 0; /*�������� ����� ������������ �������� ��������*/

var form_diamond= function()
{
    /*���������� �������� ��������������*/
    main_square_el.height( content_el_h+ 20);
    main_square_el.width(  content_el_h+ 20);

    /*���������� �����*/
    main_diamond_width= main_square_el.height()/ Math.sqrt(2);  /*������� = ��������� ����� / ������ ����������*/
    main_diamond_margin= (main_square_el.height()- main_diamond_width)/2; /*�������� = (��������� ����� - ��� ������)/2*/

    main_diamond_el.css({'left': main_diamond_margin, 'top': main_diamond_margin, 'right': main_diamond_margin, 'bottom':main_diamond_margin});
};

/*������������ ������� ����*/

var gtop_el= $('.gtop');
var gbottom_el= $('.gbottom');
var tlc_el= $('.tlc');
var blc_el= $('.blc');

var gtop_el_h= 0; /*������ ������� ��������*/
var gbottom_el_h= 0; /*������ ������ ��������*/
var blc_el_w = 0;   /*������ ������ ��������*/

var form_background= function()
{
    /*������ ������� �������� = ������ ��������������� ������������= ������ ���������� �� ������� � �������� - ������� ��������� �������� �� 4 */
    gtop_el_h    = Math.sqrt( Math.pow((main_diamond_width/2), 2) - (Math.pow(main_square_el.height()/2, 2) /4));
    /*������ ������ ��������= ������ ��������-������ ������� ��������*/
    gbottom_el_h = content_el.height() - gtop_el_h;

    gtop_el.height( gtop_el_h+ 1);
    gbottom_el.height( gbottom_el_h);
    gbottom_el.css({'top': gtop_el_h});

    tlc_el.css({ 'border-width': gtop_el.height()+ 1, 'width': main_square_el.offset().left});

    /*������ ������ �������� =  ������ ������� �������� + ������ ������� ������� ��������*/
    blc_el.css({'width': tlc_el.width()- - tlc_el.css('borderRightWidth').replace('px',''), 'border-width': gbottom_el_h+ 1});
};


/*���� �����*/

var diamond_menu_el= $('.diamond_menu');
var diamond_menu_item_el= $('.menu_item');
var diamond_menu_item_el9= $('.menu_item.itm9');

var diamond_menu_marginl= 0; /*����� ��������� ���� �����*/
var diamond_menu_marginb= 0; /*����� ��������� ���� �����*/

var form_diamon_menu= function()
{
    diamond_menu_el.css( {'top': '5%', 'left': '5%', 'bottom': '5%', 'right': '5%'});

    diamond_menu_marginl= diamond_menu_el.width()*0.05;
    diamond_menu_marginb= diamond_menu_el.height()*0.05;

    diamond_menu_item_el.css({'height': diamond_menu_el.height()*0.95/4, 'width': diamond_menu_el.width()*0.95/4});
    diamond_menu_item_el9.css({'height': diamond_menu_el.height()*0.95/2 + diamond_menu_marginl, 'width': diamond_menu_el.width()*0.95/2 + diamond_menu_marginb});









};

/*������� ����*/

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
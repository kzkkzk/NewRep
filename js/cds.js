/*ÏÅĞÅÌÅÍÍÛÅ*/

var footer_el= $('.footer');
var content_el= $('.content');
var main_square_el= $('.main_square');

var minheight = 365;     /*ÎÃĞÀÍÈ×ÅÍÈÅ ÌÈÍÈÌÀËÜÍÎÃÎ ĞÀÇÌÅĞÀ ÑÀÉÒÀ*/
var minwidth  = 470;

var realheight= 0;      /*ĞÅÀËÜÍÛÉ ĞÀÇÌÅĞ WINDOW*/
var content_el_h= 0;           /*ÂÛÑÎÒÀ ÊÎÍÒÅÍÒÀ*/

$(document.body, '.bone').css( {'min-width': minwidth,'min-height': minheight});


/*ÔÓÍÊÖÈß ĞÅÑÀÉÇÀ WINDOW*/

var resize_window= function()
{
    realheight = $(window).height();
    if( realheight< minheight)
    {
        realheight= minheight;
    }

    /*ÂÛÑÎÒÀ ÊÎÍÒÅÍÒÀ*/
    content_el_h= realheight- footer_el.height();
    content_el.height( content_el_h);


};


/*ÏÎÑÒĞÎÅÍÈÅ ĞÎÌÁÀ*/

var main_diamond_el= $('.main_diamond');
var main_diamond_width= 0; /*ÑÒÎĞÎÍÀ ĞÎÌÁÀ*/
var main_diamond_margin= 0; /*ÑÌÅÙÅÍÈÅ ĞÎÌÁÀ ÎÒÍÎÑÈÒÅËÜÍÎ ÃËÀÂÍÎÃÎ ÊÂÀÄĞÀÒÀ*/

var form_diamond= function()
{
    /*ÏÎÑÒĞÎÅÍÈÅ ÃËÀÂÍÎÃÎ ÏĞßÌÎÓÃÎËÜÍÈÊÀ*/
    main_square_el.height( content_el_h+ 20);
    main_square_el.width(  content_el_h+ 20);

    /*ÏÎÑÒĞÎÅÍÈÅ ĞÎÌÁÀ*/
    main_diamond_width= main_square_el.height()/ Math.sqrt(2);  /*Ñòîğîíà = Äèàãîíàëü ğîìáà / êîğåíü êâàäğàòíûé*/
    main_diamond_margin= (main_square_el.height()- main_diamond_width)/2; /*Ñìåùåíèå = (Äèàãîíàëü ğîìáà - åãî øèğèíà)/2*/

    main_diamond_el.css({'left': main_diamond_margin, 'top': main_diamond_margin, 'right': main_diamond_margin, 'bottom':main_diamond_margin});
};

/*ÔÎĞÌÈĞÎÂÀÍÈÅ ÇÀÄÍÅÃÎ ÔÎÍÀ*/

var gtop_el= $('.gtop');
var gbottom_el= $('.gbottom');
var tlc_el= $('.tlc');
var blc_el= $('.blc');

var gtop_el_h= 0; /*ÂÛÑÎÒÀ ÂÅĞÕÍÅÉ ÒĞÀÏÅÖÈÈ*/
var gbottom_el_h= 0; /*ÂÛÑÎÒÀ ÍÈÆÍÅÉ ÒĞÀÏÅÖÈÈ*/
var blc_el_w = 0;   /*ØÈĞÈÍÀ ÍÀÆÍÅÉ ÒĞÀÏÅÖÈÈ*/

var form_background= function()
{
    /*ÂÛÑÎÒÀ ÂÅĞÕÍÅÉ ÒĞÀÏÅÖÈÈ = âûñîòà ğàâíîáåäğåííîãî òğåóãîëüíèêà= êîğåíü êâàäğàòíûé èç ñòîğîíû â êâàäğàòå - êâàäğàò îñíîâàíèÿ äåëåííûé íà 4 */
    gtop_el_h    = Math.sqrt( Math.pow((main_diamond_width/2), 2) - (Math.pow(main_square_el.height()/2, 2) /4));
    /*ÂÛÑÎÒÀ ÍÈÆÍÅÉ ÒĞÀÏÅÖÈÈ= âûñîòà êîíòåíòà-âûñîòà âåğõíåé òğàïåöèè*/
    gbottom_el_h = content_el.height() - gtop_el_h;

    gtop_el.height( gtop_el_h+ 1);
    gbottom_el.height( gbottom_el_h);
    gbottom_el.css({'top': gtop_el_h});

    tlc_el.css({ 'border-width': gtop_el.height()+ 1, 'width': main_square_el.offset().left});

    /*ØÈĞÈÍÀ ÍÈÆÍÅÉ ÒĞÀÏÅÖÈÈ =  øèğèíà âåğõíåé òğàïåöèè + øèğèíà áîğäåğà âåğõíåé òğàïåöèè*/
    blc_el.css({'width': tlc_el.width()- - tlc_el.css('borderRightWidth').replace('px',''), 'border-width': gbottom_el_h+ 1});

    /*ÏÎËÎÆÅÍÈÅ ÄÈÂÀ Ñ ÎÏÈÑÀÍÈÅÌ*/
    main_diamond_element_description_el.css( {'top': gtop_el.height(), 'left': tlc_el.width()- - tlc_el.css('borderRightWidth').replace('px','')});
};


/*ÌÅÍŞ ĞÎÌÁÀ*/

var diamond_menu_el= $('.diamond_menu');
var diamond_menu_item_el= $('.menu_item');
var diamond_menu_item_el9= $('.menu_item.itm9');

var diamond_menu_marginl= 0; /*ÑÄÂÈÃ İËÅÌÅÍÒÎÂ ÌÅÍŞ ÑËÅÂÀ*/
var diamond_menu_marginb= 0; /*ÑÄÂÈÃ İËÅÌÅÍÒÎÂ ÌÅÍŞ ÑÍÈÇÓ*/

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
};

/*ÃËÀÂÍÎÅ ÌÅÍŞ*/

main_square_divmenu_el= $('.main_square_divmenu');
main_square_menu = $('.main_square_menu');
main_square_menu_item= $('.main_square_menu li');
main_square_menu_itemlast= $('.main_square_menu li:last-child');

var main_square_menu_item_mr= 0; /*ÎÒÑÒÓÏ ÑÏĞÀÂÀ ÌÅÆÄÓ İËÅÌÅÍÒÀÌÈ*/

var form_mainmenu= function()
{
    main_square_divmenu_el.css({'top': gtop_el_h+ 10});
    main_square_menu.width( main_diamond_width);

    main_square_menu_item.css({ 'width': diamond_menu_item_el.width()*0.8, 'height': diamond_menu_item_el.height()*0.83, 'fontSize': parseFloat(diamond_menu_item_el.width()*0.8)/6+1});

    main_square_menu_item_mr= (main_square_menu.width()- main_square_menu_item.width()*4)/3 - main_square_menu_item.css('borderRightWidth').replace('px','')*4;

    main_square_menu_item.css({'margin-right': main_square_menu_item_mr});
    main_square_menu_itemlast.css({ 'margin-right': 0});
};

/*ÎÒÊĞÛÒÈÅ ĞÎÌÁÀ*/

var main_diamond_element_description_el= $('.main_diamond_description');
var mdd_brd_el= $('.mdd_brd');

var open_diamond= function()
{

    if (main_diamond_element_description_el.height()> 25) /*ÈÍÀ×Å ÏÎÑËÅ ÂÛÑÒÀÂËÅÍÈß ÁÎĞÄÅĞÀ ÍÅÌÍÎÃÎ ÈÇÌÅÍßÅÒÑß ÂÛÑÎÒÀ*/
    {
        mdd_brd_el.css({'border-width': main_diamond_element_description_el.height()});
    }



}



var full_reset= function()
{
    resize_window();
    form_diamond();
    form_background();
    form_diamon_menu();
    form_mainmenu();

};

diamond_menu_item_el.on('click', open_diamond);

$(window).on('load', full_reset);
$(window).on('resize', full_reset);
$(window).on("orientationchange", full_reset);
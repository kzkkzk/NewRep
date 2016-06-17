var square_element  = $('.main_square');
var diamond_element = $(".main_diamond");

var gtop_element    = $('.GTop');
var tlc_element     = $(".tlc");
var gbottom_element = $('.GBottom');
var blc_element     = $(".blc");

var footer_element  = $('.footer');
var content_element = $('.content');

var resize_blc = function(){

    content_element.css('height', $(window).height()- footer_element.height() +'px');

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

    tlc_element.css( 'border-width', gtop_element.height() + 'px');
    tlc_element.css( 'width', square_element.css('margin-left'));
    blc_element.css( 'border-width', gbottom_element.height() + 'px');

    var w_blc_element = tlc_element.width() + gtop_element.height() + Math.sqrt( Math.pow( (square_element.height()*Math.sqrt(2) - w_diamond/2) ,2) - Math.pow( gbottom_element.height(), 2)) - gbottom_element.height() - 30;


    blc_element.css( 'width', w_blc_element + 'px');

};

$(window).load( resize_blc);
$(window).resize( resize_blc);



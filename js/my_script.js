/*$(document).ready(function() {
    $('h2').addClass('underline');//underlines all h2 elements
    $('ul').addClass('border');//adds a border to all ul elements
});*/

$(document).ready(function() {
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
    $('tr.odd').css('font-family', 'calibri');
    $('th').css('font-size','20px');
   /* $('.item_name').on('mouseenter', function (){
        $(this).siblings().addClass('hide');
    }).on('mouseleave', function (){
        $(this).siblings().removeClass('hide');
    });*/
    
   $('.item_name').on('mouseenter', event => {
        $(event.currentTarget).siblings().toggleClass('highlight');
    }).on('mouseleave', event => {
        $(event.currentTarget).siblings().toggleClass('whitedrop');
 });
  
 
      

  $('.main_btn').on('click', ()=> {
      $('td').filter('.africa').hide();
  });
  
  
});
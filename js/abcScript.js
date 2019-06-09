$(document).ready(function () { 
    var adjustSidebar = function () {
        $('.sidebar').slimScroll({
            //height: document.documentElement.clientHeight - $('.abc_menu').outerHeight()
            height:'48vh',
            overflowY: 'hidden',
            overflowX:'visible'
        });
      };
      adjustSidebar();
    $(window).resize(function () {
        adjustSidebar();    
    });

    $('.sideMenuToggler').on('click', function () {
        $('.warpper').toggleClass('active');
    });
    $('.close').on('click', function () {
        $('.warpper').removeClass('active');
    });
    $('.abc__desc--item-btn').on('click', function(){
        $('.abc__pop--close').parent().show();    
    })
    $('.abc__pop--close').on('click', function(){
        $(this).parent().hide();
    })


    var $descItem = $('.abc_menu .item');

    $descItem.on('click', function(e){
        console.log(e.target.offsetTop + 'px');
        //var $height = $(this).
    })


 });
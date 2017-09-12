var main = function() {
    
    //sidepanels
    
    $('.central').hover(function(){
        $('.sliderpanel').animate({
            left: "0px" 
        }, 500);
        $('.central').hide();
    });
    
    $('.sliderpanel').mouseleave(function() {
        $('.sliderpanel').animate({
            left: "-600px"
        }, 200);
        $('.central').show('slow');
    });

    $('.centralopp').hover(function(){
        $('.sliderpanelright').animate({
            right: "0px" 
        }, 500);
        $('.centralopp').hide();
    });
    
    $('.sliderpanelright').mouseleave(function() {
        $('.sliderpanelright').animate({
            right: "-600px"
        }, 200);
        $('.centralopp').show('slow');
    });
    
    //cover
    
    $('.link1').click(function(){
        $('#Monitoring').clone().appendTo('.coverfocus');
        $('.coverup').show(300);
    });
    
    $('.link2').click(function(){       
        $('#age-container').clone().appendTo('.coverfocus');
        $('.coverup').show(300);
    });

    $('.link3').click(function(){
        $('#unassigned-container').clone().appendTo('.coverfocus');
        $('.coverup').show(300);
    });
    
    $('.link4').click(function(){
        $('#breach-container').clone().appendTo('.coverfocus');
        $('.coverup').show(300);
    });
    
    $('.link5').click(function(){
        $('#resource-container').clone().appendTo('.coverfocus');
        $('.coverup').show(300);
    });
    
    $('.link6').click(function(){
        $('#priority-container').clone().appendTo('.coverfocus');
        $('.coverup').show(300);
    });
    
    $('.iconclose').click(function() {
        $('.coverfocus').empty();
        $('.coverup').hide(300);
        location.reload();
    });
};

$(document).ready(main);

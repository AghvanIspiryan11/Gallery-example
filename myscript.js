$('ul').on('click', 'img', function(){
    var imageUrl = $(this).attr('src');
    var effect = $('#selected-effect').val();
    var duration = $('#select-duration').val() * 1000;
  
    if(effect == 'Fade'){
        $('#mainImg').fadeOut(duration, function(){
            $(this).attr('src', imageUrl)
        }).fadeIn(duration)
    }
    else{
        $('#mainImg').slideUp(duration, function() {
            $(this).attr('src', imageUrl)
        }).slideDown(duration)
    }

})
var $list = $('li');
var $mainimg = $('#mainImg');
    $list.click(function(){
        $('#mainImg').toggleClass('active')
    })


$('#large').click(function(){
    $mainimg.animate({
        width: '+=100',
        height: '+=100'
    },500)
});
$("#small").click(function(){
    $mainimg.animate({
        width: '-=100',
        height: '-=100'
    },500)
});
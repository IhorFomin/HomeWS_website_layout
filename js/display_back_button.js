// let isScroll = 0, // доп. проверка
//     targetScroll = 300; // расстояние до действия / в px
    
// $(window).on('scroll', function(){
//   if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
//     isScroll = 1;
//     $('.contein_button').css('display', 'block');
//     $('.contein_button').css('position', 'fixed');
//     console.info('change 1');
//   } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
//     isScroll = 0;
//     $('.contein_button').css('display', 'none');
//     // $('.contein_button').css('position', 'absolute');
//     console.info('change 0');
//   }
// });
$( document ).ready(function() {
    //alert('hello');
    $('#gallery').justifiedGallery({
       rowHeight : 200,
       lastRow : 'justify',
       margins : 6,
       randomize: true
     }).on('jg.complete', function () {
          $('#gallery a').swipebox({
          	hideBarsDelay : false
          });
     });
});
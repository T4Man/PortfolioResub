$('#project-article').hide();

$('#about').on('click', function(){
  console.log('click');
  $('#project-article').hide();
  $('#about-me').fadeIn();
});

$('.icon-home').on('click', function(){
  $('#about-me').hide();
  $('#project-article').fadeIn();

})

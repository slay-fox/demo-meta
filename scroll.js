window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    $('.cursor').hide();
    const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    document.querySelector('#camera').setAttribute("position", { x: -1.7 - (scrollpercent * 5), y: 3.8, z: -0.7 + (scrollpercent * 10) })
}
$(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).mousemove(function(getCurrentPos){
    $('.cursor').show();
    const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    if(scrollpercent>0.001){
    const xPercent = (getCurrentPos.clientX-window.innerWidth/2)/window.innerWidth;
    document.querySelector('#camera').components['look-controls'].yawObject.rotation.y = xPercent/2;
    }
});

$(document)
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    }, 100);
})

$('body').click(function (e) {
  $("#divContainer")
    .css({
        position: 'absolute',
        left: e.pageX-50,
        top: e.pageY-50,
        display: 'block'
    })
      .hide('explode', { pieces: 150 }, 700); 	// Explode effect using jQuery.
});

function downloadResume(){
  window.open("./resume.pdf");
}s
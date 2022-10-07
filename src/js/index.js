

const clients = document.querySelectorAll('.clients');
const reviewContent = document.querySelectorAll('.review-content');

for (let i = 0; i < clients.length; i++) {
  clients[i]?.addEventListener('click', (e)=> {
    clients.forEach((item, i) => {
      item.classList.remove('active')
      reviewContent[i].classList.add('hidden')
    })
    clients[i]?.classList.add('active')
    let selectedReview = clients[i].getAttribute('data-for');
    let reviewId = reviewContent[i].getAttribute('id');

    if(selectedReview == reviewId) {
      reviewContent[i]?.classList.remove('hidden')
    }
  })
}


var a = 0;
$(window).scroll(function () {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
        {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
        });
    });
    a = 1;
  }
});

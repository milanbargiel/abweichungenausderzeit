/* Isotope (Masonry + Shuffle)
–––––––––––––––––––––––––––––––––––––––––––––––––– */
$(document).ready(() => {
  const $grid = $('.grid');

  $grid.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.grid-sizer',
    },
  });

  $grid.isotope('shuffle');

  // bind click event to header
  $('.js-shuffle').on('click', () => {
    $grid.isotope('shuffle');
  });
});

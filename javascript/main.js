$(function () {
  $(document.body).on('click', '.stepper-minus', function (e) {
    e.preventDefault();
    e.stopPropagation();
    const parentEl = $(this).parent();
    const numEl = parentEl.find('.stepper-num');
    const num = +numEl.html();
    const min = +$(this).data('min');
    const newVal = num > min ? num - 1 : min;
    numEl.html(newVal);
  });

  $(document.body).on('click', '.stepper-plus', function (e) {
    e.preventDefault();
    e.stopPropagation();
    const parentEl = $(this).parent();
    const numEl = parentEl.find('.stepper-num');
    const num = +numEl.html();
    const newVal = num + 1;
    numEl.html(newVal);
  });
});

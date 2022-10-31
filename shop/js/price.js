$("#slider-range").slider({
  range: true,
  min: 100,
  max: 10000,
  values: [3000, 7000],
  step: 10,
  slide: function(event, ui) {
    $("#rub-left").text(ui.values[0] + 'р.'); // текст левого span
    $("#rub-right").text(ui.values[1] + 'р.'); // текст правого span

    // if (ui.handleIndex === 0) {
    //   // потянули левый ползунок - переместим левый span
    //   $("#rub-left").css('margin-left', ui.handle.style.left);
    // } else {
    //   // потянули правый ползунок - переместим правый span
    //   $("#rub-right").css('margin-left', ui.handle.style.left);
    // }
  }
});

// задать начальный текст левого span
$("#rub-left").text($("#slider-range").slider("values", 0) + ' р.');
// задать начальный текст правого span
$("#rub-right").text($("#slider-range").slider("values", 1) + ' р.');

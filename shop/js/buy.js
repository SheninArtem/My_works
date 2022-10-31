// let block_array = document.querySelectorAll(".number");
// for (let i = 0; i < block_array.length; i++) {
//   let child = block_array[i].lastChild;
//   let value = +child.innerHTML;

//   if (value == 0 || isNaN(value)) {
//     block_array[i].classList.add("none");
//   } else if (value > 0) {
//     block_array[i].classList.remove("none");
//   }
// }


$("#add").on("click", function () {
  var current_value = parseInt($("#cart").html());
  var new_value = current_value + 1;
  $("#cart").removeClass('none');
  $("#cart").html(new_value);
})

$("#add1").on("click", function () {
  var current_value = parseInt($("#cart1").html());
  var new_value = current_value + 1;
  $("#cart1").removeClass('none');
  $("#cart1").html(new_value);
})

$("#add4").on("click", function () {
  var current_value = parseInt($("#cart").html());
  var new_value = current_value + 1;
  $("#cart").removeClass('none');
  $("#cart").html(new_value);
})

$("#add3").on("click", function () {
  var current_value = parseInt($("#cart1").html());
  var new_value = current_value + 1;
  $("#cart1").removeClass('none');
  $("#cart1").html(new_value);
})


$("#liplus1").on("click", function () {
  var current_value = parseInt($("#linum1").html());
  var new_value = current_value + 1;
  $("#linum1").html(new_value);
})

$("#liminus1").on("click", function () {
  var current_value = parseInt($("#linum1").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licart1").remove();
    if ($('#proverka').height() < 10) {
      $('#emptybasket').removeClass("invis");
      $('#like__svg').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linum1").html(new_value);
})

$("#liplus2").on("click", function () {
  var current_value = parseInt($("#linum2").html());
  var new_value = current_value + 1;
  $("#linum2").html(new_value);
})

$("#liminus2").on("click", function () {
  var current_value = parseInt($("#linum2").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licart2").remove();
    if ($('#proverka').height() < 10) {
      $('#emptybasket').removeClass("invis");
      $('#like__svg').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linum2").html(new_value);
})

$("#liplus3").on("click", function () {
  var current_value = parseInt($("#linum3").html());
  var new_value = current_value + 1;
  $("#linum3").html(new_value);
})

$("#liminus3").on("click", function () {
  var current_value = parseInt($("#linum3").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licart3").remove();
    if ($('#proverka').height() < 10) {
      $('#emptybasket').removeClass("invis");
      $('#like__svg').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linum3").html(new_value);
})

$("#liplus4").on("click", function () {
  var current_value = parseInt($("#linum4").html());
  var new_value = current_value + 1;
  $("#linum4").html(new_value);
})

$("#liminus4").on("click", function () {
  var current_value = parseInt($("#linum4").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licart4").remove();
    if ($('#proverka').height() < 10) {
      $('#emptybasket').removeClass("invis");
      $('#like__svg').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linum4").html(new_value);
})

$("#liplus5").on("click", function () {
  var current_value = parseInt($("#linum5").html());
  var new_value = current_value + 1;
  $("#linum5").html(new_value);
})

$("#liminus5").on("click", function () {
  var current_value = parseInt($("#linum5").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licart5").remove();
    if ($('#proverka').height() < 10) {
      $('#emptybasket').removeClass("invis");
      $('#like__svg').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linum5").html(new_value);
})

$("#liplus6").on("click", function () {
  var current_value = parseInt($("#linum6").html());
  var new_value = current_value + 1;
  $("#linum6").html(new_value);
})

$("#liminus6").on("click", function () {
  var current_value = parseInt($("#linum6").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licart6").remove();
    if ($('#proverka').height() < 10) {
      $('#emptybasket').removeClass("invis");
      $('#like__svg').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linum6").html(new_value);
})

$("#del1").on("click", function () {
  $("#licart1").remove();
  if ($('#proverka').height() < 10) {
    $('#emptybasket').removeClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

$("#del2").on("click", function () {
  $("#licart2").remove();
  if ($('#proverka').height() < 10) {
    $('#emptybasket').removeClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

$("#del3").on("click", function () {
  $("#licart3").remove();
  if ($('#proverka').height() < 10) {
    $('#emptybasket').removeClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

$("#del4").on("click", function () {
  $("#licart4").remove();
  if ($('#proverka').height() < 10) {
    $('#emptybasket').removeClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

$("#del5").on("click", function () {
  $("#licart5").remove();
  if ($('#proverka').height() < 10) {
    $('#emptybasket').removeClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

$("#del6").on("click", function () {
  $("#licart6").remove();
  if ($('#proverka').height() < 10) {
    $('#emptybasket').removeClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

$("#delpay1").on("click", function () {
  $("#pay1").remove();
})

$("#delpay2").on("click", function () {
  $("#pay2").remove();
})

$("#delpay3").on("click", function () {
  $("#pay3").remove();
})


// mob

$("#liplusm1").on("click", function () {
  var current_value = parseInt($("#linumm1").html());
  var new_value = current_value + 1;
  $("#linumm1").html(new_value);
})

$("#liminusm1").on("click", function () {
  var current_value = parseInt($("#linumm1").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licartm1").remove();
    if ($('#proverkamob').height() < 41) {
      $('#emptybasketmob').removeClass("invis");
      $('#interes').removeClass("invis");
      $('#nonetovar').addClass("invis");
      $('#like__svg').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linumm1").html(new_value);
})

$("#liplusm2").on("click", function () {
  var current_value = parseInt($("#linumm2").html());
  var new_value = current_value + 1;
  $("#linumm2").html(new_value);
})

$("#liminusm2").on("click", function () {
  var current_value = parseInt($("#linumm2").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licartm2").remove();
    if ($('#proverkamob').height() < 41) {
      $('#emptybasketmob').removeClass("invis");
      $('#interes').removeClass("invis");
      $('#like__svg').addClass("invis");
      $('#nonetovar').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linumm2").html(new_value);
})

$("#liplusm3").on("click", function () {
  var current_value = parseInt($("#linumm3").html());
  var new_value = current_value + 1;
  $("#linumm3").html(new_value);
})

$("#liminusm3").on("click", function () {
  var current_value = parseInt($("#linumm3").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licartm3").remove();
    if ($('#proverkamob').height() < 41) {
      $('#emptybasketmob').removeClass("invis");
      $('#interes').removeClass("invis");
      $('#nonetovar').addClass("invis");
      $('#like__svg').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linumm3").html(new_value);
})

$("#liplusm4").on("click", function () {
  var current_value = parseInt($("#linumm4").html());
  var new_value = current_value + 1;
  $("#linumm4").html(new_value);
})

$("#liminusm4").on("click", function () {
  var current_value = parseInt($("#linumm4").html());
  var new_value = current_value - 1;
  if (new_value == 0) {
    $("#licartm4").remove();
    if ($('#proverkamob').height() < 41) {
      $('#emptybasketmob').removeClass("invis");
      $('#interes').removeClass("invis");
      $('#nonetovar').addClass("invis");
      $('#like__svg').addClass("invis");
      $('#like__btn').addClass("invis");
    }
  }
  $("#linumm4").html(new_value);
})

$("#delm1").on("click", function () {
  $("#licartm1").remove();
  if ($('#proverkamob').height() < 41) {
    $('#emptybasketmob').removeClass("invis");
    $('#interes').removeClass("invis");
    $('#nonetovar').addClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

$("#delm2").on("click", function () {
  $("#licartm2").remove();
  if ($('#proverkamob').height() < 41) {
    $('#emptybasketmob').removeClass("invis");
    $('#interes').removeClass("invis");
    $('#nonetovar').addClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

$("#delm3").on("click", function () {
  $("#licartm3").remove();
  if ($('#proverkamob').height() < 41) {
    $('#emptybasketmob').removeClass("invis");
    $('#interes').removeClass("invis");
    $('#nonetovar').addClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

$("#delm4").on("click", function () {
  $("#licartm4").remove();
  if ($('#proverkamob').height() < 41) {
    $('#emptybasketmob').removeClass("invis");
    $('#interes').removeClass("invis");
    $('#nonetovar').addClass("invis");
    $('#like__svg').addClass("invis");
    $('#like__btn').addClass("invis");
  }
})

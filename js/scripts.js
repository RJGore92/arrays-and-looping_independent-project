function onClickOne() {
  $("div#intro-div-one").slideToggle();
  $("div#intro-div-two").slideToggle();
}

function onClickTwo() {
  $("div#intro-div-two").slideToggle();
  $("div#primary-program-div").slideToggle();
}

function onClickThree() {
  $("div#primary-program-div").slideToggle();
  $("div#intro-div-one").slideToggle();
}

function onClickFour() {
  $("div#form-div-out").slideToggle();
  $(".sidenav-to-return").fadeOut();
  $("div#form-div-in").slideToggle();
}

function onClickFive() {
  $("div#primary-program-div").slideToggle();
  $(".sidenav-to-return").fadeOut();
  $("div#form-div-out").slideToggle();
  $("div#intro-div-one").slideToggle();
}

$(document).ready(function() {
  $("form#form-in").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-in").val());
    console.log(number);
    $("ul#output-list").empty();
    $("ul#output-list").append("<li>" + number + "</li>")
    $(".sidenav-to-return").fadeIn();
    $("div#form-div-in").slideToggle();
    $("div#form-div-out").slideToggle();
  });
});

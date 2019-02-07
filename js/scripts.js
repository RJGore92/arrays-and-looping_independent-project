var constructedArray = [];

function constructArray(numberIn) {
  for (var i = 0; i <= numberIn; i++) {
    constructedArray.push(i);
  }
  console.log(constructedArray);
}

function converterOfNumbers(inputArray) {
  var preConvertedArray = inputArray;
  var postConvertedArray = [];
  checkToConvert:
  for (var i = 0; i < preConvertedArray.length; i++) {
    if (preConvertedArray[i] != 0 && (preConvertedArray[i] % 3) == 0) {
      postConvertedArray.push("I'm sorry, Dave.  I'm afraid I can't do that.");
      continue checkToConvert;
    }
    else {
      var numberToCheck = preConvertedArray[i].toString();
      var numberSplit = numberToCheck.split("");
      for (var j = 0; j < numberSplit.length; j++) {
        if (numberSplit[j] == 1) {
          postConvertedArray.push("Boop!");
          continue checkToConvert;
        }
        else if (numberSplit[j] == 0) {
          if (numberSplit[j+1] == 1 && j != numberSplit.length) {
            postConvertedArray.push("Boop!");
            continue checkToConvert;
          }
          postConvertedArray.push("Beep!");
          continue checkToConvert;
        }
      }
      postConvertedArray.push(preConvertedArray[i]);
    }
  }
  return postConvertedArray;
}

function arrayPrinter(arrayIn) {
  arrayIn.forEach(function(index) {
    $("ul#output-list").append("<li>" + index + "</li>");
  });
}

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
  $("div#form-div-in").slideToggle();
  $(".sidenav-to-return").fadeOut();
  $("div#form-div-out").slideToggle();
  $("div#intro-div-one").slideToggle();
}

$(document).ready(function() {
  $("form#form-in").submit(function(event) {
    event.preventDefault();
    constructedArray = [];
    $("ul#output-list").empty();
    var number = parseInt($("input#number-in").val());
    constructArray(number);
    var convertedArray = converterOfNumbers(constructedArray);
    console.log(number);
    arrayPrinter(convertedArray);
    $(".sidenav-to-return").fadeIn();
    $("div#form-div-in").slideToggle();
    $("div#form-div-out").slideToggle();
  });
});

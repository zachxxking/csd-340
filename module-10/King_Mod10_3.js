/*
  Zachariah King
  Assignment 10.3 Javascript
*/

// Image/Text 1 hover functions

function newPicture1() {
  document.getElementById("image1").src = "lana2.jpg"; // Use the hover image
}

function oldPicture1() {
  document.getElementById("image1").src = "lana1.jpg"; // Revert to original
}

function newText1() {
  document.getElementById("text1").style.color = "red"; // Color of passion
}

function oldText1() {
  document.getElementById("text1").style.color = "black"; // Original color
}

// Image/Text 2 hover functions

function newPicture2() {
  document.getElementById("image2").src = "image2.jpg"; // Use the hover image
}

function oldPicture2() {
  document.getElementById("image2").src = "image1.jpg"; // Revert to original
}

function newText2() {
  document.getElementById("text2").style.color = "blue"; // Color of nostalgia
}

function oldText2() {
  document.getElementById("text2").style.color = "black"; // Original color
}

// Image click function

function handleImageClick(imageId) {
  if (imageId === "image1") {
    alert("Hint image clicked!");
  } else if (imageId === "image2") {
    alert("Reveal image clicked!");
  }
}
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
// Add the .hidden class to the error modal in HTML
document.querySelector("h2").classList.add("hidden");

//When user clicks on an empty heart, invoke mimicServerCall
//When server returns a failure, respond to the error using a .catch after the .then block
EMPTY_HEART.addEventListener("click", mimicServerCall);

//When server returns a success status, change to a full heart by adding the .activated-heart class

//When full heart is clicked, change the heart back to empty by REMOVING the .activate-heart class
FULL_HEART.addEventListener(
  "click",
  function () {
    const activatedHeart = document.getElementsByClassName("activated-heart");
  },

  //------------------------------------------------------------------------------
  // Don't change the code below: this function mocks the server response
  //------------------------------------------------------------------------------

  function mimicServerCall(
    url = "http://mimicServer.example.com",
    config = {}
  ) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let isRandomFailure = Math.random() < 0.2;
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }
);

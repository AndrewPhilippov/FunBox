var card = document.querySelectorAll(".card");

card.forEach(el => {
  isActive(el);
});

function isActive(el) {
  // Adding MOUSEIN event
  upperSubtitleOnMouseOver(el);

  // Adding MOUSELEAVE event
  upperSubtitleOnMouseLeave(el);

  // Check class and act depending on class
  checkCardClass(el);

  // Handling click on 'купи.' button
  kupiButtonClickHandler(el);
}

// *******************************************************************************
// Check Class and act depending on it
// *******************************************************************************

function checkCardClass(el) {
  // If card is disabled we have to show 'Pechalka' text and hide other strings
  ifCardIsDisabled(el);
  // If card is active we have to show 'Active' text and hide other strings
  ifCardIsActive(el);
  // If card is default we have to show 'Default' text and hide other strings
  ifCardIsDefault(el);
  // Adding click on Card listeners
  addListenersOnClick(el);
}

// *******************************************************************************
// Mouse event functions mouseover & mouseleave
// *******************************************************************************
// Action when mouse goes into the card area
function upperSubtitleOnMouseOver(el) {
  el.addEventListener("mouseover", function () {
    if (el.classList.contains("active")) {
      var topSubtitle =
        el.childNodes[1].childNodes[1].childNodes[1].childNodes[1];
      topSubtitle.textContent = "Сказочное заморское яство";
      topSubtitle.style.color = "#666666";
    }
  });
}

// Action when mouse leaves the card area
function upperSubtitleOnMouseLeave(el) {
  el.addEventListener("mouseleave", function () {
    if (el.classList.contains("active")) {
      var topSubtitle =
        el.childNodes[1].childNodes[1].childNodes[1].childNodes[1];
      topSubtitle.textContent = "Котэ не одобряет?";
      topSubtitle.style.color = "#E62E7A";
    }
  });
}
// *******************************************************************************

// Adding card click listeners
function addListenersOnClick(el) {
  el.addEventListener("click", function () {
    if (el.classList.contains("disabled")) {
      return null;
    } else if (el.classList.contains("active")) {
      actionOnActiveClass(el);
    } else {
      actionOnDefault(el);
    }
  });
}
// Click action if card has 'Active' class
function actionOnActiveClass(el) {
  el.classList.remove("active");
  el.nextElementSibling.classList.remove("visible");
  el.nextElementSibling.nextElementSibling.classList.add("visible");
}

// Click action if card has no class and not disabled
function actionOnDefault(el) {
  el.classList.add("active");
  el.nextElementSibling.nextElementSibling.classList.remove("visible");
  el.nextElementSibling.classList.add("visible");
}

// Click action on button 'купи'
function kupiButtonClickHandler(el) {
  var kupiBtn = el.nextElementSibling.nextElementSibling;
  kupiBtn.addEventListener("click", function () {
    el.classList.add("active");
    el.nextElementSibling.nextElementSibling.classList.remove("visible");
    el.nextElementSibling.classList.add("visible");
  });
}
// *******************************************************************************

// If card is disabled we have to show 'Pechalka' text and hide other strings
function ifCardIsDisabled(el) {
  if (el.classList.contains("disabled")) {
    el.nextElementSibling.classList.remove("visible");
    el.nextElementSibling.nextElementSibling.classList.remove("visible");
    el.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
      "visible"
    );
  }
}
// If card is active we have to show 'Active' text and hide other strings
function ifCardIsActive(el) {
  if (el.classList.contains("active")) {
    el.nextElementSibling.classList.add("visible");
    el.nextElementSibling.nextElementSibling.classList.remove("visible");
    el.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
      "visible"
    );
  }
}
// If card is default we have to show 'Default' text and hide other strings
function ifCardIsDefault(el) {
  if (!el.classList.contains("active") && !el.classList.contains("disabled")) {
    el.nextElementSibling.classList.remove("visible");
    el.nextElementSibling.nextElementSibling.classList.add("visible");
    el.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
      "visible"
    );
  }
}
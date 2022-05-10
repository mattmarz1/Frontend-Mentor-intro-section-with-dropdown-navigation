const heroIMG = document.querySelector(".hero-image");
const featuresMobileDropdown = document.querySelector(
  ".features-mobile-dropdown"
);
const companyMobileDropdown = document.querySelector(
  ".company-mobile-dropdown"
);
const companyMobile = document.querySelector(".company-mobile");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const menuIcon = document.querySelector(".mobile-menu-icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const featuresMobile = document.querySelector(".features-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

function displayType(element, displayValue) {
  element.style.display = displayValue;
}

function displayTypeCheck(element, displayValue) {
  return element.style.display === displayValue;
}

function transform(element, transformValue) {
  return (element.style.transform = transformValue);
}

menuIcon.addEventListener("click", function () {
  displayType(mobileMenu, "block");
  displayType(overlay, "block");
});

closeMenuIcon.addEventListener("click", function () {
  displayType(mobileMenu, "none");
  displayType(overlay, "none");
});

featuresMobile.addEventListener("click", function () {
  if (displayTypeCheck(featuresMobileDropdown, "block")) {
    displayType(featuresMobileDropdown, "none");
  } else {
    displayType(featuresMobileDropdown, "block");
  }

  if (displayTypeCheck(featuresMobileDropdown, "block")) {
    transform(arrow1, "rotate(-180deg");
  } else {
    transform(arrow1, "initial");
  }
});

companyMobile.addEventListener("click", function () {
  if (displayTypeCheck(companyMobileDropdown, "block")) {
    displayType(companyMobileDropdown, "none");
  } else {
    displayType(companyMobileDropdown, "block");
  }

  if (displayTypeCheck(companyMobileDropdown, "block")) {
    transform(arrow2, "rotate(-180deg");
  } else {
    transform(arrow2, "initial");
  }
});

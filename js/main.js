var oldScrollY = window.scrollY;
window.onscroll = function () {
  if (oldScrollY < window.scrollY) {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#333333";
    document.getElementsByTagName("nav")[0].style.marginTop = "-60px";
    document.getElementsByTagName("nav")[0].style.transitionProperty =
      "margin-top";
    document.getElementsByTagName("nav")[0].style.transitionDuration = "0.5s";
  } else {
    document.getElementsByTagName("nav")[0].style.marginTop = "0px";
    document.getElementsByTagName("nav")[0].style.transitionProperty =
      "margin-top";
    document.getElementsByTagName("nav")[0].style.transitionDuration = "0.5s";
  }
  oldScrollY = window.scrollY;
};

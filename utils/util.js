window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 0) {
    document.getElementById("nav").classList.add("nav-scrolled");
  } else {
    document.getElementById("nav").classList.remove("nav-scrolled");
  }
}

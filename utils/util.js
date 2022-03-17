window.onscroll = () => {
  scrollFunction();
  renderProgressBar();
};

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 0) {
    document.getElementById("nav").classList.add("nav-scrolled");
  } else {
    document.getElementById("nav").classList.remove("nav-scrolled");
  }
};

const renderProgressBar = () => {
  let element = document.getElementsByClassName("progress-fill");
  if (document.documentElement.scrollTop > 2790) {
    Array.from(element).forEach((e) => {
      let percent = e.getAttribute("percent");
      if (e.firstChild.innerHTML == 0) {
        renderProgressNumber(e, percent);
      }
      e.style.width = percent  + "%";
    }); 
  }
};

const renderProgressNumber = (e, percent) => {
  let element = e.firstChild;
  let end = percent;

  increaseNumber(0, element, end);
};

const increaseNumber = (i, e, end) => {
  if (i <= end) {
    e.innerHTML = i;
    setTimeout(() => {
      increaseNumber(i + 1, e, end);
    }, 28);
  }
};

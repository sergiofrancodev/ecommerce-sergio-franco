


window.onscroll = () => {
    let menu = document.getElementById('menu');
  if (window.scrollY > 45) {
    menu.style.background = "#FFFFFF";
    menu.style.boxShadow = "0px 0px 5px gray";
    menu.style.transition = "all 300ms linear";
  } else {
    menu.style.background = "transparent";
    menu.style.boxShadow = "none";
    menu.style.transition = "all 300ms linear";
  }

}





window.onscroll = () => {
    let menu = document.getElementById('menu');
    let cartcircle = document.getElementById('count-cart');
  if (window.scrollY > 45) {
    menu.style.background = "#FFFFFF";
    menu.style.boxShadow = "0px 0px 5px gray";
    menu.style.transition = "all 300ms linear";
    cartcircle.style.backgroundColor="#ff6347";
    cartcircle.style.color="#FFFFFF";

  } else {
    menu.style.background = "transparent";
    menu.style.boxShadow = "none";
    menu.style.transition = "all 300ms linear";
    cartcircle.style.backgroundColor="#FFFFFF";
    cartcircle.style.color="#ff6347";
  }


}

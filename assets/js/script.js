const navs = document.querySelectorAll(".nav");
const imageLists = document.querySelectorAll(".images-list li");

const changeImageList = nav => {
  const getNavData = nav.getAttribute("data-nav");

  const activeNav = document.querySelector(".active-nav");
  activeNav.classList.remove("active-nav"); // remove previous active nav

  imageLists.forEach(image => {
    nav.classList.add("active-nav"); // set current active nav
    const imageData = image.getAttribute("data-image-type");

    if (getNavData == "all")
      return setAllActive(); // show images if active nav = "all"
    else if (getNavData !== imageData)
      image.classList.remove("active-image"); // remove previous active image 
    else
      image.classList.add("active-image"); // set current active image 

  });
}

navs.forEach(nav => nav.addEventListener("click", () => changeImageList(nav)));

function setAllActive() {
  imageLists.forEach(image => {
    image.classList.add("active-image");
  })
}

setAllActive();
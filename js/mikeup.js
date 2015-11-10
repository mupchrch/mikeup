$(window).load(initializePage);

function initializePage() {
  loadHeader();
  loadHome();

  $(".home").click(loadHome);
  $(".about").click(loadAbout);
  $(".contact").click(loadContact);

  if (document.location.hash === "#") {
    loadHome();
  } else if (document.location.hash === "#about") {
    loadAbout();
  } else if (document.location.hash === "#contact") {

  }
}

function loadHeader() {
  $(".header").addClass("loadHeader");
  $(".belowHeader").addClass("loadOpacity");
  $(".menuItems").addClass("loadOpacity");
  $(".backgroundImage").addClass("loadOpacity");
}

function loadHome() {
  $(".bigText").addClass("loadBigText");

  $(".backgroundImage").removeClass("moveImageRight");
  $(".aboutPanel").removeClass("loadAboutPanel");
  $(".backgroundImageCover").removeClass("loadHalfOpacity");
  $(".triangleLeft").removeClass("loadTriangleLeft");
  $(".aboutPanelContent h2").removeClass("loadH2Line");
}

function loadAbout() {
  $(".backgroundImage").addClass("moveImageRight");
  $(".aboutPanel").addClass("loadAboutPanel");
  $(".backgroundImageCover").addClass("loadHalfOpacity");
  $(".triangleLeft").addClass("loadTriangleLeft");
  $(".aboutPanelContent h2").addClass("loadH2Line");
}

function loadContact() {

}

$(window).load(initializePage);

CurrentPage = {
  HOME: "#home",
  ABOUT: "#about",
  CONTACT: "#contact"
}

function initializePage() {
  loadHeader();
  loadHome();

  $(".home").click(loadHome);
  $(".about").click(loadAbout);
  $(".contact").click(loadContact);

  $(window).on("hashchange", function() {
    var hash = location.hash;

    switch(hash) {
      case CurrentPage.HOME:
        loadHome();
        break;
      case CurrentPage.ABOUT:
        loadAbout();
        break;
      case CurrentPage.CONTACT:
        loadContact();
        break;
      default:
        loadHome();
    }
  });
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

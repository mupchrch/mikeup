$(window).load(initializePage);

CurrentPage = {
  HOME: "#home",
  ABOUT: "#about",
  CONTACT: "#contact"
}

function initializePage() {
  loadHeader();
  loadCurrentPage();

  $(".home").click(loadHome);
  $(".about").click(loadAbout);
  $(".contact").click(loadContact);
  $(window).on("hashchange", loadCurrentPage);
}

function loadHeader() {
  $(".header").addClass("loadHeader");
  $(".belowHeader").addClass("loadOpacity");
  $(".menuItems").addClass("loadOpacity");
  $(".backgroundImage").addClass("loadOpacity");
}

function loadCurrentPage() {
  var hash = window.location.hash;

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
}

function loadHome() {
  $(".bigText").addClass("loadBigText");
  $(".bigText").addClass("loadOpacity");

  $(".backgroundImage").removeClass("moveImageRight");
  $(".aboutPanel").removeClass("loadAboutPanel");
  $(".backgroundImageCover").removeClass("loadHalfOpacity");
  $(".triangleLeft").removeClass("loadTriangleLeft");
  $(".aboutPanelContent h2").removeClass("loadH2Line");

  $(".backgroundImage").removeClass("moveImageLeft");
  $(".contactPanel").removeClass("loadContactPanel");
}

function loadAbout() {
  $(".backgroundImage").addClass("moveImageRight");
  $(".aboutPanel").addClass("loadAboutPanel");
  $(".backgroundImageCover").addClass("loadHalfOpacity");
  $(".triangleLeft").addClass("loadTriangleLeft");
  $(".aboutPanelContent h2").addClass("loadH2Line");
}

function loadContact() {
  $(".backgroundImage").addClass("moveImageLeft");
  $(".contactPanel").addClass("loadContactPanel");
}

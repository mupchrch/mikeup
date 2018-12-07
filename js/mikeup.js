$(window).load(initializePage);

CurrentPage = {
  HOME: "#home",
  ABOUT: "#about",
  CONTACT: "#contact"
}

function initializePage() {
  loadHeader();
  loadCurrentPage();

  $(".email").text("contact" + "@" + "mikeup.church")

  $(".home").click(loadHome);
  $(".about").click(loadAbout);
  $(".contact").click(loadContact);
  $(window).on("hashchange", loadCurrentPage);
}

function loadHeader() {
  $(".header").addClass("loadHeader");
  $(".belowHeader").addClass("loadOpacity");
  $(".myName").addClass("loadOpacity");
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
  // add home
  $(".bigText").addClass("loadBigText");
  $(".bigText").addClass("loadOpacity");

  // remove about panel
  $(".backgroundImage").removeClass("loadImageRight");
  $(".aboutPanel").removeClass("loadAboutPanel");
  $(".backgroundImageCover").removeClass("loadHalfOpacity");
  $(".triangleLeft").removeClass("loadTriangleLeft");
  $(".aboutPanelContent h2").removeClass("loadH2Line");

  // remove contact panel
  $(".backgroundImage").removeClass("loadImageLeft");
  $(".contactPanel").removeClass("loadOverflowAuto");
  $(".contactPanel").removeClass("loadContactPanel");
  $(".bigText").removeClass("moveBigTextLeft");
  $(".behindMyFace").removeClass("loadBehindMyFace");
  $(".myContactName").removeClass("loadOpacity");
  $(".myContactName").removeClass("loadMyContactName");
  $(".myFace").removeClass("loadOpacity");
  $(".myFace").removeClass("loadMyFace");
  $(".email").removeClass("loadOpacity");
  $(".email").removeClass("loadEmail");
  $(".mySocialMedia").removeClass("loadOpacity");
  $(".mySocialMedia").removeClass("loadMySocialMedia");
}

function loadAbout() {
  // add about panel
  $(".backgroundImage").addClass("loadImageRight");
  $(".aboutPanel").addClass("loadAboutPanel");
  $(".backgroundImageCover").addClass("loadHalfOpacity");
  $(".triangleLeft").addClass("loadTriangleLeft");
  $(".aboutPanelContent h2").addClass("loadH2Line");
}

function loadContact() {
  // add contact panel
  $(".backgroundImage").addClass("loadImageLeft");
  $(".backgroundImageCover").addClass("loadHalfOpacity");
  $(".contactPanel").addClass("loadContactPanel");
  $(".bigText").addClass("moveBigTextLeft");
  $(".behindMyFace").addClass("loadBehindMyFace");
  $(".myContactName").addClass("loadOpacity");
  $(".myContactName").addClass("loadMyContactName");
  $(".myFace").addClass("loadOpacity");
  $(".myFace").addClass("loadMyFace");
  $(".email").addClass("loadOpacity");
  $(".email").addClass("loadEmail");
  $(".mySocialMedia").addClass("loadOpacity");
  $(".mySocialMedia").addClass("loadMySocialMedia");

  // don't show scrollbars during transition
  window.setTimeout(function(){
    $(".contactPanel").addClass("loadOverflowAuto");
  }, 800);
}

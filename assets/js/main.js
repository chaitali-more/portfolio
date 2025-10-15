document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".offcanvas a.nav-link");
    const offcanvas = document.querySelector(".offcanvas");
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        // Close offcanvas when a nav link is clicked
        bsOffcanvas.hide();
      });
    });
  });
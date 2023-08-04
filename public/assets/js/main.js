/**
 * Enable tooltips
 * currentYear
 * navbarSideCollapse
 * navigation-active
 */

addEventListener("DOMContentLoaded", function () {
    /*! --------------------------------------------------------------------
     * Enable tooltips
     * --------------------------------------------------------------------*/
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

    /*! --------------------------------------------------------------------
     * currentYear
     * --------------------------------------------------------------------*/
    const currentYear = new Date().getFullYear();
    const divCurrentYear = document.querySelector('[data-js="currentYear"]')
    if (divCurrentYear) {
        divCurrentYear.textContent = currentYear
    }

    /* --------------------------------------------------------------------
    * - navbarSideCollapse
    ---------------------------------------------------------------------- */
    (() => {
        "use strict";
        document.querySelector("#navbarSideCollapse")?.addEventListener("click", () => {
            document.querySelector(".offcanvas-collapse").classList.toggle("open")
        })
    })()

    /*! --------------------------------------------------------------------
     * navigation-active
     * --------------------------------------------------------------------*/
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll(
        `.navbar-nav .nav-item a[href$="${currentUrl}"]`
    )

    navLinks.forEach(function (link) {
        link.classList.add("active")

        const dropdownParent = link.closest(".nav-item.dropdown")
        dropdownParent?.classList.add("active")
    });
});

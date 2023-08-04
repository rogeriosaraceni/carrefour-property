/**
 * tab-datatable-scroll-x
 * fancybox
 * DOMPurif protect xss
 */

addEventListener("load", () => {
    /** ------------------------------------------------
     * tab-datatable-scroll-x
     --------------------------------------------------- */
    $(".tab-datatable-scroll-x").DataTable({
        order: [[0, "asc"]],
        ordering: true,
        paging: true,
        info: true,
        scrollX: true,
        scrollCollapse: true,

        lengthMenu: [
            [15, 30, 50, 80, -1],
            [15, 30, 50, 80, "Tudo"],
        ],

        columnDefs: [
            {
                targets: "no-sort",
                orderable: false,
            },
        ],

        language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
        },
    });

    $('[data-row="delete"]').click(function () {
        if (!confirm("Você tem certeza que deseja excluir?")) {
            return false;
        }
    });

    /** ------------------------------------------------
     * fancybox
     * https://fancyapps.com/fancybox/plugins/html/#iframes
     --------------------------------------------------- */
    Fancybox.bind("[data-fancybox]", {});

    /** ------------------------------------------------
     * floatThead
     --------------------------------------------------- */
    var $table = $(".fixThead");
    $table.floatThead({
        scrollContainer: function ($table) {
            return $table.closest(".table-responsive");
        },
    });

    /** ------------------------------------------------
     * DOMPurif protect xss
     --------------------------------------------------- */
    const sanitize = (string) => DOMPurify.sanitize(string);

    let inputsApp = document.querySelectorAll(".form-control");
    inputsApp.forEach((item) => {
        item.addEventListener("change", (e) => {
            const result = sanitize(e.target.value);
            console.log(result);
        });
    });
});

$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoWidth: true,
        items: 1,
        dots: true,
        // Chamada de retorno para adicionar números aos dots
        onInitialized: addSlideNumber
    });

    // Função para adicionar números aos dots
    function addSlideNumber(event) {
        $(event.target).find('.owl-dot').each(function (index) {
            $(this).append('<span>' + (index + 1) + '</span>');
        });
    }
});



function toggleMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');

    var toggleButton = document.getElementById('toggleButton');
    toggleButton.classList.toggle('active');
}

$(document).ready(function () {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };

    $("#accordion").accordion({
        icons: icons,
        collapsible: true,
        heightStyle: "content"
    });

    $("#toggle").button().on("click", function () {
        if ($("#accordion").accordion("option", "icons")) {
            $("#accordion").accordion("option", "icons", null);
        } else {
            $("#accordion").accordion("option", "icons", icons);
        }
    });
});



$('.carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});
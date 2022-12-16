$(document).ready(function () {
    $('.carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            
        ]
    });
          
});

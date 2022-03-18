$(document).ready(function(){
    $('.reviews__inner').slick({
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        speed: 1000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    variableWidth: false,
                }
            }
        ]
    });

    $('.price__form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");


            $('.price__form').trigger('reset');
        });
        return false;
    });

    $('input[name=tel]').mask("+7 (999) 999-99-99");
  });
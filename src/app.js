let ratingBtn = $('.rating-btn');
let submitBtn = $('#submit-btn');
let userRating;

ratingBtn.each(function () {
    $(this).on('click', function () {
        userRating = $(this).text();
        $(this).addClass('userChoice');
        ratingBtn.not(this).removeClass('userChoice');

        // After rating allow user to use submit button
        submitBtn.css('cursor', 'pointer');
        submitBtn.on('click', () => {
            $('.card-frontFace').css('display', 'none');
            $('.card-backFace').css('display', 'block');
        })

        // Adding rating value to the thank you Card
        $('#userRating').text(userRating);
    });
});

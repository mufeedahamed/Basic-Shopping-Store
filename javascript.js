document.addEventListener("DOMContentLoaded", function () {
    var confirmationLinks = document.querySelectorAll(".confirmation");

    confirmationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Display a confirmation dialog
            var userConfirmation = confirm("Do you want to visit the link?");

            // If user clicks 'OK' (true), follow the link
            if (userConfirmation) {
                window.location.href = event.target.href;
            } else {
                // If user clicks 'Cancel' (false), prevent the default behavior (don't follow the link)
                event.preventDefault();
            }
        });
    });
});

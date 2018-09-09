// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).attr("data-id");
        // var newDevoured = $(this).data("newDevoured");

        var newDevouredState = {
            devoured: 1
        };
        console.log(newDevouredState);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevouredState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

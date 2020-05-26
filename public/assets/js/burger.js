// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  //create a new burger
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bun").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Named a new Burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // changes a burger from the right side of the column to the left side
  // or devour a burger
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");

    var newDevouredState = {
      devoured: true,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // changes a burger from the left side of the column to the right side
  // or remake a burger
  $(".change-remake").on("click", function (event) {
    var id = $(this).data("id");

    var newDevouredState = {
      devoured: false,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //deletes burger by using the primary key of id
  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted cat", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

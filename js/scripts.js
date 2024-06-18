/* global $ */

$(document).ready(function () {
  // Add new item
  $("#button").click(function () {
    var inputValue = $("#input").val();
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      $("#list").append(
        "<li>" + inputValue + "<span class='close'>\u00D7</span></li>",
      );
    }
    $("#input").val("");

    // Attach click event to new close buttons
    $(".close").click(function () {
      $(this).parent().remove();
    });
  });

  // Cross out item on double-click
  $(document).on("dblclick", "li", function () {
    $(this).toggleClass("checked");
  });

  // Delete item
  $(document).on("click", ".close", function () {
    $(this).parent().remove();
  });

  // Enable sorting
  $("#list").sortable();
});

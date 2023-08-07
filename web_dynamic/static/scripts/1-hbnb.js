$(document).ready(function () {
  const amenities = {};

  // Checkbox change event handler (for both select and deselect)
  $("li input[type=checkbox]").change(function () {
    if (this.checked) {
      amenities[this.dataset.name] = this.dataset.id;
    } else {
      delete amenities[this.dataset.name];
    }
    $(".amenities h4").text(Object.keys(amenities).sort().join(", "));
  });

  // Button click event handler to deselect all checkboxes
  $("#deselect-all").click(function () {
    $("li input[type=checkbox]").prop("checked", false);
    amenities = {}; // Clear the amenities object
    $(".amenities h4").text(""); // Update the displayed selected amenities text to empty
  });
});

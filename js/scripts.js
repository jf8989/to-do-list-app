$(document).ready(function() {
    // 1. Adding a new item to the list
    $('#button').click(function() {
      let inputValue = $('#input').val();
  
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        let li = $('<li></li>');
        li.text(inputValue);
        $('#list').append(li);
        $('#input').val('');
  
        // 2. Crossing out an item from the list
        function crossOut() {
          li.toggleClass("strike");
        }
  
        li.on("dblclick", function() {
          crossOut();
        });
  
        // 3(i). Adding the delete button "X"
        let crossOutButton = $('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);
  
        crossOutButton.on("click", deleteListItem);
  
        // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the CSS
        function deleteListItem() {
          li.addClass("delete");
        }
      }
    });
  
    // 4. Reordering the items
    $('#list').sortable();
  });
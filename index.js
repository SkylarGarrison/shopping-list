'use strict';

function main(){

  $('#js-shopping-list-form').on('submit', function(evt){
    evt.preventDefault(); 
    let listItem= $('#shopping-list-entry').val();
    console.log(listItem);
    let template = `<li>
                <span class="shopping-item">${listItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
            </li>`;
    $('.shopping-list').append(template);

    $('input[name=shopping-list-entry]').val('');

    
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
};
        

/* check item
 
function markItem(){
  $('.shopping-list').on('click','.shopping-item-toggle', function(event) {
    $(this)
      .closest('.shopping-item-controls')
      .siblings('.shopping-item')
      .toggleClass('shopping-item__checked');
  });
} */

$(main);
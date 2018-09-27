'use strict';
/*eslint-env jquery */

function updateShoppingList(){
    //add item
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const item = ($(this).find('.js-shopping-list-entry').val());
        $('.shopping-list').append(generateNewItemHTML(item));
        $('.js-shopping-list-entry').val('');
    });
    //check item
    $('.shopping-list').on('click','.shopping-item-toggle',( function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    }));
    //remove item
    $('.shopping-list').on('click', '.shopping-item-delete', (function (event){
        $(this).closest('li').remove();
    }));
}

function generateNewItemHTML(item){
    return `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
}

$(updateShoppingList);
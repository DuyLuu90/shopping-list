function shoppingList() {
//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        const product= $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
    }); //get the value

    console.log(product);

//create "event delegation" for ."shopping-list" (applied for all newly added "product")

    //check and uncheck items on the list by clicking the "Check" button("shopping-item"=>"shopping-item shopping-item__checked")
    $('.shopping-list').on('click',"shopping-item-controls", event=>{
        event.preventDefault();
        $('span').toggleClass("shopping-item__checked");
        //if "shopping-item__checked" is already there, it will be removed
    });
    //permanently remove items from the list
    $('.shopping-list').on('click',"shopping-item-delete", event=>{
        event.preventDefault();
        $(event.target).closest('li').remove();
    });
//add(append) the new "product" to ".shopping-list"
    $(".shopping-list").append(`<li>
    <span class="shopping-item">${product}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);

}; 
$(shoppingList);
//submit()
//preventDefault()
//toggleClass(): add/remove one/more classes from each matched element (add when the class is NOT present, and remove when it is)
//remove(): remove data/element
//detach(): remove element but NOT data
//empty(): remove data but NOT element
//closest(): return the first ancestor of the selected element
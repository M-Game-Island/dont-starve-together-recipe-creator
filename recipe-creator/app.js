var modName = undefined;

function onClickNewRecipeMod() {
  // Get mod name
  modName = document.getElementById("text-mod-name").value;
  //alert(modName);

  // Hide init menu
  document.getElementById("div-init-menu").style.display = "none";

  // show mod creator
  document.getElementById("mod-name").value = modName;
  document.getElementById("div-mod-creator").style.display = "flex"
}

function onClickAddItem() {
  // Get item info
  let itemName = document.getElementById("item-name").value;
  let itemAmount = document.getElementById("item-amount").value;

  // Create item element to display
  let child = document.createElement("p");
  child.innerHTML = itemName + " x" + itemAmount;
  child.setAttribute("class", "white");
  child.setAttribute("mod-item-name", itemName);
  child.setAttribute("mod-item-amount", itemAmount);
  document.getElementById("recipe-item-list").appendChild(child);

  // Clear fields
  document.getElementById("item-name").value = "";
  document.getElementById("item-amount").value = 0;
}

function onClickAddRecipe() {
  // Get recipe info
  let recipeName = document.getElementById("recipe-name").value;
  let recipeTab = document.getElementById("recipe-tab").value;
  let recipeTech = document.getElementById("recipe-tech").value;

  let recipeItems = [];
  let recipeItemList = document.getElementById("recipe-item-list");
  recipeItemList.childNodes.forEach((child) => {
    recipeItems.push({
      "name": child.getAttribute("mod-item-name"),
      "amount": child.getAttribute("mod-item-amount")
    })
  })

  console.log(recipeItems);

  // Create recipe element to display
  // ...

  // Clear fields
  // ...
}
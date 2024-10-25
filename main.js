const foodStock = [
  { img: "🍕", name: "pizza", foodType: "junk", price: 2.5 },
  { img: "🍔", name: "burger", foodType: "junk", price: 3 },
  { img: "🍟", name: "fries", foodType: "junk", price: 1 },
  { img: "🌭", name: "hot dog", foodType: "junk", price: 1.5 },
  { img: "🥗", name: "salad", foodType: "healthy", price: 2 },
  { img: "🥙", name: "pita", foodType: "healthy", price: 0 },
  { img: "🥪", name: "sandwich", foodType: "healthy", price: 3 },
  { img: "🌯", name: "burrito", foodType: "healthy", price: 5 },
  { img: "🥣", name: "soup", foodType: "healthy", price: 2 },
];

/**
 * Takes a food object and turns it into an HTML element.
 * @param {Object} foodObject - The food object containing img, name, and price properties.
 * @returns {HTMLElement} The HTML element representing the food card.
 */
const createFoodCard = (foodObject) => {
  const div = document.createElement("div");
  div.classList.add("card");

  for (const key in foodObject) {
    const p = document.createElement("p");
    p.textContent = foodObject[key];
    div.appendChild(p);
  }

  return div;
};

const randomFood = document.querySelector(".random-food");

randomFood.appendChild(createFoodCard(foodStock[0]));

// 1. DISPLAY RANDOM CARD
// TODO: WHEN A USER CLICKS ON THE NEXT BUTTON
// - THE DISPLAYED CARD WILL BE REMOVED.
// - A NEW RANDOM FOOD CARD SHOULD BE DISPLAYED.

const button = document.querySelector('button');
button.addEventListener('click', event => {
  let i = Math.floor(Math.random() * foodStock.length);
  randomFood.replaceChildren(createFoodCard(foodStock[i]));
})

// 2. DISPLAY ALL
// TODO: THE view-all-food ELEMENT IS EMPTY
// - HOW CAN YOU REMOVE THE ...?
// - HOW CAN YOU ITERATE THROUGH THE foodStock ARRAY AND CREATE A CARD FOR EACH?
// - HOW CAN YOU ADD THEM TO THE HTML ELEMENT?
const viewAll = document.querySelector('.view-all-food');
if(foodStock.length > 0) viewAll.innerHTML = '';
for(i = 0; i < foodStock.length; i++){
  viewAll.appendChild(createFoodCard(foodStock[i]));
}


// 3. THE EVENT
// THE CODE BELOW
// - GETS ALL OF THE HTML ELEMENTS WITH A CLASS OF title
// - IT SETS AN EVENT LISTENER ON EACH ELEMENT
// - HAVE A LOOK AT THE event IN THE CONSOLE WHEN YOU HOVER OVER A TITLE
const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("mouseover", (event) => {
    console.dir(event);
    console.log(event.target);
    event.target.style.color = "orange";
  });
  title.addEventListener("mouseout", (event) => {
    event.target.style.color = "black";
  })
});

// TODO:
// - WHEN THE MOUSE LEAVES AN ELEMENT WITH A CLASS OF title, CHANGE THE TEXT TO A DIFFERENT COLOR

// 4. ADD FOOD & USE THE EVENT
// TODO: WHEN A FORM IS SUBMITTED, GET THE VALUES, CREATE A FOOD OBJECT, UPDATE THE foodStock, AND DISPLAY
const form = document.querySelector(".food-form");

form.addEventListener("submit", (event) => {
  // STOPS A FORM FROM SUBMITTING ALLOWING YOU TO HANDLE THE SUBMISSION WITH JAVASCRIPT INSTEAD
  event.preventDefault();
  let data = new FormData(event.target);
  console.log([...data.entries()]);

  const foodObject = {};
  // - HOW DO YOU ADD THE VALUES TO THE foodObject?
  foodObject.name = data.get("name");
  foodObject.price = data.get("price");
  foodObject.img = data.get("emoji");
  foodObject.foodType = data.get("type");

  foodStock.push(foodObject);
  console.log(foodStock)

  // HOW CAN YOU UPDATE THE view-all-food CONTAINER TO HAVE THE NEW foodObject?
  viewAll.appendChild(createFoodCard(foodStock[foodStock.length-1]));
});


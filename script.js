const recipes = [
  {
      "name": "Veggie Delight",
      "imageSrc": "https://source.unsplash.com/random?veggies",
      "time": "30 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Chicken Grill",
      "imageSrc": "https://source.unsplash.com/random?chicken",
      "time": "45 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Cheese Pizza",
      "imageSrc": "https://source.unsplash.com/random?pizza",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.1
  },
  {
      "name": "Steak",
      "imageSrc": "https://source.unsplash.com/random?steak",
      "time": "60 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.7
  },
  {
      "name": "Grilled Salmon",
      "imageSrc": "https://source.unsplash.com/random?salmon",
      "time": "50 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Tomato Pasta",
      "imageSrc": "https://source.unsplash.com/random?pasta",
      "time": "35 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.0
  },
  {
      "name": "Vegan Salad",
      "imageSrc": "https://source.unsplash.com/random?salad",
      "time": "20 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.9
  },
  {
      "name": "Fried Chicken",
      "imageSrc": "https://source.unsplash.com/random?friedChicken",
      "time": "55 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Mushroom Risotto",
      "imageSrc": "https://source.unsplash.com/random?risotto",
      "time": "45 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Burger",
      "imageSrc": "https://source.unsplash.com/random?burger",
      "time": "30 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Paneer Tikka",
      "imageSrc": "https://source.unsplash.com/random?paneerTikka",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.4
  },
  {
      "name": "BBQ Ribs",
      "imageSrc": "https://source.unsplash.com/random?ribs",
      "time": "70 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 3.6
  },
  {
      "name": "Caesar Salad",
      "imageSrc": "https://source.unsplash.com/random?caesarSalad",
      "time": "25 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.8
  },
  {
      "name": "Fish Tacos",
      "imageSrc": "https://source.unsplash.com/random?fishTacos",
      "time": "35 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Chocolate Cake",
      "imageSrc": "https://source.unsplash.com/random?chocolateCake",
      "time": "90 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.9
  }
];

function displayRecipes(recipesData){
  const recipeContainer=document.getElementById("rec");
  recipeContainer.innerHTML=``;

  recipesData.forEach(x => {
    const recipeCard=document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const recipeImage=document.createElement("img");
    recipeImage.src=x.imageSrc;
    recipeCard.appendChild(recipeImage);

    const recipeInfo=document.createElement("div");
    recipeInfo.classList.add("recipe-info");

    const recipeName=document.createElement("h2");
    recipeName.textContent=x.name;
    recipeInfo.appendChild(recipeName);

    const recipeType=document.createElement("div")
    recipeType.classList.add("recipe-type")
    recipeType.textContent=x.type;
    recipeInfo.appendChild(recipeType);

    const recipeTime=document.createElement("div")
    recipeTime.classList.add("recipe-time");
    recipeTime.textContent=x.time;
    recipeInfo.appendChild(recipeTime)
    
    const recipeRating= document.createElement("div")
    recipeRating.classList.add("recipe-rating")
    recipeRating.textContent=`Rating : ${x.rating}`;
    recipeInfo.appendChild(recipeRating)

    const likeButton=document.createElement("button");
    likeButton.classList.add("like-button")
    likeButton.innerHTML=x.isLiked ? '&#9829;' : '&#9825;';
    recipeInfo.appendChild(likeButton);

    recipeCard.appendChild(recipeInfo);
    recipeContainer.appendChild(recipeCard)
  });
}

function filterRecipes(searchQuery){
  const filteredRecipes=recipes.filter((x)=>
  x.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  displayRecipes(filteredRecipes);
}
document.getElementById("searchInput").addEventListener("input",(e)=>{
  const searchInp=e.target.value.trim();
  filterRecipes(searchInp);
}
)

function filterByType(type){
  const filteredRecipes=recipes.filter((x)=>x.type===type);
  // const filteredRecipes = type === 'all' ? recipes : recipes.filter((recipe) => recipe.type === type);
  displayRecipes(filteredRecipes);
}
document.getElementById("showAll").addEventListener("click",()=>{
  document.querySelector(`.btn.active`).classList.remove("active");
  document.getElementById("showAll").classList.add("active");
  displayRecipes(recipes);
});
document.getElementById("showVeg").addEventListener("click", ()=>{
  document.querySelector(".btn.active").classList.remove("active")
  document.getElementById("showVeg").classList.add("active");
  filterByType(`veg`);
})
document.getElementById("showNonVeg").addEventListener("click",()=>{
  document.querySelector(".btn.active").classList.remove("active");
  document.getElementById("showNonVeg").classList.add("active");
  filterByType("non-veg")
})

function filterByRating(rating){
  const filteredRecipes=rating===`above`? recipes.filter((x)=>x.rating>=4) : recipes.filter((x)=>x.rating<4);
  displayRecipes(filteredRecipes);
}
document.getElementById("rating1").addEventListener("change",()=>{
  if(document.getElementById("rating1").checked){
    filterByRating(`above`);
  }
  // else{
  //   console.log(`below`)
  //   filterByRating("below");
  // }
})
document.getElementById("rating2").addEventListener("change",()=>{
  if(document.getElementById("rating2").checked){
    filterByRating(`below`);
  }
})
displayRecipes(recipes);


// let l1="all";
// let r1=``
// function ff1(){
//   console.log(l1,r1);
//   let flt1=l1===`all`? recipes : recipes.filter((x)=>x.type===l1);
//   flt1=r1===``? flt1: (r1===`above`? flt1.filter((x)=>(x.rating>=4)): flt1.filter((x)=>(x.rating<4)));
//   displayRecipes(flt1);
// }
// document.getElementById("showAll").addEventListener("click",()=>{
//   document.querySelector(`.btn.active`).classList.remove("active");
//   document.getElementById("showAll").classList.add("active");
//   l1=`all`;
//   ff1();
// });
// document.getElementById("showVeg").addEventListener("click", ()=>{
//   document.querySelector(".btn.active").classList.remove("active")
//   document.getElementById("showVeg").classList.add("active");
//   l1=`veg`;
//   ff1();
// })
// document.getElementById("showNonVeg").addEventListener("click",()=>{
//   document.querySelector(".btn.active").classList.remove("active");
//   document.getElementById("showNonVeg").classList.add("active");
//   l1=`non-veg`;
//   ff1();
// })

// document.getElementById("rating1").addEventListener("change",()=>{
//   if(document.getElementById("rating1").checked){
//     r1=`above`;
//     ff1();
//   }
// })
// document.getElementById("rating2").addEventListener("change",()=>{
//   if(document.getElementById("rating2").checked){
//     r1=`below`;
//     ff1();
//   }
// })
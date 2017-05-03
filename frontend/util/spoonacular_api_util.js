export const fetchRecipes = listId => (
  $.ajax({
    type: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search`,
    data: {

    },
    dataType: 'json',
    success: function(data) { console.log((data.source)); },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "YOUR-MASHAPE-KEY"); // Enter here your Mashape key
    }
  })
);


//curl --get --include 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?metaInformation=false&number=10&query=appl' \
//  -H 'X-Mashape-Key: OOjlmhc2mGmshoQHtCWTnKaEZx4pp1tO9Rnjsnct4kvZJAoBhn' \
//  -H 'Accept: application/json'

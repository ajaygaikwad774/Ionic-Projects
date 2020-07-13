import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 1,
      title: "Butter Chiken",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Chicken_makhani.jpg",
      ingredients: ["Chicken", "Onion", "Ginger-Garlic"]
    },
    {
      id: 2,
      title: "Chiken Masala",
      imageUrl: "https://i.ytimg.com/vi/dUYLzS_Y7qQ/maxresdefault.jpg",
      ingredients: ["Chicken", "Onion", "Ginger-Garlic"]
    },
    {
      id: 3,
      title: "Chicken Handi",
      imageUrl: "http://rookiewithacookie.com/wp-content/uploads/2018/07/Chicken-curry.jpg",
      ingredients: ["Chicken", "Onion", "Ginger-Garlic"]
    },
    {
      id: 4,
      title: "Chiken Tikka",
      imageUrl: "http://maunikagowardhan.co.uk/wp-content/uploads/2012/08/Tandoori-Chicken1.jpg",
      ingredients: ["Chicken", "Onion", "Ginger-Garlic"]
    },
    {
      id: 5,
      title: "Chicken Biryani",
      imageUrl: "https://images.food52.com/N6TN7x-H4ZTPEHbZVVuiO1iTqLc=/768x511/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg",
      ingredients: ["Chicken", "Onion", "Ginger-Garlic"]
    },
    {
      id: 6,
      title: "Chicken Tandoori",
      imageUrl: "https://lovelaughmirch.com/wp-content/uploads/2018/12/Whole-Tandoori-Chicken-with-Tandoori-Roast-Potatoes-_2.jpg",
      ingredients: ["Chicken", "Onion", "Ginger-Garlic"]
    },
    {
      id: 7,
      title: "Chicken Afghani",
      imageUrl: "https://www.cooktube.in/wp-content/uploads/2017/01/afghani-chicken.jpg",
      ingredients: ["Chicken", "Onion", "Ginger-Garlic"]
    },
    {
      id: 8,
      title: "Chicken Fry",
      imageUrl: "https://c.ndtvimg.com/2019-05/usn4dnv_fried-chicken_625x300_24_May_19.jpg",
      ingredients: ["Chicken", "Onion", "Ginger-Garlic"]
    },
    {
      id: 9,
      title: "Chicken Curry",
      imageUrl: "https://i.ndtvimg.com/i/2017-12/malvani-chicken-curry_620x330_81514354104.jpg",
      ingredients: ["Chicken", "Onion", "Ginger-Garlic"]
    }

  ];

  constructor(private http: HttpClient) { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === id;
      })
    }
  }

  onDeleteRecipe(recipeId: number) {
    this.recipes = [...this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })];
  }
}

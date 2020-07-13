import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private alertController: AlertController, private recipeService: RecipesService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("recipeId")) {
        this.router.navigate(['/recipes']);

      }
      const recipeId = Number(paramMap.get("recipeId"));
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);

    })
  }
  onDeleteRecipe() {
    this.alertController.create({
      header: "Are you sure",
      message: "Do you really want to delete recipe? ",
      buttons: [
        {
          text: "cancel",
          role: "cancel"
        },
        {
          text: "Delete",
          handler: () => {
            this.recipeService.onDeleteRecipe(Number(this.loadedRecipe.id));
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}

import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',

})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    let ingName = this.nameInputRef.nativeElement.value;
    let ingAmount = this.amountInputRef.nativeElement.value;
    let newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}

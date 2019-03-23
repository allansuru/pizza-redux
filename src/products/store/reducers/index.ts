import { ActionReducerMap, createSelector, createFeatureSelector } from "@ngrx/store";

import * as fromPizzas from "./pizzas.reducer";

export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductState>("products");


// pizza state
export const getPizzaState = createSelector(getProductsState, (state: ProductState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);

// diminuiu o objeto (levels), criando seletores, por exemplo: 

// const state = { // export const getPizzaState
// 	products: {
// 		pizzas: {
// 			data: [],  // export const getAllPizzas
// 			loaded: false, // export const getPizzasLoaded 
// 			loading: false; // export const getPizzasLoading
// 		}
// 	}
// }
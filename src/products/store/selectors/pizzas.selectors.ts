import { Pizza } from './../../models/pizza.model';
import { createSelector } from "@ngrx/store";

import * as froomRoot from '../../../app/store'
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from './toppings.selectors';


// pizza state
export const getPizzaState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.pizzas);


export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);

export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
	return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getSelectedPizza = createSelector(getPizzasEntities, froomRoot.getRouterState, (entities, router): Pizza => {
	return router.state && entities[router.state.params.pizzaId];
});



export const getPizzaVisualized = createSelector(
	getSelectedPizza,
	fromToppings.getToppingEntities,
	fromToppings.getSelectedToppings,
	(pizza, toppingsEntities, selectedToppings) => { 
		const toppings = selectedToppings.map(id => toppingsEntities[id]);
		return { ...pizza, toppings };
	 }
);

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
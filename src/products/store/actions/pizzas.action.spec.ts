import { Pizza } from './../../models/pizza.model';
import * as fromPizzas from './pizzas.action';

describe('Pizza Actions', () => {

	describe('LoadPizzas Actions', () => {

		describe('LoadPizzas', () => {

			it('Should create an action', () => {
				const action = new fromPizzas.LoadPizzas();
				
				expect({ ...action }).toEqual({
					type: fromPizzas.LOAD_PIZZAS,
				})
			});

		});

		describe('LoadPizzasFail', () => {

			it('Should create an action', () => {
				const payload = { message: 'Load Error' };
				const action = new fromPizzas.LoadPizzasFail(payload);

				expect({ ...action }).toEqual({
					type: fromPizzas.LOAD_PIZZAS_FAIL,
					payload,
				});
			});

		});

		describe('LoadPizzasSuccess', () => {

			it('Should create an action', () => {
				const payload: Array<Pizza> = [
					{
						"name": "Blazin' Inferno",
						"toppings": [
							{
								"id": 10,
								"name": "pepperoni"
							},
							{
								"id": 9,
								"name": "pepper"
							},
							{
								"id": 3,
								"name": "basil"
							},
							{
								"id": 4,
								"name": "chili"
							},
							{
								"id": 7,
								"name": "olive"
							},
							{
								"id": 2,
								"name": "bacon"
							},
							{
								"id": 5,
								"name": "mozzarella"
							}
						],
						"id": 1
					},
					{
						"name": "Plain Ol' Pepperoni",
						"toppings": [
							{
								"id": 10,
								"name": "pepperoni"
							},
							{
								"id": 9,
								"name": "pepper"
							}
						],
						"id": 3
					},
					{
						"name": "Gui",
						"toppings": [
							{
								"id": 2,
								"name": "bacon"
							},
							{
								"id": 1,
								"name": "anchovy"
							},
							{
								"id": 5,
								"name": "mozzarella"
							},
							{
								"id": 9,
								"name": "pepper"
							},
							{
								"id": 10,
								"name": "pepperoni"
							},
							{
								"id": 6,
								"name": "mushroom"
							}
						],
						"id": 6
					}
				];
				const action = new fromPizzas.LoadPizzasSuccess(payload);

				expect({ ...action }).toEqual({
					type: fromPizzas.LOAD_PIZZAS_SUCCESS,
					payload,
				});
			});

		});

	});

	describe('Create Pizza Actions', () => {

		describe('CreatePizzas Actions', () => {

			describe('CreatePizzas', () => {

				it('Should create an action', () => {
					const payload: Pizza =
					{
						"name": "Blazin' Inferno",
						"toppings": [
							{
								"id": 10,
								"name": "pepperoni"
							},
							{
								"id": 9,
								"name": "pepper"
							},
							{
								"id": 3,
								"name": "basil"
							},
							{
								"id": 4,
								"name": "chili"
							},
							{
								"id": 7,
								"name": "olive"
							},
							{
								"id": 2,
								"name": "bacon"
							},
							{
								"id": 5,
								"name": "mozzarella"
							}
						],
						"id": 1
					}
					const action = new fromPizzas.CreatePizza(payload);
				
					expect({ ...action }).toEqual({
						type: fromPizzas.CREATE_PIZZA,
						payload
					})
				});

			});

			describe('CreatePizzasFail', () => {

				it('Should create an action', () => {
					const payload = { message: 'Load Error' };
					const action = new fromPizzas.CreatePizzaFail(payload);

					expect({ ...action }).toEqual({
						type: fromPizzas.CREATE_PIZZA_FAIL,
						payload,
					});
				});

			});

			describe('CreatePizzasSuccess', () => {

				it('Should create an action', () => {
					const payload: Array<Pizza> = [
						{
							"name": "Blazin' Inferno",
							"toppings": [
								{
									"id": 10,
									"name": "pepperoni"
								},
								{
									"id": 9,
									"name": "pepper"
								},
								{
									"id": 3,
									"name": "basil"
								},
								{
									"id": 4,
									"name": "chili"
								},
								{
									"id": 7,
									"name": "olive"
								},
								{
									"id": 2,
									"name": "bacon"
								},
								{
									"id": 5,
									"name": "mozzarella"
								}
							],
							"id": 1
						},
						{
							"name": "Plain Ol' Pepperoni",
							"toppings": [
								{
									"id": 10,
									"name": "pepperoni"
								},
								{
									"id": 9,
									"name": "pepper"
								}
							],
							"id": 3
						},
						{
							"name": "Gui",
							"toppings": [
								{
									"id": 2,
									"name": "bacon"
								},
								{
									"id": 1,
									"name": "anchovy"
								},
								{
									"id": 5,
									"name": "mozzarella"
								},
								{
									"id": 9,
									"name": "pepper"
								},
								{
									"id": 10,
									"name": "pepperoni"
								},
								{
									"id": 6,
									"name": "mushroom"
								}
							],
							"id": 6
						}
					];
					const action = new fromPizzas.LoadPizzasSuccess(payload);

					expect({ ...action }).toEqual({
						type: fromPizzas.LOAD_PIZZAS_SUCCESS,
						payload,
					});
				});

			});

		});

	});
});
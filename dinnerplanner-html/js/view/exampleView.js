//ExampleView Object constructor
var ExampleView = function (container, model) {

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	const starter = model.getAllDishes("starter")[0];
	const main = model.getAllDishes("main dish")[0];
	const dessert = model.getAllDishes("dessert")[0];

	model.addDishToMenu(starter.id);
	model.addDishToMenu(main.id);
	model.addDishToMenu(dessert.id);

	this.numberOfGuests.html(model.getTotalMenuPrice());

}

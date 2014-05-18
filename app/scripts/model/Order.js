function Order(){
	this.person_name =Person.get_chose_person_name();
	this.restaurant_name=Restaurant.get_chose_restaurant_name();
	var food_name=Food.get_chose_food_name();
	this.food = $.grep(Food.get_all_foods()[Restaurant.get_chose_restaurant_name()],function(food){
		return food.name==Food.get_chose_food_name()
	})[0]
}

Order.prototype.process_order =function(){
	
}
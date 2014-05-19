function Order(){
	this.person_name =Person.get_chose_person_name();
	this.restaurant_name=Restaurant.get_chose_restaurant_name();
	var food_name=Food.get_chose_food_name();
	var food = $.grep(Food.get_all_foods()[Restaurant.get_chose_restaurant_name()],function(food){
		return food.name==Food.get_chose_food_name()
	})[0];
	this.food_name=food.name;
	this.food_price = food.price;
}

Order.get_orders = function(){
	return JSON.parse(localStorage.getItem("orders")) ||[];
}

Order.prototype.have_ordered = function(){
	var person_name = this.person_name;
	return $.grep(Order.get_orders(),function(order){
		return order.person_name == person_name;
	}).length ==0
}

Order.prototype.process_order =function(){
	var orders = Order.get_orders();
	if (this.have_ordered()){
		orders.push(this)
	}
	else{
		var current_order = this;
		var orders = $.map(orders,function(order){
			if (order.person_name==current_order.person_name){
				order = current_order;
			}
			return order
		})
	}
	localStorage.setItem("orders", JSON.stringify(orders));	
    localStorage.removeItem('food_name');
    localStorage.removeItem('person_name');
}

Order.clear_food_data = function(){
	localStorage.removeItem('food_name');
}
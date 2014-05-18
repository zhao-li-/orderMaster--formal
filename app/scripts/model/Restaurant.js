function Restaurant(restaurant_name){
	this.name =restaurant_name;
}

Restaurant.get_all_restaurants = function(){
	return [
    {
        "name": "KFC"
    },
    {
        "name": "7-11"
    },
    {
        "name": "成都小吃"
    }
];
}

Restaurant.prototype.save=function(){
	localStorage.setItem("restaurant_name", this.name);
}
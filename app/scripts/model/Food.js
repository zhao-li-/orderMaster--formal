function Food (){
}

Food.get_all_foods =function(){
	return {
  "KFC":[
      {
          "name":"田园脆鸡堡",
          "price":10.00
      },
      {
          "name":"黄金咖喱猪扒饭",
          "price":23.50
      },
      {
          "name":"意式肉酱肉丸饭",
          "price":16.00
      },
      {
          "name":"老北京鸡肉卷",
          "price":14.00
      },
      {
          "name":"劲脆鸡腿堡",
          "price":15.00
      }
  ],
  "7-11":[
      {
          "name":"全素",
          "price":9.00
      },
      {
          "name":"半素半荤",
          "price":11.50
      },
      {
          "name":"全荤",
          "price":13.00
      }
  ],
  "成都小吃":[
      {
          "name":"西红柿鸡蛋盖饭",
          "price":10.00
      },
      {
          "name":"木须肉盖饭",
          "price":10.00
      },
      {
          "name":"尖椒肉丝盖饭",
          "price":12.00
      },
      {
          "name":"京酱肉丝盖饭",
          "price":12.00
      },
      {
          "name":"地三鲜盖饭",
          "price":9.00
      }
  ]
};
}

Food.save_food=function(food_name){
	localStorage.setItem("food_name", food_name);
}

Food.get_chose_food_name = function(){
  return localStorage.getItem('food_name');
}
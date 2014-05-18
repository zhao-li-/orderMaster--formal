function Person(person_name){
    this.name=person_name;
}

Person.get_all_people=function(){
	return [
        {
            "name":"赵大"
        },
        {
            "name":"钱二"
        },
        {
            "name":"张三"
        },
        {
            "name":"李四"
        },
        {
            "name":"王五"
        },
        {
            "name":"刘六"
        }
    ];
}

Person.get_chose_person_name = function(){
	return localStorage.getItem('person_name');
}

Person.prototype.save=function(){
    localStorage.setItem("person_name", this.name);
}
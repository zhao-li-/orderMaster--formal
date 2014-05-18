function Person(){}

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
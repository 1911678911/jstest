/**
 * [personClass description]
 * @return {[type]} [description]
 */
function personClass(name,age,sex) {
	if(!(this instanceof personClass)){
		return new personClass(name,age,sex);
	}
	this.name = name;
	this.age = age;
	this.sex = sex;
	var station = 'beijing';
	this.getInfo = function() {
		return this.name + station;
	};
}

personClass.prototype.say = function(){
	console.log('log');
}

function object(o){
	var F = function (){};
	F.prototype = o;
	return new F();
}

function Man(name,age,sex,sunname){
	personClass.call(this,name,age,sex);
	this.sunname = sunname;
}

Man.prototype = object(personClass.prototype);
Man.prototype.constructor = Man;

// 实例化子类
var man = new Man("Lee",88,0,'xiaoLee');

//函数的原型
console.log(Object.getPrototypeOf(personClass)===Function.prototype);

//空对象的原型  
console.log(Object.getPrototypeOf({})===Object.prototype);

//对象的原型
console.log(Object.getPrototypeOf(man)===Man.prototype);



//返回personClass的原型对象
console.log(personClass.prototype);


//返回man的原型对象
console.log(Man.prototype);
console.log(man.constructor===Man.prototype.constructor);
console.log(man.__proto__.constructor===man.constructor);

//object的原型是null 
console.log(Object.getPrototypeOf(Object.prototype));

//另外一种创建对象的方法－－－创建新的man
var man2 = Object.setPrototypeOf({},Man.prototype);
Man.call(man2);
man2.say();

var Book = (function(){
	//静态私有变量
	var bookNum = 0;
	//静态私有方法
	function checkBook(name){
		console.log('checkBook --name ' + name);
	}	
	//创建类
	function _book(newId,newName,newPrice){
		//私有变量
		var name;
		var price;
		//私有方法
		function checkId(){}
		//特权方法
		this.getName = function(){
			return this.name;
		};
		this.getPrice = function(){
			return this.price;
		};

		//公有属性
		this.id = newId;
		//公有方法
		this.copy = function(){}
		bookNum++;
		if(bookNum>100){
			throw new Error('我们仅仅出版100本书');
		}
		//构造器
		this.setName = function(){
			this.name  = newName;
			checkBook(newName);
		};
		this.setPrice = function(){
			this.price = newPrice;
		};
	};
	//构造原型
	_book.prototype = {
			//静态公有方法
			isJSBook : false,
			//静态公有方法
			displayBookNum : function(){
				return bookNum;
			}
	};
	_book.prototype.constructor = _book;
	return _book;
})();

var bookEnglish  = new Book(1,'english',18);
console.log(bookEnglish.displayBookNum());
console.log(Book.prototype.constructor);



//定义父类
function SupperClass(name){
	this.name = name;
	this.colors = ["red","blue","green"];

	function A(){}
}
//定义父类的原型方法
SupperClass.prototype.getName = function(){
	return this.name;
}

//定义子类  构造函数继承
function SubClass(name,time){
	//构造函数继承 
	SupperClass.call(this,name);
	//子类新增属性
	this.time = time;
}
//原型继承
function inheritObject(o){
	//声明一个过渡的函数对象
	function F(){};
	//过渡对象的原型继承父对象
	F.prototype = o;
	//返回过渡对象的一个实例，该实例的原型对象继承了父对象
	return new F();
}
function inheritPrototype(SubClass,SupperClass){
		 //复制一份父类的原型对象副本保存在变量p中
		 var p = inheritObject(SupperClass.prototype); 
		 //修改正因为重写之类原型导致子类的constractor属性被修改
		 p.constructor = SubClass;
		 //设置子类的原型
		 SubClass.prototype = p;
}
//寄生式继承父类原型
inheritPrototype(SubClass,SupperClass);
//子类新增方法
SubClass.prototype.getTime = function (){
	return 'SubObj get time' + this.time;
}

var instance1 = new SupperClass('supperobjname');
instance1.colors.push('black');
var instance2 = new SubClass('subobjname',19);

console.log(SubClass.prototype);
console.log(SupperClass.prototype);

console.log(instance1.colors);
console.log(instance2.colors);
console.log(instance1.getName());
console.log(instance2.getTime());
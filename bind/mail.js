



function User(name, surName)
{
	this.name = name;
	this.surName = surName;
}

User.prototype= 
{
	getSurName: function()
	{
		return this.surName;
	},
}

var user2 = 
{
	name:"dima",

	getName:function()
	{
		return this.name;
	},
	setName: function(name)
	{
		this.name = name;
	},
}


var bind = function(fn, context) {
  
  return function() {
    return fn.apply(context, arguments);
  };
};


var user = new User("Artem","Lovin");
var userBind = bind(user2.setName,user);
userBind("ira");
var userBind2 = bind(user2.getName,user);
console.log(userBind2());
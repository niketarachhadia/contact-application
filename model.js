var Contact = function(firstName,lastName,phone,street,city,state){
	this.firstName = firstName;
	this.lastName = lastName;
	this.phone = phone;
	this.street = street;
	this.city = city;
	this.state = state;
	this.getFullName = function(){
		return this.firstName+" "+this.lastName;
	}
}

var ContactList = { 
	'contacts' : [],
	'addContact': function(firstName,lastName,phone,street,city,state){
		var contact = new Contact(firstName,lastName,phone,street,city,state);
		this.contacts.push(contact);
	},
	'getContact' : function(index){
		   return  this.contacts[index];
	}
}

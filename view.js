
var View = function(contactList){
	this.contactList=contactList;
	this.contactListContainer = $('#contact-list');
	this.contactDetailContainer = $('#contact-detail');
	var viewObj=this;

	$('#add-contact').click(function(event) {
		var firstName = $('#first-name').val();
		var lastName  = $('#last-name').val();
		var phone = $('#phone').val();
		var street = $('#street').val();
		var city = $('#city').val();
		var state = $('#state').val();
		viewObj.contactList.addContact(firstName,lastName,phone,street,city,state);
		viewObj.refreshContactList();
	});

	// this.refreshContactList = function(){
 //    	viewObj.contactListContainer.empty();
 //    	$.each(contactList.contacts,function(key,value){
	// 	viewObj.contactListContainer.append('<li'+'id="'+key+'">'+'<a href="#">'+value.getFullName()+'</a>'+'</li>');
	// 	});
 //    };
	this.refreshContactList = function(){
		viewObj.contactListContainer.empty();
		$.each(contactList.contacts,function(key,value){
			var li=$('<li id="'+key+'"></li>');
			li.text(value.getFullName());
			li.click(function(event){
		    	var id = event.target.id;
		    	var contactDetail = viewObj.contactList.getContact(id);
		    	viewObj.showContactDetails(contactDetail);
	    	});
			viewObj.contactListContainer.append(li);
		});
	
	};

    // $('a').click(function(event){
    // 	var id = event.target.id;
    // 	var contactDetail = viewObj.contactList.getContact(id);
    // 	viewObj.showContactDetails();
    // });
    this.showContactDetails = function(contactDetail){
    	viewObj.contactDetailContainer.append('<h1>'+contactDetail.firstName+'&nbsp'+contactDetail.lastName+'</h1>'+
    											'<p>First name :'+contactDetail.firstName+'</p>'+
    											'<p>LastName :'+contactDetail.lastName+'</p>'+
    											'<p>Phone :'+contactDetail.phone+'</p>'+
    											'<p>Street :'+contactDetail.street+'</p>'+
    											'<p>City :'+contactDetail.city+'</p>'+
    											'<p>State :'+contactDetail.state+'</p>'
    											);
    };
   
}

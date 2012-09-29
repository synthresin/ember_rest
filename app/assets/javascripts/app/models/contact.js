SynthApp.Contact = Em.Resource.extend({
	resourceUrl: '/contacts',

	fullName: function() {
		return this.get('first_name') + ' ' + this.get('last_name');
	}.property('first_name', 'last_name')
});
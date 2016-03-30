import Ember from 'ember';

export default Ember.Component.extend({
	logoTile:'logoTileWrapper',
    weekTile:'weekTileWrapper',
    getDate: function(){
    	$.ajax({
   		 type: "POST",
   		 url: "/api/gimmieDatDate",
		}).done(function(value) {
            //Server returns a value and the client-side code displays it
            // Blaaaaah
        });
    }
});

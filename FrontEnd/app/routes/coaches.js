import Ember from 'ember';

export default Ember.Route.extend({
       /* ajax: Ember.inject.service(),
        model(){
            return this.get('ajax').request('/gimmieDatDate',{
                method: 'GET',
                data:{
                    startDate: 'gimmieDatDate'
                }
            });
        }*/
        
        model: function(){
            return this.store.find('gimmieDatDate');
        }
});

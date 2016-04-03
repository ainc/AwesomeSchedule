define('awesome-schedule-front/routes/coaches', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        /* ajax: Ember.inject.service(),
         model(){
             return this.get('ajax').request('/gimmieDatDate',{
                 method: 'GET',
                 data:{
                     startDate: 'gimmieDatDate'
                 }
             });
         }*/

        model: function model() {
            return this.store.find('gimmieDatDate');
        }
    });
});
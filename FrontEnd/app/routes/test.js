import Ember from 'ember';

export default Ember.Route.extend({
        ajax: Ember.inject.service(),
        actions: {
        sendRequest() {
            return this.get('ajax').request('/api/gimmieDatDate', {
             method: 'POST',
             data: {
             foo: 'bar'
            }
           });
         }
        },
        model: function(){
//           
//            var that = this;
//            $.ajax({
//                  type: "POST",
//                 url: "/api/gimmieDatDate",
//               }).then(function(value){
//                   console.log(value);
//                   var data = {
//                       id: '3',
//                       
//                       type:'test',
//                       attributes:{
//                           name: "chili"
//                       }
//                   };
//                   that.store.push(('test',data));
//                   
//                   
//               });
            return this.get('ajax').request('/test');
             
        }

        
});

import Ember from 'ember';
import Course from '../models/calendar';

export default Ember.Route.extend({
        ajax: Ember.inject.service(),
        allCourses: [],
        
        
        
        model: function(){

                return this.get('ajax').request('http://localhost:9029/api/calendar', {method: 'POST',xhrFields:{crossDomain:true,withCredintials:true}}).then(function(value){

                    var allCourse = Course.create({
                       data: value.calendar.data,
                       whichCourse:0,

                       
                    });
                    

                    return allCourse;
                    
 
                });
                
                
            }
        
});

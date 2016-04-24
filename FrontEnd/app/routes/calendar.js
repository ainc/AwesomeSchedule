import Ember from 'ember';
import Course from '../models/calendar';

export default Ember.Route.extend({
        ajax: Ember.inject.service(),
        allCourses: [],
        
        
        
        model: function(){
//                var store =[];
                return this.get('ajax').request('http://localhost:9029/api/calendar', {method: 'POST',xhrFields:{crossDomain:true,withCredintials:true}}).then(function(value){
                    console.log(Object.keys(value.calendar.data).length);
                    console.log(value.calendar.data);
                    var allCourse = Course.create({
                       data: value.calendar.data,
                       dates: function(){
                           var store = [];
                           for(var i = 0; i<Object.keys(value.calendar.data).length; i++){
                               store.pushObject(value.calendar.data[i].className);
                           }
                           return store;
                       }
                    });
                    console.log(allCourse.data);
                    return allCourse;
                    
//                    var size = Object.keys(value.calendar.data).length;
//                    var allCourses = [];
//                    var i = 0;
//                    for(i = 0; i< size; i++){
//                        var classDate = value.calendar.data[i].classStartTime.split("T");
//
//                        var course = Course.create({
//                            date: classDate[0],
//                            courseType: value.calendar.data[i].className,
//
//                        });
//                       
//                        store.pushObject(course);
//                        
//                        
//                    }
//                    allCourses.pushObject(store);
//                    console.log(allCourses[0][0]);
//                    return allCourses;
                    
                });
                
                
            }
        
});

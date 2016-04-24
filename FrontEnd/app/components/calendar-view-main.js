import Ember from 'ember';
import courses from '../model/courses';

export default Ember.Component.extend({
        tagName: 'calendarViewMain',
        allCourses: function(){
            console.log(courses.data);

        }
        

        
        
});

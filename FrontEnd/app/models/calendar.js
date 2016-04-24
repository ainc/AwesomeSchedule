
import Ember from 'ember';

export default Ember.Object.extend({
        updateWhichCourse:function(){
            this.incrementProperty('whichCourse',1);
        },
        whichCourse: 0,
        
  
});

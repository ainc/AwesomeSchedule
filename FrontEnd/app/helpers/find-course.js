import Ember from 'ember';


//Looks through the data array to find any courses that match the given date
//p[1] is calendar.data array
export function findCourse(params) {
    for(var i = 0; i<Object.key(params[1]).length; i++){
        var classDate = params[1][i].classStartTime.split("T");
        if(params[0] === classDate ){
            console.log(params[1][i].className);
            return params[1][i].className;
        }
    }
  return params;
}

export default Ember.Helper.helper(findCourse);

import Ember from 'ember';


//Looks through the data array to find any courses that match the given date
//p[1] is calendar.data array
export function findCourse(p) {
    //p[0] is calendar.data and p[1] is calendar.whichCourse


            for(var i = 0; i < p[0].length; i++){


                if(p[0][i].classDate === p[1]){

                    return p[0][i].className;
                }
            }


}

export default Ember.Helper.helper(findCourse);

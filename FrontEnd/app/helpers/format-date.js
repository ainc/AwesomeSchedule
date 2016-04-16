import Ember from 'ember';
import Moment from 'npm:moment';
import Fecha from 'npm:fecha';


//Returns a date based on parameters passed to it
export function formatDate(params) {
    if(params[0] === 'day'){
        return Moment().format(params[1]);
    }
    else if(params[0] === 'addTime'){
        return Moment(Moment().add(params[1], 'days').calendar()).format('ll');
        
        
    }
    else if(params[0] ==='subtractTime'){
        
    }
    else if(params[0] === 'formatTime'){
        console.log(Moment().format(params[1]));
        
        return Fecha.format(Fecha.parse(Moment().format(params[1]),'MMMM Do YYYY'), 'YYYY-MM-DD hh:mm A');
        
    }
    else{
        return Moment().format(params[0]);
    }
  
   
}

export default Ember.Helper.helper(formatDate);

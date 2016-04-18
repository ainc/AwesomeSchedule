import Ember from 'ember';
import Moment from 'npm:moment';


//Returns a date based on parameters passed to it
export function formatDate(params) {
     var today = new Moment();
     
     //If addTime is the first parameter, add the second param # of days to the current date
    if(params[0] === 'addTime'){
       
        var tomorrow = today.add(params[1],'days');
        return new Moment(tomorrow).format('YYYY-MM-DD');
        
        
    }
    
    //If subtractTime is the first Parameter, subtract second param # of days from the current date
    else if(params[0] ==='subtractTime'){
       
        var yesterday = today.subtract(params[1],'days');
        
        return new Moment(yesterday).format('YYYY-MM-DD');
        
        
    }
    
    //If the first param is dddd, return the current day of the week
    else if(params[0] === 'dddd'){
        return new Moment().format('dddd');
    }
    
    //If it is the second week, add 7 days to the moment and get the day of the week.
    else if(params[0] === 'W2'){
        var week2 = new Moment(today.startOf('week')).add(7,'days');
        
        switch(params[1]){
            case 'Su':
                return week2.format('YYYY-MM-DD');
            case 'M':
                return new Moment(week2.add(1,'days')).format('YYYY-MM-DD');
            case 'Tu':
                return new Moment(week2.add(2,'days')).format('YYYY-MM-DD');
            case 'W':
                return new Moment(week2.add(3,'days')).format('YYYY-MM-DD');
            case 'Th':
                return new Moment(week2.add(4,'days')).format('YYYY-MM-DD');
            case 'F':
                return new Moment(week2.add(5,'days')).format('YYYY-MM-DD');
            case 'Sa':
                return new Moment(week2.add(6,'days')).format('YYYY-MM-DD');
        }
                
    }
    //If it is the third week, add 14 days to the moment and get the day of the week.
    else if(params[0] === 'W3'){
        var week3 = new Moment(today.startOf('week')).add(14,'days');
        
        switch(params[1]){
            case 'Su':
                return week3.format('YYYY-MM-DD');
            case 'M':
                return new Moment(week3.add(1,'days')).format('YYYY-MM-DD');
            case 'Tu':
                return new Moment(week3.add(2,'days')).format('YYYY-MM-DD');
            case 'W':
                return new Moment(week3.add(3,'days')).format('YYYY-MM-DD');
            case 'Th':
                return new Moment(week3.add(4,'days')).format('YYYY-MM-DD');
            case 'F':
                return new Moment(week3.add(5,'days')).format('YYYY-MM-DD');
            case 'Sa':
                return new Moment(week3.add(6,'days')).format('YYYY-MM-DD');
        }
                
    }
    //If it is the fourth week, add 21 days to the moment and get the day of the week.
        else if(params[0] === 'W4'){
        var week4 = new Moment(today.startOf('week')).add(21,'days');
        
        switch(params[1]){
            case 'Su':
                return week4.format('YYYY-MM-DD');
            case 'M':
                return new Moment(week4.add(1,'days')).format('YYYY-MM-DD');
            case 'Tu':
                return new Moment(week4.add(2,'days')).format('YYYY-MM-DD');
            case 'W':
                return new Moment(week4.add(3,'days')).format('YYYY-MM-DD');
            case 'Th':
                return new Moment(week4.add(4,'days')).format('YYYY-MM-DD');
            case 'F':
                return new Moment(week4.add(5,'days')).format('YYYY-MM-DD');
            case 'Sa':
                return new Moment(week4.add(6,'days')).format('YYYY-MM-DD');
        }
                
    }
    //If no parameters are given, or the parameters are invalid, give back the current date.
    else{
        return new Moment().format('YYYY-MM-DD');
    }
  
   
}

export default Ember.Helper.helper(formatDate);

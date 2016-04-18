import Ember from 'ember';
import Moment from 'npm:moment';


//Returns a date based on parameters passed to it
export function formatDate(params) {
     var moment = new Moment();
    if(params[0] === 'day'){
       
        return moment.format(params[1]);
    }
    else if(params[0] === 'addTime'){
        var today = new Moment();
        var tomorrow = today.add(params[1],'days');
        return Moment(tomorrow).format('YYYY-MM-DD');
        
        
    }
    else if(params[0] ==='subtractTime'){
        var today = new Moment();
        var tomorrow = today.subtract(params[1],'days');
        console.log();
        return Moment(tomorrow).format('YYYY-MM-DD');
        
        
    }
    else if(params[0] === 'dddd'){
        return Moment().format('dddd');
    }
    
    //If it is the second week, add 7 days to the moment and get the day of the week.
    else if(params[0] === 'W2'){
        var week2 = Moment(moment.startOf('week')).add(7,'days');
        
        switch(params[1]){
            case 'Su':
                return week2.format('YYYY-MM-DD');
            case 'M':
                return Moment(week2.add(1,'days')).format('YYYY-MM-DD');
            case 'Tu':
                return Moment(week2.add(2,'days')).format('YYYY-MM-DD');
            case 'W':
                return Moment(week2.add(3,'days')).format('YYYY-MM-DD');
            case 'Th':
                return Moment(week2.add(4,'days')).format('YYYY-MM-DD');
            case 'F':
                return Moment(week2.add(5,'days')).format('YYYY-MM-DD');
            case 'Sa':
                return Moment(week2.add(6,'days')).format('YYYY-MM-DD');
        }
                
    }
    else if(params[0] === 'W3'){
        var week3 = Moment(moment.startOf('week')).add(14,'days');
        
        switch(params[1]){
            case 'Su':
                return week3.format('YYYY-MM-DD');
            case 'M':
                return Moment(week3.add(1,'days')).format('YYYY-MM-DD');
            case 'Tu':
                return Moment(week3.add(2,'days')).format('YYYY-MM-DD');
            case 'W':
                return Moment(week3.add(3,'days')).format('YYYY-MM-DD');
            case 'Th':
                return Moment(week3.add(4,'days')).format('YYYY-MM-DD');
            case 'F':
                return Moment(week3.add(5,'days')).format('YYYY-MM-DD');
            case 'Sa':
                return Moment(week3.add(6,'days')).format('YYYY-MM-DD');
        }
                
    }
        else if(params[0] === 'W4'){
        var week4 = Moment(moment.startOf('week')).add(21,'days');
        
        switch(params[1]){
            case 'Su':
                return week4.format('YYYY-MM-DD');
            case 'M':
                return Moment(week4.add(1,'days')).format('YYYY-MM-DD');
            case 'Tu':
                return Moment(week4.add(2,'days')).format('YYYY-MM-DD');
            case 'W':
                return Moment(week4.add(3,'days')).format('YYYY-MM-DD');
            case 'Th':
                return Moment(week4.add(4,'days')).format('YYYY-MM-DD');
            case 'F':
                return Moment(week4.add(5,'days')).format('YYYY-MM-DD');
            case 'Sa':
                return Moment(week4.add(6,'days')).format('YYYY-MM-DD');
        }
                
    }
    else{
        return Moment().format('YYYY-MM-DD');
    }
  
   
}

export default Ember.Helper.helper(formatDate);

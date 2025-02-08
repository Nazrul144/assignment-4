//Create an object and loop through an object print the key value pair with their types: 
/**
 * Output:
    key: name | type:  string
    key: age | type:  number
    key: city | type:  string
    key: isStudent | type:  boolean
 */

    let actor =  {
        name: 'Shakib Khan',
        age: 40,
        city:'Dhaka',
        isStudent: false
    }

    for(let prop in actor){

      let value = actor[prop];
      let type = typeof value;
      console.log( 'Key:', prop, '|', 'type:', type);

    
    }
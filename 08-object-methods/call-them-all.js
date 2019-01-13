    function callThemAll (object, value) {
    let newArr = [];
      for (let key in object) {
       if (typeof (object[key]) === 'function') {
          let returnedVal = object[key](value);
          newArr.push(returnedVal);
       }
     } 
     return newArr;
  }
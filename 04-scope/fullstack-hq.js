// Edit the code below
let placeGlobal = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(united) {
    return innerFunction('New York State');

    function innerFunction(place) {
      placeCity = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + placeGlobal + ', ' + united + ', ' + place + ', ' + placeCity;
      }
    }
  }
}

console.log(fullstackHQ())
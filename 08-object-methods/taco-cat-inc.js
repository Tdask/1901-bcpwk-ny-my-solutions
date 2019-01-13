let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },
  currentInventory: function(){
    let totalVal = 0;
    for(let key in this){
      let subObj= this[key]
      for (let variation in subObj){
        let finalObj = subObj[variation]
        totalVal += finalObj.cost * finalObj.quantity
      } 
    } return totalVal;
  },

  cash: 0,
  sale: function (order){
    let orderVal = 0;
    for (let category in order){
      let item = order[category]
      let lastObj = this[category][item]
      orderVal += lastObj.cost;
      lastObj.quantity-- 
      }
      this.cash +=orderVal 
      return orderVal;
  }
};



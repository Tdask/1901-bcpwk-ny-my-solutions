let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW

const attendanceCheck = dayStr =>{
        let newArr = [];
          for (let i = 0; i < classRoom.length; i++){
            let personObj = classRoom[i];
            for (let key in personObj){
              let subArr = (personObj[key])
              for (let j = 0; j < subArr.length; j++){
                if ((subArr[j][dayStr])) {newArr.push(Object.keys(personObj).join())
                }
              }
            }
          } return newArr;
        }
const inputName = document.getElementById('name');
const inputDept = document.getElementById('dept');
const inputGrade = document.getElementById('grade');
const btn = document.getElementById('btn');
const form = document.getElementById('details');
const errorMsg = document.getElementById('error');
const newTask = document.getElementById('newtask')
const taskTable = document.getElementById('taskTable')


const allDeptsArr = [];

const inputField = (inputNameValue, inputDeptValue, inputGradeValue) => {
  allDeptsArr.push({name: inputNameValue, dept: inputDeptValue, grade: inputGradeValue});
  console.log('arr:::', allDeptsArr);
  for (let i = 0; i < allDeptsArr.length; i++){
    console.log(i)
    // document.write('<tr><td>' + allDeptsArr[i].name + '</td><td>' + allDeptsArr[i].dept + '</td><td>' + allDeptsArr[i].grade + '</td></tr>');
    document.getElementsByTagName('table')[i].innerHTML += '<tr><td>' + allDeptsArr[i].name + '</td><td>' + allDeptsArr[i].dept + '</td><td>' + allDeptsArr[i].grade + '</td></tr>'
      //  document.getElementById("trname").innerHTML += allDeptsArr[i].name;
      //  document.getElementById("trdept").innerHTML += allDeptsArr[i].dept +"</br>";
      //  document.getElementById("trgrade").innerHTML += allDeptsArr[i].grade +"</br>";
  }
}
  //  let table = document.createElement("table");
  //  table.insertAdjacentHTML("beforeend", "<tr class='firstRow'><th>NAME</th><th>DEPARTMENT</th><th>GRADE</th></tr>");

  //  for (let i = 0; i < allDeptsArr.length; i++){
  //   table.insertAdjacentHTML("beforeend", "<tr><td>" + allDeptsArr[i].name +"</td></tr>")
  //   table.insertAdjacentHTML("beforeend", "<tr><td>" + allDeptsArr[i].dept +"</td></tr>")
  //   table.insertAdjacentHTML("beforeend", "<tr><td>" + allDeptsArr[i].grade +"</td></tr>")
  //  }
  //  document.body.append(table);
// }
// inputField();

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const inputNameValue = inputName.value;
    const inputGradeValue = inputGrade.value;
    const inputDeptValue = inputDept.value;
    const checkInputsFields =  inputNameValue && inputGradeValue && inputDeptValue; 
    if (!checkInputsFields) {
        alert('There is a missing field in your input')
        return;
    }
    inputField(inputNameValue, inputDeptValue, inputGradeValue);
}); 

// const fullName = (firstName, lastName) => {
//     return `${firstName} ${lastName}`
// }

// const checkFormValidation = (inputNameValue, inputDeptValue, inputGradeValue) => {
//     let validation = true;
//     if (!inputNameValue) {
//         showError('Name field cannot be empty')
//         validation = false;
//     }
//     return validation;
// }

// const showError = (msg) => {
//     errorMsg.innerHTML = msg;
// }

// const userInfor = () => {
//     const userInfo =  {
//         name: 'Mayor',
//         lastName: 'Ayinde'
//     };
//     return userInfo;
// }

// const sum = (a, b) => {
//     return a + b;
// }





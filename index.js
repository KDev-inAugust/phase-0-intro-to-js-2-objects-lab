// Write your solution in this file!
const employee = {
    name:"test",
    address:" test address",
}

console.log(employee);


function updateEmployeeWithKeyAndValue(obj, key, value){
  let newEmployee={...obj}; 
newEmployee[key]=value;
return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    let newEmployee2={...obj};
    delete newEmployee2[key];
    return newEmployee2;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
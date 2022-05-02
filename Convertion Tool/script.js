function toMeter(){
  
  // console.log("toMeter---");
  let centiVal = document.querySelector("#inputCenti").value; 
  console.log(centiVal);

  let result = centiVal / 100;
  console.log(result);

  document.querySelector("#resultMeter").innerHTML = result + " meter";
  
}

function toMinutes(){
  
  let hourVal = document.querySelector("#inputHour").value; 
  console.log(hourVal);

  let result = hourVal * 60;
  console.log(result);

  document.querySelector("#resultMinutes").innerHTML = result + " minutes";
  
}


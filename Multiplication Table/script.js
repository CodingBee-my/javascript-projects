function genTable(){
  let inputVal = document.querySelector("#inputVal").value;

  console.log(inputVal);

document.querySelector("#result").innerHTML ="";

  for(let i = 1; i<=12; i++){
    let multiple = inputVal * i;

    document.querySelector("#result").innerHTML += "<div>" + i + " x " + inputVal + " = " +  multiple +
    "</div>";
    
  }

}
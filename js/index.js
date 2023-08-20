function handleN() {
  var n = 0;
  var S = 0;
  while (S < 10000) {
    n++;
    S = S + n;
  }
  document.querySelector("#result1").innerHTML = ` ${n}`;
}

document.querySelector("#handle1").addEventListener("click", handleN);

//----------------------------------------------------------

function handle2() {
  var numberX = +document.querySelector("#numberX").value;
  var numberN = +document.querySelector("#numberN").value;
  var Sum = 0;
  for (var i = 1; i <= numberN; i++) {
    Sum = Sum + numberX ** i;
  }
  document.querySelector("#result2").innerHTML = Sum;
}

document.querySelector("#handle2").onclick = handle2;

//-----------------------------------------------------------

function handle3() {
  var numberN3 = +document.querySelector("#numberN3").value;
  var sum3 = 1;
  for (var i = 0; i < numberN3; i++) {
    sum3 = sum3 * i + sum3;
  }
  document.querySelector("#result3").innerHTML = sum3;

  console.log(sum3);
}

document.querySelector("#handle3").onclick = handle3;

//---------------------------------------------------------

function handle4() {
  for (var i = 1; i <= 10; i++) {
    var createDiv = document.createElement('div');
    
    if (i%2 === 0){
        createDiv.setAttribute("id", "chan");
    } else {
        createDiv.setAttribute("id", "le");
    }
    createDiv.innerHTML=`<p>Thẻ thứ ${i}</p>`
    document.querySelector("#result4").appendChild(createDiv);
  }
}
document.querySelector("#handle4").onclick = handle4;

//--------------------------------------------

function handle5 () {
    var number5 = +document.querySelector("#number5").value;

    for(var i = 1; i <= number5; i++){ 
        createNum = document.createElement('p');
        createNum.innerHTML = i;
        document.querySelector("#result5").appendChild(createNum)
    }
}
document.querySelector("#handle5").onclick = handle5;

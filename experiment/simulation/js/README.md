### This folder contains all the js files used in the simulation.
let resistanc = 0;
let volt = 0;
let capacitor = 0;
let frequ = 0;
let curr;
let switch1 = false;
let switch2 = false;
let maxf = 0;
const freq = (val) => {
   frequ = val
   document.getElementById("freq").innerHTML = val;
}

function resistance() {
   resistanc = prompt("Enter your resistance");
   document.querySelector('text#resistance').textContent = resistanc;
   if (capacitor != 0 && volt != 0 && resistance != 0) {
      document.getElementById('table').innerHTML += `<tr>
      <td width=60px>${volt}</td>
      <td width=60px>${resistanc}</td>
      <td width=60px>30</td>
      <td width=60px>${capacitor}</td>
   </tr>`
      newtable();
   }
}

function voltage() {
   volt = prompt("Enter your voltage");
   document.querySelector('text#volt').textContent = volt;
   if (capacitor != 0 && volt != 0 && resistance != 0) {
      document.getElementById('table').innerHTML += `<tr>
      <td width=60px>${volt}</td>
      <td width=60px>${resistanc}</td>
      <td width=60px>30</td>
      <td width=60px>${capacitor}</td>
   </tr>`
      newtable();
   }
}

function capacitance() {
   capacitor = prompt("Enter your Capacitance");
   document.querySelector('text#capacitor').textContent = capacitor;
   if (capacitor != 0 && volt != 0 && resistance != 0) {
      document.getElementById('table').innerHTML += `<tr>
   <td width=60px>${volt}</td>
   <td width=60px>${resistanc}</td>
   <td width=60px>30</td>
   <td width=60px>${capacitor}</td>
</tr>`
      newtable();
   }
}

//calculation part

function Fill() {
   // console.log(volt);
   if (volt != 0 && frequ != 0 && resistanc != 0 && capacitor != 0) {
      let omega = 2 * 3.14 * frequ;
      // console.log(frequ);
      let z = (omega * Math.pow(10, -3) * 30) - (1 / (omega * capacitor * Math.pow(10, -6)));
      console.log(z + "hii");
      z = z * z;
      console.log(z + "hii2");
      z = Math.sqrt((resistanc * resistanc) + z);
      console.log(z + "hii3");
      curr = volt / z;
      curr = curr;
      maxf = 1 / (2 * 3.14 * Math.sqrt(30 * Math.pow(10, -3) * capacitor));
      if (switch1 == true && switch2 == true)
         procedure();
      else
         alert("Kindly on the switch");
   }
   else { alert("Kindly fill all the data."); }
}

let count = 0;


const procedure = () => {

   let myTable = document.getElementById("myTable");
   myTable.innerHTML += `<tr>
   <td id='r${count}c0' width=60px></td>
   <td id='r${count}c1' width=60px></td>
</tr>`
   var data = new Array();
   data.push(frequ);
   data.push(curr);
   for (i = 0; i < data.length; i++) {
      document.getElementById("r" + count + "c" + i).innerHTML = data[i];
   }
   count++;
   if (maxf == frequ) { alert("You got the resonance condition"); }
   else if(maxf > frequ){
      document.getElementById("fill-btn").disabled = true;
   }
}

const newtable = () => {
   var x = document.createElement("TABLE");
   x.setAttribute("id", "myTable");
   document.body.appendChild(x);

   var y = document.createElement("TR");
   y.setAttribute("id", "myTr");
   var z = document.createElement("TH");
   var x = document.createElement("TH");
   var t = document.createTextNode("Frequency(f)");
   var d = document.createTextNode("Current(I)");
   z.appendChild(t);
   x.appendChild(d);
   y.appendChild(z);
   y.appendChild(x);
   document.getElementById("myTable").appendChild(y);
}

const image = document.getElementById("switch1");
const rotateBtn = document.getElementById(`switch1btn`);

let rotation = 0;

rotateBtn.addEventListener("click", function () {
   rotation = -41;
   //   image.style.transform=`translate(0,10)`;


   image.style.transform = `rotate(${rotation}deg)`;
   image.style.transformOrigin = "747.9px 169.4px";
   document.getElementById("display-dot1").style.display = "none";

   document.getElementById("switch1btn").style.fill = "green";
   switch1 = true;
});



const imag = document.getElementById("switch2");
const rotateBt = document.getElementById(`switch2btn`);

let rotatio = 0;

rotateBt.addEventListener("click", function () {
   rotatio = -41;
   imag.style.transform = `rotate(${rotatio}deg)`;
   imag.style.transformOrigin = "756.1px 488.5px";
   document.getElementById("display-dot2").style.display = "none";
   document.getElementById("switch2btn").style.fill = "green";
   switch2 = true;
});

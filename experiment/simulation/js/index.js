
let ohm = 0;
let vol = 0;
let indu=0;
let capa = 0;
let frequ = 0;
let curr=0;
let maxf = 0;
let arr=[0,0,0,0];
let switcch1=false,switcch2=false;

const freq = (val) => {
   frequ = val
   document.getElementById("freq").innerHTML = val;
   document.getElementById("value-display").innerHTML=val;
}

// for resistance function

function resistance() {
   document.querySelector('#dropdown-contentr').style.visibility="visible";
}
function resist(){
   document.querySelector('#dropdown-contentr').style.visibility="hidden";
   document.querySelector('#dropdown-contentr').style.transition="6s";
}

function oner(){
   document.getElementById('resistan').innerHTML = "50";
   ohm=50;
   firsttable();
}

function twor(){
   document.getElementById('resistan').innerHTML = "75";
   ohm=75;
   firsttable();
}
function threer(){
   document.getElementById('resistan').innerHTML = "100";
   ohm=100;
   firsttable();
}
function fourr(){
   document.getElementById('resistan').innerHTML = "125";
   ohm=125;
   firsttable();
}
function fiver(){
   document.getElementById('resistan').innerHTML = "150";
   ohm=150;
   firsttable();
}
function sixr(){
   document.getElementById('resistan').innerHTML = "170";
   ohm=170;
   firsttable();
}
function sevenr(){
   document.getElementById('resistan').innerHTML = "200";
   ohm=200;
   firsttable();
}
// for inductor
function inductance(){
   document.querySelector('#dropdown-contentl').style.visibility="visible";  
}
function induct(){
   document.querySelector('#dropdown-contentl').style.visibility="hidden";
   document.querySelector('#dropdown-contentl').style.transition="2s";
}
function onel(){
   document.querySelector('#inductor').innerHTML = "20";
   indu = 20;
   firsttable();
}
function twol(){
   document.querySelector('#inductor').innerHTML = "25";
   indu = 25;
   firsttable();
}
function threel(){
   document.querySelector('#inductor').innerHTML = "30";
   indu = 30;
   firsttable();
}
function fourl(){
   document.querySelector('#inductor').innerHTML = "35";
   indu = 35;
   firsttable();
}
function fivel(){
   document.querySelector('#inductor').innerHTML = "40";
   indu = 40;
   firsttable();
}



// for capacitor
function capacitance(){
   document.querySelector('#dropdownc-content').style.visibility="visible";
}
function capacitor(){
   document.querySelector('#dropdownc-content').style.visibility="hidden";
   document.querySelector('#dropdownc-content').style.transition="4s";
}
function onec(){
   document.querySelector('#capacitor').innerHTML = "0.1";
   capa= 0.1;
   firsttable();
}
function twoc(){
   document.querySelector('#capacitor').innerHTML = "0.2";
   capa = 0.2;
   firsttable();
}
function threec(){
   document.querySelector('#capacitor').innerHTML = "0.3";
   capa = 0.3;
   firsttable();
}
function fourc(){
   document.querySelector('#capacitor').innerHTML = "0.4";
   capa = 0.4;
   firsttable();
}
function fivec(){
   document.querySelector('#capacitor').innerHTML = "0.5";
   capa = 0.5;
   firsttable();
}
function sixc(){
   document.querySelector('#capacitor').innerHTML = "0.6";
   capa = 0.6;
   firsttable();
}

// for voltage button
function voltage() {
   document.querySelector('#dropdown-content').style.visibility="visible";

}

function voltl(){
   document.querySelector('#dropdown-content').style.visibility="hidden";
   document.querySelector('#dropdown-content').style.transition="4s";
}

function onev(){
   document.getElementById('volt').innerHTML = "1";
   vol = 1;
   firsttable();
}
function twov(){
   document.getElementById('volt').innerHTML = "2";
   vol = 2;
   firsttable();
}
function threev(){
   document.getElementById('volt').innerHTML = "3";
   vol = 3;
   firsttable();
}
function fourv(){
   document.getElementById('volt').innerHTML = "4";
   vol = 4;
   firsttable();
}
function fivev(){
   document.getElementById('volt').innerHTML = "5";
   vol = 5;
   firsttable();
}


//calculation part

const image=document.querySelector("#switch1");
const image2=document.querySelector("#switch2");
const rotateBtn = document.querySelector("switch1on");
let rotation =0;

function switch1onh(){
    document.getElementById('switch1on').style.display="none";
    document.getElementById('switch1off').style.display="block";
    switcch1 = true;
    rotation = 36;
    image.style.transform = `rotate(${rotation}deg)`;
    image.style.transformOrigin = "678.2px 141.3px";
    console.log("on1");
    
 
}
function switch1offh(){
    document.getElementById('switch1on').style.display="block";
    document.getElementById('switch1off').style.display="none";
    switcch1 = false;
    rotation = -35;
    image.style.transform = `rotate(${rotation}deg)`;
    image.style.transformOrigin = "678.2px 141.3px";
}
function switch2onh(){
    document.getElementById('switch2on').style.display="none";
    document.getElementById('switch2off').style.display="block";
    switcch2 = true;
    rotation = 36;
    image2.style.transform = `rotate(${rotation}deg)`;
    image2.style.transformOrigin = "677.8px 461.6px";
    console.log("on2");
}
function switch2offh(){
    document.getElementById('switch2on').style.display="block";
    document.getElementById('switch2off').style.display="none";
    switcch2 = false;
    rotation = -36;
    image2.style.transform = `rotate(${rotation}deg)`;
    image2.style.transformOrigin = "677.8px 461.6px";
}

let num =1;
function firsttable(){
   if (capa != 0 && vol != 0 && ohm != 0 && indu!=0) {
      document.getElementById('table').innerHTML += `<tr>
      <td width=60px>${num}.</td>
      <td width=60px>${vol}</td>
      <td width=60px>${ohm}</td>
      <td width=60px>${indu}</td>
      <td width=60px>${capa}</td>
   </tr>` 
      newtable();
      num++;  
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
   var s = document.createElement("TH");
   var j = document.createTextNode("S.No.");
   var t = document.createTextNode("Frequency(f)");
   var d = document.createTextNode("Current(I)");
   z.appendChild(t);
   x.appendChild(d);
   s.appendChild(j);
   y.appendChild(s);
   y.appendChild(z);
   y.appendChild(x);
   document.getElementById("myTable").appendChild(y);
}


function Fill() {
   // console.log(volt);
   if (vol != 0 && frequ != 0 && ohm != 0 && capa != 0 && indu!=0) {
      let omega = 2 * 3.14 * frequ;
      // console.log(frequ);
      let z = (omega * Math.pow(10, -3) * 30) - (1 / (omega * capa * Math.pow(10, -6)));
      console.log(z + "hii");
      z = z * z;
      console.log(z + "hii2");
      z = Math.sqrt((ohm * ohm) + z);
      console.log(z + "hii3");
      curr = vol / z;
      curr = curr*1000;
      curr = curr.toFixed(3);


    const imag = document.getElementById("deflect-curr");
    const ima=document.getElementById("deflect-cur");
    const rotatebt = document.getElementById("fillbtn");
    imag.style.transition= "2s";
    ima.style.transition= "2s";
    imag.style.transform = `rotate(${curr*10}deg)`;
    imag.style.transformOrigin = "1122.4px 169px";
    ima.style.transform = `rotate(${curr*10}deg)`;
    ima.style.transformOrigin = "1122.4px 169px";


      document.getElementById("curr-val").innerHTML=curr;
      maxf = 1 / (2 * 3.14 * Math.sqrt(30 * Math.pow(10, -3) * capacitor));
      maxf = maxf.toFixed(3);
      if (switcch1 == true && switcch2 == true)
         procedure();
      else
         alert("Kindly on the switch");
   }
   else { alert("Kindly fill all the data."); }
}
let count=0;
const procedure = () => {

   let myTable = document.getElementById("myTable");
   myTable.innerHTML += `<tr>
   <td id='r${count}c0' width=60px</td>
   <td id='r${count}c1' width=60px></td>
   <td id='r${count}c2' width=60px></td>
   </tr>`
   var data = new Array();
   data.push(num-1);
   data.push(frequ);
   data.push(curr);
   for (i = 0; i < data.length; i++) {
      document.getElementById("r" + count + "c" + i).innerHTML = data[i];
   }
   count++;
   if (maxf == frequ) { alert("You got the resonance condition"); }
}

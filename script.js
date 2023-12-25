'use strict';
const resultpercentS = document.querySelectorAll(".resultpercent");
let yourResulth1 = document.querySelector("h1");
let great = document.querySelector("h2");
let youscored = document.querySelector(".youscored");

fetch('data.json')
.then(response => response.json())
.then(scores=>myScores(scores))
.catch(error => console.log(error));

function myScores(scores) {
    const results = scores.map((item) => item.score);
   //console.log(results);
   let arrayReaction = [...Array(results[0]).keys()];
   let arrayMemory = [...Array(results[1]).keys()];
   let arrayVerbal = [...Array(results[2]).keys()];
   let arrayVisual = [...Array(results[3]).keys()];
  //let arraySums = [...Array(results).keys()];
     
const interval = setInterval (changehtml, 35);
let i=0 
function changehtml(){
   if (i===results[0]-1){clearInterval(interval);}
   resultpercentS[0].innerHTML=`${arrayReaction[i]+1}` ; 
   i++
} 

const interval2 = setInterval (changehtml2, 35);
let j=0 
function changehtml2(){
   if (j===results[1]-1){clearInterval(interval2);}
   resultpercentS[1].innerHTML=`${arrayMemory[j]+1}` ; 
   j++
} 

const interval3 = setInterval (changehtml3, 35);
let k=0 
function changehtml3(){
   if (k===results[2]-1){clearInterval(interval3);}
   resultpercentS[2].innerHTML=`${arrayVerbal[k]+1}` ; 
   k++
} 

const interval4 = setInterval (changehtml4, 35);
let n=0 
function changehtml4(){
   if (n===results[3]-1){clearInterval(interval4);}
   resultpercentS[3].innerHTML=`${arrayVisual[n]+1}` ; 
   n++
} 

//76
let avgScore = Math.round((results[0]+results[1]+results[2]+results[3])/4);
let arrayavgScore = [...Array(avgScore).keys()];
let l=0;
setTimeout(()=> {
const interval5 = setInterval (changehtml5, 35);
function changehtml5(){
    if (l===avgScore-1){clearInterval(interval5);}
    yourResulth1.innerHTML=`${arrayavgScore[l]+1}` ; 
    l++
  //  console.log(yourResulth1.innerHTML);    
 }
}, 1500);

setTimeout(()=> {
    great.style.visibility = 'visible';
}, 5500);
setTimeout(()=> {
    youscored.style.visibility = 'visible';
}, 6000);
}


   


// let arr={
//     name:"John",    age:30,
//     city:"New York"
// };
// let arr2={
//     name:"joey",    age:30,
//     city:"New York"
// };
// arr.name=Phillip;
// console.log(arr);

// const para= document.getElementById("p");
// para.textContent="This is a paragraph created using JavaScript.";
// para.style.color="blue";
// console.log(para);

// const para= document.querySelectorAll(".p");
// para[0].textContent='This is a paragraph created using JavaScript.';
// para[1].style.color='red';
// console.log(para);

// const container=document.querySelector(".container");
// container.innerHTML='<h1>This is a heading</h1><p>This is a paragraph</p>';
// console.log(container);

// console.log("tis is the beginning");

// setTimeout(()=>{
//     console.log("This is inside setTimeout");
// },2000);
// console.log("This is the end");

// setInterval(()=>{
//     console.log("This message is displayed every 3 seconds");
// },3000);


// const timeout=setTimmeout((()=>{
//     console.log("This message is displayed after 5 seconds");
// }),5000);

// clearTimeout(timeout);
   

// const interval=setInterval(()=>
//     console.log("This message is displayed every 2 seconds");2000) ;

// clearInterval(interval);
// console.log("Interval cleared");

// writinh 1 to 10 which stops after 10 secs 
// let count=1;
// const interval=setInterval(()=>{
//     console.log(count);
//     count++;
//     if(count>10){
//         clearInterval(interval);
//     }
// },1000);
//  ABOVE CODE IS CORRECT ( AS PER MY COMPUTER)
// (OR SIR WALA )
let count=0;

const interval= setInterval(()=>{
    count+=1
    console.log(count);
    if(count===10){
        clearInterval(interval);
    }
},1000);
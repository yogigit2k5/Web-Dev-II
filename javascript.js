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
// let count=0;

// const interval= setInterval(()=>{
//     count+=1
//     console.log(count);
//     if(count===10){
//         clearInterval(interval);
//     }
// },1000);



// const studentname = document.querySelector("#myInput");
// const button = document.querySelector("#myButton");
// const list = document.querySelector(".list");

// button.addEventListener('click',()=>{   
//     const li=document.createElement('li');
//     li.innerText=studentname.value;   
//     list.appendChild(li);
//     studentname.value="";
// }
// )

// create the elements
// const li = document.createElement('li');
// const deleteBtn = document.createElement('button');

// // Fixed: Changed studentsName to studentname to match your earlier variable
// li.innerText = studentname.value; 
// deleteBtn.innerText = "Delete";

// deleteBtn.addEventListener('click', () => {
//     list.removeChild(li);
// });

// li.appendChild(deleteBtn);
// list.appendChild(li);

// // Fixed: Changed studentsName to studentname here as well
// studentname.value = "";
// (30th  jan)
// function greet(print){

//     setTimeout(()=>{
//         console.log("Hello, World!");
//         let name="John";
//         print(name);
//     },2000);
// }

// greet(print);

// callback function
// console.log("starting homework");

// setTimeout(() => {
//     console.log("Homework completed");
//         console.log("Dinner is ready"); 

//     setTimeout(() => {
//         console.log("Dinner done");
//         console.log("getting to go out");
    
//         setTimeout(() => {
//             console.log("going out");
//         }, 1000);

    
// }, 1500);
// }, 2000);

// // callback hell
// // function finishHomework(callback){
// //     console.log("starting homework");
// //     setTimeout(() => {
// //         console.log("Homework completed");
// //         callback();
// //     }   , 2000);    

// // }

// // function eatDinner(callback){
// //     console.log("Dinner is ready"); 
// //     setTimeout(() => {
// //         console.log("Dinner done");
// //         callback();
// //     }   , 1500);
// // }

// // function goOut(){
// //     console.log("getting to go out");
// // }

// // finishHomework(()=>{
// //     eatDinner(()=>{     
// //         goOut();
// //     });
// // });

// const p = new Promise((res,rej)=>{
//     console.log("going to do homework");

//     setTimeout(() => {
//         const done=true;
//         if(done){
//             res("Success");
//         }else{
//             rej("Failure to fetch Data from server");
        
//         } 
//     }, 2000);
// });

// p.then((a)=>{
//     console.log(a);
    
// }) 
// .catch((err)=>{
//     console.log(err);
// }). finally(()=>{
//     console.log("Homework promise is settled");
// });

// function doHomework(){
//     const p = new Promise((res,rej)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Homework is done");
//                 res("Homework done");
//             }else{
//                 rej("Homework not done");
//             }
//         }, 2000);
//     });
//     return p;
// }
// function eatDinner(){
//     const p = new Promise((res,rej)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Dinner is ready");
//                 res("Dinner ready");
//             }else{
//                 rej("Dinner not ready");
//             }
//         }, 2000);
//     });
//     return p;
// }
// function goOut(){
//     const p = new Promise((res,rej)=>{
//         setTimeout(() => {
//             let done=true;
//             if(done){
//                 console.log("Going out");
//                 res("Going out");
//             }else{
//                 rej("Not going out");
//             }
//         }, 2000);
//     });
//     return p;
// }

// doHomework().then((data)=>{
//     console.log(data);
//     return eatDinner();
// }).then((data)=>{
//     console.log(data);
//     return goOut();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("go to sleep");
// }); 

// console.log("First Line");
// setTimeout (()=>{
//     console.log("Inside settimeout");
// },0);
// const p = new Promise((res,rej)=>{
//     res()
// });
// p.then(()=>{
//     console.log("Inside promise");
// });
// p.then(()=>{
//     console.log("Inside romise 2");
// });
// p.then(()=>{
//     console.log("Inside promise 3");{
//         console.log("Inside promise 3.1");
        
//         setTimeout(()=>{
//             console.log("Inside settimeout 2"); 
//     }
//     ,0);
// }
// });
// p.then(()=>{    
//     console.log("Inside promise 4");
//     }
// );

// console.log("Last Line");

// async and await
// function OrderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("Food ordered")
//             res()
//         }, 2000);
//     });
// }
// function prepareFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("Food prepared")
//             res()
//             // rej("order cancelled")
//         }, 2000);
//     });
// }
// function eatFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("Food eaten")
//             res()
//         }, 2000);
//     });
// }


// // OrderFood().then(()=>{  
//     async function foodOrder() {
//         await OrderFood()
//         await  prepareFood()
//         await eatFood()
// console.log("Enjoy your meal");
//     }
//     foodOrder()


// function* generate(){  
//     yield 1
//     yield 2
//     yield 3
// }
// const res=generate();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

// function add(a,b,c){ 
//     return a+b+c;
// }

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
// }
// }

// const add=a=>b=>c=>a+b+c;
    

// console.log(add(2)(3)(4))

// const first=add(34) 
// const second=first(23)
// const third=second(2)
// console.log(third)





// (  ASSIGNMENT 2 HINT)
const API_KEY=7e75caf90525cfec824355a26aeabe3b;
const city= document.querySelector("#city");
const search= document.querySelector("#search");

search.addEventListener('click',async(e)=>{
    e.preventDefault();
    const data=city.value
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}`);
    const res= await response.json();
    console.log(weatherData);
    console.log("Temp",(weatherData.main.temp-273.15).toFixed(1),"C");
    console.log("weather:",weatherData.weather[0].main);
    console.log("humidity:",weatherData.main.humidity);
    console.log("wind:",weatherData.wind.speed);
})
// done

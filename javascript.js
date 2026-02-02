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

function doHomework(){
    const p = new Promise((res,rej)=>{
        setTimeout(() => {
            let done=true;
            if(done){
                console.log("Homework is done");
                res("Homework done");
            }else{
                rej("Homework not done");
            }
        }, 2000);
    });
    return p;
}
function eatDinner(){
    const p = new Promise((res,rej)=>{
        setTimeout(() => {
            let done=true;
            if(done){
                console.log("Dinner is ready");
                res("Dinner ready");
            }else{
                rej("Dinner not ready");
            }
        }, 2000);
    });
    return p;
}
function goOut(){
    const p = new Promise((res,rej)=>{
        setTimeout(() => {
            let done=true;
            if(done){
                console.log("Going out");
                res("Going out");
            }else{
                rej("Not going out");
            }
        }, 2000);
    });
    return p;
}

doHomework().then((data)=>{
    console.log(data);
    return eatDinner();
}).then((data)=>{
    console.log(data);
    return goOut();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("go to sleep");
}); 

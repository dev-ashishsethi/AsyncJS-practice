// //6.2
// const countdown=(num)=>{
//     const timerID=setInterval(()=>{
//         console.log(num);
//         num--;
//         if(num===0){
//             clearInterval(timerID);
//             console.log("Bang Bang!");
//         }
//     },1000)
// }

// countdown(6);

// //6.1
// let num=10;
// const nameInterval=(name,time)=>{
//     const ID=setInterval(()=>{
//         console.log(name);

//         (num===0)?clearInterval(ID):num--;
        
//     },time);
// }

// nameInterval("ashish",1000);

function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`)
        }
        resolve(`from server: ${msg}`)
      }, 3000)
    })
  }

const syncCallsToServer= (msg1,msg2)=>{
    fakeFetch(msg1,true).then(()=>fakeFetch(msg2).then(console.log(msg2))).catch(err=>{
        console.error(err);
    });
}

syncCallsToServer("message 1","message 2");
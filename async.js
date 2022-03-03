//Q2
const strLength=(name,fun)=>{
    lenStatement(name.length);
}

const lenStatement=(num)=>{
    console.log(`OMG! my name is ${num} char long!`)
}

strLength("ashish",lenStatement);

//Q3
const willThanosKillMe=(name,KillMe,DidntKillMe)=>{
    if(name.length%2===0){
        DidntKillMe();
    }else{
        KillMe();
    }
}

const KillMe=()=> console.log(`Give my bose speakers and apple headphones to my sister`);
const DidntKillMe=()=> console.log(`Yay! I am alive!`);

willThanosKillMe("ashisha",KillMe,DidntKillMe);

//Q4

const intro=(msg,delay)=>{
    setTimeout(()=> console.log(msg),delay);
}

intro("My name is Ashish",0);

//Q6.1
// const interval=(msg,delay)=>{
//     const timerID=setInterval(() => {
//         console.log(msg);
//     }, delay);
//     clearInterval(timerID);
// }

// interval("lol",1000);

//Q6.2
const countdown= num=>{
    const intervalId= setInterval(()=>{
        console.log(num);
        num--;

        if(num===0){
            clearInterval(intervalId);
            console.log("Bang Bang!");
        }
    },1000);
}

countdown(4);

//fakeFetch

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

//Q11
fakeFetch("helooooooooooooooooooooo").then(data=> console.log(data));

//Q12
fakeFetch("hello",true).then(data=>console.log(data)).catch(err=>{
    console.error(err);
});

//Q13
const getServerResponseLength=(msg)=>{
     fakeFetch(msg).then(data=>data.length).catch(err=>{
        console.error(err);
    });
}

console.log( getServerResponseLength("ashish"));

//Q14
const syncCallsToServer=(msg1,msg2)=>{
    fakeFetch(msg1).then(data=>console.log(data));
    fakeFetch(msg2).then(data1=>console.log(data1));
}
syncCallsToServer("lol1","lol2");

//Q15
const getSomeData= async (msg)=>{
    try{
        const FF= await fakeFetch(msg);
        console.log(FF);
    }catch(err){
        console.error(err);
    }
    
}

getSomeData("async-await");

//Q16
const syncCallsToServer2= async (msg1,msg2)=>{
    try {
        const fake1= await fakeFetch(msg1);
        console.log(fake1);

        try {
            const fake2= await fakeFetch(msg2);
            console.log(fake2);
        } catch (error) {
            console.error(error);
        }
    } catch (error) {
        console.error(error);
    }
}

syncCallsToServer2("async","await");

//Q17
const ques12 = async (msg)=>{
    try {
        const data=await fakeFetch(msg,true);    
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    
}

ques12("fakefetch with async-await");


const getServerResponseLength2= async (msg)=>{
    try {
        const data=await fakeFetch(msg);
        return data.length;
    } catch (error) {
        return error;
    }
} 


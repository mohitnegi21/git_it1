
const clck = document.getElementById("clock");
    
let alarmArr = [];

let count =0;

setInterval(getClcokData,1000);

function getClcokData(){
    var dt = new Date();
    let hrs = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    
    clck.innerText = hrs+":"+min+":"+sec;
    
   for(let i=0;i<alarmArr.length;i++){
        if(alarmArr[i]["hour"]==hrs&&alarmArr[i]["minutes"]==min&&alarmArr[i]["seconds"]==sec){
            alert("Alarm Activated");
        }
   }
}


//let elem = [];
const elem = document.createElement("p");

const setal = document.getElementById("setalarm");
const clearalarm = document.getElementById("clearAlarm");

setal.addEventListener("click",submitData);

clearalarm.addEventListener("click",clearAlarm);

function clearAlarm(){
    document.getElementById("hr").value = '';
    document.getElementById("mins").value = '';
    document.getElementById("secs").value = '';

    document.getElementById("hr").disabled = false;
    document.getElementById("mins").disabled = false;
    document.getElementById("secs").disabled = false;
    elem.innerText = '';
}

function submitData(){
    
    let hrs1 =document.getElementById("hr").value;
    let min1 = document.getElementById("mins").value;
    let sec1 = document.getElementById("secs").value;

    let obj = {hour:hrs1,minutes:min1,seconds:sec1};
    alarmArr.push(obj);


    // document.getElementById("hr").disabled = true;
    // document.getElementById("mins").disabled = true;
    // document.getElementById("secs").disabled = true;



    //appencheild messgae - alarm set
    //const elem = document.createElement("p");
    addDiv(obj);
    count++;

    elem.innerText = "Alarm Set";
    document.getElementById("message").appendChild(elem);



    console.log(hrs1);
    console.log(min1);
    console.log(sec1);
    

}
function addDiv(obj){
    
    const divel = document.createElement("div");

    divel.setAttribute("id",`div${count}`);

    const btn = document.createElement("button");
    const para = document.createElement("p");
    para.textContent = `${obj.hour} :${obj.minutes} : ${obj.seconds}`;
    btn.textContent = "Delete";
    btn.setAttribute("id",`btn${count}`);
    //document.getElementById(`btn${count}`).value = "Delete";
    
    divel.appendChild(para);
    divel.appendChild(btn);
    document.getElementById("message").appendChild(divel);
    //count++;

    const btnremove = document.getElementById(`btn${count}`);
    const divrem = document.getElementById(`div${count}`);

   
    btn.addEventListener("click",()=>{
    console.log("Remove button clicked");
    document.getElementById("message").removeChild(divel);
    //console.log(btn.getAttribute("id"));
    const index = btn.getAttribute("id").substring(3);
    alarmArr[index] = {hour:70,minutes:70,seconds:70};
    // alarmArr.splice(index,1);
    // console.log(index);
    // console.log(count);
    // count--;
   
});
}


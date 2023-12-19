setInterval(displayTime,500)

function displayTime(){
    let time = new Date()
    let hr = time.getHours()
    let mins = time.getMinutes()
    let seconds = time.getSeconds()
    if(hr>12){
    hr = hr -12
    document.getElementById('ampm').innerHTML = "PM"
    }
    document.getElementById('hours').innerHTML = padZero(hr)
    document.getElementById('mins').innerHTML = padZero(mins)
    document.getElementById('seconds').innerHTML = padZero(seconds)
    
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(generateColor,1000)

let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

function generateColor(){
    let colorcode = "#"
    let colorcode1 = "#"
    for(i=0;i<6;i++)
    {
    colorcode += hexcode()
    }
    for(i=0;i<6;i++){
    colorcode1 += hexcode()
    }
    let clock = document.getElementById('clock')
    let container = document.getElementById('container')
    container.style.background = `linear-gradient(90deg,${colorcode},${colorcode1})`


}
 
function hexcode(){
    return arr[(Math.floor(Math.random()*16))]
}
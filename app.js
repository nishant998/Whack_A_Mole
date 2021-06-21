document.addEventListener('DOMContentLoaded' , ()=> {
const square = document.querySelectorAll('.square') ;
const mole = document.querySelectorAll('.mole') ;
const TimeOut = document.querySelector('#Time_out') ;
let score = document.querySelector('#Score') ;
let result = 0 ;
var current_time = parseInt(TimeOut.textContent) ;
function random_square(){
    square.forEach(ClassName => {
        ClassName.classList.remove('mole') ;
    })
    let random_position = square[Math.floor(Math.random()*9)] ;
    random_position.classList.add('mole') ;

    hitposition = random_position.id ;
    // square.forEach(id=>{
    //     id.addEventListener('mouseup' , ()=>{
    //         if(id.id === hitposition){
    //             result = result+1 ;
    //             score.textContent = result ;
    //         }
    //     })
    // })
}


square.forEach(id=>{
    id.addEventListener('mouseup' , ()=>{
        if(id.id === hitposition){
            result = result+1 ;
            score.textContent = result ;
        }
    })
})

function moveMole(){
    let timeId = null ;
    timeId = setInterval(random_square , 800) ;
}
moveMole() ;

let TimeId = setInterval(Countdown , 1000) ;
function Countdown(){
    current_time-- ;
    TimeOut.textContent = current_time ;
    if(current_time === Number(0)){
        clearInterval(TimeId) ;
        alert("Game over  , Better try next time  , Your Score is :- " + result)
        location.reload() ;
    }
}

})
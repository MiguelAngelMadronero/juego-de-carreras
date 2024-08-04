const redCar = document.querySelector("#red");
const blueCar = document.querySelector("#blue");
const pista = document.querySelector(".pista")
const redButton = document.querySelector(".buttonClick--red")
const blueButton = document.querySelector(".buttonClick--blue")
const pistaObjeto= pista.getBoundingClientRect();
const width = pistaObjeto.width;
let redCounter = 0;
let blueCounter = 0;


window.addEventListener("keyup", (e)=>{
    if(e.key ===  "c"){
        redCounter=redCounter+50;
        redCar.style.marginLeft=`${redCounter}px`;
        console.log("click", e.key)

    }

    if(e.key ===  "m"){
        blueCounter=blueCounter+50;
        blueCar.style.marginLeft=`${blueCounter}px`;
        console.log("click", e.key)

        
    }
    winner(redCounter, blueCounter)
    
})

redButton.addEventListener("click", ()=>{
    
    redCounter=redCounter+50;
    redCar.style.marginLeft=`${redCounter}px`;
    console.log("click", redButton)

    winner(redCounter, blueCounter)

  
    
})


blueButton.addEventListener("click", ()=>{
    
    blueCounter=blueCounter+50;
    blueCar.style.marginLeft=`${blueCounter}px`;
    console.log("click", blueButton)

    winner(redCounter, blueCounter)

  
    
})


function winner(redCounter, blueCounter){
    if(redCounter > width && blueCounter<width){

        setTimeout(() => {
            alert("el carro rojo gana");
            location.reload();
        }, 500);
       
        
    }

    if(blueCounter>width && redCounter<width){
        setTimeout(() => {
            alert("el carro azul gana")
            location.reload();

        }, 500);

        
        

    }

    
}


for(let i=1; i<4; i++){
    for(let j=1; j<=2; j++){
        console.log(`i ${i} e j ${j}`)
    }
}

//externo 
for(let x=1; x<=3; x++){   
    //interno
    for(let y=1; y<=4; y++){
        console.log("*".repeat(y))
    }
}

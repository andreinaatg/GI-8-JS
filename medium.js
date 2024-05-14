function sharePizza(totalSlices, numberOfPeople){

    const slicesPerPerson = totalSlices/ numberOfPeople;

    const roundedSlices = Math.floor(slicesPerPerson);

    return `each person gets ${roundedSlices} slices of pizza; from ${totalSlices} slices of pizza`
}

console.log(sharePizza(10, 4)); 


function sharePizza(totalSlices, numberOfPeople){
    const slicesPerPerson = totalSlices / numberOfPeople;
    
    const intergerPart = Math.floor(slicesPerPerson);
    const fractionPart = slicesPerPerson - intergerPart;

    let sliceCountString;

    if(fractionPart > 0 ){
        sliceCountString = fractionPart.toFixed(2);
    }else {
        sliceCountString = intergerPart.toString();
    }

    return `Each person gets ${sliceCountString} slices of pizza;from our ${totalSlices} slice pizza`;
}

console.log(sharePizza(8,2));
console.log(sharePizza(8,3));
console.log(sharePizza(21,20));
console.log(sharePizza(10,3));
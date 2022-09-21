let bikePrice = [ 5329, 4999, 2499, 1999, 3750, 6415 ];

function averagePrices(){
    let gemmiddelde = 0;

    bikePrice.forEach(bikePrice => {
        gemmiddelde = gemmiddelde + bikePrice;
    })

    //for (let i = 0; i < bikePrice.length; i++) {
    //    gemmiddelde = gemmiddelde + bikePrice[i];
    //}

    return gemmiddelde / bikePrice.length;
}

console.log(`“De gemiddelde prijs voor een fiets bedraagt ${averagePrices()} euro.`);


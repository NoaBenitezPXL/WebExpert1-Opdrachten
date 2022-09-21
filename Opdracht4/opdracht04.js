let bikePrice = [ 5329, 4999, 2499, 1999, 3750, 6415 ];

function averagePrices(){
    let gemmiddelde = 0;

    for (let i = 0; i < bikePrice.length; i++) {
        gemmiddelde = gemmiddelde + bikePrice[i];
    }

    gemmiddelde = gemmiddelde / bikePrice.length;

    return gemmiddelde;
}

console.log(`“De gemiddelde prijs voor een fiets bedraagt ${averagePrices()} euro.`);


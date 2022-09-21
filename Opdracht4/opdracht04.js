let bikePrice = [ 5329, 4999, 2499, 1999, 3750, 6415 ];

console.log(`“De gemiddelde prijs voor een fiets bedraagt ${averagePrices(bikePrice)} euro.`);

function averagePrices(prices){
    let gemmiddelde = 0;

    prices.forEach(prices => {
        gemmiddelde = gemmiddelde + prices;
    });

    //for (let i = 0; i < bikePrice.length; i++) {
    //    gemmiddelde = gemmiddelde + bikePrice[i];
    //}

    return gemmiddelde / prices.length;
}




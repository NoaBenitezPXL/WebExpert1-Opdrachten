let inputPrice = parseFloat(prompt("Geef een inkoopprijs in"));
let inputTax = parseFloat(prompt("Geef een BTW-tarief in"));

if (inputPrice && inputTax) {
    alert("De verkoopprijs = " + (inputPrice + (inputPrice * inputTax / 100)));
} else {
    alert("Oeps er ging iets fout.");
}
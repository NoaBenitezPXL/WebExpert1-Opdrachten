let fietsen = [
    {
        merk: "Samfiets",
        model: "Samsec",
        prijs: 999,
        score: 7.8
    },
    {
        merk: "Samfiets2",
        model: "Samsec2",
        prijs: 3999,
        score: 4.8
    },
    {
        merk: "Samfiets3",
        model: "Samsec3",
        prijs: 899,
        score: 9.3
    }
];

let div = document.getElementById("main");

let h2 = document.createElement("h2");
let textH2 = document.createTextNode("Populaire elektrische fietsen");
h2.appendChild(textH2);
div.appendChild(h2);

let button = document.createElement("button");
let textButton = document.createTextNode("Gemiddelde prijs");
button.appendChild(textButton);
div.appendChild(button);

let button2 = document.createElement("button");
let textButton2 = document.createTextNode("Top 3");
button2.appendChild(textButton2);
div.appendChild(button2);

let newDiv = document.createElement("div");
newDiv.id = "content";
div.appendChild(newDiv);

let divContent = document.getElementById("content");

let newUl = document.createElement("ul");
divContent.appendChild(newUl);

fietsen.forEach(fiets => {
    let Li = document.createElement("li");
    let textOl = document.createTextNode(fiets.merk + " - " + fiets.model + " - " + fiets.prijs + " - " + fiets.score);
    Li.appendChild(textOl);

    if (fiets.score > 8) { 
        Li.style.color = "green";
        Li.style.fontWeight = "bold";
        divContent.appendChild(Li);
    } else{
        divContent.appendChild(Li);
    }
});



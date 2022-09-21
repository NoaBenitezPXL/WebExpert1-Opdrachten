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

fietsen.forEach(fiets => {
    if (fiets.prijs < 2500) {
        console.log(fiets);
    }
});






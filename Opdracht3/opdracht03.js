let lijst = ["noa", "sam", "essat"];

lijst.forEach((lijst => {
    console.log(lijst);
}));

alert(`Aantal namen: ${lijst.length}`);

for (let i = 0; i < lijst.length; i++) {
    if (lijst[i] === "sam") {
        lijst.splice(i, 1);
    }
}

console.log(lijst);
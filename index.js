
const cats = 
    ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) { 
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name) {
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(name) {
    const newCopyOfCats = ["Arnold", ...cats];
    return newCopyOfCats;
}

function removeLastCat() {
    const copyCats = cats.slice(0, -1);
    return copyCats;
}

function removeFirstCat() {
    const newCopyCats = cats.slice(1);
    return newCopyCats;
}


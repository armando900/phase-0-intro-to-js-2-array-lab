// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const appendCat= [...cats, "Broom"];
    return appendCat;
}
function prependCat() {
    const appendCat= ["Arnold", ...cats];
    return appendCat;
}
function removeLastCat() {
    const removeLastCat= cats.slice(0, -1);
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat= cats.slice(1);
    return removeFirstCat;
}
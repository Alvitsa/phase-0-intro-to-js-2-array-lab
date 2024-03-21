// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  let allCats = [...cats,name];
  return allCats;
}
function prependCat(name) {
  let allCats = [name,...cats];
  return allCats;
} 
function removeLastCat() {
  let allCats =cats.slice(0,-1);
  return allCats;
}
function removeFirstCat() {
  let allCats = cats.slice(1);
  return allCats;
}
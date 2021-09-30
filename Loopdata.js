const data = [2,4,5,7]
console.log("Using For loop...")
for(let i=0; i<data.length; i++){
    console.log(i + ":" + data[i]);
}

console.log("using foreach loop...")
data.forEach((item) => {
    console.log(item);
});
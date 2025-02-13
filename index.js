const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf8");
console.log(contents);

const data = fs.readFileSync("b.txt", "utf8");
console.log(data);

console.log("done")
/* Token list
ADD: +
SUB: -
MULT: *
DIV: /
NUM: 0-9
*/

const Input = "1+2-3*4/5";
let tokens = [];
let numTemp = "";

for (let i = 0;i < Input.length;i++) {
    const Inw = Input[i]; // Input word
    console.log(Inw);

    if (Inw.match(/[0-9]/)){
        numTemp = numTemp + Inw;
        continue;
    } else {
        tokens.push(["NUM", numTemp]);
        numTemp = "";
    };

    if (Inw === "+") {
        tokens.push(["ADD"]);
    } else if (Inw === "-") {
        tokens.push(["SUB"]);
    } else if (Inw === "*") {
        tokens.push(["MULT"]);
    } else if (Inw === "/") {
        tokens.push(["DIV"]);
    } else {
        console.error("異物混入なの");
        tokens = [];
        break;
    };
};

if (numTemp.length !== 0) {
    tokens.push(["NUM", numTemp]);
    numTemp = "";
};

tokens.push(["EOF"]);

console.log(tokens);

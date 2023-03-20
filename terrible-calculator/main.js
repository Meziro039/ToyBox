const Input = "1+2*2*3/12+2".replace(/\s/g, "");
let num = "";
let resp = [];

// 分解
for (let i = 0;i < Input.length;i++) {
    if (String(Number(Input[i])) === "NaN") {
    // 演算子 +-*/
        resp.push(num);
        num = "";
        resp.push(Input[i]);
    } else {
    // 数字 0-9
        num = num + String(Input[i]);
    };
};
resp.push(num);

// 空文字削除
for (let i = 0;i < resp.length;i++) {
    if (resp[i] === "") {
        resp.splice(i, 1);
    };
};

// */
for (let i = 0;i < resp.length;i++) {
    if (resp[i] === "*") {
        resp[i - 1] = String(Number(resp[i - 1]) * Number(resp[i + 1]));
        resp.splice(i, 2);
        i -= 1;
        continue;
    } else if (resp[i] === "/") {
        resp[i - 1] = String(Number(resp[i - 1]) / Number(resp[i + 1]));
        resp.splice(i, 2);
        i -= 1;
        continue;
    };
};

// +-
for (let i = 0;i < resp.length;i++) {
    if (resp[i] === "+") {
        resp[i - 1] = String(Number(resp[i - 1]) + Number(resp[i + 1]));
        resp.splice(i, 2);
        i -= 1;
        continue;
    } else if (resp[i] === "-") {
        resp[i - 1] = String(Number(resp[i - 1]) - Number(resp[i + 1]));
        resp.splice(i, 2);
        i -= 1;
        continue;
    };
};

console.log(resp.join(""));

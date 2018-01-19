/* 
    Primitive Value 原始型別
    JavaScript 中包含六種原始型別
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Symbol

    傳遞原始型別式：傳值
    傳遞非原始型別（物件）：傳址
*/

// 傳值 pass by value：a 傳進函式 change 後，電腦會將 a 的值複製給 b 並存進另一個記憶體位址，不影響原本 a 的值。
function change(b) {
    b = 2;
}
var a = 1;
change(a);

console.log(a); // 1

// 傳址 pass by reference：傳物件進函式時，c 與 d 兩個變數同時指向同一個記憶體位址，所以對 d 的變更將同時影響到 c。
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);

console.log(c); // { prop1: [Function], prop2: {} }
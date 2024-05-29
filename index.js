let val = document.getElementById("input1");
let text1 = document.getElementById("text1")
let val1 = document.getElementById("input2");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
plus.addEventListener("click", () =>{
    let x = 0;
    x = parseInt(val.value) + parseInt(val1.value);
    text1.innerHTML = x;
})
minus.addEventListener("click", () =>{
    let x = 0;
    x = parseInt(val.value) - parseInt(val1.value);
    text1.innerHTML = x;
})
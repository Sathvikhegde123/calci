let equal = document.getElementById("equal");
let input = document.getElementById("input");
let clear = document.getElementById("clear");

equal.addEventListener("click",() =>{
    let inp_val = input.value;
    try{
        let ans = eval(inp_val);
        input.value = ans;

    }catch(err){
        input.value = "Error";
    }
});

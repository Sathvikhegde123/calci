let equal = document.getElementById("equal");
let input = document.getElementById("input");
let clear = document.getElementById("clear");

equal.addEventListener("click",() =>{
    console.log("Button clicked")
    let inp_val = input.value;
    try{
        let ans = eval(inp_val);
        input.value = ans;

    }catch(err){
        alert("Error encountered");
        input.value = "";
    }
});

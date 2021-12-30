// eval() function can evaluate a string
const output = document.getElementById("output");
const inputs = document.querySelectorAll("input");
inputs.forEach(eachInput =>{
    eachInput.addEventListener("click", (i) => {
        switch(i.target.value){
            // if C is clicked make output as empty
            case "C":
                output.value = "";
                break;
            // if '=' is clicked then output the value
            case "=":
                try{
                    output.value = eval(output.value);
                }catch(err){
                    output.value = "Error";
                }
                break;
            // if delete is clicked then remove one index value
            case "Del":
                output.value = output.value.substring(0, output.value.length-1);
                break;
            default: output.value += i.target.value;
        }
    });
});
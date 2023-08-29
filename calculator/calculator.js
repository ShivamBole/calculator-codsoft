let task = document.getElementById('screen');
let buttons= document.querySelectorAll('.button');
let result="";
let arr=Array.from(buttons);
arr.forEach( (button) =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            result=eval(result);
            task.value = result;

        }else if(e.target.innerHTML == "AC"){
            result="";
            task.value =result;

        }else if(e.target.innerHTML == "CE"){
            result= result.substring(0, result.length-1);
            task.value = result;

        }else{
            result += e.target.innerHTML;
            task.value = result;
        } 
    })
})

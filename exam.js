function myFun() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operation = document.getElementById("maths").value;
    var result = document.getElementById("result");
    console.log(num1,num2,operation);
    n1 = Number(num1);
    n2 = Number(num2);
    switch(operation){
        case '+' :
            addition(n1,n2);
            break;
        case '-' : 
            subtraction(n1,n2);
            break;
        case '*' : 
            multiplication(n1,n2);
            break;
        case '/' : 
            division(n1,n2);
            break;
        default :
            break;
    }
    function addition(num1,num2) {
        var sum = num1+num2;
        result.value = sum;
    }
    function subtraction(num1,num2) {
        var sub = num1-num2;
        result.value = sub;
    }
    function multiplication(num1,num2) {
        var mul = num1*num2;
        result.value = mul;
    }
    function division(num1,num2) {
        var div = num1/num2;
        result.value = div;
    }
}
var inputfield = document.getElementById('screen');

    function inputClick(value) {
        inputfield.value = inputfield.value + value;
    }
    function clearing(){
        inputfield.value = " ";
    }
    function resulting(){
        var result = eval(inputfield.value);
        inputfield.value = result;
    }
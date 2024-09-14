function sign() {
    window.alert("Currently not available!");
}

function add() {
    let firstInput = document.getElementsByName("first")[0].value;
    let secondInput = document.getElementsByName("second")[0].value;


    let a = parseFloat(firstInput);
    let b = parseFloat(secondInput);

    

    // Perform addition
    let c = a + b;

    // Display the result
    window.alert("\n\n\n\n\nAnswer is :  "+c);
}

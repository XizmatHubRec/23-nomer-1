document.getElementById("okButton").addEventListener("click", function() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if (firstName && lastName) {
        document.getElementById("result").textContent = lastName + ", " + firstName;
    } else {
        alert("Iltimos, ism va familiya kiriting!");
    }
});

let firstname;

document.getElementById("submit").onclick = function(){

    firstname = document.getElementById("firstName").value;
    console.log(firstname);
    document.getElementById("label").innerHTML = "Hello " + firstname;
}
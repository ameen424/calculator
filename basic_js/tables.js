function printTable(){
    var num=document.getElementById("txtNumber").value;
    for(var i=1; i<=10; i++)
    {
        var printTableOfNumber = document.getElementById("table");
        printTableOfNumber.innerHTML += num*i + "<br>";
    }
}
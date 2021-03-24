function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal*years*rate/100;
    var d = parseInt(new Date().getFullYear());
    var n = d+years;

    if(principal <= 0){ //function to check amount is not negative
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
      }

     document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>," + "<br>"+
                                                    "at an interest rate of <mark>"+ rate+ "%</mark>." +"<br>"+
                                                    "You will receive an amount <mark> " + interest + "</mark>,"+"<br>" +
                                                    "in the year <mark>" + n +"</mark>"
  
}
function slider() {
    var value = document.getElementById("rate").value;
    document.getElementById("demo").innerHTML = value + "%";
   }       

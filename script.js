function takevalue()
{
    
    var email = document.getElementById("email").value;
    var registration = document.getElementById("regno").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var name = fname+" "+lname;
    var gender = document.getElementById("radio").value;
    var dob = document.getElementById("dob").value;
    var bgroup = document.getElementById("bgroup").value;
    var aadhaar = document.getElementById("aadhaar").value;
    var imark = document.getElementById("imark").value;
    var prog = document.getElementById("prog").value;
    var course = document.getElementById("course").value;
    var paddress = document.getElementById("paddress").value;
    var preaddress = document.getElementById("preaddress").value;
    var conno = document.getElementById("conno").value;
    var econno = document.getElementById("econno").value;
    var dur = document.getElementById("dur").value;
    var durend = document.getElementById("durend").value;
    
    

   


    localStorage.setItem("mail",email);
    localStorage.setItem("reg",registration);
    localStorage.setItem("name1",name);
    localStorage.setItem("prog",prog);
    localStorage.setItem("address",preaddress);
    localStorage.setItem("bgroup",bgroup);
    localStorage.setItem("eno",econno);
    localStorage.setItem("valid",durend);
    

    
}

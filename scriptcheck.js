function checkvalue()
    {
        var reg=document.getElementById("reginfo").value;
    
        if(reg=='213001001210091'||reg=='213001001210014'||reg=='213001001210008'||reg=='213001001210026')
        {
            document.login.action="form.html";
        }
        else
        {
            alert("Invalid Registration Number.");
        }
    }
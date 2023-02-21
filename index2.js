function validation1()
{
    const emailcon = document.getElementById('email')
    const passcon = document.getElementById('password')

    let emaildata = emailcon.value 
    if(emaildata == "")
    {
        alert("can you fill this form")
    }

    if (!emaildata.includes("@") && !emaildata.includes(".com"))
    {
        alert("please fill out correctly!")
    }

    let passdata = passcon.value

    if(passdata.trim().length < 8)
    {
        alert("password needed atleast 8 characters")
    }

    

}
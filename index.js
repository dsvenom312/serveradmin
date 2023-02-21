function validation()
{
    const namecon = document.getElementById('name')
    const emailcon = document.getElementById('email')
    const malecon =document.getElementById('male')
    const femalecon = document.getElementById('female')
    const city2con = document.getElementById('city2')
    const passwordcon = document.getElementById('password')
    const password1con = document.getElementById('password')

    let emaildata = emailcon.value 

    if(emaildata == "")
    {
        alert("can you fill this form")
        return false
    }

    if (!emaildata.includes("@") && !emaildata.includes(".com"))
    {
        alert("please fill out correctly!")
        return false
    }

    let passworddata = passwordcon.value

    if(passworddata == 'password')
    {
        alert("password can't be password")
        return false
    }

    let password1data = password1con.value

    if(!password1data == !password1data )
    {
        alert("your password needed to be same")
        return false
    }

    if(!femalecon.checked && !malecon.checked)
    {
        error.innerhtml = "you must choose 1 gender"
        return false
    }

}



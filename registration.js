function validate() {
    //username function patikrina ar username yra 5-12 simboliu ir ar jame yra skaiciu
    let userName = document.getElementById("userName").value;
    if (userName.length < 5 || userName.length > 12) {
        console.log("netinkamas username ilgis");
        return;
    }
    // if (userName.match(userNameRE)) {
    if (/\d/.test(userName)) {
        console.log("username tinka");
    } else {
        console.log("username netinka");
        return;
    }
    //pasword function patikrina ar username yra 7-12 simboliu ir ar jame yra spec simboliu
    let pasword = document.getElementById("pasword").value;
    if (pasword.length < 7 || pasword.length > 12) {
        console.log("netinkamas pasword ilgis");
        return;
    }
    if (/\d/.test(pasword) && /[!?+=]/.test(pasword)) {
        console.log("pasword tinka");
    } else {
        console.log("pasword netinka");
        return;
    }
    //name function patikrina ar name sudaro letters only
    let name = document.getElementById("name").value;
    let nameRE = /^[a-z]+$/i;
    if (nameRE.test(name)) {
        console.log("name tinka");
    } else {
        console.log("name netinka");
        return;
    }
}

/*
let s = "apple is red and tasty";
let r2 = /(\w*) (\w*)/i;
if (s.match (r2)) {
    s=s.replace (r2,"$2 $1");
    console.log(s);
} else {
    console.log("nera");
}*/

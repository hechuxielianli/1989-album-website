function login(){
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    if(!userName || userName.trim() === ""){
        alert("Please enter your username!");
        return false;
    }

    if(!password || password.trim() === ""){
        alert("Please enter your password!");
        return false;
    }

    localStorage.setItem("userName",userName);
    localStorage.setItem("password",password);

    window.location.href = "index.html";
    return true;
}
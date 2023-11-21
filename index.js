const openSearch = ()=>{
    document.getElementById('search-input').style.top = "4rem";
    document.getElementById('search-input').style.display = "block";
}
const closeSearch = ()=>{
    document.getElementById('search-input').style.top = "0";
    document.getElementById('search-input').style.display = "none";
    document.getElementById('suggestion').style.display = "none";
    document.getElementById('header-input').value ='';
}
const suggestText = ()=>{
    document.getElementById('suggestion').style.display = "block";
    console.log(document.getElementById('header-input').value);
}
const openMenu = ()=>{
    document.getElementById('menu-drawer').style.right = "0";
}
const closeMenu = ()=>{
    document.getElementById('menu-drawer').style.right = "-70%";
}
const togglePassword = (eye)=>{
    if(eye){
        document.getElementById('password').type = 'password';
        document.getElementById('pass-eye').style.display = 'none';
    }else{
        document.getElementById('password').type = 'text';
        document.getElementById('pass-eye').style.display = 'block';
    }
}
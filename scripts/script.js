let myImage = document.querySelector("img");

myImage.onclick = () => {  

    let mySrc = myImage.getAttribute("src");

    if(mySrc === "image/html.png"){ 
      myImage.setAttribute("src", "image/html5.png");
    }else{
        myImage.setAttribute("src", "image/html.png");
    };
};

//mensagens de boas vindas personalizadas
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  let myName = prompt("Por favor, digite seu nome: ");
  localStorage.setItem("name", myName);
  myHeading.textContent = `JavaScript é muito legal, ${myName}`;
}
if(!localStorage.getItem("name")){
  setUserName();
}else{
  let storredName = localStorage.getItem("name");
  myHeading.textContent = `JavvaScript é muito legal, ${storredName}`;
}

myButton.onclick = () => {
  setUserName();
}
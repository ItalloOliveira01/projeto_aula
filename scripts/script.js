let myImage = document.querySelector("img");

myImage.onclick = () => {  

    let mySrc = myImage.getAttribute("src");

    if(mySrc === "image/html.png"){ 
      myImage.setAttribute("src", "image/html5.png");
    }else{
        myImage.setAttribute("src", "image/html.png");
    };
};
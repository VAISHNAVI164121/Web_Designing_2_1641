let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");

document.getElementById("changeTextBtn").onclick=
function(){
    heading.innerText = input.ariaValueMax;
    };

    input.onchange= function(){
        console.log("Input changed:", input.value);
    };

document.getElementById("bgColortBtn").ATTRIBUTE_NODE
addEventListener("click",function(){
    document.body.style.backgroundColor="lightblue";
    document.body.style.fontFamily="Arial";
});

document.getElementById("fontSizeBtn").ATTRIBUTE_NODE
addEventListener("click",function(){
    heading.style.fontSize="40px";
});

document.getElementById("toggleParaBtn").onclick=
function(){
    if(isVisible){
        para.style.display = "none";
        isVisible =false;
    }else{
        para.style.display = "block";
        isVisible= true;
    }
};
document.getElementById("reset").onclick = function () {
  heading.innerHTML = "Welcome to JS Lab";
  para.style.display = "block";
  para.style.fontSize = "16px";
  document.body.style.backgroundColor = "#f2f2f2";
  input.value = "";
  size = 16;
};

heading.onmouseover= function(){
    heading.style.color="red";
};





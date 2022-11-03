var r = document.querySelector(":root");
var color1 = "#93e9f5";
var color2 = "#de8304";
var color3 = "#21190d";
var color4 = "#1e9431";

function ChangeColor(){
    var rootComponent = getComputedStyle(r);
    var color1help = rootComponent.getPropertyValue("--yellow");
    var color2help = rootComponent.getPropertyValue("--black");
    var color3help = rootComponent.getPropertyValue("--white");
    var color4help = rootComponent.getPropertyValue("--red");
    
    r.style.setProperty("--yellow", color1);
    r.style.setProperty("--black", color2);
    r.style.setProperty("--white", color3);
    r.style.setProperty("--red", color4);

    color1 = color1help;
    color2 = color2help;
    color3 = color3help;
    color4 = color4help;
}
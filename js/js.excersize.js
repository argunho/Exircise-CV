var div = document.createElement("div");
document.body.appendChild(div);

var styles = "background-image:url('img/natur.jpg');background-repeat:no-repeat;background-size: 100% 100%;width:80%;color:#FFF;margin: 10px auto;height: calc(100vh - 20px);display:block;border: 5px double #000;border-radius: 15px;";
div.style = styles;

div.insertAdjacentHTML("afterbegin", "<p id='name'>Aslan Khadizov</p>");

var pStyles = "font-size:68px;font-family:'Bauhaus 93';text-align:center;margin-top:100px;width:100%";
document.getElementById("name").style = pStyles;

setTimeout(function() {
    var title = document.createElement("p");
    title.setAttribute("id", "heading");
    var title_text = document.createTextNode("Vad är jag bra på???");
    title.appendChild(title_text);
    div.appendChild(title);

    var titleStyles = "font-size:30px;text-align:center;margin:-50px auto 50px auto;padding:5px 10px;background-color:rgba(147,96,18, 0.8);width:450px";
    document.getElementById("heading").style = titleStyles;
    setTimeout(function() {
        setList();
    }, 1000);
}, 1000);

function setList() {
    var list = ["Att vara ärlig", "Att bli snäll", "Att programera", "Sova på natten"];

    var ol = document.createElement("ol");
    div.appendChild(ol);

    for (i in list) {
        ol.insertAdjacentHTML("beforeend", "<li>" + list[i] + "</li>");
    };
    var olStyles = "font-size:25px;margin:50px auto 50px auto;padding:5px 40px;background-color:rgba(147,96,18, 0.8);width:390px";
    ol.style = olStyles;
}








// name.style({
//     "color": "#000",
//     "font-size": "30px"

// })
var list = ["Att bli snäll", ""]
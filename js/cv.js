var loc = localStorage;
const cv_block = document.getElementById("cv");
const content = "<div class='content-div'><p class='heading'>(heading)</p><p class='description'>(description)</p></div>";

document.getElementById("user_name").innerHTML = (loc.length > 0) ? (loc.getItem("name") + " " + loc.getItem("lastname")) : "";
var img = (loc.length > 0) ? loc.getItem("src");
var address = (loc.length > 0) ? loc.getItem("adress");
var city = (loc.length > 0) ? loc.getItem("city");
var postcode = (loc.length > 0) ? loc.getItem("postcode");
var phone = (loc.length > 0) ? loc.getItem("phone");
var email = (loc.length > 0) ? loc.getItem("email");
var aims = (loc.length > 0) ? loc.getItem("aims_text");
var jobb = (loc.length > 0) ? loc.getItem("jobb");
var jobb_desc = (loc.length > 0) ? loc.getItem("jobb_text");
var pb = (loc.length > 0) ? loc.getItem("pb_text");
var github = (loc.length > 0) ? loc.getItem("github");

if (img == null)
    img = "images/profile.png";
document.getElementById("cv_img").src = img;
if (address != null) {
    let block = content.replace("(heading)", "Adress").replace("(description)", address);
    cv_block.insertAdjacentHTML("beforeend", block);
}
if (city != null) {
    let block = content.replace("(heading)", "Stad").replace("(description)", city);
    cv_block.insertAdjacentHTML("beforeend", block);
}
if (postcode != null) {
    let block = content.replace("(heading)", "Postnummer").replace("(description)", postcode);
    cv_block.insertAdjacentHTML("beforeend", block);
}
if (phone != null) {
    let block = content.replace("(heading)", "Mobile").replace("(description)", phone);
    cv_block.insertAdjacentHTML("beforeend", block);
}
if (email != null) {
    let block = content.replace("(heading)", "E-postadressen").replace("(description)", email);
    cv_block.insertAdjacentHTML("beforeend", block);
}
if (aims != null) {
    let block = content.replace("(heading)", "Målsättning").replace("(description)", aims);
    cv_block.insertAdjacentHTML("beforeend", block);
}
if (jobb != null) {
    var block_addition = "<div class='jobb-content'></div>";
    let block = content.replace("(heading)", "Arbetsgivare").replace("(description)", jobb);
    cv_block.insertAdjacentHTML("beforeend", block);
    cv_block.insertAdjacentHTML("beforeend", block_addition);
    var description_block = document.getElementsByClassName("jobb-content")[0];
    if (jobb_desc != null) {
        let block = content.replace("(heading)", "Beskrivning").replace("(description)", jobb_desc);
        description_block.insertAdjacentHTML("beforeend", block);
    }
}
if (pb != null) {
    let block = content.replace("(heading)", "Kort om mig").replace("(description)", pb);
    cv_block.insertAdjacentHTML("beforeend", block);
}
if (github != null) {
    let link = "<a href='" + github + "' class='link'>" + github + "</a>";
    let block = content.replace("(heading)", "Github länk").replace("(description)", link);
    cv_block.insertAdjacentHTML("beforeend", block);
}

cv_block.insertAdjacentHTML("beforeend", "<button class='return-btn' onclick='history.back()'>Tillbaka til start sidan</button>");
var loc = localStorage;
const cv_block = document.getElementById("cv");
const content = "<div class='content-div'><p class='heading'>(heading)</p><p class='description'>(description)</p></div>";

var cv = [
    "Aslan", "Khadizov", "images/profile.png", "Sommarvägen 11 E", "Växjö",
    "35237", "0704960343", "aslan_argun@hotmail.com",
    "Mitt drömjobb är ett sånt jobb vilket kommer att glädja mig varje dag. Jag har ett stort intresse" +
    "inom programering och mitt mål är att hitta mitt drömjobb såsom systemutvecklare eller webprogramerar",
    "Systematiq AB", "Systemutvecklare, webprogramerare",
    "Jag är bra på att ta in ny information, lära mig nya saker, har förmåga att förstå andra" +
    "människor. Jag är ansvarig, ordningsam, gillar ordning och hygien samt dricker inte alkohol, röker inte och drogfri.", "https://github.com/argunho/assignments/"
]
console.log(cv)
console.log(loc.length)
document.getElementById("user_name").innerHTML = (loc.length > 0) ? (loc.getItem("name") + " " + loc.getItem("lastname")) : (cv[0] + " " + cv[1]);
var img = (loc.length > 0) ? loc.getItem("src") : cv[2];
var address = (loc.length > 0) ? loc.getItem("adress") : cv[3];
var city = (loc.length > 0) ? loc.getItem("city") : cv[4];
var postcode = (loc.length > 0) ? loc.getItem("postcode") : cv[5];
var phone = (loc.length > 0) ? loc.getItem("phone") : cv[6];
var email = (loc.length > 0) ? loc.getItem("email") : cv[7];
var aims = (loc.length > 0) ? loc.getItem("aims_text") : cv[8];
var jobb = (loc.length > 0) ? loc.getItem("jobb") : cv[9];
var jobb_desc = (loc.length > 0) ? loc.getItem("jobb_text") : cv[10];
var pb = (loc.length > 0) ? loc.getItem("pb_text") : cv[11];
var github = (loc.length > 0) ? loc.getItem("github") : cv[12];

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
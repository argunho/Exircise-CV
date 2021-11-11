const container = document.getElementById("container");
const start = document.getElementById("start");
const cv_link = document.getElementById("p_link");

const loc = localStorage;

var header = document.getElementById("header");
var wrapper = document.getElementById("wrapper");

var cloned_header = header.cloneNode(true);
var cloned_wrapper = wrapper.cloneNode(true);
container.removeChild(header);
container.removeChild(wrapper);

setTimeout(function() {
    container.classList.remove("hidden");
}, 500)

// Images params
var img_upload, img_holder, cv_img, uploaded_img, name, lastname;
var _name = document.getElementById("start_name");
var _lastname = document.getElementById("start_lastname");
_name.value = _lastname.value = "";
start.setAttribute("disabled", true);

// Set user name with start
_name.onkeyup = function() {
    name = _name.value;
    loc.setItem("name", name);
    activatedStartButton();
}

// Set user lastname
_lastname.onkeyup = function() {
    lastname = _lastname.value;
    loc.setItem("lastname", lastname);
    activatedStartButton()
}

if (loc.length > 0)
    setStart();

// Check user och lastname inputs and activate start button
function activatedStartButton() {
    if (name && lastname && name.length > 2 && lastname.length > 2)
        start.removeAttribute("disabled");
    else if (start.getAttribute("disabled") == null)
        start.setAttribute("disabled", true);
}

// Remove start presentation block and start cv form
start.onclick = function() {
    setStart();
}

// Set start with click on start button or localStarge.length > 0
function setStart() {
    container.removeChild(document.getElementById("presentation"));
    container.classList.add("opc0");
    container.appendChild(cloned_header);
    container.appendChild(cloned_wrapper);
    header = document.getElementById("header");
    wrapper = document.getElementById("wrapper");
    img_upload = document.getElementById("img_upload")
    img_holder = document.getElementById("img_holder")
    cv_img = document.getElementById("cv_img");
    header_img_src = cv_img.getAttribute("src");
    uploaded_img = document.getElementById("uploaded");

    document.getElementById("user_name").innerHTML = loc.getItem("name") + " " + loc.getItem("lastname");
    var image_block = document.getElementById("image");

    document.querySelectorAll('div').forEach(function(div, i) {
        if (div.id == "name_lastname")
            div.classList.add('checked-div');
    });

    // For design
    let scale = 0;
    var opacity = setInterval(() => {
        scale += 0.05;
        container.style.opacity = scale;
        if (scale > 1) {
            clearInterval(opacity);
            container.classList.remove("opc0");
            container.removeAttribute("style");
        }
    }, 100);

    // Check localStorage lengt and set value for inputs
    let num = 0;
    if (loc.length > 0) {
        for (var l in loc) {
            let val = loc.key(num);
            if (val != null) {
                if (val == "src")
                    setImgSrc(loc.getItem(val))
                else
                    setInputValue(loc.key(num))
            }
            num += 1;
        }
    }
}

// Set value for specefic input
function setValue(e) {
    let name = e.attributes.id.value;
    loc.setItem(name, e.value);
}

// Return value
function setInputValue(name) {
    if (name != null) {
        var param = document.getElementById(name);
        if (name.indexOf("text") != -1)
            param.innerHTML = loc.getItem(name);
        else
            param.value = loc.getItem(name);
    }
}

// Skift form sections
function skiftSection(e) {
    let name = e.attributes.name.value;
    let current_li = document.getElementsByName(name)[0];
    let div = document.getElementById(name);

    document.querySelectorAll('div').forEach(function(div, i) {
        div.classList.remove('checked-div');
        div.classList.remove('div-hidden');
    });
    document.querySelectorAll('li').forEach(function(li, i) {
        li.classList.remove('btn-li-checked');
    });
    if (window.innerWidth < 835) {
        let cl = "[class='inputs-holder div-visible']";
        if (e.attributes.class.value.indexOf("btn-visible") != -1) {
            document.querySelectorAll(cl).forEach(function(div, i) {
                div.classList.add("div-hidden");
            });
        }
    }
    current_li.classList.add("btn-li-checked");
    setTimeout(function() {
        div.classList.add("checked-div");
    }, 500)

}

// Reset, return to start page
function reset() {
    loc.clear();
    location.reload();
}


// var img_base = "";
// Image upload
function onFileChange(ev) {
    const reader = new FileReader();
    reader.onload = function() {
        setImgSrc(reader.result);
        loc.setItem("src", reader.result)
        loc.getItem("src")
    }
    reader.readAsDataURL(ev.files[0]);
}

// Reset image
function resetImage() {
    document.getElementById("image").value = null;
    img_upload.classList.remove("hidden");
    img_holder.classList.add("hidden");
    cv_img.src = header_img_src;
    img_holder.src = "";
    loc.removeItem("src");
}

// Set image src
function setImgSrc(src) {
    // Image params
    uploaded_img.src = cv_img.src = src;
    cv_img.style.opacity = 1;
    img_upload.classList.add("hidden");
    img_holder.classList.remove("hidden");
}

// Set more jobb titles
function setMoreJobb() {
    var link = document.getElementById("more_jobb");
    var jobb = document.getElementById("jobb-div");
    var jobb_wrapper = document.getElementById("jobb-wrapper");
    var link_cloned = link.cloneNode(true);
    var cloned = jobb_wrapper.cloneNode(true);
    jobb.removeChild(link);
    jobb.appendChild(cloned);
    jobb.appendChild(link_cloned);
    cloned.classList.add("same-div");

    var jobb_id = "[id='jobb']";
    var jobb_text_id = "[id='jobb_text']";

}
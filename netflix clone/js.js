let opened = true;

document.getElementById("button1").addEventListener("click", function() {
    let element = document.querySelector(".faq-accordion-0");

    if (opened) {
        if (element.height != 0 && element.width != 0) {
            element.style.marginTop = "1.2rem"
            element.style.width = "82%";
            element.style.height = "60%";
            element.style.visibility = "visible";
            element.style.marginBottom = "2rem";
        }
    } else {
        element.style.width = "0%";
        element.style.height = "0%";
        element.style.visibility = "collapse";
        element.style.marginBottom = "-134.95rem";
    }
    
    opened = !opened;
});

document.getElementById("button2").addEventListener("click", function() {
    let element = document.querySelector(".faq-accordion-1");

    if (opened) {
        if (element.height != 0 && element.width != 0) {
            element.style.marginTop = "1.2rem"
            element.style.width = "82%";
            element.style.height = "60%";
            element.style.visibility = "visible";
            element.style.marginBottom = "2rem";
        }
    } else {
        element.style.width = "0%";
        element.style.height = "0%";
        element.style.visibility = "collapse";
        element.style.marginBottom = "-69.65rem";
    }
    
    opened = !opened;
});

document.getElementById("button3").addEventListener("click", function() {
    let element = document.querySelector(".faq-accordion-2");

    if (opened) {
        if (element.height != 0 && element.width != 0) {
            element.style.marginTop = "1.2rem"
            element.style.width = "82%";
            element.style.height = "60%";
            element.style.visibility = "visible";
            element.style.marginBottom = "2rem";
        }
    } else {
        element.style.width = "0%";
        element.style.height = "0%";
        element.style.visibility = "collapse";
        element.style.marginBottom = "-157.45rem";
    }
    
    opened = !opened;
});

document.getElementById("button4").addEventListener("click", function() {
    let element = document.querySelector(".faq-accordion-3");

    if (opened) {
        if (element.height != 0 && element.width != 0) {
            element.style.marginTop = "1.2rem"
            element.style.width = "82%";
            element.style.height = "60%";
            element.style.visibility = "visible";
            element.style.marginBottom = "2rem";
        }
    } else {
        element.style.width = "0%";
        element.style.height = "0%";
        element.style.visibility = "collapse";
        element.style.marginBottom = "-69.45rem";
    }
    
    opened = !opened;
});

document.getElementById("button5").addEventListener("click", function() {
    let element = document.querySelector(".faq-accordion-4");

    if (opened) {
        if (element.height != 0 && element.width != 0) {
            element.style.marginTop = "1.2rem"
            element.style.width = "82%";
            element.style.height = "60%";
            element.style.visibility = "visible";
            element.style.marginBottom = "2rem";
        }
    } else {
        element.style.width = "0%";
        element.style.height = "0%";
        element.style.visibility = "collapse";
        element.style.marginBottom = "-57.55rem";
    }
    
    opened = !opened;
});

document.getElementById("button6").addEventListener("click", function() {
    let element = document.querySelector(".faq-accordion-5");

    if (opened) {
        if (element.height != 0 && element.width != 0) {
            element.style.marginTop = "1.2rem"
            element.style.width = "82%";
            element.style.height = "60%";
            element.style.visibility = "visible";
            element.style.marginBottom = "2rem";
        }
    } else {
        
        element.style.width = "0%";
        element.style.height = "0%";
        element.style.visibility = "collapse";
        element.style.marginBottom = "-115rem";
    }
    
    opened = !opened;
});

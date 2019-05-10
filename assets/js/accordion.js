/* accordion da parte de soluções */

function initComponents() {
    initAccordion();
}


function initAccordion() {
    var accordions = document.querySelectorAll(".accordion");

    accordions.forEach( acc => {
        acc.onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;

            if (panel.style.display == "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        };
    });
}

initComponents();
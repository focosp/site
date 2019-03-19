/* accordion da parte de soluções */

function initComponents() {
    initAccordion();

    document.getElementById("everest-btn-external-chat")
        .addEventListener("onclick", removeChatButton);
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

/*
function removeChatButton() {
    let button = document.getElementById("everest-btn-external-chat");
    //button.parentNode.removeChild(button);
}*/

initComponents();

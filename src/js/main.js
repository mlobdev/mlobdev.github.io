document.addEventListener("DOMContentLoaded", () => {
    const emailBtn = document.querySelector(".email-btn");
    
    if (emailBtn) {
        emailBtn.addEventListener("click", copyAndMail);
    }
    
    hljs.highlightAll();
});

function copyAndMail() {
    navigator.clipboard.writeText("mlobdev@gmail.com").then(() => {
        const tooltip = document.getElementById("email-tooltip");
        
        if (!tooltip) return;

        tooltip.classList.add("show");
        
        setTimeout(() => {
            tooltip.classList.remove("show");
        }, 2500);
    });
}
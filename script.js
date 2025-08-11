document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => alert(`You selected: ${btn.textContent}`));
    });
});
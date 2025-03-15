document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const mailtoLink = `mailto:mantonych7@gmail.com?subject=Message de ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0ADe: ${encodeURIComponent(email)}`;
        
        window.location.href = mailtoLink;
        
        document.getElementById("confirmation-message").style.display = "block";
        document.getElementById("contact-form").reset();
    });
});

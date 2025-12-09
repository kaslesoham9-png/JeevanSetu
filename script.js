// ================= Smooth Scroll Function =================
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ================= Form Submission Handling =================
document.addEventListener('DOMContentLoaded', () => {
    const demoForm = document.getElementById('demoForm');

    if (demoForm) {
        demoForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const organization = this.querySelector('#organization').value.trim();
            const message = this.querySelector('#message').value.trim();

            if (!name || !email || !organization) {
                alert('Please fill in all required fields.');
                return;
            }

            alert(`Thank you, ${name}! Your demo request has been submitted. We will contact you shortly.`);

            this.reset();
        });
    }
});

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

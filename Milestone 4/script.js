// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("resumeform");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the form from submitting the traditional way

        // Collect the form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const education = document.getElementById("education").value;
        const experience = document.getElementById("experience").value;
        const skills = document.getElementById("skills").value;

        // Build the resume HTML
        const resumeHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education.replace(/\n/g, '<br>')}</p>
            <h3>Experience</h3>
            <p>${experience.replace(/\n/g, '<br>')}</p>
            <h3>Skills</h3>
            <p>${skills.replace(/\n/g, '<br>')}</p>
        `;

        // Inject the generated resume into the resumeOutput div
        document.getElementById("resumeOutput").innerHTML = resumeHTML;
    });
});
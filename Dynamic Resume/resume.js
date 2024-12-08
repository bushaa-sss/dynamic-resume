// ! toggle skills section
var _a;
function toggleSkills() {
    var skillsSection = document.getElementById("skills-section");
    var toggleButton = document.getElementById("toggle-skills-btn");
    //! conditions to toggle skills section
    if (skillsSection && toggleButton) {
        if (skillsSection.style.display === "none" ||
            skillsSection.style.display === "") {
            skillsSection.style.display = "block"; //! Show section
            toggleButton.textContent = "Hide Skills"; //! Change button text
        }
        else {
            skillsSection.style.display = "none"; //! Hide section
            toggleButton.textContent = "Show Skills"; //! Change button text
        }
    }
}
//! event listener for form submission
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a, _b;
    event.preventDefault(); //! Prevent the form from submitting and refreshing the page
    //! Event listener for the "Generate Resume" button
    (_a = document.getElementById("generateBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var contactNumber = document.getElementById("contactNumber").value;
        var email = document.getElementById("email").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var workExperience = document.getElementById("workExperience").value;
        var languageProficiencies = document.getElementById("languageProficiencies").value;
        //! Handle the Profile Photo file input
        var profilePhoto = (_a = document.getElementById("profilePhoto").files) === null || _a === void 0 ? void 0 : _a[0];
        //! generated resume will be displayed here
        var resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            if (profilePhoto) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var _a;
                    //! Check if the resume output section exists and display the resume details
                    resumeOutput.innerHTML = "\n          <h1>".concat(firstName, " ").concat(lastName, "</h1>\n          <img src=\"").concat((_a = e.target) === null || _a === void 0 ? void 0 : _a.result, "\" alt=\"Profile Photo\" style=\"width: 150px; height: 150px; border-radius: 50%;\">\n          <p><strong>Contact Number:</strong> ").concat(contactNumber, "</p>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <h2>Education</h2>\n          <p>").concat(education, "</p>\n          <h2>Skills</h2>\n          <p>").concat(skills, "</p>\n          <h2>Work Experience</h2>\n          <p>").concat(workExperience, "</p>\n          <h2>Language Proficiencies</h2>\n          <p>").concat(languageProficiencies, "</p>\n        ");
                };
                //! Read the profile photo file as a Data URL (base64 string)
                reader.readAsDataURL(profilePhoto);
            }
            else {
                //! If no profile photo, generate the resume without the photo
                resumeOutput.innerHTML = "\n        <h1>".concat(firstName, " ").concat(lastName, "</h1>\n        <p><strong>Contact Number:</strong> ").concat(contactNumber, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n        <h2>Work Experience</h2>\n        <p>").concat(workExperience, "</p>\n        <h2>Language Proficiencies</h2>\n        <p>").concat(languageProficiencies, "</p>\n      ");
            }
        }
    });
    //! Event listener for the "Reset" button
    (_b = document.getElementById("resetBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        //! Reset the form fields to their default values
        document.getElementById("resumeForm").reset();
        //! Clear the Resume Output div
        var resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.innerHTML = "";
        }
    });
});

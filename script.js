/* =========================================
   PROJECT DATA
========================================= */

const projects = [
    {
        title: "Breast Cancer Histopathology Analyzer",
        category: "ml",
        icon: "bi bi-heart-pulse-fill",
        description:
            "A deep learning based system for breast cancer detection and classification from histopathology images."
    },

    {
        title: "Mental Health Prediction",
        category: "ml",
        icon: "bi bi-emoji-smile-fill",
        description:
            "A machine learning project that analyzes student-related factors and predicts mental health conditions."
    },

    {
        title: "Secret Code Generator",
        category: "python",
        icon: "bi bi-shield-lock-fill",
        description:
            "A Python-based application that generates secret codes using programming logic."
    },

    {
        title: "Personal Portfolio",
        category: "web",
        icon: "bi bi-person-badge-fill",
        description:
            "A responsive personal portfolio developed using HTML5, CSS3, Bootstrap and JavaScript."
    },

    {
        title: "Loan Recovery Agent",
        category: "python",
        icon: "bi bi-cash-stack",
        description:
            "A project focused on managing and analyzing loan recovery related information."
    },

    {
        title: "Student Web Application",
        category: "web",
        icon: "bi bi-laptop",
        description:
            "A responsive web application demonstrating modern front-end development concepts."
    }
];


/* =========================================
   DOM ELEMENTS
========================================= */

const projectContainer =
    document.getElementById("projectContainer");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const themeToggle =
    document.getElementById("themeToggle");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

const currentYear =
    document.getElementById("currentYear");


/* =========================================
   DISPLAY CURRENT YEAR
========================================= */

currentYear.textContent = new Date().getFullYear();


/* =========================================
   RENDER PROJECTS
========================================= */

const displayProjects = (projectList) => {

    projectContainer.innerHTML = "";

    if (projectList.length === 0) {

        projectContainer.innerHTML = `
            <div class="col-12 text-center">
                <p>No projects found.</p>
            </div>
        `;

        return;
    }

    projectList.forEach((project) => {

        const projectHTML = `
            <div class="col-md-6 col-lg-4">

                <div class="project-card">

                    <i class="${project.icon} project-icon"></i>

                    <p class="project-category mt-3">
                        ${project.category}
                    </p>

                    <h4>
                        ${project.title}
                    </h4>

                    <p>
                        ${project.description}
                    </p>

                </div>

            </div>
        `;

        projectContainer.innerHTML += projectHTML;
    });
};


/* =========================================
   INITIAL PROJECT DISPLAY
========================================= */

displayProjects(projects);


/* =========================================
   PROJECT FILTER
========================================= */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => {

            btn.classList.remove("btn-primary");
            btn.classList.add("btn-outline-primary");

        });

        button.classList.remove("btn-outline-primary");
        button.classList.add("btn-primary");


        if (filter === "all") {

            displayProjects(projects);

        } else {

            const filteredProjects =
                projects.filter(
                    (project) =>
                        project.category === filter
                );

            displayProjects(filteredProjects);
        }

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");

    } else {

        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");

    }

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name");

    const email =
        document.getElementById("email");

    const subject =
        document.getElementById("subject");

    const message =
        document.getElementById("message");


    let isValid = true;


    /* Name validation */

    if (name.value.trim() === "") {

        name.classList.add("is-invalid");

        isValid = false;

    } else {

        name.classList.remove("is-invalid");
        name.classList.add("is-valid");

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {

        email.classList.add("is-invalid");

        isValid = false;

    } else {

        email.classList.remove("is-invalid");
        email.classList.add("is-valid");

    }


    /* Subject validation */

    if (subject.value.trim() === "") {

        subject.classList.add("is-invalid");

        isValid = false;

    } else {

        subject.classList.remove("is-invalid");
        subject.classList.add("is-valid");

    }


    /* Message validation */

    if (message.value.trim().length < 10) {

        message.classList.add("is-invalid");

        isValid = false;

    } else {

        message.classList.remove("is-invalid");
        message.classList.add("is-valid");

    }


    /* Final result */

    if (isValid) {

        formMessage.classList.remove("d-none");
        formMessage.classList.remove("alert-danger");
        formMessage.classList.add("alert-success");

        formMessage.innerHTML =
            `<i class="bi bi-check-circle-fill"></i>
             Message submitted successfully!`;

        contactForm.reset();

        document
            .querySelectorAll(".is-valid")
            .forEach((element) => {
                element.classList.remove("is-valid");
            });

    } else {

        formMessage.classList.remove("d-none");
        formMessage.classList.remove("alert-success");
        formMessage.classList.add("alert-danger");

        formMessage.innerHTML =
            `<i class="bi bi-exclamation-circle-fill"></i>
             Please correct the errors in the form.`;

    }

});
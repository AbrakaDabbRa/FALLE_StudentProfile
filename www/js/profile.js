const STORAGE_KEY = "studentProfileData";

const defaultProfile = {
    name: "John Benedict L. Falle",
    course: "BS Information Technology",
    year: "4th Year",
    about: "I am an IT student interested in web development and database management.",
    skills: "HTML, CSS, JavaScript, SQL, Git & GitHub"
};

let saved = localStorage.getItem(STORAGE_KEY);
let profile = saved ? JSON.parse(saved) : defaultProfile;

function showProfile() {
    document.getElementById("displayName").textContent = profile.name;
    document.getElementById("displayCourse").textContent = profile.course;
    document.getElementById("displayYear").textContent = profile.year;
    document.getElementById("displayAbout").textContent = profile.about;
    document.getElementById("displaySkills").textContent = profile.skills;
    document.getElementById("name").textContent = profile.name;
}

showProfile();

document.getElementById("editBtn").addEventListener("click", function () {
    document.getElementById("inputName").value = profile.name;
    document.getElementById("inputCourse").value = profile.course;
    document.getElementById("inputYear").value = profile.year;
    document.getElementById("inputAbout").value = profile.about;
    document.getElementById("inputSkills").value = profile.skills;

    document.getElementById("formError").classList.add("hidden");
    document.getElementById("profileCard").classList.add("hidden");
    document.getElementById("editForm").classList.remove("hidden");
});

document.getElementById("cancelBtn").addEventListener("click", function () {
    document.getElementById("editForm").classList.add("hidden");
    document.getElementById("profileCard").classList.remove("hidden");
});

document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("inputName").value.trim();
    let course = document.getElementById("inputCourse").value.trim();
    let year = document.getElementById("inputYear").value.trim();
    let about = document.getElementById("inputAbout").value.trim();
    let skills = document.getElementById("inputSkills").value.trim();

    if (name === "" || course === "" || year === "" || about === "") {
        document.getElementById("formError").textContent = "Please complete all required fields.";
        document.getElementById("formError").classList.remove("hidden");
        return;
    }

    profile = { name: name, course: course, year: year, about: about, skills: skills };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));

    showProfile();
    document.getElementById("editForm").classList.add("hidden");
    document.getElementById("profileCard").classList.remove("hidden");
});

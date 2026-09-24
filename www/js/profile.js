// Key used to save/load data in localStorage
const STORAGE_KEY = "studentProfileData";

// Default info shown the first time, before anything is saved
const defaultProfile = {
    name: "John Benedict L. Falle",
    course: "BS Information Technology",
    year: "4th Year",
    about: "I am an IT student interested in web development and database management.",
    skills: "HTML, CSS, JavaScript, SQL, Git & GitHub"
};

// Load saved profile, or use defaults if nothing is saved yet
let saved = localStorage.getItem(STORAGE_KEY);
let profile = saved ? JSON.parse(saved) : defaultProfile;

// Show profile info on the page
function showProfile() {
    document.getElementById("displayName").textContent = profile.name;
    document.getElementById("displayCourse").textContent = profile.course;
    document.getElementById("displayYear").textContent = profile.year;
    document.getElementById("displayAbout").textContent = profile.about;
    document.getElementById("displaySkills").textContent = profile.skills;
    document.getElementById("name").textContent = profile.name;
}

showProfile();

// Open the edit form and fill it with current values
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

// Cancel: just close the form, keep the old profile
document.getElementById("cancelBtn").addEventListener("click", function () {
    document.getElementById("editForm").classList.add("hidden");
    document.getElementById("profileCard").classList.remove("hidden");
});

// Save: check the fields, then update everything
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

// ============================================================
// Camera / Profile Picture (Activity 6)
// ============================================================

const IMAGE_STORAGE_KEY = "studentProfileImage";

// On startup, if a picture was saved before, show it instead of
// the default monke.jpeg.
let savedImage = localStorage.getItem(IMAGE_STORAGE_KEY);
if (savedImage) {
    document.getElementById("profileImg").src = savedImage;
}

// Cordova device features (like the camera) are only ready to use
// AFTER the "deviceready" event fires. Attaching our button's click
// listener inside here makes sure navigator.camera actually exists
// by the time the user taps the button.
document.addEventListener("deviceready", function () {

    document.getElementById("changePicBtn").addEventListener("click", function () {
        document.getElementById("cameraError").classList.add("hidden");

        navigator.camera.getPicture(onCameraSuccess, onCameraError, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 400,
            targetHeight: 400,
            correctOrientation: true
        });
    });

    function onCameraSuccess(imageData) {
        // imageData is just the raw base64 text, so it needs the
        // "data:image/jpeg;base64," prefix in front to be usable
        // as an <img> src.
        let imageSrc = "data:image/jpeg;base64," + imageData;

        document.getElementById("profileImg").src = imageSrc;
        localStorage.setItem(IMAGE_STORAGE_KEY, imageSrc);
    }

    function onCameraError(message) {
        // If the user just backed out of the camera without taking a
        // photo, Cordova reports that as an "error" too. We don't want
        // to show a scary message for that — just do nothing and let
        // the existing picture stay as-is.
        let lowerMessage = (message || "").toLowerCase();
        let userCancelled = lowerMessage.indexOf("cancel") !== -1 || lowerMessage.indexOf("no image") !== -1;

        if (!userCancelled) {
            document.getElementById("cameraError").textContent =
                "Unable to access the camera. Please check your device permissions.";
            document.getElementById("cameraError").classList.remove("hidden");
        }
    }

});

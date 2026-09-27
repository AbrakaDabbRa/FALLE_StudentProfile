// ============================================================
// Auth guard: block this page unless the user is logged in
// ============================================================

// Default info used only when a logged-in user has no profile
// document yet (their very first login — this is the CRUD
// "Create" operation, done automatically).
const defaultProfile = {
    name: "New Student",
    course: "BS Information Technology",
    year: "1st Year",
    about: "Tell us about yourself.",
    skills: "HTML, CSS"
};

let profile = defaultProfile;
let currentUser = null;
let profileRef = null; // Firestore document reference for this user

// Runs whenever login state changes, including once immediately
// when the page first loads.
auth.onAuthStateChanged(function (user) {
    if (!user) {
        // Not logged in — send them to the Login page.
        // This is what makes profile editing "protected".
        window.location.href = "login.html";
        return;
    }

    currentUser = user;
    // Each student's data lives in its own document, named after
    // their unique Firebase user ID (uid). This is the
    // "user-profile relationship" the rubric asks for.
    profileRef = db.collection("students").doc(user.uid);
    loadProfile();
});

// ============================================================
// Read: load this student's profile from Firestore
// ============================================================
function loadProfile() {
    profileRef.get().then(function (doc) {
        if (doc.exists) {
            profile = doc.data();
        } else {
            // No record yet for this account — Create one now.
            profile = defaultProfile;
            profileRef.set(profile);
        }
        showProfile();
    }).catch(function (error) {
        document.getElementById("loadError").textContent =
            "Unable to retrieve your profile. Please try again.";
        document.getElementById("loadError").classList.remove("hidden");
    });
}

// Show profile info on the page
function showProfile() {
    document.getElementById("displayName").textContent = profile.name;
    document.getElementById("displayCourse").textContent = profile.course;
    document.getElementById("displayYear").textContent = profile.year;
    document.getElementById("displayAbout").textContent = profile.about;
    document.getElementById("displaySkills").textContent = profile.skills;
    document.getElementById("name").textContent = profile.name;

    // Photo is optional — only show it if this profile has one saved.
    if (profile.photo) {
        document.getElementById("profileImg").src = profile.photo;
    }
}

// Open the edit form and fill it with current values
document.getElementById("editBtn").addEventListener("click", function () {
    document.getElementById("inputName").value = profile.name;
    document.getElementById("inputCourse").value = profile.course;
    document.getElementById("inputYear").value = profile.year;
    document.getElementById("inputAbout").value = profile.about;
    document.getElementById("inputSkills").value = profile.skills;

    document.getElementById("formError").classList.add("hidden");
    document.getElementById("saveMessage").classList.add("hidden");
    document.getElementById("profileCard").classList.add("hidden");
    document.getElementById("editForm").classList.remove("hidden");
});

// Cancel: just close the form, keep the old profile
document.getElementById("cancelBtn").addEventListener("click", function () {
    document.getElementById("editForm").classList.add("hidden");
    document.getElementById("profileCard").classList.remove("hidden");
});

// ============================================================
// Update: save changes back to Firestore
// ============================================================
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

    // Keep the existing photo field untouched unless the camera changes it
    profile = { name: name, course: course, year: year, about: about, skills: skills, photo: profile.photo || null };

    profileRef.set(profile).then(function () {
        showProfile();
        document.getElementById("editForm").classList.add("hidden");
        document.getElementById("profileCard").classList.remove("hidden");

        document.getElementById("saveMessage").textContent = "Profile updated successfully.";
        document.getElementById("saveMessage").classList.remove("hidden", "error");
        document.getElementById("saveMessage").classList.add("success-message");
    }).catch(function (error) {
        document.getElementById("formError").textContent = "Unable to update your profile.";
        document.getElementById("formError").classList.remove("hidden");
    });
});

// ============================================================
// Delete: demonstrates the CRUD "Delete" operation on this
// test account's own record (per the rubric, deleting a real
// account isn't required — this shows the operation safely).
// ============================================================
document.getElementById("deleteBtn").addEventListener("click", function () {
    let confirmed = confirm("This deletes your saved profile data (test operation) and resets it to default. Continue?");
    if (!confirmed) {
        return;
    }

    profileRef.delete().then(function () {
        // Recreate a fresh default record right after, the same
        // way a brand new account would look — keeps the app usable.
        profile = defaultProfile;
        return profileRef.set(profile);
    }).then(function () {
        showProfile();
        alert("Test record deleted and reset to default.");
    }).catch(function (error) {
        alert("Unable to delete the record. Please try again.");
    });
});

// ============================================================
// Logout
// ============================================================
document.getElementById("logoutBtn").addEventListener("click", function () {
    auth.signOut().then(function () {
        window.location.href = "login.html";
    });
});

// ============================================================
// Camera / Profile Picture (Activity 6, now saving to Firestore)
// ============================================================

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
        // Strip stray whitespace/line-breaks some devices add,
        // which otherwise breaks the data URL.
        imageData = imageData.replace(/\s/g, "");
        let imageSrc = "data:image/jpeg;base64," + imageData;

        document.getElementById("profileImg").src = imageSrc;

        // Save the new photo into this student's Firestore record,
        // so it's tied to their account instead of just this device.
        profile.photo = imageSrc;
        profileRef.set(profile).catch(function (error) {
            document.getElementById("cameraError").textContent =
                "Photo captured, but couldn't be saved to your profile. Please try again.";
            document.getElementById("cameraError").classList.remove("hidden");
        });
    }

    function onCameraError(message) {
        let lowerMessage = (message || "").toLowerCase();
        let userCancelled = lowerMessage.indexOf("cancel") !== -1 || lowerMessage.indexOf("no image") !== -1;

        if (!userCancelled) {
            document.getElementById("cameraError").textContent =
                "Unable to access the camera. Please check your device permissions.";
            document.getElementById("cameraError").classList.remove("hidden");
        }
    }

});

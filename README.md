# John Benedict L. Falle - Student Profile

A multi-page student profile app built with Cordova. It shows who I am, my background, my skills, my projects, and how to contact me. It lets me edit and save my profile info directly in the app, as well as take and update my profile picture using the device camera.

## Pages

- **Profile** - Homepage. Interactive profile picture, editable profile card (Name, Course, Year Level, About, Skills), and links to the other pages.
- **About** - More about my background, education, and goals.
- **Skills** - My technical skills with a short description of each.
- **Projects** - A few projects I've worked on.
- **Contact** - How to reach me (email, GitHub, LinkedIn).

## Navigation

Every page has the same nav bar with links to all 5 pages, using plain HTML links (no JavaScript). The current page is highlighted so you know where you are, and every page has a "Back to Profile" button.

## Profile Editing

The Profile page has an "Edit Profile" button. Clicking it hides the profile card and shows a form pre-filled with the current info. The form lets you change:

- Full Name
- Course
- Year Level
- About Me
- Skills

**Save** checks the required fields, updates the profile, and shows the new info right away. **Cancel** closes the form without changing anything.

## Camera Integration

The app uses the `cordova-plugin-camera` plugin to access the device's native camera hardware. 

**Process:**  
`Change Profile Picture` → `Open Camera` → `Capture Image` → `Update Profile Picture`

- Tapping the **Change Profile Picture** button or clicking directly on the profile photo triggers the native device camera.
- Once a photograph is captured, the app receives the image data and updates the profile picture on screen immediately.

## Device Feature Integration

Standard web apps running in a browser cannot directly access native mobile device hardware like the camera due to security sandboxing. Cordova acts as a bridge between web code and native device features, allowing JavaScript to call native camera APIs and receive the captured photo back into the app.

## Image Handling

- **Display**: Captured photos are returned as Base64 strings (`DATA_URL`). JavaScript appends the image header and updates the `src` attribute of the profile image element (`#profileImg`).
- **Persistence**: The Base64 image data is saved in `localStorage` under `studentProfileImage`. When the app opens, JavaScript checks for saved image data and displays it. If no photo has been saved yet, it displays the default profile picture (`img/monke.jpeg`).

## Error Handling & Cancellation

- **Camera Cancellation**: If you open the camera and cancel without taking a picture, the app gracefully returns to the profile screen and keeps your existing profile picture without crashing.
- **Permission Denial & Camera Errors**: If camera access is denied or the camera cannot be opened, an error message ("Unable to access the camera. Please check your device permissions.") appears on screen under `#cameraError` without breaking the application.

## JavaScript Functionality

`js/profile.js` handles everything on the Profile page:

- **Form handling** - Edit Profile button fills the form with current data; Save and Cancel are handled with event listeners.
- **Validation** - Checks that Name, Course, Year Level, and About Me are not empty before saving.
- **Camera handling** - Attaches event listeners to the profile photo and "Change Profile Picture" button, calls `navigator.camera.getPicture()`, updates the profile photo on success, and handles errors or cancellation.
- **Data & Image updates** - Writes updated profile text and camera images to the page immediately without requiring a browser refresh.

## Local Data Storage

- **Profile Data**: Saved in `localStorage` as a JSON string under `studentProfileData`.
- **Profile Picture**: Saved in `localStorage` as a Base64 string under `studentProfileImage`.

When the app starts, JavaScript checks `localStorage` for both saved text and image data. If found, it loads them; otherwise, default sample information and the default profile picture are shown.

## Responsive Design

One shared stylesheet (`css/style.css`) is used by all pages. It uses flexbox for the nav bar and media queries for smaller screens so the layout automatically adjusts for Desktop, Tablet, and Mobile displays.

## How to Run

1. Clone the repo:
   ```bash
   git clone [https://github.com/AbrakaDabbRa/FALLE_StudentProfile.git](https://github.com/AbrakaDabbRa/FALLE_StudentProfile.git)
   cd FALLE_StudentProfile

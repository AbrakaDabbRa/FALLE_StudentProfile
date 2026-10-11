# John Benedict L. Falle - Student Profile

A multi-page Cordova student profile app. It shows who I am, my background,
my skills, my projects, and how to contact me. Students can edit their
profile, take a profile picture with the device camera, and sign in through
a login page that uses Firebase Authentication.

## What Is in This Repository

```
www/
  login.html, index.html, about.html, skills.html, projects.html, contact.html
  css/style.css
  js/login.js          Login page logic (Firebase Authentication)
  js/firebase-config.js  Firebase project identifiers and setup
  js/profile.js        Edit Profile and camera logic
  img/monke.jpeg       Default profile picture
config.xml             Cordova configuration
```

## Pages

- **Login** - Email/password sign-in.
- **Profile** - Interactive profile picture, editable profile card (Name,
  Course, Year Level, About, Skills), and links to the other pages.
- **About** - Background, education, interests, goals.
- **Skills** - Technical skills with a short description of each.
- **Projects** - Projects I've worked on.
- **Contact** - How to reach me.

## Authentication

Login -> Authentication -> Student Profile

`js/login.js` checks that the email and password are filled in, then calls
Firebase Authentication (`signInWithEmailAndPassword`). Valid credentials go
to the Profile page. Invalid ones show "Invalid student ID or password."
The Firebase project it connects to is configured in `js/firebase-config.js`
and contains my demo account.

## Profile Editing

The Edit Profile form changes Full Name, Course, Year Level, About Me, and
Skills. **Save** checks that the first four are not empty, then updates the
profile. **Cancel** closes the form without changing anything. The profile
text is stored with `localStorage` on the device.

## Camera Integration

Uses `cordova-plugin-camera`. Process:

Change Profile Picture -> Open Camera -> Capture Image -> Update Profile Picture

The photo comes back as Base64 data, is shown in the profile image, and is
saved in `localStorage` so it stays after restarting the app. Cancelling the
camera keeps the current picture. If the camera cannot be opened, the app
shows "Unable to access the camera. Please check your device permissions."

## Database

The project has a Firebase (Firestore) project connected through
`js/firebase-config.js`. The planned design was one document per student in a
`students` collection, named after their Firebase user ID, with the fields
name, course, year, about, skills, and photo.

## Responsive Design

One shared stylesheet (`css/style.css`) uses flexbox and media queries so the
layout adjusts for Desktop, Tablet, and Mobile.

## Security

- No database passwords, secret keys, or user passwords are in this repository.
- Passwords are handled by Firebase Authentication, not by my code.
- `firebase-config.js` holds only public Firebase project identifiers.

## How to Run

1. `git clone https://github.com/AbrakaDabbRa/FALLE_StudentProfile.git`
2. `cd FALLE_StudentProfile`
3. `npm install`
4. `cordova platform add android`
5. `cordova plugin add cordova-plugin-camera`
6. `cordova prepare android`
7. `cordova run android` (use an Android emulator; the camera does not work
   in `cordova run browser`)

## Known Issues

- The committed `js/profile.js` is the earlier version that stores the
  profile in `localStorage`, so profile data is not read from or saved to
  Firestore.
- `contact.html` has leftover merge-conflict markers around the email line.

## Screenshots

Not included.

# John Benedict L. Falle - Student Profile
 
A multi-page student profile app built with Cordova. It started as a
static profile site, and has grown into a database-driven app: students
now log in, and their profile info (name, course, year, about, skills,
photo) is stored in and loaded from a real database instead of being
hard-coded or only saved on one device.
 
## Pages
 
- **Login** - Where a student signs in with their email and password
  before anything else is accessible.
- **Profile** - Homepage with the editable profile card, camera-powered
  profile picture, and links to the other pages. Only reachable while
  logged in.
- **About** - My background, education, and goals.
- **Skills** - My technical skills with a short description of each.
- **Projects** - A few projects I've worked on.
- **Contact** - How to reach me.
## Authentication
 
Login → Authentication → Student Profile
 
The Login page asks for an email and password. On submit, the app checks
these credentials with Firebase Authentication. If they're valid, the
student is taken to their Profile page. If not, it shows "Invalid student
ID or password." instead of letting them in. If someone who isn't logged
in tries to open the Profile page directly, they're automatically sent
back to Login.
 
## Student Profile Management
 
Once logged in, a student can:
 
- **View** their profile (name, course, year, about, skills, photo)
- **Edit** any of those fields through the Edit Profile form
- **Save** changes, which updates the database and shows "Profile updated
  successfully"
- **Change their profile picture** using the device camera
- **Log out**, which ends their session and returns them to Login
## Database Integration
 
Student data is stored in **Firebase Firestore** (a NoSQL cloud
database). Each student has one record, containing:
 
- Student ID (their Firebase account ID)
- Name
- Course
- Year Level
- About Me
- Skills
- Profile Picture (stored as image data in their record)
## API/Backend
 
Cordova Application → Firebase (Authentication + Firestore) → Database
 
Instead of a custom backend server, this app talks directly to Firebase's
own services using the Firebase SDK. Firebase Authentication handles
login/logout, and Firestore acts as the database, both reached securely
over HTTPS from the app.
 
## CRUD Operations
 
- **Create** - The first time a student logs in, if they don't have a
  profile record yet, one is automatically created with default values.
- **Read** - On login, the student's record is fetched from Firestore and
  displayed on the Profile page.
- **Update** - Saving the Edit Profile form writes the changes back to
  that student's Firestore record.
- **Delete** - A "Delete My Record (Test)" button on the Profile page
  deletes the Firestore record (then resets it to defaults), demonstrating
  the Delete operation without deleting anyone's real account.
## Camera Integration
 
The Activity 6 camera feature still works the same way (tap "Change
Profile Picture" to open the device camera), but the captured photo is
now saved into the student's Firestore record instead of only being
saved on the device, so it's tied to their account.
 
## Data Persistence
 
Profile changes are saved straight to Firestore, not just to the device.
This means: closing the app, restarting it, logging out, and logging back
in (even conceptually on a different device) all show the same saved
data, since it's coming from the database rather than local memory.
 
## Responsive Design
 
One shared stylesheet (`css/style.css`) uses flexbox and a media query so
the layout works on Desktop, Tablet, and Mobile.
 
## Security
 
- Passwords are never stored or handled directly by this app — Firebase
  Authentication manages them securely, and this app never sees or stores
  the raw password.
- No database passwords or secret keys are in this repository. The
  Firebase config values (like `apiKey`) in `js/firebase-config.js` are
  public identifiers, not secrets — Firebase's real access control comes
  from its Authentication and Firestore security rules, not from hiding
  these values.
- Each student can only read/write their own profile record, tied to
  their unique login.
## How to Run
 
1. `git clone https://github.com/AbrakaDabbRa/FALLE_StudentProfile.git`
2. `cd FALLE_StudentProfile`
3. `npm install`
4. `cordova platform add android`
5. `cordova plugin add cordova-plugin-camera`
6. `cordova prepare android`
7. Run on an Android emulator/device: `cordova run android`
   (camera and full functionality require Android, not `cordova run browser`)
No separate backend server or database setup is needed — Firebase is
already configured and hosted by Google.
 
## Test Accounts
 
A test account is available for demonstration purposes only:
 
- Email: [ADD YOUR TEST ACCOUNT EMAIL HERE]
- Password: [ADD YOUR TEST ACCOUNT PASSWORD HERE — share this only through
  your submission platform, not in a public commit message]
## Screenshots
 
### Login Page

 
### Successful Login

 
### Student Profile

 
### Edit Profile

 
### Updated Profile

 
### Profile Picture / Camera

 
### Logout
![Logged out, back on Login page](screenshots/logout.png)

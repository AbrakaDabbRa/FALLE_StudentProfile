# John Benedict L. Falle - Student Profile
 
A multi-page student profile app built with Cordova. It shows who I am, my
background, my skills, my projects, and how to contact me. It also lets me
edit and save my profile info directly in the app.
 
## Pages
 
- **Profile** - Homepage. Photo, editable profile card (Name, Course, Year
  Level, About, Skills), and links to the other pages.
- **About** - More about my background, education, and goals.
- **Skills** - My technical skills with a short description of each.
- **Projects** - A few projects I've worked on.
- **Contact** - How to reach me (email, GitHub, LinkedIn).
## Navigation
 
Every page has the same nav bar with links to all 5 pages, using plain
HTML links (no JavaScript). The current page is highlighted so you know
where you are, and every page has a "Back to Profile" button.
 
## Profile Editing
 
The Profile page has an "Edit Profile" button. Clicking it hides the
profile card and shows a form pre-filled with the current info. The form
lets you change:
 
- Full Name
- Course
- Year Level
- About Me
- Skills
**Save** checks the required fields, updates the profile, and shows the
new info right away. **Cancel** closes the form without changing anything.
 
## JavaScript Functionality
 
`js/profile.js` handles everything on the Profile page:
 
- **Form handling** - Edit Profile button fills the form with the current
  data and shows it; Save and Cancel are both handled with JavaScript
  event listeners instead of reloading the page.
- **Validation** - Before saving, JavaScript checks that Name, Course,
  Year Level, and About Me are not empty. If any are missing, it shows an
  error message and stops the save.
- **Profile updates** - On Save, the new values are written to the page
  immediately so the change is visible without a refresh.
- **Save** - Builds a profile object from the form fields and stores it.
- **Cancel** - Simply hides the form again; nothing is saved or changed.
## Local Data Storage
 
The profile data (Name, Course, Year Level, About Me, Skills) is saved in
the browser's `localStorage` as a JSON string. When the app starts,
JavaScript checks `localStorage` for saved data:
 
- If data exists, it's loaded and displayed.
- If not (first time running the app), default sample info is shown
  instead.
This means the profile stays the same even after closing and reopening
the app.
 
## Responsive Design
 
One shared stylesheet (`css/style.css`) is used by all pages. It uses
flexbox for the nav bar and a media query for small screens, so the layout
adjusts for Desktop, Tablet, and Mobile without breaking.

## How to Run
1. Clone the repo:
   ```
   git clone https://github.com/AbrakaDabbRa/FALLE_StudentProfile.git
   cd FALLE_StudentProfile
   ```
2. Add the Android platform (if needed):
   ```
   cordova platform add android
   ```
3. Run it:
   ```
   cordova run android
   ```
   Or open `platforms/android` in Android Studio and click Run ▶.
   
## Screenshots
 
### Student Profile
![Student Profile page]<img width="517" height="822" alt="image" src="https://github.com/user-attachments/assets/887bb934-c53b-468c-8ba7-4df099ce770b" />

 
### Edit Profile
![Edit Profile form]<img width="520" height="827" alt="image" src="https://github.com/user-attachments/assets/dabb3aed-ddf0-4a5b-9252-cd3ef27995a1" />

 
### Updated Profile
![Updated profile after saving]<img width="523" height="827" alt="image" src="https://github.com/user-attachments/assets/760584a1-5225-4cda-b85e-b76a8c500c84" />

 
### Contact
![Contact page](screenshots/contact.png)


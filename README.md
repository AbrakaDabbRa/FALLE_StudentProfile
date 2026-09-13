John Benedict L. Falle - Student Profile(multipage

Multi-page student profile app built with Cordova. Which shows who I am, my background, my skills, my projects, and how to contact me.

Pages
Profile - Homepage. Photo, name, short intro, and links to the other pages.
About - More about my background, education, and goals.
Skills - My technical skills with a short description of each.
Projects - A few projects I've worked on.
Contact - How to reach me (email, GitHub, LinkedIn).
Navigation

Every page has the same nav bar with links to all 5 pages, using plain HTML links (no JavaScript as instructed). The current page is highlighted so you know where you are, and every page has a "Back to Profile" button.

Responsive Design

One shared stylesheet (css/style.css) is used by all pages. It uses flexbox for the nav bar and a media query for small screens, so the layout adjusts for Desktop, Tablet, and Mobile without breaking.

UI/UX

All pages use the same colors, fonts, spacing, and nav bar for consistency. Headings are bigger than body text to show what's most important. The active page is marked with underline + bold, not just color, for accessibility.

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

**Profile**

![Profile]<img width="1225" height="1020" alt="image" src="https://github.com/user-attachments/assets/f119232d-b780-44dd-a1ff-66cd6a0a92da" />

**About**

![About]<img width="1223" height="912" alt="image" src="https://github.com/user-attachments/assets/aa8ad0b8-3773-451f-80f3-68e2327ce258" />

**Skills**

![Skills]<img width="1225" height="967" alt="image" src="https://github.com/user-attachments/assets/621c2465-def5-4521-915f-1d39564a36ae" />

**Projects**

![Project]<img width="1330" height="900" alt="Screenshot 2026-09-02 194801" src="https://github.com/user-attachments/assets/b396af72-384e-493f-b3a8-8313a35e7603" />

**Contact**

![Contact]<img width="1323" height="916" alt="Screenshot 2026-09-02 194823" src="https://github.com/user-attachments/assets/215632e2-6948-49f6-befd-833acadc63ce" />



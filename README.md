John Benedict L. Falle - Student Profile(multipage)

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

![Profile]<img width="1225" height="847" alt="image" src="https://github.com/user-attachments/assets/9aa45990-5738-4af8-af31-d64b04a758a5" />


**About**

![About]<img width="1221" height="850" alt="image" src="https://github.com/user-attachments/assets/d03dc045-e483-4968-b3b5-d678ef875eef" />

**Skills**

![Skills]<img width="1220" height="910" alt="image" src="https://github.com/user-attachments/assets/42101194-6588-4611-8f2b-9e1e3d6fffc4" />


**Projects**

![Project]<img width="1223" height="860" alt="image" src="https://github.com/user-attachments/assets/b84e7171-dbb4-4b71-bc4f-25f72ed9bc61" />

**Contact**

![Contact]<img width="1227" height="835" alt="image" src="https://github.com/user-attachments/assets/bfe13f04-8e2b-4abf-8d78-e5e8752a1e51" />



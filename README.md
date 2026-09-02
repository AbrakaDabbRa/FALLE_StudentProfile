# Student Profile — Cordova App

## Project Description
A mobile Student Profile app built with Apache Cordova. It shows a profile photo, bio, education, interests, and skills as an installable Android app.

## Application Structure
- **Header** — Profile photo, name, and tagline.
- **Navigation Menu** — Links to the About and Skills sections.
- **About Section** — Bio, Education, and Interests.
- **Skills Section** — Grid of key skills in a bordered box.
- **Footer** — Bottom of the page.

## Responsive Design
Built responsive using **CSS media queries** and a viewport meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- **Tablet (≤768px)** — Photo and text shrink slightly.
- **Mobile (≤480px)** — Nav links stack vertically, skills grid becomes one column, text and photo shrink further.

## UI/UX Principles Applied
- **Responsive Layout** — Media queries adjust the layout at 768px and 480px.
- **Mobile-Friendly Spacing** — Padding in content boxes stays readable at every size.
- **Appropriate Typography** — Verdana font, larger headings for readability.
- **Clear Visual Hierarchy** — Header → nav → content, with bordered boxes separating sections.
- **Usable Controls** — Nav links have large tap areas and a hover color change.
- **Basic Accessibility** — Alt text on the photo, semantic HTML tags, readable contrast.
- **Consistent Design** — Same box style and color palette used throughout.

## Navigation
The About and Skills links are anchor links (`#about`, `#skills`) that scroll to sections on the same page. **No JavaScript is used** — just HTML and CSS.

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

**Desktop**

![Desktop view](<img width="1330" height="970" alt="Screenshot 2026-09-02 194656" src="https://github.com/user-attachments/assets/0ff9f42d-0767-4d21-9fc1-675a55071ec2" />
)

**Tablet**

![Tablet view](<img width="1330" height="900" alt="Screenshot 2026-09-02 194801" src="https://github.com/user-attachments/assets/2501c98a-1649-4d12-88b3-30d32927d1be" />
)

**Mobile**

![Mobile view](<img width="1323" height="916" alt="Screenshot 2026-09-02 194823" src="https://github.com/user-attachments/assets/2a758f63-eeb1-4490-98f2-7620abb5ef94" />
)



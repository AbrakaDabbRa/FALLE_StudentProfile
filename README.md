# Student Profile — Cordova App

## Project Description
A mobile Student Profile app built with Apache Cordova. It shows my profile photo, bio, education, interests, and skills as an Android app.

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

![Desktop view]<img width="1330" height="970" alt="Screenshot 2026-09-02 194656" src="https://github.com/user-attachments/assets/abac9317-706c-4f03-b5bb-f16c4773e845" />

**Tablet**

![Tablet view]<img width="1330" height="900" alt="Screenshot 2026-09-02 194801" src="https://github.com/user-attachments/assets/b396af72-384e-493f-b3a8-8313a35e7603" />


**Mobile**

![Mobile view]<img width="1323" height="916" alt="Screenshot 2026-09-02 194823" src="https://github.com/user-attachments/assets/215632e2-6948-49f6-befd-833acadc63ce" />



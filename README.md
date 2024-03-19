# Next.js App Router - Bug Hunt 🐞

This is a simple notes application to demonstrate the app router and server components usage. It's based on an existing demo that we carefully chose (found online), thinned down, and intentionally (or not) broke.

Clone the repo and fix the bugs to win the prize of knowledge!

### Login/Logout Bug 🪲
In order to add a note, the user needs to login to the app by clicking the "Login to add" button. After the user clicks the button, the UI should change to represent the new session that was created, but it doesn't. Only after the user refreshes the page the UI displays correctly. The same happens when the user clicks the logout button.

Make the login and logout buttons work correctly.

### Summary Page Bug 🐛
The project has a summary page which shows the amount of notes that are saved in the database. In order to get the data, there's a fetch request to the notes-service. This request is configured to revalidate the count every minute. Between the validations, the data is cached and should not change. 

But, there's a bug - in order to reproduce it, add a new note, checkout the summary page by going to the url `http://localhost:3000/summary` and see that the count is not cached as expected.

Find the cause for the bug, and explain the reason for it!

### Running Locally

1. `npm install`
2. `npm run serve-notes`
3. `npm run dev`

Go to `localhost:3000`.

### Begone, bugs! You have no power here! 🧙

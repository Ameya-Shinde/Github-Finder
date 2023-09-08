# GitHub User Info Search App

This is a simple web application that allows users to search for GitHub user information using their usernames. The app displays details such as user photo, name, bio, repository count, followers, following, location, and company (if available). Additionally, the app provides options to switch between light and dark themes.

## Usage

To use this application, follow these steps:

1. Enter the GitHub username in the provided search input field.
2. Click the "Search" button or press Enter.
3. The app will retrieve and display the user's information.
4. If the user is not found, an appropriate message will be displayed.

## Features

- **Search Form**: Allows users to input a GitHub username for searching.
- **User Card**: Displays detailed information about the searched user.
- **Loader**: Indicates that the app is processing the request.
- **Light/Dark Theme**: Provides an option to switch between light and dark themes.
- **Error Handling**: Alerts the user if the input field is empty or if the user is not found.

## Hosted Link
https://ameya-shinde.github.io/Github-Finder/

## JavaScript Functionality Used

- **Fetching Data**: Utilizes the `fetch` API to retrieve user information from the GitHub API. The `await` keyword is used to ensure that the data is fetched before proceeding with the next steps.

- **Asynchronous Programming**: Employs `async/await` to handle asynchronous operations when fetching data. This allows the app to continue running while waiting for the data to be retrieved from the server.

- **DOM Manipulation**: Uses JavaScript to dynamically update the HTML content with the fetched user data. This is done by selecting elements using `querySelector` and updating their `innerHTML` properties.

- **Event Handling**: Listens for events such as form submission and button clicks to trigger the relevant actions. For example, the search form has an event listener attached to prevent the default form submission behavior and instead, call the `getuser` function.

- **Error Handling**: Implements error handling to provide feedback to the user. For instance, if the search input is empty, an alert is displayed. If the user is not found, an appropriate message is shown.

- **Dynamic Theme Change**: Enables users to switch between light and dark themes. This is achieved by changing the `color` and `backgroundColor` properties of specific elements based on button clicks.

- **ES6 Features**: The code makes use of modern JavaScript features such as arrow functions, template literals, and destructuring assignments for cleaner and more concise code.

- **Conditional Rendering**: Checks if certain data fields are available before displaying them in the user card. For example, if the user doesn't have a bio, it displays a default '-'.

- **Reusability**: The code is structured in a way that promotes reusability. Functions like `getuser` and `showuser` can be used for different users without modification.

- **API Integration**: Interacts with the GitHub API to retrieve user information. The fetched data is in JSON format and is processed accordingly.

- **Resetting Input**: After a successful search, the input field is reset to an empty state for convenience.

- **Loading Indicator**: Provides visual feedback to the user while data is being fetched. The loader element displays a spinning icon during this process.

- **Clean Code Practices**: Follows best practices for code readability, such as meaningful variable names, consistent indentation, and comments for important sections.

- **Responsive Design**: While not explicitly mentioned, the JavaScript code complements a responsive design, ensuring the application functions well on different devices and screen sizes.

## Dependencies

This application relies on the following:

- **GitHub API**: The application uses the GitHub API to retrieve user information. The API endpoint used is `https://api.github.com/users/{username}`, where `{username}` is the GitHub username entered by the user.

- **Font Awesome CDN**: Used for displaying icons in the user interface. The CDN link is included in the HTML file.


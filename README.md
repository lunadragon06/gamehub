# JS Frameworks Course Assignment

## Brief

Create either a new React or Next.js app in this repo.

For the login functionality, use either a Wordpress installation with the <a href="https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/" target="_blank">JWT plugin from Module 3</a> installed, or a Strapi installation. Do not add either of these to your repo. Your API should remain a separate project. The markers will use their own installations when marking.

You can use either a REST or GraphQL API for the API calls.

---

## Level 1

Your app should have the following paths:

-   "/"
-   "/detail/:param"
-   "/contact"
-   "/login"
-   "/admin"

The admin path won't appear in your navigation.

Use reusable components where appropriate and pay attention to how the components are arranged.

### Home

Find an API that returns at least:

-   an array of items
-   a single item retrieved by a parameter (id, name, slug, etc)

If you are using Next you can also hard-code json and return it from API routes created in `pages/api/*`.

You can use your own Wordpress or Strapi or any other API that you have created for these calls but it must be publically hosted - it must not be running on your localhost.

Display at least 2 properties from each result.

Each result should link to the detail page, passing a parameter in the URL.

### Detail

Retrieve the parameter from the URL and use it in an API call to fetch one item.

Display at least 3 properties from the item.

### Contact

Create a form with the following inputs and validation:

-   First name - required, minimum 3 characters
-   Last name - required, minimum 4 characters
-   Email - required, must be in a valid email format
-   Subject - required, this must be a select box with at least 2 options
-   Message - required, minimum 10 characters.

### Login

Create a form with username/email and password fields. The inputs should have the necessary validation for a login form (not a registration form).

The form should make a login request to either a Wordpress API with the JWT plugin installed or a Strapi API. If the login is successful redirect the user to the admin route.

If the login is unsuccessful display a message above the form.

### Admin

This page will simply display an "Admin" heading.

---

## Level 2

Add a favourite button/icon component to each result on your home page. Clicking this button will toggle the result in/out of a favourites array.

Add a "/favourites" path to your routes. This page will display all the items currently in the favourites array.

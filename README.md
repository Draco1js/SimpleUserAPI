# Welcome to this simple API example!

## Simple Explainations for all of the routes.

<warn> This does not contain any good UI or good security features as this only concentrates on the main API creation/usage etc.</warn>


### Website Links (Semi User-Friendly)
- `GET "/"` this route shows a simple user page that you can use to create new users.
- `GET "/users"` this route lists all of the users currently in memory (we're not using a database for this example project).
- `GET "users/:id` this returns the user object of the user with a specified ID.
### API Links (For API usage)
- `POST "/users"` this route is used to create new users, you need proper data to successfully create a new user.
- `POST "/users/new"` this is just a placeholder/mock for a new user page.
- `PUT "users/:id` this edits/updates the user with a specified ID.
- `DELETE "users/:id` this deletes the user with a specified ID.

#### This project was created with yarn, to use npm, delete `yarn.lock` and run `npm install` to install the dependecies correctly!

###### © DracoDev 2021
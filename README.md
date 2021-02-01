# Getting Started

This is a Hardvare repository written in React and setup in a monorepo fashion to utilize modularity of different features inside of the main App, as well as allowing to run any server or create packages for such tools like eslint.

Bear in mind, that the differences in tools chosen for each of the feature (`hardvare-app` and `hardvare-shopping-page`) is by design to
showcase flexibility of using different technologies if necessary and supporting legacy versions. Biggest example is usage of material UI within `hardvare-shopping-page`, but using simple css file loading inside `hardvare-app`.

My main focus was on the Shopping Cart, the other parts were made just to support the interaction with this element, so they might look very crude.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

This will setup all the elements in the dev mode enabling for the hot reload etc.

#### Server

Express server running on [http://localhost:8080](http://localhost:8080)

#### Hardvare App

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Hardware Shopping Page

This is run in watch mode to support edits

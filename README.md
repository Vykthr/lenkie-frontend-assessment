# LENKIE - DEEZER Frontend Assessment
This is the Frontend project for Lenkie Code Frontend Assessment built with [React](https://github.com/facebook/create-react-app).

## Available scripts to run locally
Follow the processes to run this project locally:
1. Clone Directory from Github
2. Run `yarn` or `npm install` to install all dependencies
3. Run `yarn start` or `npm start` to run project locally for development
4. Run `yarn build` or `npm build` to generate build files (deployment files) that can be deployed to a web server.

### Routing
This project uses [react-router-dom](https://www.npmjs.com/package/react-router-dom) (BrowserRouter)

### UI Library
This project uses [Material UI](https://mui.com/) Library

### API Integration
This project integrates with a [Deezer](https://developers.deezer.com/api)

### API Proxy
I was able to quickly build a custom HTTPS Proxy using NodeJS to forward request on behalf of the frontend to avoid CORS Errors.
I deployed the application on [Netlify](https://https-proxy.netlify.app/.netlify/functions/server/status)


## Quick Information
1. The `.env` folder contains the base url for all API Calls.
2. The Material UI theme configurations can be found in `/src/styles/theme.js`.
3. The application support `light` and `dark` mode. Color Scheme configuration can be found in `/src/styles/useColorScheme.js`. 
4. The `/src/util/index.js` contains generic utility functions used across multiple components/pages.


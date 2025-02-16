# PantryPal
The following is a personal pantry cloud tracker template hosted with GitHub Pages, built for DeltaHacksX! 

## Technology Stack
HTML | CSS | [React.js](https://react.dev/) | [Chakra-UI](https://chakra-ui.com/) | [Framer Motion](https://www.framer.com/motion/) | [React-Slick](https://react-slick.neostack.com/)

## Sharing
Project is open source. Feel free to make your own version.

## Installation
#### Prerequisites
You should have [Node.js](https://nodejs.org/en) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

#### Setup And Deployment 

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. In each file change the variables at the top to your own information

4. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).

5.  Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```
6. Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

   Or for deployment at \<username>.github.io, refer [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) and [pages.js](./pages.js)

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```




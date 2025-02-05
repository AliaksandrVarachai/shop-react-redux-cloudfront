This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:  
You can use NPM instead of YARN (Up to you)  

### `yarn start` OR `npm run start`; If npm is v7+: `npm run start --legacy-peer-deps`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` OR `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` OR `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` OR `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Crosscheck Information

**Task 2.1 Manual deployment** is implemented. 

Details: 
  - Created an S3 bucket. Checked with uploaded minor changes.
  - Created a CloudFront distribution. Checked with uploaded minor changes.

**Task 2.2 Automated deployment** is implemented.

Details:
  - Configured `serverless` and `serverless-finch` plugin, added proper npm scripts.
  - Destroyed the AWS infrastructure from the Task 2.1.
  - Configured `serverless-single-page-app-plugin`, added necessary NPM scripts:
    - to upload to the S3 bucket
    - to invalidate CloudFront cache
  - Checked that everything works correctly and all changes appear on the Web.

**Task 2.3 Save the work** is implemented.

Details:
  - Committed to `task-2` branch and created a pull request.
  - Links for crosscheck:
    - [Automatically created S3 bucket](http://varachai-shop-fe.s3-website-eu-west-1.amazonaws.com) - displays `403 Forbidden`
    - [Website with minor changes](https://d1fxaqepkkpfnn.cloudfront.net) - shows the updated website.


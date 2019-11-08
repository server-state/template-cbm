# template-cbm
A default template for client-base modules (cbm)
with an integrated test environment with dynamically resizing data set selection.

## Quick Start
- Use this template in your new repository
- Clone your new repository to your local working space.
- Call `yarn` to install all required node packages
- Run the test environment with `yarn start`
  and open your preferred browser with the address:
  (http://localhost:3001)
- Open the file `./src/my-cbm.js` with your preferred file editor and begin developing!

## File Structure
The `src` directory contains all required files for a working client-base module.
The `src/index.js` references the necessary React component and the module info.
You can change it any time and review your changes in the given test environment.
You can use all Material-UI Components out-of-the-box and the current server-state client-base
`test-environment/theme.js` which resides in the `test-environment` folder.

If you want to change the sample data, simply edit the `src/sample-data.js`.
Add, change or remove any objects from the list, the test environment dynamically changes the data selections.
Please sustain the current format of an array containing objects with the keys `name` and `data`.

All files regarding to it rest in the `test-environment` folder.
Please do not make any changes to it, only if you know, what you do.

If you finished with editing please take a look in the `tests` folder.
Here you can write and run unit tests on your module with Jest and the command `yarn test`.
If you finished and ready to publish, enter `yarn prepublish` and check that all tests finished successfully
and that webpack create the transpiled file `ìndex.js` in the root directory.
Edit the entries in the `package.json` to match your current definitions.

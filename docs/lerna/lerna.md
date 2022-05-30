Lerna is a npm package manager for mono-repos

Documentation[https://github.com/lerna/lerna]

Advantages:
- Runs updates across all npm packages by hoisting dependencies to the root level, so easy to share code between packages. 
- It also facilitates an easy way to
        - update
        - build
        - test

all the packages in the repo with a single command
- Reduce time and space requirements for copies of several packages in dev and build environemnts

1. Install lerna in root `npm install lerna --save-dev`
2. Initialise the package `npx lerna init`
You should have an empty packages folder in root as well as a `lerna.json` and `package.json` file
3. In the `package.json` as well as the `lerna.json` add a version `  "version": "1.0.0",`
4. Add a `.gitignore` file to ignore node modules



Package methods:
In root now you can run `npm run lerna` - updates packages
`npx lerna bootstrap` - updates all packages
`lerna create` - makes packages in all the repos requiring the package
`lerna add --scope` - makes packages to a specific scope and requirement
`lerna clean -y` removes duplicate node modules

Further reading
[https://datacadamia.com/web/build/lerna]
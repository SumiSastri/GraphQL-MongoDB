Lerna is a npm package manager for mono-repos as well as side-projects with multiple folders that require their own node-modules/ scripts and `package.json` files to run

Documentation[https://github.com/lerna/lerna]

Advantages of Lerna and monorepos:
- Manages multiple packages in multiple folders
- Hoists project dependencies to root level 
        - removes duplicates and package version mismatches in different parts of a mono-repo or your folders in a side-project
        - runs updates simultaneously across the monorepo/ across all folders in a side-project
        -facilitates single script across packages to or limits scope to only packages requiring thes actions
                        - update
                        - build
                        - test
        - reduces time and space requirements for copies of several packages in dev and build environments
        - shortens the adoption curve of library dependencies
        - Master is published version - all code is one place - dependencies can be fixed quickly

Disadvantages of Lerna:
        - not widely used
        - uptake slow
        - could face challenges on long-term support
        - not easy to debug dependency tree
        - the hoist command is flakey

General challenges with library dependencies and maintenance:

- Software is not static - library version changes can result in breaking changes/ issues of backwards compatibility
- Lack of clarity on which version of software update is stable therefore unable to accurately pin dependency version to the repo
- Lack of clarity comes as many versions are number versions/ not semantic versioning and therefore it is difficult to know if the version is a bug-fix/behaviour change or an API change
- Publishers do not know what will break and for whom the pain is caused and where

Solutions
- Learn to deal with the disadvantages and manage the pain/ tech-debt
- Audit and control dependencies - ask the question do you really need a library dependency to do the job
- Share just enough code across the repo (too much sharing can cause dependency hell when you are debugging)

# How to install lerna and use it in your projects/ in a mono-repo
mkdir eg: <my-folder-with-lerna>

1. Install lerna in root `npm install lerna --save-dev`
2. Initialise the package `npx lerna init`
You should have an empty packages folder in root as well as a `lerna.json` and `package.json` file
3. In the `package.json` as well as the `lerna.json` add a version `  "version": "1.0.0",`
4. Add a `.gitignore` file to ignore node modules
5. Move all (existing) folders into packages folder (eg. <client> <server> for a monorepo or <project1> <project2> for side projects that have different `package.json` files and node-modules)
6. In root `npx lerna bootstrap` - updates all packages

Lerna commands [https://lerna.js.org/docs/api-reference/commands]

7. `npx lerna bootstrap --hoist` - hoists dependencies from all packages in the root node module and removes duplicates mismatches in packages across the <my-folder-with-lerna> folder - however to be used with caution, this is buggy according to the docs
8. `npx lerna clean -y` removes duplicate node modules and any mismatches in the existing packages - re-run `npx lerna bootstrap` once the repo cleaned to re-install node modules in packages requiring them

`npm run lerna` - updates packages
`lerna create` - makes packages in all the repos requiring the package
`lerna add --scope` - makes packages to a specific scope and requirement

Further reading
[https://datacadamia.com/web/build/lerna]

Debugging: 

Dipesh Malvia [https://www.youtube.com/watch?v=j0FiMekdeOs]

Ben Awad[https://www.youtube.com/watch?v=p6qoJ4apCjA]

Conferences talks on You Tube:

Netflix: [https://www.youtube.com/watch?v=VNqmHJtItCs]
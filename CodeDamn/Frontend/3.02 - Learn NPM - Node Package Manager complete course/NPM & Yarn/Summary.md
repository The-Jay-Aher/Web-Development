# NPM and Yarn

Install a module -

1. `npm install lodash` - Same as 2.
2. `npm i lodash` - Same as 1.
3. `npm i lodash@4.2.0` - Installs a specific version of lodash

Removing a module -

1. `npm remove lodash` - removes the module present
2. `npm uninstall lodash` - uninstall is same as remove but if you type anything then it will show same as uninstalled.

Semantic versioning in package.json -

The scattered symbol (^) means npm will install the latest version of the module. The scattered symbol by default means to npm that, upgrade the version as much as possible. For e.g - `4.x.x` here even if we install version `4.0.0` it will keep the major number same and rest of the two numbers will get upgraded.

If we change the scattered symbol to carat symbol(~), then it will keep the major and minor numbers same, and the last number will get upgraded.
E.g - `4.0.x` only the x will get upgraded.

If you remove the symbols then npm will install the exact package number only.

`npm install webpack --save-dev` this will add the the package in the devDependencies in package.json instead of thee dependencies. It is used to differentiate between module's required for production and those which are not required.

If we set the `NODE_ENV = "production"` then node will believe that we are working in production environment, and it will not install the modules present in the `devDependencies`, it will only install the modules required in `dependencies`.

The `devDependencies` are just required for developing the product not for running the product.

You will never need `peerDependencies` if you are creating your own app. You will most likely need it for creating a _npm package_.

NPX is the extended version of npm. NPX would allow us to run npm tools without actually installing them globally.

Npx will allow you to run local binaries, and to run global binaries from NPM without installing them.

When you do npm run and the script, what npm would do is run the script with the all your packages inside the path, another use of npx is to run the packages using it to run local packages.

If the package is not installed, and we try to use the command with npx it will take a little bit of time, first it will install the package then show us the result. It then uses tbe package then shows us the result and then deletes the package. So you won't see the npx package around.

### Changing Location of global packages

`npm config ls -l` -> Let's you see all the npm configurations.
`npm config get prefix` -> The location where the global packages will be stored.
`npm config set prefix 'path'` -> Now if you install something with -g flag it will get installed in the path folder not the default folder.

Clean npm cache -> `npm clean cache --force`

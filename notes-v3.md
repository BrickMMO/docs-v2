# Installation
Install by running `yarn` or `yarn install`.

If this is the first time running `yarn`, make sure *corepack* is enabled by running `corepack enable` first.


Alternatively use `yarn install --network-timeout 1000000` if encountering `There appears to be trouble with your network connection. Retrying...`


# Why `Yarn`?
The original mono-repo makes use of their *workspaces* feature and some of their dependencies makes use of `X.X.X || Y.Y.Y` versioning scheme which seem to cause dependency resolution errors with `npm`.


In short, there's less headaches working with `yarn` because that's what the MUI team chose to use with their mono-repo.


# Building
Build using `yarn build`. 

This sets the `NODE_ENV` variable to `production` as well as the `NODE_OPTIONS` variable to `--max_old_space_size=4096` before calling `next build` with profiling enabled.


Alternatively, do a clean build with `yarn build:clean`.

This will call `rm -rf` on the `.next` directory before calling `yarn build`.


# Static Page Exporting
Export using `yarn export`. 

This runs a recursive removal on `./docs` and calls `next export` with the output directory set to `docs`. It also runs the `./scripts/buildServiceWorker.js` script as well as the `./scripts/createNoJekyllFile.js`.


# Internal Packages
This project uses Yarn's *workspaces* feature to automatically link local packages declared in the `/packages/*` directory at install-time. 

This also lets us make changes to the internal packages without relying on their pre-built public packages.


# Additional Notes
This project is based on `material-ui-5.14.16`.

`@mui/x-data-grid-premium` as well as `@mui/x-date-pickers-pro` both seem to require a license key since they're part of the premium MUI packages. This may not affect useability but it might cause possible issues down the line. Warnings can be seen when running `yarn export`.

#### GITHUB JEKYLL PROCESSING
Jekyll processing is disabled for this project when hosting using GitHub Pages because Next.js's static exports relies on the `_next` directory.

>GitHub Pages automatically processes files with Jekyll, which interferes with the \_next directory. To unblock the \_next directory from being included in the final website, add an empty .nojekyll file to the root of the GitHub Pages repository.
>
>~[Kenneth Schnall: Hosting a Next.js website with GitHub Pages (kennethaschnall.com)](https://kennethaschnall.com/posts/hosting-a-nextjs-website-with-github-pages)

>By default, Jekyll doesn't build files or folders that:
> - are located in a folder called `/node_modules` or `/vendor`
> - start with `_`, `.`, or `#`
> - end with `~`
> - are excluded by the `exclude` setting in your configuration file
>   
>   ~[About GitHub Pages and Jekyll - GitHub Docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)


# Changelog
#### INITIAL
Copied `.gitignore` and `.gitattributes` over from the monorepo to the project directory.

Added `workspaces` field to the `package.json`. Added `packages/*` as an entry to the workspaces.

Changed referenced `docs` package path to `../../` in `packages/api-docs-builder/package.json`. Cyclic dependency.

Moved `tslint.json` from the monorepo to `base-tslint.json` in the project directory.

Changed reference to a `tslint.json` in the monorepo to `base-tslint.json`.

Moved `tsconfig.json` from the monorepo to `base-tsconfig.json` in the project directory.

Changed reference to a `tsconfig.json` in the monorepo to `base-tsconfig.json`.

Changed `workspaceRoot` reference from monorepo to current project directory in `next.config.js`. See `§1698889907`

Changed `pkg` reference from monorepo's `package.json` to current project's `package.json`. See `§1698889825`

Changed reference to `docs/export` in `base-tsconfig.json` to `docs`.

Changed `export` script in `package.json` from 
`"export": "rimraf docs/export && next export --threads=3 -o export && yarn build-sw",` to 
`"export": "rimraf docs && next export --threads=3 -o docs && yarn build-sw",`

Changed `swDest` in `./scripts/buildServiceWorker.js` to reflect new export destination. See `§1698788654`

Changed all references from `../packages` to `./packages` in `babel.config.js` and `next.config.js`.

Changed reference to `docs/public/*` to `public/*` in `packages/markdown/prepareMarkdown.js`.

Changed reference to `pages/production-error/ErrorDecoder.js` in `src/pages/production-error/index.md` to `./ErrorDecoder.js`. See `¶1698901645`.

Changed reference to `pages/versions/ReleasedVersions.js` in `src/pages/versions/versions.md` to `./ReleasedVersions.js`. See `¶1698901645`.

Changed reference to `pages/versions/LatestVersions.js` in `src/pages/versions/versions.md` to `./LatestVersions.js`. See `¶1698901645`.

#### 2023-11-10
Added `/scripts/updateNotes.js` to automatically copy updated markdown notes to the project directory.

Added `update-notes` script inside `package.json`.

Updated `.gitignore` rules to allow `/docs` to be tracked. Also added `/scripts/updateNotes.js` to be untracked.

#### 2023-11-24
Added `"serve-static-docs": "npx http-server docs",` to `package.json` to serve the static website exported by the `export` script.

Changed link to Github pages website from `https://docs.brickmmo.com` to `https://brickmmo.github.io/docs-v2`.

Changed `docs` package in `/api-docs-builder/package.json` from `^5.0.0` to `file:../../`.

Created `scripts/createNoJekyllFile.js` to generate an empty .nojekyll file in the static exports output directory.

Added `"disable-jekyll": "node ./scripts/createNoJekyllFile.js",` to the `package.json`. Appended this script to `"export" : ...,` to be automatically called whenever a new static site export is generated.

Added link to `notes-v3.md` to `README.md`.
# Personal Website

Live demo: [arthurgassner.com](https://arthurgassner.com).

My personal website, based on the [MIT](https://github.com/mldangelo/personal-site/blob/main/LICENSE)-licensed personal website built by Michael D'Angelo.

## Contributing

Contributions are actively encouraged. Please review the [design goals](./docs/design-goals.md), [roadmap](./docs/roadmap.md), and [contributing guidelines](./docs/contributing.md). If you find a bug, please email me, submit a pull request (I'll buy you a coffee as a thank you), or submit an issue.

## Dependencies

Tested with: [node](https://nodejs.org/) >= v12 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git@github.com/arthurgassner/personal-site.git
cd personal-site

# You need to have nvm install (Run `nvm --version` to check). 
# If not, follow https://nodejs.org/en/download/package-manager
nvm install 
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages for the first time

1. Modify the environmental variables and git remote url in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Modify `homepage` in `package.json` to point to where you plan to host your site. If you do not plan on using a custom domain name, it should look like `https://[your-gh-username].github.io/[repository-name - default:personal-site]/`
3. If you plan on using a custom domain, modify `public/CNAME`. If you don't, delete `public/CNAME`.

Make a commit to `main` and push your changes. That's it.

### Update the website

1. Make changes to the code
2. Check everything is working with `npm start`
3. Push to `main`
> [!NOTE]
> The GitHub Action should automatically update the website, within ~10min

## Acknowledgements

* Forked from [Michael D'Angelo's MIT-licensed personal website](https://github.com/mldangelo/personal-site)

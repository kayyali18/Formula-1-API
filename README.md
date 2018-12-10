# Formula 1 API: Get Started

### Dependencies

* NodeJS 10.14.x
* PostgreSQL database
* Mocha & Chai (for testing)
* See Package.json for a complete list of packages required

If you are likely to need to manage multiple version of node on your local machine, we recommend version managers such as [nodenv](https://github.com/nodenv/nodenv) or [NVM](https://github.com/creationix/nvm/blob/master/README.md).

For those new to Node, the following tutorial will help get you up to speed with configuring a [Node environment](https://nodejs.org/en/docs/guides/getting-started-guide/).

### Get it
If you're planning on contributing code to the project (which we welcome [LOVE](CONTRIBUTING.md)), it is best practice to begin by forking this repo using the `Fork` button in the top-right corner of this screen. You should then be able to use `git clone` to copy your fork onto your local machine.
    
      git clone https://github.com/kayyali18/Formula-1-API
     
Jump into your new local copy of the F1 API:

    cd Formula-1-API

And then add an `upstream` remote that points to the main repo:

    git remote add upstream https://github.com/kayyali18/Formula-1-API

Fetch the latest version of `master` from `upstream` (ie. the main repo):

    git fetch upstream master

# Formula 1 API: Get Started

### Dependencies

* NodeJS 10.14.x
* PostgreSQL database
* Mocha & Chai (for testing)
* See Package.json for a complete list of packages required

If you are likely to need to manage multiple version of node on your local machine, we recommend version managers such as [nodenv](https://github.com/nodenv/nodenv) or [NVM](https://github.com/creationix/nvm/blob/master/README.md).

For those new to Node, the following tutorial will help get you up to speed with configuring a [Node environment](https://nodejs.org/en/docs/guides/getting-started-guide/).

### Get it
If you're planning on contributing code to the project (which we [WELCOME](CONTRIBUTING.md)), it is best practice to begin by forking this repo using the `Fork` button in the top-right corner of this screen. You should then be able to use `git clone` to copy your fork onto your local machine.
    
      git clone https://github.com/kayyali18/Formula-1-API
     
Jump into your new local copy of the F1 API:

    cd Formula-1-API

And then add an `upstream` remote that points to the main repo:

    git remote add upstream https://github.com/kayyali18/Formula-1-API

Fetch the latest version of `master` from `upstream` (ie. the main repo):

    git fetch upstream master
    
Make sure to install dependencies by running:

    npm install

### Get it running

First, you need to create the database user the app will use by runnning a script that should do it for you:

```
npm run database
```

This will create the tables formula_1 and formula_1_test, respectively. If this command fails, check the [troubleshooting section](#creating-the-database) for an alternative.

Once done, if the script succeeds you're ready to start developing.

If still you get stuck do not hesitate to open an issue reporting the full output of the script.

Now, your dreams of spinning up an API can be realised, start it up by:

    npm run start
    
    
### Testing

Make sure you have Mocha (testing suite) and Chai (assertion library) installed:

    npm install -g mocha
    npm install -g chai

Tests, both unit and integration, are available. To run the test suite, the databse must be prepared, you can do so by typing:
    
    npm run seed

Then the tests can be run with:

    npm test
    
    
### Troubleshooting

Below are fixes to potential issues that can happen during the installation process. If these don't solve the problem, or it's not listed, feel free to reach out to the Developers @kayyali18 and @relasine. We usually respond pretty quickly.

#### Creating the database

If the `npm run database` command doesn't work, you can run the following commands instead:
```
$ createuser --superuser --no-password [YourName]
$ createdb formula_1 --owner=[YourName]
$ createdb formula_1_test --owner=[YourName]
```

If this still doesn't work use these commands as a final measure:

```

psql -c 'CREATE DATABASE formula_1' && psql -c 'CREATE DATABASE formula_1_test'

```
If these commands succeed, you should be able to [continue the setup process](#get-it-running).



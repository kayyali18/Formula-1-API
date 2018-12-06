# Formula One API

This API grants access to current Formula One driver, team, and gran prix statistics, and is designed for Formula One software engineers to update and maintain the database and players drop of, teams are added, and races are won and lost.

## Endpoints

### DRIVERS

#### URL - `api/v1/drivers`

Method(s):

- `GET`

This provides developers with access to driver data including:

- unique id
- team id
- country
- current points

Succesful Response:

- Code - 200
- Content - driver array

#### URL - `api/v1/team/:team_id/drivers`

Method(s):

- `POST`

Allows the user to add a new driver.

URL Params - Requires a number for the cooresponding team that the driver is on. See the teams endpoint for reference.

Data Params - body object with:

- driver name (last)
- team (three-letter abbreviation)

Succesful Response:

- Code (201), Content (driver_id)

Error Response:

- Code (404), Content ('Team not found')
- Code (422), Content ('Unprocessable Entity') - missing params

#### URL - `api/v1/drivers/:driver_id/team`

Method(s):

- `PATCH`

Allows the user to to change a driver's team.

URL Params - Requires the id number for the coorespoding driver.

Data Params - body object with:

- team_id

Succesful Response:

- Code(201), Content(1)

Error Response:

- Code (404), Content ('Driver not found')
- Code (404), Content ('Team not found')
- Code (422), Content ('Unprocessable Entity')

#### URL - `api/v1/drivers/:driver_id/points`

Method(s):

- `PATCH`

Allows a user to update a driver's points.

URL Params - Requires the id number of the driver.

Data Params - body object with:

- points

Succesful Response:

- Code(201), Content(1)

Error Response:

- Code (404), Content ('Driver not found')
- Code (422), Content ('Unprocessable Entity')

#### URL - `api/v1/drivers/:driver_id`

Method(s):

- `DELETE`

Allows users to delete a driver and cooresponding races that they've won from the database.

URL Params - Requires the id number of the driver.

Succesful Response:

- Code(201), Content(1)

Error Response:

- Code (404), Content ('Driver not found')

### TEAMS

#### URL - `api/v1/teams`

Method(s):

- `GET`, `POST`

Allows users to download an array of all F1 teams.

Data Params (for POST) - body object with:

- Team name

Succesful Response:

- Code(201), Content(array)

#### URL - `api/v1/teams/:team_id/podiums`

Method(s):

- `PATCH`

Allows users to update the number of podiums a team has earned.

URL Params - Requires the id of the team.

Data Params - body object with:

- podiums

Succesful Response:

- Code(201), Content(1)

Error Response:

- Code(422), Content(Unprocessable entity)
- Code(404), Content(Team does not exist)

#### URL - `api/v1/teams/:team_id/titles`

Method(s):

- `PATCH`

Allows users to update the number of titles a team has earned.

URL Params - Requires the id of the team.

Data Params - body object with:

- titles

Succesful Response:

- Code(201), Content(1)

Error Response:

- Code(422), Content(Unprocessable entity)
- Code(404), Content(Team does not exist)

#### URL - api/v1/teams/:team_id

Method(s):

- `DELETE`

Allows users to delete teams and their coorespoding drivers and gran prix victories.

URL Params - Requires the id of the team.

Succesful Response:

- Code(201), Content(Succesfully delete <team_id> team)

Error Response:

- Code(404), Content(Team not found)

###RACES

#### URL - api/v1/races

Method(s):

- `GET`, `POST`

Allows users to see or add race results.

Data Params (for POST) - body object with:

- name
- date (example - 29 Apr 2018)
- winner_id
- winning_team_id
- fastest_lap

Succesful Response:

- Code(201), Content(Succesfully added race <id>)

Error Response:

- Code(422), Content(Unprocessable Entity)

#### URL - api/race/:race_id

Method(s)

- `DELETE`

Allows users to delete a race

URL Params:

- race_id

Succesful Response:

- Code(201), Content(Succesfully delete race <id>)

Error Response:

- Code(404), Content(Race not found)

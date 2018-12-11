"/api/v1/drivers/:driver_id",
"/api/v1/teams",
"/api/v1/teams/:team_id/podiums",
"/api/v1/teams/:team_id/titles",
"/api/v1/teams",
"/api/v1/teams/:team_id",
"/api/v1/races",
"/api/v1/races",
"/api/v1/race/:country",
"/api/v1/races/drivers/:driver_id"

const responses = {
"/api/v1/drivers": [
    {
        "id": 1,
        "name": "Vettel",
        "points": 320,
        "country": "GER",
        "team_id": 2,
        "created_at": "2018-12-10T23:42:23.605Z",
        "updated_at": "2018-12-10T23:42:23.605Z"
    },
    {
        "id": 2,
        "name": "Bottas",
        "points": 247,
        "country": "FIN",
        "team_id": 1,
        "created_at": "2018-12-10T23:42:23.605Z",
        "updated_at": "2018-12-10T23:42:23.605Z"
    },
    {
        "id": 3,
        "name": "Hamilton",
        "points": 408,
        "country": "GBR",
        "team_id": 1,
        "created_at": "2018-12-10T23:42:23.603Z",
        "updated_at": "2018-12-10T23:42:23.603Z"
    },
    {
        "id": 4,
        "name": "Ricciardo",
        "points": 170,
        "country": "AUS",
        "team_id": 3,
        "created_at": "2018-12-10T23:42:23.608Z",
        "updated_at": "2018-12-10T23:42:23.608Z"
    },
    {
        "id": 5,
        "name": "Räikkönen",
        "points": 251,
        "country": "FIN",
        "team_id": 2,
        "created_at": "2018-12-10T23:42:23.605Z",
        "updated_at": "2018-12-10T23:42:23.605Z"
    },
    {
        "id": 6,
        "name": "Verstappen",
        "points": 249,
        "country": "NED",
        "team_id": 3,
        "created_at": "2018-12-10T23:42:23.611Z",
        "updated_at": "2018-12-10T23:42:23.611Z"
    },
    {
        "id": 7,
        "name": "Hulkenberg",
        "points": 69,
        "country": "GER",
        "team_id": 4,
        "created_at": "2018-12-10T23:42:23.612Z",
        "updated_at": "2018-12-10T23:42:23.612Z"
    },
    {
        "id": 8,
        "name": "Sainz",
        "points": 53,
        "country": "ESP",
        "team_id": 4,
        "created_at": "2018-12-10T23:42:23.613Z",
        "updated_at": "2018-12-10T23:42:23.613Z"
    },
    {
        "id": 9,
        "name": "Vandoorne",
        "points": 12,
        "country": "BEL",
        "team_id": 6,
        "created_at": "2018-12-10T23:42:23.617Z",
        "updated_at": "2018-12-10T23:42:23.617Z"
    },
    {
        "id": 10,
        "name": "Alonso",
        "points": 50,
        "country": "ESP",
        "team_id": 6,
        "created_at": "2018-12-10T23:42:23.615Z",
        "updated_at": "2018-12-10T23:42:23.615Z"
    },
    {
        "id": 11,
        "name": "Grosjean",
        "points": 37,
        "country": "FRA",
        "team_id": 5,
        "created_at": "2018-12-10T23:42:23.618Z",
        "updated_at": "2018-12-10T23:42:23.618Z"
    },
    {
        "id": 12,
        "name": "Magnussen",
        "points": 56,
        "country": "DEN",
        "team_id": 5,
        "created_at": "2018-12-10T23:42:23.620Z",
        "updated_at": "2018-12-10T23:42:23.620Z"
    },
    {
        "id": 13,
        "name": "Perez",
        "points": 62,
        "country": "MEX",
        "team_id": 7,
        "created_at": "2018-12-10T23:42:23.620Z",
        "updated_at": "2018-12-10T23:42:23.620Z"
    },
    {
        "id": 14,
        "name": "Ocon",
        "points": 49,
        "country": "FRA",
        "team_id": 7,
        "created_at": "2018-12-10T23:42:23.621Z",
        "updated_at": "2018-12-10T23:42:23.621Z"
    },
    {
        "id": 15,
        "name": "Hartley",
        "points": 4,
        "country": "NZL",
        "team_id": 8,
        "created_at": "2018-12-10T23:42:23.623Z",
        "updated_at": "2018-12-10T23:42:23.623Z"
    },
    {
        "id": 16,
        "name": "Stroll",
        "points": 6,
        "country": "CAN",
        "team_id": 9,
        "created_at": "2018-12-10T23:42:23.623Z",
        "updated_at": "2018-12-10T23:42:23.623Z"
    },
    {
        "id": 17,
        "name": "Gasly",
        "points": 29,
        "country": "FRA",
        "team_id": 8,
        "created_at": "2018-12-10T23:42:23.621Z",
        "updated_at": "2018-12-10T23:42:23.621Z"
    },
    {
        "id": 18,
        "name": "Sirotkin",
        "points": 1,
        "country": "RUS",
        "team_id": 9,
        "created_at": "2018-12-10T23:42:23.624Z",
        "updated_at": "2018-12-10T23:42:23.624Z"
    },
    {
        "id": 19,
        "name": "Ericsson",
        "points": 9,
        "country": "SWE",
        "team_id": 10,
        "created_at": "2018-12-10T23:42:23.625Z",
        "updated_at": "2018-12-10T23:42:23.625Z"
    },
    {
        "id": 20,
        "name": "Leclerc",
        "points": 39,
        "country": "MON",
        "team_id": 10,
        "created_at": "2018-12-10T23:42:23.626Z",
        "updated_at": "2018-12-10T23:42:23.626Z"
    }
],
    "/api/v1/drivers/1/team": [
        {'submitted-value': 2},
    {
        "id": 1,
        "name": "Vettel",
        "points": 320,
        "country": "GER",
        "team_id": 2,
        "created_at": "2018-12-10T23:42:23.605Z",
        "updated_at": "2018-12-10T23:42:23.605Z"
    }
],
    "/api/v1/drivers/team/4": [
        {
            "id": 7,
            "name": "Hulkenberg",
            "points": 69,
            "country": "GER",
            "team_id": 4,
            "created_at": "2018-12-10T23:42:23.612Z",
            "updated_at": "2018-12-10T23:42:23.612Z"
        },
        {
            "id": 8,
            "name": "Sainz",
            "points": 53,
            "country": "ESP",
            "team_id": 4,
            "created_at": "2018-12-10T23:42:23.613Z",
            "updated_at": "2018-12-10T23:42:23.613Z"
        }
],
    "/api/v1/drivers/3/points": [
        {"submitted-value": 500},
        {
            "id": 3,
            "name": "Hamilton",
            "points": 500,
            "country": "GBR",
            "team_id": 1,
            "created_at": "2018-12-10T23:42:23.603Z",
            "updated_at": "2018-12-10T23:42:23.603Z"
        }
    ],
    "/api/v1/team/:team_id/drivers": [
        {'submitted-value':     
            {
            "name": "Rau",
            "points": 0,
             "country": "USA"
            }
        },
        {
            "id": 21,
            "name": "Rau",
            "points": 0,
            "country": "USA",
            "team_id": 10,
            "created_at": "2018-12-11T21:05:07.010Z",
            "updated_at": "2018-12-11T21:05:07.010Z"
        }
    ],


}
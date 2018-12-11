const responses = {
"GET /api/v1/drivers": [
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
    "PATCH /api/v1/drivers/:driver_id/team": [
        {'example-endpoint': "/api/v1/drivers/1/team"},
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
    "GET /api/v1/drivers/team/:team_id": [
        {'example-endpoint': "/api/v1/drivers/team/4"},
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
    "PATCH /api/v1/drivers/:driver_id/points": [
        {'example-endpoint': "/api/v1/drivers/3/points"},
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
    "POST /api/v1/team/:team_id/drivers": [
        {'example-endpoint': "/api/v1/team/10/drivers"},
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
    "DELETE /api/v1/drivers/:driver_id": [
        {'example-endpoint': "/api/v1/drivers/21"},
        {"respose confirmation":"Deleted 1 driver with id #21"}
    ],
    "GET /api/v1/teams": [
        {
            "id": 1,
            "name": "Mercedes",
            "podiums": 162,
            "titles": 5,
            "created_at": "2018-12-10T23:42:23.582Z",
            "updated_at": "2018-12-10T23:42:23.582Z"
        },
        {
            "id": 2,
            "name": "Ferrari",
            "podiums": 763,
            "titles": 16,
            "created_at": "2018-12-10T23:42:23.587Z",
            "updated_at": "2018-12-10T23:42:23.587Z"
        },
        {
            "id": 3,
            "name": "Red Bull",
            "podiums": 161,
            "titles": 4,
            "created_at": "2018-12-10T23:42:23.593Z",
            "updated_at": "2018-12-10T23:42:23.593Z"
        },
        {
            "id": 4,
            "name": "Renault",
            "podiums": 59,
            "titles": 2,
            "created_at": "2018-12-10T23:42:23.593Z",
            "updated_at": "2018-12-10T23:42:23.593Z"
        },
        {
            "id": 5,
            "name": "Haas",
            "podiums": 0,
            "titles": 0,
            "created_at": "2018-12-10T23:42:23.594Z",
            "updated_at": "2018-12-10T23:42:23.594Z"
        },
        {
            "id": 6,
            "name": "McLaren",
            "podiums": 485,
            "titles": 8,
            "created_at": "2018-12-10T23:42:23.595Z",
            "updated_at": "2018-12-10T23:42:23.595Z"
        },
        {
            "id": 7,
            "name": "Force India",
            "podiums": 0,
            "titles": 0,
            "created_at": "2018-12-10T23:42:23.597Z",
            "updated_at": "2018-12-10T23:42:23.597Z"
        },
        {
            "id": 8,
            "name": "Toro Rosso",
            "podiums": 1,
            "titles": 0,
            "created_at": "2018-12-10T23:42:23.600Z",
            "updated_at": "2018-12-10T23:42:23.600Z"
        },
        {
            "id": 9,
            "name": "Williams",
            "podiums": 311,
            "titles": 9,
            "created_at": "2018-12-10T23:42:23.601Z",
            "updated_at": "2018-12-10T23:42:23.601Z"
        },
        {
            "id": 10,
            "name": "Sauber",
            "podiums": 27,
            "titles": 0,
            "created_at": "2018-12-10T23:42:23.600Z",
            "updated_at": "2018-12-10T23:42:23.600Z"
        }
    ],
    "PATCH /api/v1/teams/:team_id/podiums": [
        {'example-endpoint': "/api/v1/teams/6/podiums"},
        {"submitted-value": 69},
        {
            "id": 6,
            "name": "McLaren",
            "podiums": 69,
            "titles": 8,
            "created_at": "2018-12-10T23:42:23.595Z",
            "updated_at": "2018-12-10T23:42:23.595Z"
        },
    ],
    "PATCH /api/v1/teams/:team_id/titles": [
        {'example-endpoint': "/api/v1/teams/7/titles"},
        {"submitted-value": 4},
        {
            "id": 7,
            "name": "Force India",
            "podiums": 0,
            "titles": 4,
            "created_at": "2018-12-10T23:42:23.597Z",
            "updated_at": "2018-12-10T23:42:23.597Z"
        } 
    ],
    "POST /api/v1/teams": [
        {'submitted-value': 'fast-guys'},
        {
            "id": 11,
            "name": "fast-guys",
            "podiums": 0,
            "titles": 0,
            "created_at": "2018-12-11T21:14:04.281Z",
            "updated_at": "2018-12-11T21:14:04.281Z"
        }
    ],
    "DELETE /api/v1/teams/:team_id": [
        {'example-endpoint': "/api/v1/teams/11"},
        {'response-confirmation': "Succesfully deleted 1 team"}
    ],
    "GET /api/v1/races": [
        {
            "id": 1,
            "name": "Azerbaijan",
            "date": "29 Apr 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 51,
            "fastest_lap": "1:43:44.291",
            "created_at": "2018-12-10T23:42:23.627Z",
            "updated_at": "2018-12-10T23:42:23.627Z",
            "continent": "Europe"
        },
        {
            "id": 2,
            "name": "Spain",
            "date": "13 May 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 66,
            "fastest_lap": "1:35:29.972",
            "created_at": "2018-12-10T23:42:23.627Z",
            "updated_at": "2018-12-10T23:42:23.627Z",
            "continent": "Europe"
        },
        {
            "id": 3,
            "name": "France",
            "date": "24 Jun 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 53,
            "fastest_lap": "1:30:11.385",
            "created_at": "2018-12-10T23:42:23.628Z",
            "updated_at": "2018-12-10T23:42:23.628Z",
            "continent": "Europe"
        },
        {
            "id": 4,
            "name": "Germany",
            "date": "22 Jul 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 67,
            "fastest_lap": "1:32:29.845",
            "created_at": "2018-12-10T23:42:23.630Z",
            "updated_at": "2018-12-10T23:42:23.630Z",
            "continent": "Europe"
        },
        {
            "id": 5,
            "name": "Hungary",
            "date": "29 Jul 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 70,
            "fastest_lap": "1:37:16.427",
            "created_at": "2018-12-10T23:42:23.631Z",
            "updated_at": "2018-12-10T23:42:23.631Z",
            "continent": "Europe"
        },
        {
            "id": 6,
            "name": "Italy",
            "date": "02 Sep 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 53,
            "fastest_lap": "1:16:54.484",
            "created_at": "2018-12-10T23:42:23.631Z",
            "updated_at": "2018-12-10T23:42:23.631Z",
            "continent": "Europe"
        },
        {
            "id": 7,
            "name": "Russia",
            "date": "30 Sep 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 53,
            "fastest_lap": "1:27:25.181",
            "created_at": "2018-12-10T23:42:23.632Z",
            "updated_at": "2018-12-10T23:42:23.632Z",
            "continent": "Europe"
        },
        {
            "id": 8,
            "name": "Singapore",
            "date": "16 Sep 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 61,
            "fastest_lap": "1:51:11.611",
            "created_at": "2018-12-10T23:42:23.632Z",
            "updated_at": "2018-12-10T23:42:23.632Z",
            "continent": "Asia"
        },
        {
            "id": 9,
            "name": "Japan",
            "date": "07 Oct 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 53,
            "fastest_lap": "1:27:17.062",
            "created_at": "2018-12-10T23:42:23.633Z",
            "updated_at": "2018-12-10T23:42:23.633Z",
            "continent": "Asia"
        },
        {
            "id": 10,
            "name": "Brazil",
            "date": "11 Nov 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 71,
            "fastest_lap": "1:27:09.066",
            "created_at": "2018-12-10T23:42:23.635Z",
            "updated_at": "2018-12-10T23:42:23.635Z",
            "continent": "South Ameria"
        },
        {
            "id": 11,
            "name": "Abu Dhabi",
            "date": "25 Nov 2018",
            "winner_id": 3,
            "winning_team_id": 1,
            "laps": 55,
            "fastest_lap": "1:39:40.382",
            "created_at": "2018-12-10T23:42:23.636Z",
            "updated_at": "2018-12-10T23:42:23.636Z",
            "continent": "Asia"
        },
        {
            "id": 12,
            "name": "Australia",
            "date": "25 Mar 2018",
            "winner_id": 1,
            "winning_team_id": 2,
            "laps": 58,
            "fastest_lap": "1:29:33.283",
            "created_at": "2018-12-10T23:42:23.638Z",
            "updated_at": "2018-12-10T23:42:23.638Z",
            "continent": "Australia"
        },
        {
            "id": 13,
            "name": "Bahrain",
            "date": "08 Apr 2018",
            "winner_id": 1,
            "winning_team_id": 2,
            "laps": 57,
            "fastest_lap": "1:32:01.940",
            "created_at": "2018-12-10T23:42:23.638Z",
            "updated_at": "2018-12-10T23:42:23.638Z",
            "continent": "Asia"
        },
        {
            "id": 14,
            "name": "Canada",
            "date": "10 Jun 2018",
            "winner_id": 1,
            "winning_team_id": 2,
            "laps": 68,
            "fastest_lap": "1:28:31.377",
            "created_at": "2018-12-10T23:42:23.639Z",
            "updated_at": "2018-12-10T23:42:23.639Z",
            "continent": "North America"
        },
        {
            "id": 15,
            "name": "Great Britain",
            "date": "08 Jul 2018",
            "winner_id": 1,
            "winning_team_id": 2,
            "laps": 52,
            "fastest_lap": "1:27:29.784",
            "created_at": "2018-12-10T23:42:23.639Z",
            "updated_at": "2018-12-10T23:42:23.639Z",
            "continent": "Europe"
        },
        {
            "id": 16,
            "name": "Belgium",
            "date": "26 Aug 2018",
            "winner_id": 1,
            "winning_team_id": 2,
            "laps": 44,
            "fastest_lap": "1:23:34.476",
            "created_at": "2018-12-10T23:42:23.639Z",
            "updated_at": "2018-12-10T23:42:23.639Z",
            "continent": "Europe"
        },
        {
            "id": 17,
            "name": "China",
            "date": "15 Apr 2018",
            "winner_id": 4,
            "winning_team_id": 3,
            "laps": 56,
            "fastest_lap": "1:35:36.380",
            "created_at": "2018-12-10T23:42:23.640Z",
            "updated_at": "2018-12-10T23:42:23.640Z",
            "continent": "Asia"
        },
        {
            "id": 18,
            "name": "Monaco",
            "date": "27 May 2018",
            "winner_id": 4,
            "winning_team_id": 3,
            "laps": 78,
            "fastest_lap": "1:42:54.807",
            "created_at": "2018-12-10T23:42:23.641Z",
            "updated_at": "2018-12-10T23:42:23.641Z",
            "continent": "Europe"
        },
        {
            "id": 19,
            "name": "Austria",
            "date": "01 Jul 2018",
            "winner_id": 6,
            "winning_team_id": 3,
            "laps": 71,
            "fastest_lap": "1:21:56.024",
            "created_at": "2018-12-10T23:42:23.641Z",
            "updated_at": "2018-12-10T23:42:23.641Z",
            "continent": "Europe"
        },
        {
            "id": 20,
            "name": "Mexico",
            "date": "28 Oct 2018",
            "winner_id": 6,
            "winning_team_id": 3,
            "laps": 71,
            "fastest_lap": "1:38:28.851",
            "created_at": "2018-12-10T23:42:23.643Z",
            "updated_at": "2018-12-10T23:42:23.643Z",
            "continent": "North America"
        },
        {
            "id": 21,
            "name": "United States",
            "date": "21 Oct 2018",
            "winner_id": 5,
            "winning_team_id": 2,
            "laps": 56,
            "fastest_lap": "1:34:18.643",
            "created_at": "2018-12-10T23:42:23.644Z",
            "updated_at": "2018-12-10T23:42:23.644Z",
            "continent": "North America"
        }
    ],
    "POST /api/v1/races": [
        {"submitted-value": {
            "name": "doug mcfast",
            "date": "19 Jul 2018",
            "winner_id": 4,
            "winning_team_id": 3,
            "laps": 99,
            "fastest_lap": "1:23:34.856",
            "continent": "Asia"
            }
        },
        {
            "id": 22,
            "name": "doug mcfast",
            "date": "19 Jul 2018",
            "winner_id": 4,
            "winning_team_id": 3,
            "laps": 99,
            "fastest_lap": "1:23:34.856",
            "created_at": "2018-12-11T21:21:42.114Z",
            "updated_at": "2018-12-11T21:21:42.114Z",
            "continent": "Asia"
        }
    ],
    "DELETE /api/v1/race/:country": [
        {'example-endpoint': "/api/v1/race/Germany"},
        {'response confirmation': 'Success'}
    ],
    "GET /api/v1/races/drivers/:driver_id": [
        {'example-endpoint': "/api/v1/races/drivers/5"},
        {
            "id": 21,
            "name": "United States",
            "date": "21 Oct 2018",
            "winner_id": 5,
            "winning_team_id": 2,
            "laps": 56,
            "fastest_lap": "1:34:18.643",
            "created_at": "2018-12-10T23:42:23.644Z",
            "updated_at": "2018-12-10T23:42:23.644Z",
            "continent": "North America"
        }
    ]
}

export default responses;
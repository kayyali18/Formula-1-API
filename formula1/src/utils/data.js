const endpoints = [
    "GET /api/v1/drivers",
    "PATCH /api/v1/drivers/:driver_id/team",
    "GET /api/v1/drivers/team/:team_id",
    "PATCH /api/v1/drivers/:driver_id/points",
    "POST /api/v1/team/:team_id/drivers",
    "DELETE /api/v1/drivers/:driver_id",
    "GET /api/v1/teams",
    "PATCH /api/v1/teams/:team_id/podiums",
    "PATCH /api/v1/teams/:team_id/titles",
    "POST /api/v1/teams",
    "DELETE /api/v1/teams/:team_id",
    "GET /api/v1/races",
    "POST /api/v1/races",
    "DELETE /api/v1/race/:country",
    "GET /api/v1/races/drivers/:driver_id"
]

export default endpoints;
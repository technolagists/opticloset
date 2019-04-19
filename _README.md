# opticloset-client
Server portion of the opticloset repo

## Team

  - __Product Owner__: 
  - __Scrum Master__: Jay Kindell
  - __Development Team Members__: Kaelyn Chresfield, Laura Pena, Julien de la Mettrie

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

- Install dependencies (see below)

- Use db/databases.js file to setup a PostgreSQL database instance (locally or on a remote instance)

- Request Keys for the following third-party APIs:

OPEN_WEATHER (https://openweathermap.org/api)
MALABI (https://www.malabi.co/api-overview/) 
COLORTAG (https://rapidapi.com/apicloud/api/colortag)
CLARIFAI (https://clarifai.com/developer/guide/)
GOOGLE GEOCODING (https://developers.google.com/maps/documentation/geocoding/start)

- Create a .env file with the following variables:

DB_HOST= 
DB_USER=
DB_PASS=
DB_NAME=
HOST=
OPEN_WEATHER_API_KEY=
MALABI_API_KEY=
MALABI_API_ID=
COLORTAG_API_KEY=
CLARIFAI_API_KEY=
GOOGLE_GEOCODING_API_KEY=

- Start the server by running: 

```sh
node server/server.js
```

- For front-end side [here](https://github.com/technolagists/opticloset-client)

## Requirements

- Node 0.10.x
- Postgresql 9.1.x
- Express 4.16.4
- Sequelize 4.43.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install

```

### Roadmap

View the project roadmap [here](https://github.com/technolagists/opticloset/issues)


## Contributing

See [CONTRIBUTING.md](_CONTRIBUTING.md) for contribution guidelines.

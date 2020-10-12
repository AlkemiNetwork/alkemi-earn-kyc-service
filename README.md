# alkemi-earn-kyc-service

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/project-alkemi/alkemi-earn-kyc-service)
![GitHub](https://img.shields.io/github/license/project-alkemi/alkemi-protocol) [![Build Status](https://travis-ci.com/project-alkemi/alkemi-earn-kyc-service.svg?token=5y3q5Wqo9XQWfYfKP6qE&branch=master)](https://travis-ci.com/project-alkemi/alkemi-earn-kyc-service)
![Twitter Follow](https://img.shields.io/twitter/follow/alkemiOfficial?style=social)

![GitHub stars](https://img.shields.io/github/stars/project-alkemi/alkemi-earn-kyc-service?style=social&label=star) ![GitHub forks](https://img.shields.io/github/forks/project-alkemi/alkemi-earn-kyc-service?style=social&label=fork) ![GitHub watchers](https://img.shields.io/github/watchers/project-alkemi/alkemi-earn-kyc-service?style=social&label=watch) ![GitHub followers](https://img.shields.io/github/followers/project-alkemi?label=follow&style=social)

> REST API service for exchanges to programatically add verified KYC addresses to the Alkemi Earn protocol via web3.

## About

This project allows for exchange operators who are integrated with the Alkemi Earn protocol to add (KYC) verified customer addresses to the protocol.

Built with [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

**Important:** the WALLET Public Address you set in your environment variables with `WALLET_PRIVATE_KEY` must be previously added by the Alkemi Earn protocol Admin, otherwise this service will fail.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Install your dependencies

   ```sh
   cd path/to/alkemi-earn-kyc-service
   npm install
   ```

3. Set and load your environment variables

   ```sh
   export $(grep -v '^#' .env | xargs)
   ```

4. Start your app

   ```sh
   npm start
   ```

5. View Swagger Interface and OpenAPI spec by visiting http://localhost:3030

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Run with Docker

1. Set the Environment Variables in the DockerFile

   ```sh
   # Manually Set ENV variables see .env for working dry run example
   ENV HOST localhost:3030
   ENV WALLET_PRIVATE_KEY <value>

   # mainnet / ropsten / rinkeby / kovan
   ENV NETWORK <value>

   # infura.io
   ENV INFURA_ID <value>
   ENV INFURA_SECRET <value>
   ```

2. Build the docker container with the local DockerFile

   ```sh
   docker build -t alkemi-earn-kyc-service .
   ```

3. Run the Container

   ```sh
   docker run -d -p 3030:3030 --name alkemi-earn-kyc-container alkemi-earn-kyc-service
   ```

## License

    MIT License

    Copyright (c) 2020 Alkemi

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

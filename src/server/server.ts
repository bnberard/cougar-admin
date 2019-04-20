import "reflect-metadata";
import {ConnectionManager, createConnection} from "typeorm";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {ApiErrorHandler} from './middleware/ApiErrorHandlers'

//import {RegisterRoutes} from './routes';

import {start} from "repl";

const app: express.Express = express();

async function initDatabase()
{
    try {
        const connection = await createConnection(
            {
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "brianberard",
                password: "admin",
                database: "brianberard",
                entities: [
                    __dirname + "/data/models/*.js"
                ],
                synchronize: true,
                logging: true
            }
        );
    }
    catch(error)
    {
        console.log("Error occurred attempting to initialize DB", error);
        throw "Database Initialization Failure";
    }
}


async function startServer()
{
    try {
        await initDatabase();

        app.use(express.static('dist'));

        console.log("Starting Server...")

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        //RegisterRoutes(app);
        
        app.use(ApiErrorHandler);

        app.listen(8080, () => console.log('Listening on port 8080!'));
    }
    catch(error)
    {
        console.log(error);
        console.log("Server failed to start");
    }

}

startServer();

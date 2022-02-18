import { app } from "./app";

const port = app.get("port");

import mongoose from 'mongoose';
import DB_URL from "./config";

const server = app.listen(port, onListening);
server.on("error", onError);

function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind =
        typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    mongoose.connect(DB_URL,{ useNewUrlParser: true })
    .then(() => {

        console.log('Database connected');
    })
    .catch((err) => {
            console.log(`Connection failed ${err.message}`);
    });
    console.log(`Listening on ${bind}`);
}

export default server;

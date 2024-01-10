import { DataSource } from 'typeorm';
import "reflect-metadata"
import { Blackpink } from "./entity/Blackpink"

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "pass123",
    database: "aiyara",
    synchronize: true,
    logging: true,
    entities: [Blackpink],
    subscribers: [],
    migrations: [],
})
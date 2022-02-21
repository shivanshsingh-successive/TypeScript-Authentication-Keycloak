import * as express from 'express';
import * as session from 'express-session';
import { Pokemons } from "./routes/pokemons";
import keycloak, { memoryStore } from './keycloak';

class App {

    public app: express.Application;

    public pokeRoutes: Pokemons = new Pokemons();

    constructor() {
        this.app = express();
        this.setupkeycloak();
        this.pokeRoutes.routes(this.app);
    }

    private setupkeycloak(): void {
        this.app.use(session({
            secret: '1234567890',
            resave: false,
            saveUninitialized: true,
            store: memoryStore,
            cookie: {
                maxAge: 1000 * 60 * 5
            }
        }));
        this.app.use(keycloak.middleware({
            logout: '/logout',
            admin: '/'
        }));
    }
}

export default new App().app;

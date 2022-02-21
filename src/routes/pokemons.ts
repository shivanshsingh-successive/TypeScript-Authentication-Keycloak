import { Request, Response } from "express";
import keycloak from '../keycloak';

import pokemons = require('../db.json');

export class Pokemons {
    public routes(app): void {

        app.route('/pokemons')
            .get((req: Request, res: Response) => {
                res.status(200).send(pokemons);
            })

        app.route('/pokemons/:id')
            .get((req: Request, res: Response) => {
                let id = req.params.id;
                res.status(200).send(pokemons[id]);
            })

        app.route('/test')
            .get(
                keycloak.protect('user'),
                (req: Request, res: Response) => {
                    res.status(200).json({ message: 'kiiii' });
            })
    }
}

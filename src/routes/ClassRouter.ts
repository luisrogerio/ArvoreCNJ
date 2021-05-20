/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { getById, getByName } from "../controllers/ClassController";


export class ClassRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init(): void {
        this.router.get('/byName', getByName);
        this.router.get('/byId', getById);
    }
}

const classRouter = new ClassRouter();

export default classRouter.router;

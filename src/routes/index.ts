import { Router } from 'express';
import ClassRouter from "./ClassRouter";
import SubjectRouter from './SubjectRouter';

const baseRouter = Router();
baseRouter.use('/class', ClassRouter);
baseRouter.use('/subject', SubjectRouter);

export default baseRouter;

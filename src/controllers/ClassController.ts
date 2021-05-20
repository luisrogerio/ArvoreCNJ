/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import ClassService from "../services/ClassService";
import logger from '@shared/Logger';
import { shortParameterError, errorDuringRequest } from '@shared/constants';
import { getClient } from '@shared/Cache';
const { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } = StatusCodes;

export async function getByName(req: Request, res: Response){
    try {
        const name:string = req.query.name as string;

        if (name.trim().length < 3) {
            return res.status(BAD_REQUEST).json({
                error: shortParameterError,
            });
        }
    
        const classes = await ClassService.getByName(name);
        return res.status(OK).json(classes);
    } catch (e){
        const message = (<Error>e).message;
        logger.err(message, true);
        return res.status(INTERNAL_SERVER_ERROR).json({ error: `${errorDuringRequest} ${message}`});
    }
}

export function getById(req: Request, res: Response) {
    try {
        const id = Number(req.query.id);
    
        const redisClient = getClient();

        const redisKey = `class:${id}`;

        return redisClient.get(redisKey, async (error, clasz) => {
            if(!clasz){
                const result = await ClassService.getById(id);
                redisClient.set(redisKey, JSON.stringify(result));
                return res.status(OK).json(result);
            }
            return res.status(OK).json(JSON.parse(clasz));
        });
    } catch (e){
        const message = (<Error>e).message;
        logger.err(message, true);
        return res.status(INTERNAL_SERVER_ERROR).json({ error: `${errorDuringRequest} ${message}`});
    }
}
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import redis, { RedisClient } from "redis";

export function getClient() : RedisClient {
    const client = redis.createClient();
    return client;
}
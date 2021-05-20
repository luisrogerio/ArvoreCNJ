/* eslint-disable @typescript-eslint/no-unsafe-call */
import Class from "@entities/Class";
import { BaseRepository } from "@repositories/BaseRepository";

class ClassRepository extends BaseRepository<Class> {
    protected collection: string;

    constructor(){
        super();
        this.collection = 'classes';
    }
}

export default new ClassRepository();
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Class from "@entities/Class";
import { IClassService } from "@services/interfaces/IClassService";
import ClassRepository from "@repositories/ClassRepository";

class ClassService implements IClassService {

    async getByName(name: string): Promise<Class[]> {
        const listOfItems = await ClassRepository.getByName(name);

        return listOfItems;
    }

    async getById(id: number) : Promise<Class>{
        const clasz = await ClassRepository.getById(id);

        return clasz;
    }
    
}

export default new ClassService();
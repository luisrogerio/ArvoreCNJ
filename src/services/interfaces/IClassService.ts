import Class from "@entities/Class";

export interface IClassService {
    getByName(name: string): Promise<Array<Class>>;
    getById(id: number) : Promise<Class>;
}

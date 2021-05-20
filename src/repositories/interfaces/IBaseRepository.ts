export interface IBaseRepository<T> {
    getByName(name: string): Promise<T[]>;
    getById(id: number) : Promise<T>;
}

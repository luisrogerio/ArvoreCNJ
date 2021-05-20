/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IBaseRepository } from '@repositories/interfaces/IBaseRepository';
import { getCollection } from '@shared/Db';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
	protected abstract collection: string;

	async getById(id: number): Promise<T> {
		const collection = await getCollection(this.collection);

		const item = (await collection.findOne(
			{
				codItem: id,
			},
			{
				projection: {
					_id: 0,
				},
			}
		)) as T;

		return item;
	}

	async getByName(name: string): Promise<T[]> {
		const collection = await getCollection(this.collection);

		const item = (await collection
			.find({
				nome: new RegExp(name),
			})
			.project({
				_id: 0,
			})
			.toArray()) as T[];

		return item;
	}
}

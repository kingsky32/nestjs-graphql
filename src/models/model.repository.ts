import { Repository } from 'typeorm';
import { ModelEntity } from '#common/serializers/model.serializer';

export class ModelRepository<T> extends Repository<T> {}

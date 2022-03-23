import { Repository } from 'typeorm';
import { ModelEntity } from '#common/serializers/model.serializer';

export class ModelRepository<T, K extends ModelEntity> extends Repository<T> {}

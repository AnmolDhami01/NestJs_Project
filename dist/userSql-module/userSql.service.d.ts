import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import { Photo } from 'src/models/photo.entity';
import { Repository } from 'typeorm';
export declare class userSqlService {
    private photoRepository;
    constructor(photoRepository: Repository<Photo>);
    getAllPhotos(): Promise<ResponseWrapper>;
    getPhotosById(id: number): Promise<ResponseWrapper>;
}

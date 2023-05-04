import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
// import {
//   ResponseWrapper,
//   StatusDescription,
// } from 'src/interface/ResponseStatus';

import { Request, Response } from 'express';
import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import StatusDescription from 'src/ResponseWrappers/StatusDescription';
import { Photo } from 'src/models/photo.entity';
import { Repository } from 'typeorm';
@Injectable()
export class userSqlService {
  constructor(
    @Inject('PHOTO_REPOSITORY') private photoRepository: Repository<Photo>,
  ) {}

  public async getAllPhotos(): Promise<ResponseWrapper> {
    let statusDescription = new StatusDescription();
    let responseWrapper = new ResponseWrapper();
    try {
      responseWrapper.setStatusDescription(statusDescription);
      let photos: Photo[] = await this.photoRepository.find();
      if (photos.length == 0) {
        statusDescription.setStatusCode(220);
        statusDescription.setStatusMessage('No photos found');
        return Promise.resolve(responseWrapper);
      }
      responseWrapper.setPhotos(photos);
      statusDescription.setStatusCode(200);
      statusDescription.setStatusMessage('Success');
    } catch (error) {
      statusDescription.setStatusCode(500);
      statusDescription.setStatusMessage('Internal Server Error');
      return Promise.resolve(responseWrapper);
    }
    return Promise.resolve(responseWrapper);
  }

  public async getPhotosById(id: number): Promise<ResponseWrapper> {
    let statusDescription = new StatusDescription();
    let responseWrapper = new ResponseWrapper();
    try {
      responseWrapper.setStatusDescription(statusDescription);
      let photo: Photo = await this.photoRepository.findOne({
        where: {
          id,
        },
      });
      if (photo == null) {
        statusDescription.setStatusCode(220);
        statusDescription.setStatusMessage('No photos found');
        return Promise.resolve(responseWrapper);
      }
      responseWrapper.setPhoto(photo);
      statusDescription.setStatusCode(200);
      statusDescription.setStatusMessage('Success');
    } catch (error) {
      statusDescription.setStatusCode(500);
      statusDescription.setStatusMessage('Internal Server Error');
      return Promise.resolve(responseWrapper);
    }
    return Promise.resolve(responseWrapper);
  }
}

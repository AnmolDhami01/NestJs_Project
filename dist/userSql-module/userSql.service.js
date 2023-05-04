"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSqlService = void 0;
const common_1 = require("@nestjs/common");
const ResponseWrapper_1 = require("../ResponseWrappers/ResponseWrapper");
const StatusDescription_1 = require("../ResponseWrappers/StatusDescription");
const typeorm_1 = require("typeorm");
let userSqlService = class userSqlService {
    constructor(photoRepository) {
        this.photoRepository = photoRepository;
    }
    async getAllPhotos() {
        let statusDescription = new StatusDescription_1.default();
        let responseWrapper = new ResponseWrapper_1.default();
        try {
            responseWrapper.setStatusDescription(statusDescription);
            let photos = await this.photoRepository.find();
            if (photos.length == 0) {
                statusDescription.setStatusCode(220);
                statusDescription.setStatusMessage('No photos found');
                return Promise.resolve(responseWrapper);
            }
            responseWrapper.setPhotos(photos);
            statusDescription.setStatusCode(200);
            statusDescription.setStatusMessage('Success');
        }
        catch (error) {
            statusDescription.setStatusCode(500);
            statusDescription.setStatusMessage('Internal Server Error');
            return Promise.resolve(responseWrapper);
        }
        return Promise.resolve(responseWrapper);
    }
    async getPhotosById(id) {
        let statusDescription = new StatusDescription_1.default();
        let responseWrapper = new ResponseWrapper_1.default();
        try {
            responseWrapper.setStatusDescription(statusDescription);
            let photo = await this.photoRepository.findOne({
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
        }
        catch (error) {
            statusDescription.setStatusCode(500);
            statusDescription.setStatusMessage('Internal Server Error');
            return Promise.resolve(responseWrapper);
        }
        return Promise.resolve(responseWrapper);
    }
};
userSqlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PHOTO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], userSqlService);
exports.userSqlService = userSqlService;
//# sourceMappingURL=userSql.service.js.map
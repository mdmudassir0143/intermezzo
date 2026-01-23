import { IsArray, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AppCallRequestDto } from './app-call-request.dto';
import { CreateAssetDto } from './create-asset.dto';
// import { AssetFreezeRequestDto } from './asset-freeze-request.dto';
import { AssetTransferRequestDto } from './asset-transfer-request.dto';
// import { KeyRegistrationRequestDto } from './key-registration-request.dto';
import { AlgoTransferRequestDto } from './algo-transfer-request.dto';
import { AssetClawbackRequestDto } from './asset-clawback-request.dto';

export class GroupRequestDto {

    appCall: AppCallRequestDto;
    assetConfig: CreateAssetDto;
    assetTransfer: AssetTransferRequestDto;
    payment: AlgoTransferRequestDto;
    assetClawback: AssetClawbackRequestDto;
}
import { PaginationDto, PaginatedResponse } from './pagination.dto';
import { IsString, IsInt, IsOptional, IsEnum, IsBoolean, IsArray, ValidateNested, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from './partial.type';

export enum AccessType {
  FREE = 'free',
  PREMIUM = 'premium',
  COIN = 'coin',
}

export class ChaptersQueryDto extends PaginationDto {
  // Additional chapter-specific filters can be added here in the future
  readonly status?: string;
  readonly access_type?: AccessType;
}

export class ChaptersUniversalQueryDto {
  readonly filters?: string; // JSON stringified array of filter conditions
  readonly sort?: string; // JSON stringified sort object
  readonly page?: number = 1;
  readonly limit?: number = 10;
}

export class ChapterResponseDto {
  readonly chapter_id!: number;
  readonly manga_id!: number;
  readonly chapter_number!: number;
  readonly title?: string;
  readonly description?: string;
  readonly page_count!: number;
  readonly access_type!: AccessType;
  readonly coin_cost!: number;
  readonly release_date?: Date;
  readonly created_at!: Date;
  readonly updated_at!: Date;
  readonly is_published!: boolean;
  readonly thumbnail_url?: string;
}

export interface ChaptersResponseDto extends PaginatedResponse<ChapterResponseDto> {}

export class PageMetadataDto {
  @IsOptional()
  @IsString()
  alt_text?: string;

  @IsOptional()
  @IsInt()
  page_number?: number;
}

export class CreateChapterDto {
  @IsInt()
  @Type(() => Number)
  manga_id!: number;

  @IsInt()
  @Type(() => Number)
  chapter_number!: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(AccessType)
  access_type!: AccessType;

  @IsInt()
  @Type(() => Number)
  coin_cost!: number;

  @IsOptional()
  @IsDateString()
  release_date?: Date;

  @IsBoolean()
  @Type(() => Boolean)
  is_published!: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PageMetadataDto)
  pages?: PageMetadataDto[];
}

export type UpdateChapterDto = Partial<CreateChapterDto>;
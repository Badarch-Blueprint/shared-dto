import { PaginationDto, PaginatedResponse } from './pagination.dto';

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
  alt_text?: string;
  page_number?: number;
}

export class CreateChapterDto {
  manga_id!: number;
  chapter_number!: number;
  title?: string;
  description?: string;
  access_type!: AccessType;
  coin_cost!: number;
  release_date?: Date;
  is_published!: boolean;
  pages?: PageMetadataDto[];
}

export class UpdateChapterDto {
  manga_id?: number;
  chapter_number?: number;
  title?: string;
  description?: string;
  access_type?: AccessType;
  coin_cost?: number;
  release_date?: Date;
  is_published?: boolean;
  pages?: PageMetadataDto[];
}
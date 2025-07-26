export class PaginationDto {
  readonly page?: number = 1;
  readonly limit?: number = 10;
  readonly sortBy?: string;
  readonly sortOrder?: 'ASC' | 'DESC' = 'DESC';
}

export interface PaginationMeta {
  readonly currentPage: number;
  readonly perPage: number;
  readonly from: number;
  readonly to: number;
  readonly total: number;
  readonly lastPage: number;
}

export interface PaginatedResponse<T> {
  readonly data: T[];
  readonly pagination: PaginationMeta;
} 
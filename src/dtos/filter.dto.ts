// Legacy filter DTO - kept for backward compatibility
export class UploadsFilterDto {
  readonly search?: string;
  readonly status?: string;
  readonly uploadType?: string;
  readonly sourceLanguage?: string;
  readonly targetLanguage?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly totalPages?: number;
  readonly description?: string;
}

// New universal filter interfaces for frontend consumption
export interface FilterConditionDto {
  field: string;
  operator: 'equals' | 'not_equals' | 'in' | 'not_in' | 'contains' | 'not_contains' | 'starts_with' | 'ends_with' | 'greater_than' | 'greater_than_or_equal' | 'less_than' | 'less_than_or_equal' | 'between' | 'is_null' | 'is_not_null';
  value?: any;
}

export interface SortConditionDto {
  field: string;
  direction: 'asc' | 'desc';
}

export interface UniversalFilterRequestDto {
  filters?: FilterConditionDto[];
  sort?: SortConditionDto;
  page?: number;
  limit?: number;
} 
export enum FilterFieldType {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
  MULTI_SELECT = 'multi-select',
  DATE = 'date',
  DATE_RANGE = 'date-range',
  BOOLEAN = 'boolean',
}

export interface FilterOption {
  label: string;
  value: string | number | boolean;
  description?: string;
}

export interface FilterFieldConfig {
  key: string;
  label: string;
  type: FilterFieldType;
  required?: boolean;
  placeholder?: string;
  description?: string;
  options?: FilterOption[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
  };
  ui?: {
    class?: string;
    colspan?: number;
    hidden?: boolean;
    disabled?: boolean;
  };
  defaultOperator?: string;
  supportedOperators?: string[];
}

export interface AdvancedFilterConfig {
  collapsed: boolean;
  showClearAll: boolean;
  showApply: boolean;
  fields: FilterFieldConfig[];
} 
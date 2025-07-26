import { FilterFieldConfig, FilterFieldType, AdvancedFilterConfig } from './filter-field.dto';
import { AccessType } from './chapter.dto';

export const CHAPTERS_FILTER_CONFIG: AdvancedFilterConfig = {
  collapsed: true,
  showClearAll: true,
  showApply: true,
  fields: [
    {
      key: "access_type",
      label: "Access Type",
      type: FilterFieldType.SELECT,
      options: [
        { label: "Free", value: AccessType.FREE },
        { label: "Premium", value: AccessType.PREMIUM },
        { label: "Coin", value: AccessType.COIN }
      ],
      placeholder: "Select access type",
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals", "in", "not_in"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "is_published",
      label: "Publication Status",
      type: FilterFieldType.SELECT,
      options: [
        { label: "Published", value: true },
        { label: "Unpublished", value: false }
      ],
      placeholder: "Select publication status",
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "chapter_number",
      label: "Chapter Number",
      type: FilterFieldType.NUMBER,
      placeholder: "Enter chapter number",
      validation: {
        min: 1,
        max: 9999
      },
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "between"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "page_count",
      label: "Page Count",
      type: FilterFieldType.NUMBER,
      placeholder: "Enter page count",
      validation: {
        min: 1,
        max: 999
      },
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "between"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "coin_cost",
      label: "Coin Cost",
      type: FilterFieldType.NUMBER,
      placeholder: "Enter coin cost",
      validation: {
        min: 0,
        max: 9999
      },
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "between"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "release_date",
      label: "Release Date",
      type: FilterFieldType.DATE_RANGE,
      placeholder: "Select date range",
      defaultOperator: "between",
      supportedOperators: ["equals", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "between"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "created_at",
      label: "Created Date",
      type: FilterFieldType.DATE_RANGE,
      placeholder: "Select creation date range",
      defaultOperator: "between",
      supportedOperators: ["equals", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "between"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "search",
      label: "Search",
      type: FilterFieldType.TEXT,
      placeholder: "Search in title and description",
      description: "Search across chapter title and description",
      validation: {
        minLength: 2,
        maxLength: 100
      },
      defaultOperator: "contains",
      supportedOperators: ["contains"],
      ui: {
        class: "col-span-2"
      }
    }
  ]
}; 
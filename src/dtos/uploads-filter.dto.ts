import { FilterFieldConfig, FilterFieldType, AdvancedFilterConfig } from './filter-field.dto';

export const UPLOADS_FILTER_CONFIG: AdvancedFilterConfig = {
  collapsed: true,
  showClearAll: true,
  showApply: true,
  fields: [
    {
      key: "upload_type",
      label: "Оруулах төрөл",
      type: FilterFieldType.SELECT,
      options: [
        { label: "Шинэ манга", value: "new_manga" },
        { label: "Шинэ бүлэг", value: "new_chapter" },
        { label: "Бүлэг шинэчлэх", value: "chapter_update" }
      ],
      placeholder: "Төрөл сонгох",
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals", "in", "not_in"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "status",
      label: "Төлөв",
      type: FilterFieldType.MULTI_SELECT,
      options: [
        { label: "Хүлээгдэж буй", value: "pending_review" },
        { label: "Шалгагдаж буй", value: "under_review" },
        { label: "Зөвшөөрөгдсөн", value: "approved" },
        { label: "Татгалзсан", value: "rejected" },
        { label: "Нийтлэгдсэн", value: "published" },
        { label: "Буцаагдсан", value: "withdrawn" }
      ],
      placeholder: "Төлөв сонгох",
      defaultOperator: "in",
      supportedOperators: ["equals", "not_equals", "in", "not_in"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "source_language",
      label: "Эх хэл",
      type: FilterFieldType.SELECT,
      options: [
        { label: "Япон", value: "Japanese" },
        { label: "Солонгос", value: "Korean" },
        { label: "Хятад", value: "Chinese" },
        { label: "Англи", value: "English" }
      ],
      placeholder: "Эх хэл сонгох",
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals", "in", "not_in"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "target_language",
      label: "Орчуулах хэл",
      type: FilterFieldType.SELECT,
      options: [
        { label: "Англи", value: "English" },
        { label: "Монгол", value: "Mongolian" },
        { label: "Япон", value: "Japanese" },
        { label: "Солонгос", value: "Korean" },
        { label: "Хятад", value: "Chinese" }
      ],
      placeholder: "Орчуулах хэл сонгох",
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals", "in", "not_in"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "total_pages",
      label: "Хуудасны тоо",
      type: FilterFieldType.NUMBER,
      placeholder: "Хуудасны тоо",
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
      key: "uploaded_at",
      label: "Оруулсан огноо",
      type: FilterFieldType.DATE_RANGE,
      placeholder: "Огноо сонгох",
      defaultOperator: "between",
      supportedOperators: ["equals", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "between"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "reviewed_at",
      label: "Шалгасан огноо",
      type: FilterFieldType.DATE_RANGE,
      placeholder: "Огноо сонгох",
      defaultOperator: "between",
      supportedOperators: ["equals", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "between", "is_null", "is_not_null"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "description",
      label: "Тайлбар",
      type: FilterFieldType.TEXT,
      placeholder: "Тайлбарт хайх",
      validation: {
        minLength: 2,
        maxLength: 100
      },
      defaultOperator: "contains",
      supportedOperators: ["contains", "not_contains", "starts_with", "ends_with", "equals", "not_equals"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "search",
      label: "Ерөнхий хайлт",
      type: FilterFieldType.TEXT,
      placeholder: "Тайлбар болон манганы нэрээр хайх",
      description: "Тайлбар болон манганы нэрээр хайна",
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
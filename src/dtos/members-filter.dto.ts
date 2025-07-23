import { FilterFieldConfig, FilterFieldType, AdvancedFilterConfig } from './filter-field.dto';

export const MEMBERS_FILTER_CONFIG: AdvancedFilterConfig = {
  collapsed: true,
  showClearAll: true,
  showApply: true,
  fields: [
    {
      key: "role",
      label: "Үүрэг",
      type: FilterFieldType.SELECT,
      options: [
        { label: "Удирдагч", value: "leader" },
        { label: "Орчуулагч", value: "translator" },
        { label: "Засварлагч", value: "proofreader" },
        { label: "Хэвлэгч", value: "typesetter" },
        { label: "Цэвэрлэгч", value: "cleaner" },
        { label: "Оруулагч", value: "uploader" },
        { label: "Гишүүн", value: "member" }
      ],
      placeholder: "Үүрэг сонгох",
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals", "in", "not_in"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "status",
      label: "Төлөв байдал",
      type: FilterFieldType.MULTI_SELECT,
      options: [
        { label: "Идэвхтэй", value: "active" },
        { label: "Идэвхгүй", value: "inactive" },
        { label: "Түр хаагдсан", value: "suspended" },
        { label: "Урилга илгээгдсэн", value: "invited" }
      ],
      placeholder: "Төлөв байдал сонгох",
      defaultOperator: "in",
      supportedOperators: ["equals", "not_equals", "in", "not_in"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "joined_at",
      label: "Нэгдсэн огноо",
      type: FilterFieldType.DATE_RANGE,
      placeholder: "Огноо сонгох",
      defaultOperator: "between",
      supportedOperators: ["equals", "greater_than", "greater_than_or_equal", "less_than", "less_than_or_equal", "between"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "can_upload",
      label: "Оруулах эрх",
      type: FilterFieldType.BOOLEAN,
      options: [
        { label: "Тийм", value: true },
        { label: "Үгүй", value: false }
      ],
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "can_approve",
      label: "Батлах эрх",
      type: FilterFieldType.BOOLEAN,
      options: [
        { label: "Тийм", value: true },
        { label: "Үгүй", value: false }
      ],
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "can_manage_members",
      label: "Гишүүд удирдах эрх",
      type: FilterFieldType.BOOLEAN,
      options: [
        { label: "Тийм", value: true },
        { label: "Үгүй", value: false }
      ],
      defaultOperator: "equals",
      supportedOperators: ["equals", "not_equals"],
      ui: {
        class: "col-span-1"
      }
    },
    {
      key: "search",
      label: "Хэрэглэгчээр хайх",
      type: FilterFieldType.TEXT,
      placeholder: "Хэрэглэгчийн нэр эсвэл имэйлээр хайх",
      description: "Хэрэглэгчийн нэр болон имэйл хаягаар хайна",
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

export class MembersFilterDto {
  readonly role?: string;
  readonly status?: string;
  readonly joinedAt?: string;
  readonly canUpload?: boolean;
  readonly canApprove?: boolean;
  readonly canManageMembers?: boolean;
  readonly search?: string;
} 
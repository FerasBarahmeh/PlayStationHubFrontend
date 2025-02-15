export const Status = {
  unknown: { value: 0, label: 'unknown' },
  inactive: { value: 1, label: 'inactive' },
  active: { value: 2, label: 'active' },
} as const;

export type Status = typeof Status[keyof typeof Status];
export type StatusValues = typeof Status[keyof typeof Status]['value'];

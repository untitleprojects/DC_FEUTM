// 체크박스
export interface CheckboxItem {
  id: number
  label: string
  isRequired: boolean
  isChecked: boolean
}

export type ValidationErrors = {
  [key: string]: string | null
}

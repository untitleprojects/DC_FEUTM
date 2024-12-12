import { useState, ChangeEvent } from 'react'
import { ValidationErrors, CheckboxItem } from '@/types/common'

export const useForm = <T extends Record<string, unknown>>(
  initialValues: T,
  validate?: (data: T) => ValidationErrors,
) => {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<ValidationErrors>({})

  // 입력값 변경
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target
    const { name, value, type } = target

    setValues((prevValues) => {
      if (name === 'checkboxArr') {
        const isChecked = (target as HTMLInputElement).checked
        const updatedCheckboxArr = (prevValues.checkboxArr as CheckboxItem[]).map(
          (checkbox: CheckboxItem) =>
            checkbox.label === value ? { ...checkbox, isChecked } : checkbox,
        )
        return { ...prevValues, checkboxArr: updatedCheckboxArr }
      }

      return {
        ...prevValues,
        [name]: type === 'number' ? Number(value) : value,
      }
    })
  }

  // 포커스 빠졌을떄 에러 있으면 표시
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target
    if (validate) {
      const fieldErrors = validate(values)
      setErrors((prevErrors) => ({ ...prevErrors, [name]: fieldErrors[name] }))
    }
  }

  // 폼 정보 초기화
  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  const validatedForm = () => {
    if (validate) {
      const validationErrors = validate(values)
      setErrors(validationErrors)
      return Object.values(validationErrors).every((error) => !error)
    }
    return true
  }

  return { values, handleChange, handleBlur, validatedForm, resetForm, errors, setErrors }
}

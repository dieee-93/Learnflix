import { type ValidationType } from '@/Types'
import { validateInput } from '@/Utils/validations/InputValidations/validateInput'

export const useHandleValidation = (): { validate: (inputValue: string | number, inputName: string, formTitle: string) => ValidationType } => {
  const validate = (inputValue: string | number, inputName: string, formTitle: string): ValidationType => { return validateInput(inputValue, inputName, formTitle) }

  return { validate }
}

const validations = {
  'Nuevo Video': {
    title: [{
      pattern: /^.{4,100}$/,
      helperText: 'El titulo debe tener entre 4 y 100 caracteres'
    }],
    imgUrl: [{ pattern: /\.(jpg|jpeg|png|gif|bmp)$/i, helperText: 'El link de la imagen es invalido' }],
    videoUrl: [{
      pattern: /^(?:(?:https?:\/\/)?(?:www\.)?)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:\S+)?$/,
      helperText: 'Introduce un link de youtube valido'
    }],
    category: [{ pattern: /^.+$/, helperText: 'Debes seleccionar una categoria' }],
    description: [{ pattern: /^[\s\S]{0,5000}$/, helperText: 'El texto no puede superar los 5000 caracteres' }],
    securityCode: [{ pattern: /^(?!0)\d{1,6}$/, helperText: 'El codigo de seguridad es numero entre 1 y 999.999. No puede ser cero, tampoco comenzar con el con el.' }]
  },
  'Nueva Categoría': {
    name: [],
    description: [],
    securityCode: []
  }
}

export function validateInput (inputValue, inputName, formTitle) {
  let valid = false
  let errorMsg = ''
  if (validations[formTitle][inputName]) {
    console.log(inputValue, inputName)
    validations[formTitle][inputName].forEach(validation => {
      if (!String(inputValue).match(validation.pattern)) {
        errorMsg = validation.helperText
      } else {
        valid = true
        errorMsg = ''
      }
    })
  } else {
    valid = true
    errorMsg = ''
  }
  return { valid, errorMsg }
}

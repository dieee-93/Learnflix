import { type CategoryModelType, type InputApiType, type VideoModelType } from '@/Types'
import { Badge, Box, TextField, Typography } from '@mui/material'
import type React from 'react'
import { HexColorPicker } from 'react-colorful'
import { type OnInputChangeType } from '../Form'
import { type ChangeEvent } from 'react'
import CategorySelect from './CategorySelect/CategorySelect'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  inputData: InputApiType
  values: CategoryModelType | VideoModelType
  validation: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleChange: OnInputChangeType
}

const Input = (props: Props): JSX.Element => {
  const { inputData, values, validation, handleChange } = props
  const { label, type, name } = inputData
  type ObjectKey = keyof typeof props.values

  switch (type) {
    case 'text':
      return (<>
      <TextField sx={{ margin: '10px 0px', color: 'white!important' }}
          label={label}
          name={name}
          value={values[name as ObjectKey].value}
          error={ !values[name as ObjectKey].valid && values[name as ObjectKey].errorMsg !== ''}
          helperText={values[name as ObjectKey].errorMsg}
          fullWidth
          onChange={(e) => {
            handleChange(e)
          }}
          onBlur={e => { validation(e) } }

        />
     </>
      )
    case 'number':
      return (
        <TextField sx={{ margin: '10px 0px' }}
          label={label}
          name={name}
          type={type}
          error={!values[name as ObjectKey].valid && values[name as ObjectKey].errorMsg !== ''}
          helperText={values[name as ObjectKey].errorMsg}
          value={values[name as ObjectKey].value}
          fullWidth
          onChange={(e) => { handleChange(e) }}
          onBlur={(e) => { validation(e) }}
        />
      )
    case 'color':
      return (
        <Box sx={{ margin: '10px 0px' }}>
          <Typography variant='h5' component='p'>
            Color de categoria
          </Typography>
          <HexColorPicker

            color={values[name as ObjectKey].value as string}
            name={name}
            onChange={(e) => { handleChange(e as unknown as ChangeEvent<HTMLInputElement>) }}
          />
          {!values[name as ObjectKey].valid && <Badge badgeContent={values[name as ObjectKey].errorMsg}/>}
        </Box>
      )
    case 'select':
      return (<Box><CategorySelect key={uuidv4()} value={values[name as ObjectKey].value as string} error={!values[name as ObjectKey].valid && values[name as ObjectKey].errorMsg !== ''}
      helperText={values[name as ObjectKey].errorMsg} handleChange={props.handleChange} validation={props.validation}></CategorySelect></Box>)
    case 'textarea':
      return (
        <TextField
          label={label}
          name={name}
          value={values[name as ObjectKey].value}
          multiline
          minRows={5}
          maxRows={12}
          sx={{ margin: '10px 0px', fontSize: '0.2em' }}
          fullWidth
          error={!values[name as ObjectKey].valid && values[name as ObjectKey].errorMsg !== ''}
          helperText={values[name as ObjectKey].errorMsg}
          onChange={(e) => { handleChange(e) }}
          onBlur={(e) => { validation(e) }}
        />
      )
  }
}

export default Input

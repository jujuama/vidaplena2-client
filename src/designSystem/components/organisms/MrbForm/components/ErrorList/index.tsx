import { MrbAlert } from '../../../../../components/atoms'
import { InputError } from '../../domain/inputError'

type Props = {
  errors: Record<string, InputError[]>
}

export const ErrorList: React.FC<Props> = ({ errors }) => {
  if (Object.keys(errors).length === 0) {
    return <></>
  }

  const errorList = Object.values(errors).flatMap(errorInput => errorInput)

  return (
    <MrbAlert variant="danger">
      {errorList.map((error, indexError) => (
        <b key={indexError}>{error.message}</b>
      ))}
    </MrbAlert>
  )
}

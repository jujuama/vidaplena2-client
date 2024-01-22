import { MrbCard, MrbCol, MrbRow } from '../../../../../'
import { AdapterList } from '../../components/AdapterList'
import { FormValues } from '../../domain/values'
import { InputFamilyList } from '../../inputFamily/inputFamily.list'
import { AdapterElement } from '../adapter'
import { AddButton } from './components/AddButton'
import { ItemHeader } from './components/ItemHeader'

export const ListAdapter: React.FC<AdapterElement> = ({
  values,
  errors,
  input,
  settings,
  adapters,
  onChange,
  onError,
}) => {
  const inputFamily = new InputFamilyList({ input })

  const items = inputFamily.findItems(values)

  /* -------------------------------- HANDLERS -------------------------------- */

  const handleClickAdd = () => {
    const valuesUpdated = inputFamily.addItem(values)

    onChange({ values: valuesUpdated })
  }

  const handleClickDelete = (item: FormValues) => {
    const valuesUpdated = inputFamily.removeItem(values, item)

    onChange({ values: valuesUpdated })
  }

  const handleChange = ({ values: itemUpdated }) => {
    const valuesUpdated = inputFamily.updateItem(values, itemUpdated)

    onChange({ values: valuesUpdated })
  }

  const handleError = ({ errors, key, item }) => {
    const errorKey = inputFamily.getItemErrorKey(item, key)
    const errorsUpdated = inputFamily.buildItemErrors(values, item, errors)

    onError({ key: errorKey, errors: errorsUpdated })
  }

  return (
    <MrbCol xs="12" gap={2}>
      {items.map((item, itemIndex) => (
        <>
          <MrbCard key={inputFamily.getItemId(item)}>
            <MrbCard.Body>
              <MrbRow>
                <MrbCol xs="11">
                  <AdapterList
                    values={item}
                    adapters={adapters}
                    settings={settings}
                    onChange={handleChange}
                    errors={inputFamily.filterItemErrors(item, errors)}
                    onError={event => handleError({ ...event, item })}
                  />
                </MrbCol>
                <MrbCol xs="1">
                  {' '}
                  <ItemHeader
                    index={itemIndex}
                    onDelete={() => handleClickDelete(item)}
                  />
                </MrbCol>
              </MrbRow>
            </MrbCard.Body>
          </MrbCard>
        </>
      ))}
      <AddButton onClick={handleClickAdd} />
    </MrbCol>
  )
}

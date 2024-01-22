import { FormSettings } from './index'

export namespace FormSettingsManager {
  export function canEmitOnChange(settings: FormSettings): boolean {
    return settings?.emitStyle === 'onChange'
  }
}

'use client'

import { json } from '@codemirror/lang-json'
import CodeMirror from '@uiw/react-codemirror'
import { ComponentProps, useCallback } from 'react'
import { styled } from 'styled-components'
import { MrbComponent } from '../../../helpers/common'

const Wrapper = styled.div`
  padding: 5px;
  width: 100%;

  & > div > .cm-focused {
    outline: none;
  }
`

/**
 * @component MrbEditor
 * @description An editor component.
 * @prop {string} value - The editor's value.
 * @prop {'text' | 'json'} type - The editor's type.
 * @prop {string} height - The editor's height.
 * @prop {(event: { value: string }) => void} evChange - The function to execute on change.
 */

interface PropsHTML
  extends Omit<ComponentProps<typeof CodeMirror>, 'onChange'> {}

interface Props extends PropsHTML {
  type?: 'text' | 'json'
  isDisabled?: boolean
  height?: string
  onChange?: ({ value }) => void
}

const Styled = { Wrapper }

export const MrbEditor: MrbComponent<Props, typeof Styled> = ({
  type = 'text',
  height = '400px',
  isDisabled,
  onChange,
  ...props
}) => {
  const buildExtensions = () => {
    switch (type) {
      case 'json':
        return [json()]
      default:
        return []
    }
  }

  const handleChange = useCallback((value: string) => {
    if (isDisabled) {
      return
    }

    onChange?.({ value })
  }, [])

  return (
    <Wrapper className="mrb-editor">
      <CodeMirror
        {...props}
        readOnly={isDisabled}
        height={height}
        extensions={buildExtensions()}
        onChange={handleChange}
      />
    </Wrapper>
  )
}

MrbEditor.Styled = Styled

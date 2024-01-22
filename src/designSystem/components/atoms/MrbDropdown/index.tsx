'use client'

import {
  ReactElement,
  ReactNode,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import { MrbComponent } from '../../../helpers/common'
import { MrbIcon } from '../MrbIcon'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbDropdown
 * @description A dropdown component to display a link with sub-actions.
 * @prop {ReactNode} label - The link which displays the sub-action on hover.
 * @prop {ReactNode} children - The sub-actions.
 */
interface Props extends PropsHTML {
  label: ReactElement | string
  children: ReactNode
}

const { Wrapper, Content } = Styled

export const MrbDropdown: MrbComponent<Props, typeof Styled> = ({
  children,
  label,
  ...props
}) => {
  const [display, setDisplay] = useState(false)
  const wrapperRef = useRef(null)

  const displayContent = () => {
    setDisplay(!display)
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDisplay(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <Wrapper {...props} ref={wrapperRef}>
      <span onClick={() => displayContent()}>
        {typeof label === 'string' && (
          <>
            {label}
            <MrbIcon name="expand" />
          </>
        )}
        {typeof label !== 'string' &&
          cloneElement(label, {
            children: (
              <>
                {label.props.children}
                <MrbIcon name="expand" />
              </>
            ),
          })}
      </span>
      {display && <Content>{children}</Content>}
    </Wrapper>
  )
}

MrbDropdown.Styled = Styled

import React from 'react'

/**
 * @deprecated Use the MrbComponent. Look at the MrbButton for a good example.
 */
export namespace HelperCommon {
  export interface BaseProps {
    className?: string
    style?: React.CSSProperties
  }

  export function getBaseProps<Type extends BaseProps>(props: Type): BaseProps {
    return {
      style: props.style,
      className: props.className,
    }
  }
}

export type MrbComponent<Props, Styled = unknown> = React.FC<Props> & {
  Styled: Styled
}

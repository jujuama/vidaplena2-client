import { Utility } from '@/libraries/utility'
import React, { ReactNode } from 'react'

export namespace HelperChildren {
  export function findAndSeparate(
    children: ReactNode,
    childNames: string[],
  ): {
    childrenFound: Record<string, ReactNode[]>
    childrenRemaining: ReactNode[]
  } {
    const response = {
      childrenFound: {},
      childrenRemaining: children,
    } as any

    if (Utility.isNull(children)) {
      return response
    }

    if (!Array.isArray(children)) {
      return response
    }

    response.childrenRemaining = []

    React.Children.map(children, (child: any) => {
      if (React.isValidElement(child)) {
        const childNameFound =
          child.type['displayName'] || child.type['name'] || 'UnknownComponent'

        const isChild = childNames.includes(childNameFound)

        if (isChild) {
          if (
            response.childrenFound[childNameFound] &&
            response.childrenFound[childNameFound].length > 0
          ) {
            response.childrenFound[childNameFound].push(child)
          } else {
            response.childrenFound[childNameFound] = [child]
          }
        } else {
          response.childrenRemaining.push(child)
        }
      } else {
        response.childrenRemaining.push(child)
      }
    })

    return response
  }
}

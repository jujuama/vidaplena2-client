import { MrbAlert } from '@/designSystem'
import React from 'react'

interface Props {
  messages: string[]
}
export const ErrorAlert: React.FC<Props> = ({ messages }) => {
  return (
    <MrbAlert variant="danger">
      {messages.map((message, index) => (
        <p key={index} className="m-0">
          {message}
        </p>
      ))}
    </MrbAlert>
  )
}

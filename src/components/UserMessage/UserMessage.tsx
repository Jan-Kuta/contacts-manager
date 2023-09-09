import { useContext, useEffect } from 'react'
import { UserMessageContext } from '../../contexts/UserMessage'

export const UserMessage = () => {
  const { message, setMessage } = useContext(UserMessageContext)

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(undefined)
      }, 3000)
    }
  }, [message, setMessage])

  if (!message) {
    return null
  }

  return (
    <div className={`alert fixed top-0 left-0 z-10 ${message.type === 'ok' ? 'alert-success' : 'alert-error'}`}>
      {message.type === 'ok' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        )
      }
      <span>{message.text}</span>
    </div>
  )
}
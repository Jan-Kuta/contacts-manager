import { createContext, useCallback, useState } from 'react'

type MessageType = 'ok' | 'error'

type UserMessage = {
  text: string
  type: MessageType
  lastUpdated: Date
}

type UserMessageContextType = {
  setMessage: (text?: string, type?: MessageType) => void
  message: UserMessage | undefined
}

const UserMessageContext = createContext<UserMessageContextType>({ setMessage: () => {}, message: undefined });

function UserMessageProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<UserMessage | undefined>(undefined);

  const setMessage = useCallback((text?: string, type: MessageType = 'ok') => {
    if (text === undefined) {
      setData(undefined)
      return
    }

    setData({ text, type, lastUpdated: new Date() })
  }, [])

  return (
    <UserMessageContext.Provider value={{ message: data, setMessage }}>
      {children}
    </UserMessageContext.Provider>
  );
}

export { UserMessageContext, UserMessageProvider };

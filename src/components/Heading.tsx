
type Props = {
  text: string
}

export const Heading = (props: Props) => {
  const { text } = props

  return (
    <h1 style={{ color: 'darkblue'}}>{text}</h1>
  )
}

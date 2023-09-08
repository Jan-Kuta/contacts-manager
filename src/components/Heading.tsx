
type Props = {
  text: string
}

export const Heading = (props: Props) => {
  const { text } = props

  return (
    <h1>{text}</h1>
  )
}

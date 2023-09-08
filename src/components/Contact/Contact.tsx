
type Props = {
  name: string
  email: string
  phone: string
}

export const Contact = ({ name, email, phone }: Props) => {
  return (
    <div className="collapse collapse-arrow border border-base-300 bg-base-200 my-4">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{name}</div>
      <div className="collapse-content">
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    </div>
  )
}

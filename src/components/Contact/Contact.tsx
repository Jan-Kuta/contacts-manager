import styles from './Contact.module.css'

type Props = {
  name: string
  email: string
  phone: string
}

export const Contact = ({ name, email, phone }: Props) => {
  return (
    <div>
      <h4 className={styles.title}>{name}</h4>
      <ul>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
      </ul>
    </div>
  )
}

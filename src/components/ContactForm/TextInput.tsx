
type TextInputProps = {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export const TextInput = ({ label, name, value, onChange, placeholder }: TextInputProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </div>
  )
}
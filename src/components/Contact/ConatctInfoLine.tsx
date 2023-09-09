
type Props = {
  value: string
  icon: React.ReactNode
}

export const ConatctInfoLine = ({ value, icon }: Props) => {
  // coppy value to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        alert('Value copied to clipboard')
      })
      .catch(() => {
        alert('Value failed to copy to clipboard')
      })
  }

  return (
    <button type="button" onClick={copyToClipboard}
            className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700">
      {icon}
      {value}
    </button>
  )
}
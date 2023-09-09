
type Props = {
  value: string
  icon: React.ReactNode
}

export const ConatctInfoLine = ({ value, icon }: Props) => {
  return (
    <button type="button"
            className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700">
      {icon}
      {value}
    </button>
  )
}
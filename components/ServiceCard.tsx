import Image from 'next/image'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex gap-4 items-start p-6 bg-white rounded-lg shadow-sm">
      <div className="w-6 h-6">
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}
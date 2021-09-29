import React from 'react'

export type TReportCard = {
  category: string
  name: string
  code: string
  id: number
  keywords: string[]
  is_active: number
}

const ReportCard: React.FC<TReportCard> = (ReportItem: TReportCard) => {
  const { code, name, category, keywords } = ReportItem
  return (
    <div className="p-4 md:w-1/4">
      <div className="flex rounded-lg h-full bg-gray-100 p-6 flex-col">
        <div className="flex items-center mb-1">
          Code: {code}
          <br />
          Name: {name}
          <br />
          Category: {category}
          <br />
          Keywords: {keywords.join(', ')}
          <br />
        </div>
      </div>
    </div>
  )
}

export default ReportCard

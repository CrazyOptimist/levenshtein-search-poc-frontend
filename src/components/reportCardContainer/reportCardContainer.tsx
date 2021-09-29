import React from 'react'
import * as data from './data.json'

import ReportCard, { TReportCard } from '../reportCard/reportCard'

export type TReportCardExtended = TReportCard & {
  nameLeven?: number
  categoryLeven?: number
  keywordsLeven?: number
}

const ReportCardContainer: React.FC = () => {
  const reports = data.reports as TReportCard[]

  return (
    <div className="flex flex-wrap -m-4">
      {reports &&
        reports.map((item: TReportCardExtended) => <ReportCard key={item.id} {...item} />)}
    </div>
  )
}

export default ReportCardContainer

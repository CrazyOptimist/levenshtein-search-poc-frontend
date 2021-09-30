import React, { useState } from 'react'
import * as data from './data.json'

import ReportCard, { TReportCard } from '../reportCard/reportCard'
import Search from '../search/search.component'
import { levenSearch } from '../../common/helper'

const ReportCardContainer: React.FC = () => {
  const allReports = data.reports as TReportCard[]
  const [reports, setReports] = useState(allReports)
  const onQueryChange = (query: string) => setReports(levenSearch(10, query, allReports))

  return (
    <>
      <Search onChange={onQueryChange} />
      <div className="flex flex-wrap -m-4">
        {reports && reports.map((item: TReportCard) => <ReportCard key={item.id} {...item} />)}
      </div>
    </>
  )
}

export default ReportCardContainer

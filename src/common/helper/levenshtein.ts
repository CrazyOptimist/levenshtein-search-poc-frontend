import { TReportCard } from '../../components/reportCard/reportCard'
const DEFAULT_LEVEN_INDEX = 10

export function levenshtein(a: string, b: string): number {
  const an = a ? a.length : 0
  const bn = b ? b.length : 0
  if (an === 0) {
    return bn
  }
  if (bn === 0) {
    return an
  }
  const matrix = new Array<number[]>(bn + 1)
  for (let i = 0; i <= bn; ++i) {
    let row = (matrix[i] = new Array<number>(an + 1))
    row[0] = i
  }
  const firstRow = matrix[0]
  for (let j = 1; j <= an; ++j) {
    firstRow[j] = j
  }
  for (let i = 1; i <= bn; ++i) {
    for (let j = 1; j <= an; ++j) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] =
          Math.min(
            matrix[i - 1][j - 1], // substitution
            matrix[i][j - 1], // insertion
            matrix[i - 1][j], // deletion
          ) + 1
      }
    }
  }
  return matrix[bn][an]
}

export function levenSearch(
  levenIndex: number = DEFAULT_LEVEN_INDEX,
  searchText: string,
  reports: TReportCard[],
): TReportCard[] {
  if (!searchText) return reports
  const filteredReports: TReportCard[] = reports
    .map((report: TReportCard) => {
      const { name, category, keywords } = report
      report.nameLeven = levenshtein(searchText, name)
      report.categoryLeven = levenshtein(searchText, category)
      report.keywordsLeven = Math.min(
        ...keywords.map((keyword: string) => levenshtein(searchText, keyword)),
      )
      return report
    })
    .filter((report: TReportCard) => {
      const { nameLeven, categoryLeven, keywordsLeven } = report
      return (
        (nameLeven as number) <= levenIndex ||
        (categoryLeven as number) <= levenIndex ||
        (keywordsLeven as number) <= levenIndex
      )
    })
    .sort(
      (a: TReportCard, b: TReportCard) =>
        (a.nameLeven as number) - (b.nameLeven as number) ||
        (a.categoryLeven as number) - (b.categoryLeven as number) ||
        (a.keywordsLeven as number) - (b.keywordsLeven as number),
    )

  return filteredReports
}

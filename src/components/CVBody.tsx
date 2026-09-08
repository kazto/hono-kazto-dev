import type { CurriculumVitaeEntry } from '../interfaces'

export const getPeriod = (fromdate: string, todate: string): string => {
    const parseYear = (d: string) => Number(d.replace(/年.*$/, ''))
    const parseMonth = (d: string) => Number(d.replace(/.*年/, '').replace('月', '')) - 1
    const f = new Date(parseYear(fromdate), parseMonth(fromdate), 1)
    const t = todate == '現在' ? new Date() : new Date(parseYear(todate), parseMonth(todate), 1)
    const diffdate = t.getTime() - f.getTime()
    const diff = new Date(diffdate)
    const diffMonth = diff.getMonth()
    const diffYear = diff.getFullYear() - 1970
    return (diffYear > 0 ? `${diffYear}年` : '') + `${diffMonth}ヶ月`
}

export type CurriculumVitaeGroup = {
    belongs_to: string
    from_date: string
    to_date: string
    period: string
    entries: CurriculumVitaeEntry[]
}

// 同一所属が連続する案件（SESでの客先変更など）を1ブロックにまとめる
export const groupByBelongsTo = (curriculum_vitae: CurriculumVitaeEntry[]): CurriculumVitaeGroup[] => {
    const groups: CurriculumVitaeGroup[] = []
    for (const entry of curriculum_vitae) {
        const last = groups[groups.length - 1]
        if (last && last.belongs_to === entry.belongs_to) {
            last.entries.push(entry)
            last.to_date = entry.to_date
            last.period = getPeriod(last.from_date, last.to_date)
        } else {
            groups.push({
                belongs_to: entry.belongs_to,
                from_date: entry.from_date,
                to_date: entry.to_date,
                period: getPeriod(entry.from_date, entry.to_date),
                entries: [entry],
            })
        }
    }
    return groups.reverse()
}

export const CVBody = (groups: CurriculumVitaeGroup[]) => {
    const listCV = groups.map((g, i) => {
        return (
            <div className="divcvgroup" key={i.toString()}>
                <div className="divcvtable divcvgroupheader">
                    <div className="divcvtablerow">
                        <div className="divtablecvtitle">所属</div>
                        <div className="divtablecvbody">{g.belongs_to}</div>
                        <div className="divtablecvtitle">期間</div>
                        <div className="divtablecvbody">
                            {g.from_date} 〜 {g.to_date}（{g.period}）
                        </div>
                    </div>
                </div>
                {g.entries.map((v, j) => (
                    <div className="divcvtable" key={j.toString()}>
                        <div className="divcvtablerow">
                            <div className="divtablecvtitle">自</div>
                            <div className="divtablecvbody">{v['from_date']}</div>
                            <div className="divtablecvtitle">至</div>
                            <div className="divtablecvbody">{v['to_date']}</div>
                            <div className="divtablecvtitle">期間</div>
                            <div className="divtablecvbody">{getPeriod(v['from_date'], v['to_date'])}</div>
                        </div>
                        <div className="divcvtablerow">
                            <div className="divtablecvtitle">概要</div>
                            <div className="divtablecvbody">{v['title']}</div>
                            <div className="divtablecvtitle">役割</div>
                            <div className="divtablecvbody">{v['role']}</div>
                        </div>
                        <div className="divcvtablerow">
                            <div className="divtablecvtitle">技能</div>
                            <div className="divtablecvbody">{v['skill']}</div>
                            <div className="divtablecvtitle">チーム</div>
                            <div className="divtablecvbody">{v['team']}</div>
                        </div>
                        <div className="divcvtablerow">
                            <div className="divtablecvtitle">詳細</div>
                            <div className="divtablecvbody">{v['description']}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    })
    return listCV
}

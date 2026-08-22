import { CVBody, groupByBelongsTo } from './components/CVBody'
import { CVHeader } from './components/CVHeader'
import type { CurriculumVitaeData, CurriculumVitaeProps } from './interfaces'

const CurriculumVitaePage = ({ data, build_date }: CurriculumVitaeProps) => {
    const { curriculum_vitae } = data as CurriculumVitaeData

    const listBase = CVHeader({ data, build_date })
    const listCV = CVBody(groupByBelongsTo(curriculum_vitae).reverse())

    return (
        <div className="cvbox">
            <h1 className="cvtitle">職務経歴書</h1>
            <div className="cvsignature">
                更新日： {build_date}
                <br />
                髙橋 和人
            </div>
            <div className="divbox">
                {listBase}
                <h2>職務経歴</h2>
                {listCV}
            </div>
        </div>
    )
}

export async function fetchCVData() {
    const headers = { 'User-Agent': 'hono-kazto-dev' }
    const res = await fetch('https://raw.githubusercontent.com/kazto/curriculum-vitae/master/curriculum-vitae.json', { headers })
    if (!res.ok) throw new Error(`Failed to fetch CV json: ${res.statusText}`)
    const data = await res.json()

    const resApi = await fetch('https://api.github.com/repos/kazto/curriculum-vitae/branches/master', { headers })
    if (!resApi.ok) throw new Error(`Failed to fetch CV api: ${resApi.statusText}`)
    const dataApi = await resApi.json()
    const build_date = dataApi['commit']['commit']['author']['date']
        .replace(/T.*$/, '')
        .replace('-', '/')
        .replace('-', '/')

    return { data, build_date }
}

export default CurriculumVitaePage

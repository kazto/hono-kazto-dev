import type { CurriculumVitaeData, CurriculumVitaeProps, CurriculumVitaeSkill, KVPair } from '../interfaces'

const skillCategories: Array<{ ckey: keyof CurriculumVitaeSkill; value: string }> = [
    { ckey: 'core', value: 'コア' },
    { ckey: 'web', value: 'Web' },
    { ckey: 'platform', value: '基盤' },
    { ckey: 'ai', value: 'AI' },
]

// skill はカテゴリ別オブジェクトへ移行したが、データは別リポジトリから
// 実行時に取得している。データ更新とデプロイの前後どちらでも壊れないよう、
// 旧形式の文字列もそのまま描画できるようにしておく。
const renderSkill = (skill: CurriculumVitaeData['skill']) => {
    if (typeof skill === 'string') return skill

    return skillCategories
        .filter(({ ckey }) => skill[ckey])
        .map(({ ckey, value }) => (
            <div className="divskillrow" key={ckey}>
                <span className="divskilllabel">{value}</span>
                {skill[ckey]}
            </div>
        ))
}

// 未記入の項目はラベルだけの空行になってしまうため、行ごと出さない
const hasContent = (value: CurriculumVitaeData[keyof CurriculumVitaeData]) => {
    if (Array.isArray(value)) return value.length > 0
    if (typeof value === 'object') return Object.values(value).some((v) => v)
    return Boolean(value)
}

export const CVHeader = ({ data }: CurriculumVitaeProps) => {
    const contents: Array<KVPair> = [
        { ckey: 'speciality', value: '特徴' },
        { ckey: 'skill', value: '技術' },
        { ckey: 'business', value: '事業領域' },
        { ckey: 'self_recommend', value: '自己分析' },
        { ckey: 'region_of_interest', value: '興味分野' },
    ]
    const listBase = []

    for (const i in contents) {
        const { ckey, value } = contents[i]
        if (!hasContent(data[ckey])) continue
        listBase.push(
            <div className="divtable" key={i.toString()}>
                <div className="divtabletitle">{value}</div>
                <div className="divtablebody">
                    {ckey === 'skill' ? renderSkill(data.skill) : (data[ckey] as string)}
                </div>
            </div>
        )
    }
    return listBase
}

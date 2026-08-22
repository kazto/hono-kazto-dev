// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
    id: number
    name: string
}

export type CurriculumVitaeEntry = {
    from_date: string
    to_date: string
    belongs_to: string
    title: string
    role: string
    skill: string
    team: string
    description: Array<string>
}

export type CurriculumVitaeSkill = {
    core: string
    web: string
    platform: string
    ai: string
}

export type CurriculumVitaeData = {
    speciality: string
    // データ側がカテゴリ別オブジェクトへ移行済み。旧形式の文字列も受け付ける
    skill: CurriculumVitaeSkill | string
    business: string
    self_recommend: Array<string>
    region_of_interest: Array<string>
    curriculum_vitae: Array<CurriculumVitaeEntry>
}

export type CurriculumVitaeProps = {
    data: CurriculumVitaeData
    build_date: string
}

export type ServerSideProps = {
    props: CurriculumVitaeProps
}

export type KVPair = {
    ckey: keyof CurriculumVitaeData
    value: string
}

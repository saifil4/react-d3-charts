type Section = {
    heading: string;
    component: React.FC<any>,
    files: { code: string, name: string }[],
}

export type Group = {
    name: string | null,
    panels: Section[]
}
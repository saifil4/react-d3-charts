type Section = {
    heading: string;
    component: React.FC<any>,
    files: { code: string, name: string }[],
    status: "available" | "in-progress"
}

export type Group = {
    name: string | null,
    sections: Section[]
}
type Section = {
    heading: string;
    component: React.FC<any>,
    files: { code: string, name: string }[],
}

export type Group = {
    name: string | null,
    sections: Section[]
}

// export type Chart {
//     name: string,
    
// }
export type TChart<Data> = {
    margin: {
        top: number,
        right: number,
        bottom: number,
        left: number
    },
    width: number,
    height: number,
    title: string,
    data: Data[]
}



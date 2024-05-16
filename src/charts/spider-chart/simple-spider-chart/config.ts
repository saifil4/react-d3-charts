

export type Car = {
    "model": string,
    specs: Specs
}

export type Specs = {
    "0-100": number,
    "top_speed": number,
    "range": number,
    "fast_charge": number
}

export const width = 600;
export const height = 600;


export const parameterKeys = ["0-100", "top_speed", "range", "fast_charge"];



export const cars: Car[] = [
    {
        model: "Mercedes",
        specs: {
            "0-100": 3.5,
            top_speed: 250,
            range: 500,
            fast_charge: 30,
        }
    },
    {
        model: "Tesla",
        specs: {
            "0-100": 2.5,
            top_speed: 220,
            range: 600,
            fast_charge: 20,
        }
    },
    {
        model: "Porsche",
        specs: {
            "0-100": 3.0,
            top_speed: 270,
            range: 400,
            fast_charge: 35,
        }

    },
    {
        model: "BMW",
        specs: {
            "0-100": 4.0,
            top_speed: 240,
            range: 450,
            fast_charge: 40,
        }
    },
    {
        model: "Audi",
        specs: {
            "0-100": 3.8,
            top_speed: 260,
            range: 550,
            fast_charge: 25,
        }
    }
]

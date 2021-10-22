import { CarsWebsite } from "./carsRUs.js"

const database = {
    paints: [
        {
            id: 1,
            color: "silver",
            price: 100
        },
        {
            id: 2,
            color: "midnight blue",
            price: 100
        },
        {
            id: 3,
            color: "firebrick red",
            price: 100
        },
        {
            id: 4,
            color: "spring green",
            price: 100
        },
    ],
    interiors: [
        {
            id: 1,
            type: "beige fabric",
            price: 250
        },
        {
            id: 2,
            type: "charcoal fabric",
            price: 250
        },
        {
            id: 3,
            type: "white leather",
            price: 250
        },
        {
            id: 4,
            type: "black leather",
            price: 250
        },
    ],
    technologies: [
        {
            id: 1,
            package: "basic",
            price: 100
        },
        {
            id: 2,
            package: "navigation",
            price: 150
        },
        {
            id: 3,
            package: "visibility",
            price: 200
        },
        {
            id: 4,
            package: "ultra",
            price: 250
        },
    ],
    wheels: [
        {
            id: 1,
            wheel: "17in pair radial",
            price: 150
        },
        {
            id: 2,
            wheel: "17in pair radial black",
            price: 175
        },
        {
            id: 3,
            wheel: "18in pair spoke silver",
            price: 150
        },
        {
            id: 4,
            wheel: "18in pair spoke black",
            price: 200
        },
    ],
    types: [
        {
            id: 1,
            type: "car",
            priceMultiplier: 1
        },
        {
            id: 2,
            type: "suv",
            priceMultiplier: 1.5
        },
        {
            id: 3,
            type: "truck",
            priceMultiplier: 2.25
        }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 2,
            interiorId: 4,
            technologyId: 4,
            wheelId: 4,
            typeId: 2
        }
    ],
    orderBuilder: [
        {
            paintId: 0,
            interiorId: 0,
            technologyId: 0,
            wheelId: 0,
            typeId: 0
        }
    ]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getTypes = () => {
    return database.types.map(type => ({...type}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}
export const setType = (id) => {
    database.orderBuilder.typeId = id
}
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
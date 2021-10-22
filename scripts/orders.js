import { getPaints, getInteriors, getTechnologies, getWheels, getOrders, getTypes } from "./database.js"

const buildOrderListItem = (order) => {
    const paints = getPaints()
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    let totalCost = foundPaint.price
    
    const interiors = getInteriors()
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    totalCost += foundInterior.price
    
    const technologies = getTechnologies()
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    ) 
    totalCost += foundTechnology.price

    const wheels = getWheels()
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    totalCost += foundWheel.price

    const types = getTypes()
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )
    totalCost = totalCost * foundType.priceMultiplier

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {   
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    
    html += "</ul>"

    return html
}
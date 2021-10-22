import { Paints } from "./paints.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"
import { Types } from "./types.js"

document.addEventListener("click", event => {
    if (event.target.id === "orderButton") {
        addCustomOrder()
    }
})

export const CarsWebsite = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paint">
                <h2>Paint</h2>
                <div>${Paints()}</div>
            </section>
            <section class="choices__interior">
                <h2>Interiors</h2>
                <div>${Interiors()}</div>
            </section>
            <section class="choices__technology">
                <h2>Technologies</h2>
                <div>${Technologies()}</div>
            </section>
            <section class="choices__wheel">
                <h2>Wheels</h2>
                <div>${Wheels()}</div>
            </section>
            <section class="choices__type">
            <h2>Types</h2>
            <div>${Types()}</div>
        </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            <div>${Orders()}</div>
        </article>
    `
}
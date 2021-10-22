import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)
 

export const Interiors = () => {
    let html = ""

    for (const interior of interiors) {
        html += `<div>
        <input type="radio" name="interior" value="${interior.id}" /> ${interior.type}
        </div>
        `
    }

    return html
}
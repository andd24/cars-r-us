import { getTypes, setType } from "./database.js"

const types = getTypes()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "type") {
            setType(parseInt(changeEvent.target.value))
        }
    }
)
 

export const Types = () => {
    let html = ""

    for (const type of types) {
        html += `<div>
        <input type="radio" name="type" value="${type.id}" /> ${type.type}
        </div>
        `
    }

    return html
}
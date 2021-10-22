import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "paint") {
            setPaint(parseInt(changeEvent.target.value))
        }
    }
)
 

export const Paints = () => {
    let html = ""

    for (const paint of paints) {
        html += `<div>
        <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}
        </div>
        `
    }

    return html
}

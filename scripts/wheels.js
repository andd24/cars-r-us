import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "wheel") {
            setWheel(parseInt(changeEvent.target.value))
        }
    }
)
 

export const Wheels = () => {
    let html = ""

    for (const wheel of wheels) {
        html += `<div>
        <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheel}
        </div>
        `
    }

    return html
}
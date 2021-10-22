import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "technology") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)
 

export const Technologies = () => {
    let html = ""

    for (const technology of technologies) {
        html += `<div>
        <input type="radio" name="technology" value="${technology.id}" /> ${technology.package}
        </div>
        `
    }

    return html
}
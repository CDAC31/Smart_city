let $ = (id) => document.getElementById;

function $classClick(cName, func) {
    let elements = document.getElementsByClassName(cName)
    for (let index = 0; index < elements.length; index++) {
        elements[index].addEventListener("click", func)

    }
}
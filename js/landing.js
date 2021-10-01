let root = document.documentElement;
document.querySelector('.jn').addEventListener('change', (e) => {
    console.log(root.style.getPropertyValue('--c-princ'))
    if (root.style.getPropertyValue('--c-princ') == "white" || root.style.getPropertyValue('--c-princ') === "") {

        root.style.setProperty('--c-princ', "black")
        root.style.setProperty('--c-sec', "white")
        e.target.innerHTML = "Jour"
    }
    else if (root.style.getPropertyValue('--c-princ') == "black") {
        root.style.setProperty('--c-princ', "white")
        root.style.setProperty('--c-sec', "black")
        e.target.innerHTML = "Nuit"

    }
})
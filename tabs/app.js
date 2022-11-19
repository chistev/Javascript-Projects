var buttons = document.querySelectorAll("button")
var tabPanels = document.querySelectorAll(".tabPanel")

function showPanel(panelIndex, colorCode) {
    buttons.forEach(function (node) {
        node.style.backgroundColor = ""
        node.style.color = ""
    })
    buttons[panelIndex].style.backgroundColor = colorCode
    buttons[panelIndex].style.color = "white"

    tabPanels.forEach(function (node) {
        node.style.display="none"
    })

    tabPanels[panelIndex].style.display = "block"
    tabPanels[panelIndex].style.backgroundColor = colorCode
}

showPanel()
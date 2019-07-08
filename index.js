// create the base elements for the page
let body = document.querySelector('body')

// create toolbar
let toolbar = document.createElement('div')
toolbar.setAttribute('id', 'dys--toolbar')
toolbar.setAttribute('class', 'hidden')

function toggleDyslexiaMode() {
  if (toolbar.classList.contains('hidden')) {
    showAssistantButton.innerHTML = 'X'
    toolbar.removeAttribute('class')
    toolbar.style.height = '100px'
    toolbar.style.transition = 'height 0.5s'
  } else {
    showAssistantButton.innerHTML = 'Läs-Assistent'
    toolbar.className = 'hidden'
    toolbar.style.height = '0'
    toolbar.style.transition = ' height 0.5s'
    toolbar.style.padding = '0'
  }
}

showChoices = id => {
  let element = document.getElementById(id)
  if (element.style.display !== 'block') {
    element.style.display = 'block'
  } else {
    element.style.display = 'none'
  }
}

changeBackgroundColor = color => {
  body.style.background = color
  addCurrentBackgroundColor()
}

addCurrentBackgroundColor = () => {
  const style = getComputedStyle(body)
  let backgroundColor = style.backgroundColor
  document.getElementById(
    'dys--toolbar--bgColor--button'
  ).style.background = backgroundColor
}

// create button to open the assistant
let showAssistantButton = document.createElement('button')
showAssistantButton.setAttribute('id', 'dys--toolbar-button')
showAssistantButton.innerHTML = 'Läs-assistent'
showAssistantButton.addEventListener('click', toggleDyslexiaMode)

// toolbar content
let toolbarContent = document.createElement('div')
toolbarContent.setAttribute('id', 'dys--toolbar--content')

// dropdown component
let dropdownSectionWrapper = document.createElement('div')
toolbarContent.setAttribute('class', 'dys--toolbar--choice dropdown')
toolbarContent.setAttribute('title', 'Bakgrundsfärg')
let dropdownSection = document.createElement('div')
dropdownSection.setAttribute('id', 'dys--toolbar--bgColor')
dropdownSection.setAttribute('class', 'dropup')
dropdownSection.addEventListener('click', () => {
  showChoices('bg-colors')
})
let dropdownButton = document.createElement('button')
dropdownButton.setAttribute('id', 'dys--toolbar--bgColor--button')
dropdownButton.setAttribute('class', 'dys--toolbar--button dropbtn')
let icon = document.createElement('i')
icon.setAttribute('class', 'material-icons')
icon.innerHTML = 'format_color_fill'
dropdownButton.appendChild(icon)

// dropdown component - options wrapper
let dropdownContentWrapper = document.createElement('div')
dropdownContentWrapper.setAttribute('class', 'dropup-content')
dropdownContentWrapper.setAttribute('id', 'bg-colors')

let bgOptions = [
  '#000',
  '#B097A5',
  '#D0A1A8',
  '#E7BEAF',
  '#C09A88',
  '#E99485',
  '#fff'
]

bgOptions.map(bg => {
  let link = document.createElement('a')
  link.setAttribute('href', '#')
  link.style.background = bg
  link.addEventListener('click', () => {
    changeBackgroundColor(bg)
  })
  dropdownContentWrapper.appendChild(link)
})

// add elements to the DOM
body.appendChild(showAssistantButton)
body.appendChild(toolbar)
toolbar.appendChild(toolbarContent)
toolbarContent.appendChild(dropdownSectionWrapper)
dropdownSectionWrapper.appendChild(dropdownSection)
dropdownSection.appendChild(dropdownButton)
dropdownSection.appendChild(dropdownContentWrapper)

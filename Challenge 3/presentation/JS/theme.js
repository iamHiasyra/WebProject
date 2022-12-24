const themes = document.querySelectorAll('[data-theme-button]')
const themeStyleSheetLink = document.querySelector('#themeLink')
const arr = [...themes]
const screen = document.querySelector('[data-output]')

function ThemeSelector(themeName){
    themeStyleSheetLink.setAttribute('href', `../CSS/${themeName}.css`)
}
arr.forEach((theme, index) => {
    theme.addEventListener("change", () => {
        ThemeSelector(theme.value);

        switch (index) {
            case 0: 
            screen.style.textAlign = "left"
            break;

            case 1: 
            screen.style.textAlign = "center"
            break;

            case 2: 
            screen.style.textAlign = "right"
            break;
        
            default:
                break;
        }

        theme.style.opacity = "1";
            arr
            .filter((item) => item != theme)
            .forEach((item) => {item.style.opacity = "0"})
    })
})


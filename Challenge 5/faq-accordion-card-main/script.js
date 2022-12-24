const buttons = document.querySelectorAll("#arrow");
const p = document.querySelectorAll("p");

const arr1 = [...buttons]
const arr2 = [...p]
const arr_length = arr1.length;

function ToggleNode(button, p) {
    button.addEventListener("click", () => {
        p.classList.toggle("hidden")
    })
}

for (let i = 0; i < arr_length; i++) {
    ToggleNode(arr1[i], arr2[i]);
}
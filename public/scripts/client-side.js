const quickscanForm = document.querySelector("form")
const submitButton = document.querySelector("form button")
quickscanForm.addEventListener("submit", async function (event) {
    event.preventDefault()
    submitButton.classList.add("loading")
    submitButton.textContent = "Versturen..."

    let formData = new FormData(quickscanForm);

    const response = await fetch(quickscanForm.action, {
        method: quickscanForm.method,
        body: new URLSearchParams(formData)
    })

    const responseData = await response.text()
    const parser = new DOMParser()
    const responseDOM = parser.parseFromString(responseData, 'text/html')


    submitButton.classList.remove("loading")
    submitButton.classList.add("alert-success")
    submitButton.textContent = " ✔ Opgeslagen!"

    quickscanForm.reset()

    setTimeout(() => {
        submitButton.classList.remove('alert-success')
        submitButton.textContent = 'Opslaan'
        quickscanForm.reset()
    }, 3000)
})
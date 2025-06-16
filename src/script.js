// references to HTML elements
const form = document.getElementById(`form`)
const selector = document.getElementById(`selector`)
const input = document.getElementById(`guest-name`)
const list = document.getElementById(`list`)
const button = document.getElementById(`button`)








// arrays to hold the values

// adding event listener to the form
button.addEventListener(`click`, (event) => {
   
    event.preventDefault()

     alert("Button Clicked")

     console.log(input)

    // getting the value of the input
    const value = input.value
    // checking if the value is empty
    if (value === ``) {
        alert(`Please enter a value`)
        return
    }
    // checking if element is not number
    if (value == parseInt(value)) {
        alert(`Please enter a valid name`)
        return
    }
    // checking if number of guests is more than 10
    if (value > 10) {
        alert(`Number of guests is full`)
        return
    }
    
    // creating a new list item
    const item = document.createElement(`li`)
    item.textContent = value
    // appending the item to the list
    list.appendChild(item)
    // clearing the input
    input.value = ``
    let deleteButton = document.createElement(`button`)
    deleteButton.textContent = `Delete`
    deleteButton.addEventListener(`click`, () => {
        list.removeChild(item)
    })
    item.appendChild(deleteButton)
})
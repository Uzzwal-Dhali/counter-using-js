let data = 0
const value = document.getElementById('value')
value.innerText = data

const increase = document.getElementById('increase')
increase.addEventListener("click", () => {
  value.innerText = ++data
})

const decrease = document.getElementById('decrease')
decrease.addEventListener("click", () => {
  value.innerText = --data
})

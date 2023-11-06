
const userInput = prompt("Please enter fryo flavors sperated by a ,")

const userFlavors = userInput.toLowerCase().split(",")

const flavorCounts = {}

for (const flavor of userFlavors) {
  flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1
}

console.log(userFlavors)

console.table(flavorCounts)



// Write a function to calculate the area of a rectangle with a fixed width. Use the bind method to create a new function with a width of 10 and calculate the area when the height is 5.


function calculateArea(height, width) {
    return width * height

}
let finalArea = calculateArea.bind(null, 10)
console.log(finalArea(5))

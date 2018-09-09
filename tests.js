var index = require("./index.js")
name = "Susan"
if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}

height = 70

if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}

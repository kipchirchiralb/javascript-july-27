function sumValues(x,y,z, cry){
    console.log(x+y+z)
    cry()
}

sumValues(4,87,9,function lia(){console.log("uuuuuuuuiiiiii")} )

// arguments - the data passed when calling/invoking a funtion
// argument can be of any type: number, string, array, object, function

// the function that is put in another function as an argument, is called a callback function

// mostly we use functions(hof) that need functions as arguments 

const colors = ["red","pink","yellow","purple"]
colors.push('orange')
const result = colors.filter((color)=>{
    return color.startsWith("p")
})
// arrow function
console.log(result)

// hof in arrays - -  sort, filter, map, forEach..
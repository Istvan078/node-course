// const square = function (x) {
//     return x * x
// } 

// const square2 = (x) => {
//  return   x*x
// }

// const square = (x) => x*x

// console.log(square(4))

const event1 = {
    name: "Birthday Party",
    guestList: ["Béla", "Jenny", "Mike"],
    printGuestList () {
    //  const that = this
        console.log("Guest list for " + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + " jön a " + this.name + "-ra.")  //  a nyílfunkciók nem kötik a saját this értéküket.
        })  //  a callback funkciója egyszer meghívódik külön a tömb minden elemére, minden vendégre.
    }
}

event1.printGuestList()
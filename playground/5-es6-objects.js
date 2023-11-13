//  Object property shorthand

const name = "Istvan"
const userAge = "31"

const user = {
    name,
    age: userAge,
    location: "Hungary"
}

//  console.log(user)

//  Object destructuring

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

const {label:productLabel, stock, rating = 5} = product  // létrehoz egy label és egy stock nevű változót az objektumban lévő label és stock property értékével.
//  Az egyenlő jel utáni rész azt határozza meg, hogy melyik objektből akarjuk kiszedni a propertyjeik értékét és elmenteni változókba!
//  így könnyen lehet hivatkozni az object propertyk értékére.

// console.log(rating)

const transaction = (type, {label, stock}) => {  //  Ha egy funkciónak az egyik argumentuma objektum, akkor destruktúrálhatjuk inline a paraméter részen
    console.log(type, label, stock)
}

transaction("order",product)
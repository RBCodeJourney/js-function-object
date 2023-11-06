var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
  // এখানে লক্ষ্য করলে দেখা যাবে  property এর ভালু পাওয়ার ৩টে সিস্টেম

// when you know the specific property name, use dot notation to get the property value 
// System 1
var penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation to get the property value 
// System 2
var penCount2 = shoppingCart['pen'];

// System 3
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);


var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);



// set property Value 
shoppingCart.mouse = 15;                 // system 1
console.log(shoppingCart);
shoppingCart['mouse'] = 29;              // system 2
console.log(shoppingCart);
shoppingCart[propertyName] = 89;         // system 3
console.log(shoppingCart);
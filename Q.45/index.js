// Question no 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.  Print the Object that’s returned to make sure all the information was stored correctly.
function makeCar(manufacturer, model, color, feature, capacity) {
    var car = { manufacturer: manufacturer, model: model };
    if (color) {
        car['color'] = color;
    }
    if (feature) {
        car['feature'] = feature;
    }
    if (capacity) {
        car['capacity'] = capacity;
    }
    console.log(car);
}
makeCar('Toyota', 'Corolla');
makeCar('Honda', 'Civic', 'Red');
makeCar('Audi', 'Rs6', 'Black', 'Automatic', '4 Seats');

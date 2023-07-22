"use strict";
let transportation = ["motorcycle", "car", "bicycle", "train"];
for (let i = 0; i < transportation.length; i++) {
    let item = transportation[i];
    switch (item) {
        case "motorcycle":
            console.log("I would like to own a Honda motorcycle.");
            break;
        case "car":
            console.log("I dream of driving a Tesla car.");
            break;
        case "bicycle":
            console.log("I enjoy riding a mountain bike.");
            break;
        case "train":
            console.log("I love traveling by high-speed trains.");
            break;
        default:
            console.log("I have no preference for this mode of transportation.");
    }
}

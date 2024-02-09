function fruitsAndVegetables(input) {
    let something = input[0];
    switch (something) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grape":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "papper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}
fruitsAndVegetables("banana");

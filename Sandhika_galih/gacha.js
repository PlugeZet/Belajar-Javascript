let rarity;
let chance = Math.random() * 100;

if (chance >= 60){
    rarity = "Common";
} else if (chance >= 40){
    rarity = "Uncommon";
} else if (chance >= 20){
    rarity = "Rare";
} else if (chance >= 10){
    rarity = "Epic";
} else if (chance >= 5){
    rarity = "Legend";
} else if (chance >= 1){
    rarity = "Mythic";
} else {
    rarity = "Secret";
}

console.log("You got a " + rarity + " item with a chance " + chance + "!");
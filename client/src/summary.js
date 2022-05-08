export function summaryBath(test1, age){
    var average;
    var summary;
    var timesPerDay;
    //console.log(test1)

    // Switch to determine the age accuracy for grading
    switch(true) {
        case age == 0:
            average = 21;
            timesPerDay = 3;
            break;
        case age == 1:
            average = 14;
            timesPerDay = 2;
            break;
        case age == 2:
            average = 14;
            timesPerDay = 2;
            break;
        case age == 3:
            average = 14;
            timesPerDay = 2;
            break;
        case age == 4:
            average = 7;
            timesPerDay = 1;
            break;
        case age == 5:
            average = 7;
            timesPerDay = 1;
            break;
    }

    var comp = average - test1;

    // Switch to evaluate the average value and return the grade value
    switch(true) {
        case comp <= 0:
            summary = "Your baby is in perfect health!"
            break;
        case comp >= (0.7*timesPerDay) && comp < (1.4*timesPerDay):
            summary = "Your baby is doing well."
            break;
        case comp >= (1.4*timesPerDay) && comp < (2.1*timesPerDay):
            summary = "Your baby seems to be doing alright."
            break;
        case comp >= (2.1*timesPerDay) && comp < (2.8*timesPerDay):
            summary = "Your baby is doing ok."
            break;
        case comp >= (2.8*timesPerDay) && comp < (3.5*timesPerDay):
            summary = "Your baby could be doing better."
            break;
        case comp >= (3.5*timesPerDay) && comp < (4.2*timesPerDay):
            summary = "Your baby isn't doing so well."
            break;
        case comp >= (4.2*timesPerDay) && comp < (4.8*timesPerDay):
            summary = "Your baby's health is bad. Monitor this carefully."
            break;
        case comp >= (4.8*timesPerDay) && comp < (5.6*timesPerDay):
            summary = "Your baby's health is alarming. It may be wise to seek medical attention."
            break;
        case comp >= (5.6*timesPerDay) && comp < (6.3*timesPerDay):
            summary = "Critical health. Your baby might need medical attention."
            break;
        case comp >= (6.3*timesPerDay) && comp < (7.0*timesPerDay):
            summary = "Very critical health. Seek medcial attention!"
            break;
        case comp >= (7.0*timesPerDay):
            summary = "Seek medcial attention!"
            break;
    }

    return summary;
}

export function summarySleep(test2, age){
    var average;
    var summary;
    var adjustor;
    //console.log(test2)

    switch(true) {
        case age == 0:
            average = 16;
            adjustor = 0;
            break;
        case age == 1:
            average = 12;
            adjustor = 0.4;
            break;
        case age == 2:
            average = 12;
            adjustor = 0.4;
            break;
        case age == 3:
            average = 10;
            adjustor = 0.6;
            break;
        case age == 4:
            average = 10;
            adjustor = 0.6;
            break;
        case age == 5:
            average = 10;
            adjustor = 0.6;
            break;
    }

    var comp = average - test2;

    switch(true) {
        case comp <= 0:
            summary = "Your baby is in perfect health!"
            break;
        case comp >= (1.6 - adjustor) && comp < (3.2 - adjustor*2):
            summary = "Your baby is doing well."
            break;
        case comp >= (3.2 - adjustor*2) && comp < (4.8 - adjustor*3):
            summary = "Your baby seems to be doing alright."
            break;
        case comp >= (4.8 - adjustor*3) && comp < (6.4 - adjustor*4):
            summary = "Your baby could be doing better."
            break;
        case comp >= (6.4 - adjustor*4) && comp < (8 - adjustor*5):
            summary = "Your baby isn't doing so well."
            break;
        case comp >= (8 - adjustor*5) && comp < (9.6 - adjustor*6):
            summary = "Your baby's health is bad. Monitor this carefully."
            break;
        case comp >= (9.6 - adjustor*6) && comp < (11.2 - adjustor*7):
            summary = "Your baby's health is alarming. It may be wise to seek medical attention."
            break;
        case comp >= (11.2 - adjustor*7) && comp < (12.8 - adjustor*8):
            summary = "Critical health. Your baby might need medical attention."
            break;
        case comp >= (12.8 - adjustor*8) && comp < (14.4 - adjustor*9):
            summary = "Critical health. Your baby might need medical attention."
            break;
        case comp >= (14.4 - adjustor*9) && comp < (16 - adjustor*10):
            summary = "Very critical health. Seek medcial attention!"
            break;
        case comp >= (16 - adjustor*10):
            summary = "Seek medcial attention!"
            break;
    }
    return summary;
}

// 70 - 105 ounces weekly for a newborn. We'll use that to start functionality
export function summaryFood(total, total2, age){
    var average;
    var summary;
    var foodType;
    var adjustor;
    //console.log(total);
    //console.log(comp);

    switch(true) {
        case age == 0:
            average = 42;  // Ounces of formula, use the total from breastfeeding
            foodType = "bottle";
            break;
        case age == 1:
            average = 14;   // Meals weekly, use normal total
            foodType = "food";
            adjustor = 7;
            break;
        case age == 2:
            average = 21;   
            foodType = "food";
            adjustor = 0;
            break;
        case age == 3:
            average = 21;
            foodType = "food";
            adjustor = 0;
            break;
        case age == 4:
            average = 21;
            foodType = "food";
            adjustor = 0;
            break;
        case age == 5:
            average = 21;
            foodType = "food";
            adjustor = 0;
            break;
    }

    //var comp = average - foodType;
    if(foodType === "bottle") {
        var comp = average = total;
        switch(true) {
            case comp <= 0:
                summary = "Your baby is in perfect health!"
                break;
            case comp >= 4.2 && comp < 8.4:
                summary = "Your baby is doing well."
                break;
            case comp >= 8.4 && comp < 12.6:
                summary = "Your baby seems to be doing alright."
                break;
            case comp >= 12.6 && comp < 16.8:
                summary = "Your baby could be doing better."
                break;
            case comp >= 16.8 && comp < 21:
                summary = "Your baby isn't doing so well."
                break;
            case comp >= 21 && comp < 25.2:
                summary = "Your baby's health is bad. Monitor this carefully."
                break;
            case comp >= 25.2 && comp < 29.4:
                summary = "Your baby's health is alarming. It may be wise to seek medical attention."
                break;
            case comp >= 29.4 && comp < 33.6:
                summary = "Critical health. Your baby might need medical attention."
                break;
            case comp >= 33.6 && comp < 37.8:
                summary = "Critical health. Your baby might need medical attention."
                break;
            case comp >= 37.8 && comp < 42:
                summary = "Very critical health. Seek medcial attention!"
                break;
            case comp >= 42:
                summary = "Seek medcial attention!"
                break;
        }
    }
    else{
        var comp = average - total2;
        switch(true) {
            case comp <= 0:
                summary = "Your baby is in perfect health!"
                break;
            case comp >= (2.1 - adjustor) && comp < (4.2 - adjustor):
                summary = "Your baby is doing well."
                break;
            case comp >= (4.2 - adjustor) && comp < (6.3 - adjustor):
                summary = "Your baby seems to be doing alright."
                break;
            case comp >= (6.3 - adjustor) && comp < (8.4 - adjustor):
                summary = "Your baby could be doing better."
                break;
            case comp >= (8.4 - adjustor) && comp < (10.5 - adjustor):
                summary = "Your baby isn't doing so well."
                break;
            case comp >= (10.5 - adjustor) && comp < (12.6 - adjustor):
                summary = "Your baby's health is bad. Monitor this carefully."
                break;
            case comp >= (12.6 - adjustor) && comp < (14.7 - adjustor):
                summary = "Your baby's health is alarming. It may be wise to seek medical attention."
                break;
            case comp >= (14.7 - adjustor) && comp < (16.8 - adjustor):
                summary = "Critical health. Your baby might need medical attention."
                break;
            case comp >= (16.8 - adjustor) && comp < (18.9 - adjustor):
                summary = "Critical health. Your baby might need medical attention."
                break;
            case comp >= (18.9 - adjustor) && comp < (21 - adjustor):
                summary = "Very critical health. Seek medcial attention!"
                break;
            case comp >= (21 - adjustor):
                summary = "Seek medcial attention!"
                break;
        }
    }
    
    return summary;
}
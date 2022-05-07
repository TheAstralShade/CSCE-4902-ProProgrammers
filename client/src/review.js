// We want the value being sent. To be zero. The higher the sent value, the worse the health summary.

// 70 times a week for changes.
export function gradeBath(test1, age){
    var average;
    var num;
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
            num = 425
            break;
        case comp >= (0.7*timesPerDay) && comp < (1.4*timesPerDay):
            num = 510;
            break;
        case comp >= (1.4*timesPerDay) && comp < (2.1*timesPerDay):
            num = 595;
            break;
        case comp >= (2.1*timesPerDay) && comp < (2.8*timesPerDay):
            num = 680;
            break;
        case comp >= (2.8*timesPerDay) && comp < (3.5*timesPerDay):
            num = 765;
            break;
        case comp >= (3.5*timesPerDay) && comp < (4.2*timesPerDay):
            num = 850;
            break;
        case comp >= (4.2*timesPerDay) && comp < (4.8*timesPerDay):
            num = 935;
            break;
        case comp >= (4.8*timesPerDay) && comp < (5.6*timesPerDay):
            num = 1020;
            break;
        case comp >= (5.6*timesPerDay) && comp < (6.3*timesPerDay):
            num = 1105;
            break;
        case comp >= (6.3*timesPerDay) && comp < (7.0*timesPerDay):
            num = 1190;
            break;
        case comp >= (7.0*timesPerDay):
            num = 1275;
            break;
    }

    var i = num - (780 * .5);
    return i;
}

export function gradeSleep(test2, age){
    var average;
    var num;
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
            num = 150
            break;
        case comp >= (1.6 - adjustor) && comp < (3.2 - adjustor*2):
            num = 214;
            break;
        case comp >= (3.2 - adjustor*2) && comp < (4.8 - adjustor*3):
            num = 278;
            break;
        case comp >= (4.8 - adjustor*3) && comp < (6.4 - adjustor*4):
            num = 342;
            break;
        case comp >= (6.4 - adjustor*4) && comp < (8 - adjustor*5):
            num = 406;
            break;
        case comp >= (8 - adjustor*5) && comp < (9.6 - adjustor*6):
            num = 470;
            break;
        case comp >= (9.6 - adjustor*6) && comp < (11.2 - adjustor*7):
            num = 534;
            break;
        case comp >= (11.2 - adjustor*7) && comp < (12.8 - adjustor*8):
            num = 598;
            break;
        case comp >= (12.8 - adjustor*8) && comp < (14.4 - adjustor*9):
            num = 662;
            break;
        case comp >= (14.4 - adjustor*9) && comp < (16 - adjustor*10):
            num = 726;
            break;
        case comp >= (16 - adjustor*10):
            num = 790;
            break;
    }
    return num;
}

// 70 - 105 ounces weekly for a newborn. We'll use that to start functionality
export function gradeEating(total, total2, age){
    var average;
    var num;
    var foodType;
    var adjustor;
    //console.log(total);
    //console.log(comp);

    switch(true) {
        case age == 0:
            average = 42;  // Ounces of formula, use the total from breastfeeding
            foodType = total;
            break;
        case age == 1:
            average = 14;   // Meals weekly, use normal total
            foodType = total2;
            adjustor = 7;
            break;
        case age == 2:
            average = 21;   
            foodType = total2;
            adjustor = 0;
            break;
        case age == 3:
            average = 21;
            foodType = total2;
            adjustor = 0;
            break;
        case age == 4:
            average = 21;
            foodType = total2;
            adjustor = 0;
            break;
        case age == 5:
            average = 21;
            foodType = total2;
            adjustor = 0;
            break;
    }

    var comp = average - foodType;
    if(foodType == total) {
        switch(true) {
            case comp <= 0:
                num = 350
                break;
            case comp >= 4.2 && comp < 8.4:
                num = 420;
                break;
            case comp >= 8.4 && comp < 12.6:
                num = 490;
                break;
            case comp >= 12.6 && comp < 16.8:
                num = 560;
                break;
            case comp >= 16.8 && comp < 21:
                num = 630;
                break;
            case comp >= 21 && comp < 25.2:
                num = 700;
                break;
            case comp >= 25.2 && comp < 29.4:
                num = 770;
                break;
            case comp >= 29.4 && comp < 33.6:
                num = 840;
                break;
            case comp >= 33.6 && comp < 37.8:
                num = 910;
                break;
            case comp >= 37.8 && comp < 42:
                num = 980;
                break;
            case comp >= 42:
                num = 1050;
                break;
        }
    }
    else{
        switch(true) {
            case comp <= 0:
                num = 350
                break;
            case comp >= (2.1 - adjustor) && comp < (4.2 - adjustor):
                num = 420;
                break;
            case comp >= (4.2 - adjustor) && comp < (6.3 - adjustor):
                num = 490;
                break;
            case comp >= (6.3 - adjustor) && comp < (8.4 - adjustor):
                num = 560;
                break;
            case comp >= (8.4 - adjustor) && comp < (10.5 - adjustor):
                num = 630;
                break;
            case comp >= (10.5 - adjustor) && comp < (12.6 - adjustor):
                num = 700;
                break;
            case comp >= (12.6 - adjustor) && comp < (14.7 - adjustor):
                num = 770;
                break;
            case comp >= (14.7 - adjustor) && comp < (16.8 - adjustor):
                num = 840;
                break;
            case comp >= (16.8 - adjustor) && comp < (18.9 - adjustor):
                num = 910;
                break;
            case comp >= (18.9 - adjustor) && comp < (21 - adjustor):
                num = 980;
                break;
            case comp >= (21 - adjustor):
                num = 1050;
                break;
        }
    }
    
    var i = num - (780 * .3);
    return i;
}
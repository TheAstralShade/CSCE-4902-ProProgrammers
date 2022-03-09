// We want the value being sent. To be zero. The higher the sent value, the worse the health summary.

// 70 times a week for changes.
export function gradeBath(test1){
    var average = 70;
    var comp = average - test1;
    var num;
    console.log(test1)

    switch(true) {
        case comp <= 0:
            num = 425
            break;
        case comp >= 7 && comp < 14:
            num = 510;
            break;
        case comp >= 14 && comp < 21:
            num = 595;
            break;
        case comp >= 21 && comp < 28:
            num = 680;
            break;
        case comp >= 28 && comp < 35:
            num = 765;
            break;
        case comp >= 35 && comp < 42:
            num = 850;
            break;
        case comp >= 42 && comp < 48:
            num = 935;
            break;
        case comp >= 48 && comp < 56:
            num = 1020;
            break;
        case comp >= 56 && comp < 63:
            num = 1105;
            break;
        case comp >= 63 && comp < 70:
            num = 1190;
            break;
        case comp >= 70:
            num = 1275;
            break;
    }

    var i = num - (780 * .5);
    return i;
}

export function gradeSleep(test2){
    var average = 16;
    var comp = average - test2;
    var num;
    //console.log(test2)

    switch(true) {
        case comp <= 0:
            num = 150
            break;
        case comp >= 1.6 && comp < 3.2:
            num = 214;
            break;
        case comp >= 3.2 && comp < 4.8:
            num = 278;
            break;
        case comp >= 4.8 && comp < 6.4:
            num = 342;
            break;
        case comp >= 6.4 && comp < 8:
            num = 406;
            break;
        case comp >= 8 && comp < 9.6:
            num = 470;
            break;
        case comp >= 9.6 && comp < 11.2:
            num = 534;
            break;
        case comp >= 11.2 && comp < 12.8:
            num = 598;
            break;
        case comp >= 12.8 && comp < 14.4:
            num = 662;
            break;
        case comp >= 14.4 && comp < 16:
            num = 726;
            break;
        case comp >= 16:
            num = 790;
            break;
    }
    return num;
}

// 70 - 105 ounces weekly for a newborn. We'll use that to start functionality
export function gradeEating(total){
    var average = 70;
    var comp = average - total;
    var num;
    console.log(total);
    //console.log(comp);

    switch(true) {
        case comp <= 0:
            num = 350
            break;
        case comp >= 7 && comp < 14:
            num = 420;
            break;
        case comp >= 14 && comp < 21:
            num = 490;
            break;
        case comp >= 21 && comp < 28:
            num = 560;
            break;
        case comp >= 28 && comp < 35:
            num = 630;
            break;
        case comp >= 35 && comp < 42:
            num = 700;
            break;
        case comp >= 42 && comp < 48:
            num = 770;
            break;
        case comp >= 48 && comp < 56:
            num = 840;
            break;
        case comp >= 56 && comp < 63:
            num = 910;
            break;
        case comp >= 63 && comp < 70:
            num = 980;
            break;
        case comp >= 70:
            num = 1050;
            break;
    }
    //.log(num)
    var i = num - (780 * .3);
    return i;
}
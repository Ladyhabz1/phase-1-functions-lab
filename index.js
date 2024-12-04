// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const hq = 42; // Headquarters at 42nd Street
    return Math.abs(block - hq); // Absolute distance in blocks
}

function distanceFromHqInFeet(block) {
    const blockLength = 264; // 1 block = 264 feet
    return distanceFromHqInBlocks(block) * blockLength;
}

function distanceTravelledInFeet(start, destination) {
    const blockLength = 264; // 1 block = 264 feet
    return Math.abs(start - destination) * blockLength; // Absolute distance in feet
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return Math.round((distance - 400) * 0.02 * 100) / 100; // Keep as number and round to 2 decimals
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate for distances between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // Distances over 2500 feet are not allowed
    }
}
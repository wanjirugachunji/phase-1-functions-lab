const distanceFromHqInBlocks=(value) =>{
    if(value > 42) {
        return value - 42;
} else {return 42 - value;
}
}

const distanceFromHqInFeet = (value) => {
    const result = distanceFromHqInBlocks(value);
    return result * 264;
 }

 const distanceTravelledInFeet = (startingPoint, destination) => {
    if(startingPoint > destination) {
       return (startingPoint - destination) * 264;
    } else {
       return (destination - startingPoint) * 264;
    }
 }

 const calculatesFarePrice = (startingPoint, destination) => {
    const distance = distanceTravelledInFeet(startingPoint, destination);
    if(distance <= 400) {
       return 0;
    } else if(distance > 400 && distance <= 2000) {
       return (distance - 400) * 0.02;
    } else if(distance > 2000 && distance <= 2500) {
       return 25;
    } else {
       return 'cannot travel that far';
    }
 }


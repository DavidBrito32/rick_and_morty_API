export const verifyAlive = (status) => {
    switch(status.toLowerCase()){
        case "alive":
            return "alive"
        case "dead":
            return "dead"
        default:
            return "unknown"
    }
}

export const convertNumber = (number) => {
    if(number > 0 && number <= 9){
        return `00${number}`;
    }else if(number > 9 && number <= 99){
        return `0${number}`;
    }else{
        return number;
    }
}
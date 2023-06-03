const s = '12:01:00AM';

function timeConversion(string){
    const modifier = string.substring(string.length - 2, string.length);
    const timer = string.substring(0, string.length - 2);

    let [hours, minutes, seconds] = timer.split(':');

    if(hours === '12'){
        hours = '00';
    }

    if(modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}:${seconds}`
}

console.log(timerConversion(s));
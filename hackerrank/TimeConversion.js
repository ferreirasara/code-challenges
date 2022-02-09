function formatNumber(n) {
    return n.toLocaleString('en-us', { minimumIntegerDigits: 2, useGrouping: false })
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
export function timeConversion(s) {
    // Write your code here
    const splited = s.split(':');
    let hh = parseInt(splited[0])
    const mm = parseInt(splited[1])
    const ss = parseInt(splited[2].substring(0, 2));
    const ampm = splited[2].substring(2);

    if (ampm == 'AM') {
        hh = hh === 12 ? 0 : hh;
        return `${formatNumber(hh)}:${formatNumber(mm)}:${formatNumber(ss)}`
    } else {
        hh = hh === 12 ? 12 : hh + 12;
        return `${formatNumber(hh)}:${formatNumber(mm)}:${formatNumber(ss)}`
    }
}
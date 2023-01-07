module.exports = function reverse (n) {
    const negative = n < 0 ? n * (-1) : n
    const incomingData = String(negative).split('');
    const transData = incomingData.reverse();
    const preResult = String(transData);
    const result = Number(preResult.replace(/,/g, ''));
    return result;
}

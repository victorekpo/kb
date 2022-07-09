const calcTotalTip = (total, tipPercent = .2) => {
    return total+(total * tipPercent);
}

module.exports = calcTotalTip;


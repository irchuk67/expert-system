import {investments} from "../../constants/Investments";

function bestStorageForVeryLowMoney(decision) {
    if (decision.trustBanks) { //якщо довіряє банкам
        return investments.Deposit; //Депозит
    } else { //інакше
        return investments.ForeignCurrency; //Іноземна валюта
    }
}

function bestStorageForLowMoney(decision) {
    if (decision.trustBanks) { //якщо довіряє банкам
        return investments.Deposit; //Депозит
    } else {//інакше
        return investments.Antiques;//Антикваріат
    }
}

function bestStorageForMediumMoney(decision) {
    if (decision.trustBanks) { //якщо довіряє банкам
        return investments.Deposit; //Депозит
    } else {//інакше
        return investments.PreciousStones;//Дорогоцінне каміння
    }
}

function bestStorageForBigMoney(decision) {
    if (decision.trustBanks) { //якщо довіряє банкам
        return investments.Deposit; //Депозит
    } else {//інакше
        return investments.RealEstate;//Нерухомість
    }
}

export {
    bestStorageForVeryLowMoney,
    bestStorageForLowMoney,
    bestStorageForMediumMoney,
    bestStorageForBigMoney
}
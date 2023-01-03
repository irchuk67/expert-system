import {investments} from "../../constants/Investments";

function bestIncomeForVeryLowMoney(decision) {
    return investments.SelfInvestments; // найкращим рішенням є вклад у саморозвиток
}

function bestIncomeForLowMoney(decision) {
    if (decision.risky) { // якщо готовий на ризик
        return investments.P2PCredit; //P2P кредитування
    } else { //інакше
        return investments.Deposit;// Депозит
    }
}

function bestIncomeForMediumMoney(decision) {
    if (decision.risky) {// якщо готовий на ризик
        return investments.CryptoCurrency; //Криптовалюта
    } else { //інакше
        return investments.Deposit; //Депозит
    }
}

function bestIncomeForBigMoney(decision) {
    if (decision.risky) { // якщо готовий на ризик
        if (decision.investedBefore) { // якщо інвестував до цього
            return investments.StockMarket; //Фондова біржа
        }
        if (decision.haveStartupIdea) { //якщо є ідея для стартапу
            return investments.Business; //Власний бізнес
        }
        //в інших випадках
        return investments.CryptoCurrency;//криптовалюта
    } else {//інакше
        return investments.Bonds; //Державні облігації
    }
}

export {
    bestIncomeForVeryLowMoney,
    bestIncomeForLowMoney,
    bestIncomeForMediumMoney,
    bestIncomeForBigMoney
}
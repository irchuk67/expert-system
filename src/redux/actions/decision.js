import {bestIncomeForMediumMoney, bestIncomeForBigMoney, bestIncomeForVeryLowMoney, bestIncomeForLowMoney} from './incomes';
import {bestStorageForMediumMoney, bestStorageForVeryLowMoney, bestStorageForBigMoney, bestStorageForLowMoney} from './storages';
import {FIND_BEST_DECISION} from "../../constants/types";

function findBestInvestment(decision) {
    if (decision.toStore) { // якщо інвестор хоче зберегти гроші
        return {
            type: FIND_BEST_DECISION,
            payload: findBestStorage(decision) // переходимо до функції для визначення найкращого способу зберегти гроші
        };
    } else {//інакше, тобто якщо хоче заробити більше грошей
        return {
            type: FIND_BEST_DECISION,
            payload: findBestIncome(decision)// переходимо до функції для визначення найкращого способу заробити гроші
        };
    }
}

function findBestStorage(decision) {
    if (decision.amount <= 50_000) { // якщо сума до 50 000 то вважається дуже малою
        return bestStorageForVeryLowMoney(decision); //шукаємо найкращий спосіб зберегти гроші для дуже малої суми
    }
    if (decision.amount <= 200_000) { // якщо сума до 200 000 то вважається малою
        return bestStorageForLowMoney(decision);//шукаємо найкращий спосіб зберегти гроші для малої суми
    }
    if (decision.amount <= 500_000) { // якщо сума до 1 000 000 то вважається середньою
        return bestStorageForMediumMoney(decision);//шукаємо найкращий спосіб зберегти гроші для середньої суми
    }
    // сума вважається великою, тобто понад 1 000 000
    return bestStorageForBigMoney(decision);//шукаємо найкращий спосіб зберегти гроші для великої суми
}


function findBestIncome(decision) {
    if (decision.amount <= 50_000) { // якщо сума до 50 000 то вважається дуже малою
        return bestIncomeForVeryLowMoney(decision); //шукаємо найкращий спосіб заробити гроші для дуже малої суми
    }
    if (decision.amount <= 200_000) { // якщо сума до 200 000 то вважається малою
        return bestIncomeForLowMoney(decision); //шукаємо найкращий спосіб заробити гроші для малої суми
    }
    if (decision.amount <= 1_000_000) { // якщо сума до 1 000 000 то вважається середньою
        return bestIncomeForMediumMoney(decision) //шукаємо найкращий спосіб заробити гроші для середньої суми
    }
    // сума вважається великою, тобто більше 1 000 000
    return bestIncomeForBigMoney(decision); //шукаємо найкращий спосіб заробити гроші для великої суми

}

export {
    findBestInvestment
};


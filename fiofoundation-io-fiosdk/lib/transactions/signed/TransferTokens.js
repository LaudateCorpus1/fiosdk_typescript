"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SignedTransaction_1 = require("./SignedTransaction");
const validation_1 = require("../../utils/validation");
class TransferTokens extends SignedTransaction_1.SignedTransaction {
    constructor(payeePublicKey, amount, maxFee, walletFioAddress = '') {
        super();
        this.ENDPOINT = 'chain/transfer_tokens_pub_key';
        this.ACTION = 'trnsfiopubky';
        this.ACCOUNT = 'fio.token';
        this.payeePublicKey = payeePublicKey;
        this.amount = amount;
        this.walletFioAddress = walletFioAddress;
        this.maxFee = maxFee;
        this.validationData = { tpid: walletFioAddress };
        this.validationRules = validation_1.validationRules.transferTokens;
    }
    getData() {
        let actor = this.getActor();
        let data = {
            payee_public_key: this.payeePublicKey,
            amount: this.amount,
            max_fee: this.maxFee,
            tpid: this.walletFioAddress,
            actor: actor
        };
        return data;
    }
}
exports.TransferTokens = TransferTokens;

class TransactionMiner {
    constructor({blockchain, transactionPool, wallet, pubsub}) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.pubsub = pubsub;
    }
    mineTransaction() {
        //get the transaction pool's valid transactions
        
        //generate the miner's reward

        // adda block consisting of these transacitons to the blockchain

        //broadcast the updated blockchain

        //clear the pool
    }
}

module.exports = TransactionMiner;
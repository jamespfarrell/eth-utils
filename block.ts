import { getWsProvider } from './provider'

export function TransactionsFromBlockForAddress (address) {
  return function (block) {
    console.log(`seeking address ---> : ${address}`)
    //console.log(`block : ${JSON.stringify(block, null, 2)}`)
    //console.log(`block.transactions.length ---> : ${block.transactions.length}`)
    const walletTransactions = block.transactions.filter(
      o => o.from === address || o.to === address
    )
    console.log(`walletTransactions.length ---> : ${walletTransactions.length}`)
    return walletTransactions
    ///console.log(event.number)
  }
}

export function subscribeToBlocksForAddress (
  address: string,
  notify: Function,
  chain: string
) {
  const parseBlockForAddress = TransactionsFromBlockForAddress(address)
  const wsProvider = getWsProvider(chain)

  wsProvider.eth.subscribe('newBlockHeaders').on('data', async event => {
    //console.log(`event : ${JSON.stringify(event, null, 2)}`)
    const block = await wsProvider.eth.getBlock(event.number, true)

    //const transactions = parseBlockForAddress(block)
    const transactions = [1, 2, 4]
    if (transactions.length > 0) {
      notify(transactions)
    }
  })
}

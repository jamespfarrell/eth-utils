import { getProvider } from '../provider'
import { TransactionsFromBlockForAddress } from '../block'

const provider = getProvider('mainnet')

const block = {
  difficulty: '6761592100920677',
  extraData: '0x466c6578706f6f6c2f48302f55532d57657374202d20526f6d65',
  gasLimit: 12493835,
  gasUsed: 12475438,
  hash: '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
  logsBloom:
    '0x20edb3c56c85f00019940c2ce5197f240ac8284c98c281440805411cabc3e506ac0d55cc175e5413508ddda04a5141584a292882acca59f50649662711b14c436f2f5880c13a33044c03021b35a600e230b23253a74a6021f682274cdbe4405cdf10d8062a4aaa7231bc62a6381c2828b7126620f118ccd62e6c2fb6448a7928af51db273640e3010c504149052abc0e0a4bcfc5854182894a682d6231f0aa50d715e145f46b2760e26b86bd9b3207d28b304690d56103c3d0111480874a61bd9a5148872b4aca6400140ebc479b5ccc1a6d92338dcc0a3f5079888eb21b252238742c3e1086c02691bf067c8e73e4aa88b0247859d291510a6a9ab1b1d03760',
  miner: '0x7F101fE45e6649A6fB8F3F8B43ed03D353f2B90c',
  mixHash: '0xe9d4dd8086cc00d2a2c34aef68cb30813a4ea4b9046119bd11370c7fb0fa44da',
  nonce: '0x5a641a0005c2615f',
  number: 12263216,
  parentHash:
    '0xb6d6c4fe79bbf55f445ba88d476240e7209dfa242acf7ffab1b6ca8c7eb08f75',
  receiptsRoot:
    '0xaa3aac988ab59ceb7d2573c2e65f0c6a557f587cbceb60017ba374001155100d',
  sha3Uncles:
    '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  size: 46369,
  stateRoot:
    '0xaca72b0a1a6e9d81a6d198ec6d69f13a2db061c3fd3f131f710278bc09a4043e',
  timestamp: 1618737100,
  totalDifficulty: '23445339801902542909224',
  transactions: [
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x691e3Cbb2a8F504fC650F21C9af6226051340559',
      gas: 250000,
      gasPrice: '244500000000',
      hash:
        '0x9574b30b35e1f5b11a6cf8423b38b54847e895e1ccba372298713d13738920b4',
      input:
        '0xa9059cbb0000000000000000000000009f3231984754e280d1cb055f38f6e01843b2bfde000000000000000000000000000000000000000000000000000000004ea77f80',
      nonce: 104671,
      r: '0x2a2b818bd97f19297035348d8786b9b40bb3d1988b746c033ad365b7c0e2d4d5',
      s: '0x127b51c53a93640edb1099e2e8a31221c8b6651e0bb8894c48a14853c912efab',
      to: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      transactionIndex: 0,
      type: '0x0',
      v: '0x1c',
      value: '0'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2',
      gas: 76496,
      gasPrice: '214500000000',
      hash:
        '0x7e651df9ee0cd81e4d72b1be8667b18bcb4f7ca644a781e5b24d91d7c8ab2784',
      input:
        '0xa9059cbb000000000000000000000000f7563a85592b79723d718bb7ab7ee11fe9e67c6000000000000000000000000000000000000000000000000000000006fc23ac00',
      nonce: 1178506,
      r: '0x12f114677890abbcef6da109ebd9d1f62233cbe72c1a4f1f8ac463d73d60f581',
      s: '0x332397851cced063fd6f948d6a8cca390da40745cd474c219c103d30685135e9',
      to: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      transactionIndex: 1,
      type: '0x0',
      v: '0x25',
      value: '0'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0xA7EFAe728D2936e78BDA97dc267687568dD593f3',
      gas: 210000,
      gasPrice: '213000000000',
      hash:
        '0x7183baee5c8d36d4f691396aabc3784cf020c88d40cf231cb04cf1b3f261c735',
      input: '0x',
      nonce: 273665,
      r: '0x854b333295c3c841b4a7e8ac226cde81bb1d8309647510707ea909a1ec9d9d08',
      s: '0x10d293336af23fa413e13da8ec78a235dcd741fd4d913101d37752aaefb64c43',
      to: '0xd750b26b94e13bd0Cb0a694Db2B1E1Da35204406',
      transactionIndex: 2,
      type: '0x0',
      v: '0x1c',
      value: '48519000000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xc19ac1f6f7f6b2885676ea7bbd123a208b686168ba987d2ed4aa7390da8c4314',
      input: '0x',
      nonce: 7301804,
      r: '0x61c8d57213423b5c7e0a1130a27fdaf0b69b8b52327e062f54a18b95afd47714',
      s: '0x687a0248d2bf1d2875de092caf3d973d0a6417cb37a01443dd41c89d98ab1ff8',
      to: '0x74DDF53F844d8e99242278C7A98333b5ee0c2ccD',
      transactionIndex: 3,
      type: '0x0',
      v: '0x25',
      value: '18166170000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xcb6835b2f921dcd71b18f93d6b33155789a481a7a67ef804a4d0fc6591c0bf25',
      input: '0x',
      nonce: 7301805,
      r: '0xf96b69e2920f1de3673df9d3fad6bd5b40cd34c7471b32cc3bbd3f5eb861fbe3',
      s: '0x62e3728512a562c411b22b11054936cc07ee024fc469a1992df1c7a644df0fe3',
      to: '0x36d2971DB8C12F52EeA2ec78E094d128818BE37B',
      transactionIndex: 4,
      type: '0x0',
      v: '0x25',
      value: '19392140000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x708396f17127c42383E3b9014072679b2F60B82f',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0x01d42a214bbe2dc620f70cdb3c527c1dfe68ac075cb36986e101f2285bca3587',
      input: '0x',
      nonce: 889559,
      r: '0x485a2e631e6304555ff42ca5abd5af7808c1405da56e324c31bf2ee34cfc964b',
      s: '0x412bd850e30afb6229ded078e9e748851c997bc80fdee8268d8900549150d156',
      to: '0x623E1Fcef24a20Bc38663DE5f0c14F76fFBE1C62',
      transactionIndex: 5,
      type: '0x0',
      v: '0x26',
      value: '52020000000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x85b931A32a0725Be14285B66f1a22178c672d69B',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0x5a9f3dc7b0e86857dc0b5ce0fae79bc83c0a7306bcda3b181f3f6503aa5db0fd',
      input: '0x',
      nonce: 879963,
      r: '0x94614181162f896f80ff199b0154d39707e39b459b0eda9702ba835964e1cbe5',
      s: '0x219bd9682962ab1b13a961f98de164798a5547eab08b766d0859cfb4fc1fec43',
      to: '0xBf2101d4a82DCfc6dE4018831a11a20e6C87F5bb',
      transactionIndex: 6,
      type: '0x0',
      v: '0x25',
      value: '3237659490000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x8F22F2063D253846B53609231eD80FA571Bc0C8F',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xd89a7af873abb212e0cb48ada6c3d3d2264fbfbd69436933431bc55ef1f50872',
      input: '0x',
      nonce: 284876,
      r: '0x918e8a0373bff7e3c816de4475806be69127b2fc8e517211c001d7ace28709e1',
      s: '0x6ac9c9e6552bb374dbc14f2ea2899a2fb6b54064c804bca7d3a8ff9cfc57860b',
      to: '0x03Fc44a34e29F413989E65B6bbd378351dA5dfA6',
      transactionIndex: 7,
      type: '0x0',
      v: '0x25',
      value: '95000000000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x708396f17127c42383E3b9014072679b2F60B82f',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xfe4d34bba809b7b7272d9e0af77d160031f73a46a698299c5bbadc52fe739c8c',
      input: '0x',
      nonce: 889560,
      r: '0x68fe015dd05fa5596ecd934fdab64c5e30fced8cb83d530085c0377914dd3264',
      s: '0xb9f15ffe3edc0abdac3bb1b1dde248b334b91d2cf38081e1eae6f2774bab935',
      to: '0x6D29D954091a3cF25B88c8A94d0102A8F7613184',
      transactionIndex: 8,
      type: '0x0',
      v: '0x26',
      value: '111220000000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x708396f17127c42383E3b9014072679b2F60B82f',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0x7b66faf94e5263e68b25057a7fe76015135b2d8c3c3cbb2612788ba63b418291',
      input: '0x',
      nonce: 889561,
      r: '0x84563eb40b377ec2157e7e7cb95f9b6ae3b87467305c7a0ae16f167dd8fe2067',
      s: '0x4c977e98d7c3fd3e219d68b55ae261075be4b2ad14cf6faa03e7a8563aacc434',
      to: '0xd66a1c293B4fDF6fc18EFAe3473da0d7f23E3811',
      transactionIndex: 9,
      type: '0x0',
      v: '0x25',
      value: '41203750000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x8F22F2063D253846B53609231eD80FA571Bc0C8F',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xb9fa69f9e426452e3041d1c3029298770f61620e57253406fda5477a4f5b51ec',
      input: '0x',
      nonce: 284877,
      r: '0x5bdfe99121943ece4d577abfcb48615d9c2dc21b46b0cb17bc99c5aa4ee929f4',
      s: '0x29a807b36a70ab97c0c532ba293d263d54a54c9b28e435c37ab81baf52cac0c',
      to: '0x00d4ff00448488077883541350E82e3B909665b8',
      transactionIndex: 10,
      type: '0x0',
      v: '0x26',
      value: '95000000000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xee47046f8de1a19958816d70bfe39ed48dcce30b0b2c3529111bd1b28dca4ca5',
      input: '0x',
      nonce: 7301806,
      r: '0x4644688923ce93b6e27852565fa3ce171d0b40659c38be2d524d3a1062c6b29c',
      s: '0x756f44ed09f4f9d84c1052d00cad48dbbdaeaa5da0070e479514466fb2b50d39',
      to: '0x96ea890F85E52B5e19fe3816ABCbBEcD3DFc018D',
      transactionIndex: 11,
      type: '0x0',
      v: '0x26',
      value: '342980000000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x8F22F2063D253846B53609231eD80FA571Bc0C8F',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xea82252a9c88b065104b01050dbad8990ab034fa509e2061fc3a09bc184976db',
      input: '0x',
      nonce: 284878,
      r: '0x25b9a05d489518d77801074a30811be055107b548777f4b0d4e9a25e53cd6735',
      s: '0x58d9fde53cb1e6dc0800ac6b238f4f9e2307627bee04276ea76ae48777815fde',
      to: '0xCa79fc3E9076f82e14271b6839987BD73620F5d7',
      transactionIndex: 12,
      type: '0x0',
      v: '0x26',
      value: '86738150000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x8F22F2063D253846B53609231eD80FA571Bc0C8F',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0x510adde7fe56a1f825244c8f9075b09f4189b6d92c1a9b5c3809fb0c799b3a88',
      input: '0x',
      nonce: 284879,
      r: '0xe72d50e40660b3795241a47a197626e6ea4f306a0a0cd2dfc71ccdc611f5ce07',
      s: '0x697d8bd834ffeda47a286246f6bb9fee67c8060e21244db46080e01fbff1162',
      to: '0x8F27bce7210B29B7851b45062D018eBFeE3CAaDb',
      transactionIndex: 13,
      type: '0x0',
      v: '0x26',
      value: '24400570000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x708396f17127c42383E3b9014072679b2F60B82f',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0x39a74b5cb78fd462086d22c9fee989778cdef25ed0b9e55b0022d0bdfab3b75d',
      input:
        '0xa9059cbb000000000000000000000000e9b05db21f255544721d0a58c1e9963d53d8bb95000000000000000000000000000000000000000000000a95ccfaa985fb2c0000',
      nonce: 889562,
      r: '0x4e512764a053c5e2e3cf79607569288015f4328de5716f35e46c977ba5bdde04',
      s: '0x4579bdef636b05949f79708050b088cc89cfdff718a271a11bb4fbfdf21250f9',
      to: '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
      transactionIndex: 14,
      type: '0x0',
      v: '0x26',
      value: '0'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x85b931A32a0725Be14285B66f1a22178c672d69B',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xc350d12db804e7f97d0ed5241cb63402a166a133b1e1b80684e947ba842cf80f',
      input: '0x',
      nonce: 879964,
      r: '0x67a377c469d7083d0d65a7ec1f3b999f2d569577ae88ef2bdb3de67dad3e585c',
      s: '0x77210e4b19a6cf6c3e98a9e45bdfed8f94f59de00c82c6e491161e714f02a535',
      to: '0x866Fc3686aF3C137ad3BB1e6e20b5FEB5d8409bb',
      transactionIndex: 15,
      type: '0x0',
      v: '0x26',
      value: '51673270000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x708396f17127c42383E3b9014072679b2F60B82f',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xf9cff21ba6c30b921eca57401de6cf992def2bd3736da013afe6a3ebdab3cde6',
      input: '0x',
      nonce: 889563,
      r: '0x7652c61484098d999c546b3fb6e518317333189150bd8dfce0b7ceae340f1f57',
      s: '0x4b65acc341e7085f270ad61a6e599c0f4d9e9cb6aa4dd5e8a11954110cbfe93f',
      to: '0xCb6520C968987DBd6861dFA00BBd4331F67B8191',
      transactionIndex: 16,
      type: '0x0',
      v: '0x26',
      value: '32178110000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x7F9F734b576D90CdED25980cC0A6d72C8e8Ca6D2',
      gas: 92000,
      gasPrice: '212000000000',
      hash:
        '0xe97437475b43c9876cf7fce02e521abd1258c040249546a875c342776c3f6ec4',
      input:
        '0xa9059cbb000000000000000000000000f620dca2165fc91461db4921ef3b99c3bd0f34ca000000000000000000000000000000000000000000000000000000002a59c56c',
      nonce: 1,
      r: '0x57b30bcd9673727da4fdde9f6f11a900945be7e82d9847934c78fc59243cfe18',
      s: '0x23f7981b672b5b1a6db24ba6247035501b8194ed6f5ce3997aa335eb6bec8f24',
      to: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      transactionIndex: 17,
      type: '0x0',
      v: '0x26',
      value: '0'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0xfe21e6bb678efe61157fec07142c0bf928c42b9d200117dff3b4ccf4b20d04d2',
      input: '0x',
      nonce: 7301807,
      r: '0x6cabcc5fe050cbfa15e51a8661efb60212d2397024718c40614f4eaad5de5a9',
      s: '0x3474f8a0e26341967f86af8deb61e80410dd2a428776cf7abad3d8567d4ea164',
      to: '0xb3ec76436719A2A726446dc7633B9098686D285C',
      transactionIndex: 18,
      type: '0x0',
      v: '0x25',
      value: '18330000000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x85b931A32a0725Be14285B66f1a22178c672d69B',
      gas: 207128,
      gasPrice: '212000000000',
      hash:
        '0x2c2e1bae6c157ff6cf7625075acb286339098f612202988b5c5ff42c76a00be5',
      input:
        '0xa9059cbb0000000000000000000000009dc90ff7f8570d4f7f45e2f28cf9c1c453e0606300000000000000000000000000000000000000000000001016ed6b7c77f00000',
      nonce: 879965,
      r: '0xdbf5737d94318ea8e4e89ddf515c838a87864e9f47b2db03d15ed40bedb1f743',
      s: '0x1fccfcb0ccd32ce69d9b83e5f4414c8018e9047b34727bf96fd2067364733b4c',
      to: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
      transactionIndex: 19,
      type: '0x0',
      v: '0x25',
      value: '0'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x843F8F18Bd2c42fB69Cd17B275b0E40656B5dBAd',
      gas: 21000,
      gasPrice: '200000000000',
      hash:
        '0x7523a463189d29fd2793a6f4035374fab816a7242d3d6a7a8edd03f4a579d818',
      input: '0x',
      nonce: 28881,
      r: '0xe285ee186aaed02a973c69718267a476c1d770f959c82a750e9b570bfc41e80f',
      s: '0x1e1d07007095e86aa722bb07e2f5a925993691bba990681ee668909fe286a5da',
      to: '0x056f4d8F06Eb3AAAA2526D99Be10234AdC3e7d04',
      transactionIndex: 20,
      type: '0x0',
      v: '0x1c',
      value: '12000000000000000'
    },
    {
      blockHash:
        '0xd762dbefb0e2581cfb7bee890b8a919e3633903ba8d90420aded592aa92895f4',
      blockNumber: 12263216,
      from: '0x6F9a8b4a210B0d9A2B4edbee54627F3Ad0c8700B',
      gas: 21000,
      gasPrice: '200000000000',
      hash:
        '0x1c6c913ba0e99bf487788d31d8c7cb551d51650135568ea136f9047808925833',
      input: '0x',
      nonce: 3,
      r: '0xed5e342eb468a6bbc4b5b2a57cdb2ea06bd8f4b1e43eb1f24759606e17a75950',
      s: '0x154c72e30f9ef1cb23b8b65e9c6d457340174af4b5b78463269caa1f5bfdb020',
      to: '0x696D38179B994a64C8B27Bd51CDd0Bc063662CC9',
      transactionIndex: 21,
      type: '0x0',
      v: '0x26',
      value: '2000000000000000000'
    }
  ],
  transactionsRoot:
    '0xb4376885e9ccad019f3fca45512a30a4c01b04cd36e0c37db8e8801ecaacd9a2',
  uncles: []
}

var assert = require('assert')
describe('Block utils', function () {
  describe('Parsing blocks', function () {
    it('It finds an address in a block (from or to)', async function () {
      const parseBlock = TransactionsFromBlockForAddress(
        '0x691e3Cbb2a8F504fC650F21C9af6226051340559'
      )
      const transactions = parseBlock(block)

      console.log(`transactions : ${JSON.stringify(transactions, null, 2)}`)
      assert.strictEqual(transactions.length, 1)

      const parseBlockTo = TransactionsFromBlockForAddress(
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
      )
      const transactionsTo = parseBlockTo(block)

      console.log(
        `transactionsTo.length : ${JSON.stringify(
          transactionsTo.length,
          null,
          2
        )}`
      )
      assert.strictEqual(transactionsTo.length, 2)
    })
  })
})

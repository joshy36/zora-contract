import pkg from '@zoralabs/zdk';
const { ZDK, ZDKChain, ZDKNetwork } = pkg;
// assuming you set API_ENDPOINT to https://api.zora.co/graphql
const API_ENDPOINT = 'https://api.zora.co/graphql';
const zdk = new ZDK({
    endpoint: API_ENDPOINT,
    networks: [
        {
            chain: ZDKChain.Goerli,
            network: ZDKNetwork.Ethereum,
        },
    ],
    // apiKey: API_KEY, // optional!
});
const result = await zdk.events({
    where: {
        tokens: [
            {
                address: '0x4fd49b09a6672e786c22a9dd3e85bd59875a5578',
                tokenId: '1',
            },
        ],
    },
    pagination: {
        limit: 20,
    },
    // filter: {},
});
for (let i = 0; i < 20; i++) {
    console.log(result.events.nodes[i]);
}
//# sourceMappingURL=zdk.js.map
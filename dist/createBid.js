export default async (contract, wallet, txConfig, nftContractAddress, tokenId) => {
    return await contract
        .connect(wallet)
        .createBid(nftContractAddress, tokenId, txConfig);
};
//# sourceMappingURL=createBid.js.map
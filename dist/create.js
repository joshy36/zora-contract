export default async (contract, wallet, txConfig, nftContractAddress, tokenId) => {
    return await contract
        .connect(wallet)
        .createAuction(nftContractAddress, tokenId, 10, 10, nftContractAddress, 10, txConfig);
};
//# sourceMappingURL=create.js.map
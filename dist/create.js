export default async (contract, wallet, txConfig, nftContractAddress, tokenId, sellerFundsRecipient) => {
    return await contract
        .connect(wallet)
        .createAuction(nftContractAddress, tokenId, 10, 10, sellerFundsRecipient, 10, txConfig);
};
//# sourceMappingURL=create.js.map
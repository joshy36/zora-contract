export default async (contract, wallet, txConfig, nftContractAddress, tokenId) => {
    const tx = await contract
        .connect(wallet)
        .createAuction(nftContractAddress, tokenId, 10, 10, nftContractAddress, 10, txConfig);
    return tx;
};
//# sourceMappingURL=create.js.map
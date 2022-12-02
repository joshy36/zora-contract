export default async (contract, wallet, txConfig, contractAddress, tokenId) => {
    const tx = await contract
        .connect(wallet)
        .createAuction(contractAddress, tokenId, 10, 10, contractAddress, 10, txConfig);
};
//# sourceMappingURL=create.js.map
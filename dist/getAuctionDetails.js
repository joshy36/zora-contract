export default async (contract, nftContractAddress, tokenId) => {
    return await contract.auctionForNFT(nftContractAddress, tokenId);
};
//# sourceMappingURL=getAuctionDetails.js.map
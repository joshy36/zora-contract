import { ethers } from 'ethers';
export async function create(contract, wallet, txConfig, nftContractAddress, tokenId, duration, reservePrice, sellerFundsRecipient) {
    return await contract
        .connect(wallet)
        .createAuction(nftContractAddress, tokenId, duration, reservePrice, sellerFundsRecipient, 10, txConfig);
}
export async function createBid(contract, wallet, txConfig, nftContractAddress, tokenId, bidAmount) {
    txConfig.value = ethers.utils.parseEther(bidAmount);
    return await contract
        .connect(wallet)
        .createBid(nftContractAddress, tokenId, txConfig);
}
export async function auctionDetails(contract, nftContractAddress, tokenId) {
    return await contract.auctionForNFT(nftContractAddress, tokenId);
}
//# sourceMappingURL=utils.js.map
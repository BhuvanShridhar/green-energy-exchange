// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EnergyExchange {
    struct EnergyListing {
        address producer;
        uint256 amount; // Energy amount in kWh
        uint256 price;  // Price in wei per kWh
        bool isSold;
    }

    EnergyListing[] public listings;

    event EnergyListed(uint256 listingId, address producer, uint256 amount, uint256 price);
    event EnergyPurchased(uint256 listingId, address consumer, uint256 amount, uint256 totalPrice);

    // List energy for sale
    function listEnergy(uint256 amount, uint256 price) public {
        listings.push(EnergyListing({
            producer: msg.sender,
            amount: amount,
            price: price,
            isSold: false
        }));

        emit EnergyListed(listings.length - 1, msg.sender, amount, price);
    }

    // Purchase energy
    function purchaseEnergy(uint256 listingId) public payable {
        EnergyListing storage listing = listings[listingId];
        require(!listing.isSold, "Energy already sold");
        require(msg.value == listing.amount * listing.price, "Incorrect payment amount");

        listing.isSold = true;

        // Transfer payment to the producer
        payable(listing.producer).transfer(msg.value);

        emit EnergyPurchased(listingId, msg.sender, listing.amount, msg.value);
    }

    // Get total number of listings
    function getTotalListings() public view returns (uint256) {
        return listings.length;
    }
}
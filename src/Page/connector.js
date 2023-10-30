const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   }
  ],
  "name": "consumeFoodItem",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   }
  ],
  "name": "FoodItemConsumed",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "productName",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "origin",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "sentTimestamp",
    "type": "uint256"
   }
  ],
  "name": "FoodItemSent",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   }
  ],
  "name": "FoodItemVerified",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "productName",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "origin",
    "type": "string"
   }
  ],
  "name": "sendFoodItem",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   }
  ],
  "name": "verifyFoodItem",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   }
  ],
  "name": "foodItems",
  "outputs": [
   {
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "productName",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "origin",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "sentTimestamp",
    "type": "uint256"
   },
   {
    "internalType": "enum FoodTracking.FoodStatus",
    "name": "status",
    "type": "uint8"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "itemId",
    "type": "string"
   }
  ],
  "name": "getFoodItemDetails",
  "outputs": [
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   },
   {
    "internalType": "enum FoodTracking.FoodStatus",
    "name": "",
    "type": "uint8"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "owner",
  "outputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0x6c30284812fABe5ed9245A8d3f4A5581A456DA00" 

export const contract = new ethers.Contract(address, abi, signer)

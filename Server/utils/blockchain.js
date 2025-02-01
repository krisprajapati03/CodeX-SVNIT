const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const documents = require('../models/documents.models');

// Replace with your Pinata API key and secret
const PINATA_API_KEY = '4f190cdac2fb339ad2b7';
const PINATA_SECRET_API_KEY = '1cb30396f6964b073f22c0e5e938e6243ae2fc4dc5ccc5a69711b1129bd79f29';

// Function to upload a file to Pinata
async function uploadToPinata(filePath) {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  // Create form data
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    });

    const cid = response.data.IpfsHash;
    console.log('File uploaded to Pinata with CID:', cid);
    console.log('View at https://gateway.pinata.cloud/ipfs/' + cid);
    return cid;
  } catch (error) {
    console.error('Error uploading to Pinata:', error.response?.data || error.message);
    throw error;
  }
}

// Example usage
(async () => {
  try {
    // Upload a file to Pinata
    const filePath = '/Users/divyrajsinh/Desktop/Screenshot 2025-01-27 at 11.01.23 Pm.png'; // Replace with your file path
    await uploadToPinata(filePath);
  } catch (error) {
    console.error('Error in script:', error);
  }
})();


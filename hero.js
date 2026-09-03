const url = 'https://backend.payhero.co.ke/api/v2/payments';

const options = {
  method: 'POST',
  headers: {
    'Authorization': 'Basic RXY0NTN6bEM2UnZJZ1NLUThtclQ6Q1E1dkJmaHNSSmROaFR2Mms3YzR3ZTRheDhEMGl4NGhJOHRlajZ3Tw==',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  "amount": 10,
  "phone_number": "0717481718",
  "channel_id": 11652,
  "provider": "m-pesa",
  "external_reference": "INV-009",
  "customer_name": "albert",
  "callback_url": "https://example.com/callback.php"
})
};

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
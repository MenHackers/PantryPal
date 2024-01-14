import axios from 'axios'
const endpointUrl = "https://api.ocr.space/parse/image"
const apikey = "c6111cd29788957"
import fs from 'fs'

async function getReceiptText(image)
{ 
    // we start with a base64 encoded string of the image and the fileformat as a string
    //const filePath = 'output.txt';
    //fs.writeFileSync(filePath, image, 'utf-8');

    var scannedReceipt = await axios({
        method: 'post',
        url: endpointUrl,
        data:
        {   
            "language": "eng",
            "base64Image": image,
            "OCREngine": 2
        },
        headers: {
            'apikey': apikey,
        }
    });

    parsedText = scannedReceipt.data.ParsedResults[0].parsedText
    console.log(parsedText)

    const startRegex = /Walmart/;
    const endRegex = /CHANGE DIJE/;
    const patternRegex = /[A-Z]+\s?[A-Z]+(?=\s?\d{12}\b)/g;

    // Extract the relevant text
    const startIndex = startRegex.exec(parsedText).index;
    const endIndex = endRegex.exec(inputText).index + endRegex.exec(inputText)[0].length;

    const extractedText = inputText.slice(startIndex, endIndex);
    const matchedStrings = extractedText.match(patternRegex) || [];

    // Split the string into each line and return the object
    splitStrings = matchedStrings.split('\n')
    quantity = 0
    foodItems = []

    for(currentString of splitStrings)
    {
        for(string of splitStrings)
        {
            if(currentString = string)
            {
                quantity += 1
            }
        }
        foodItem = [currentString, quantity]
        quantity = 0;
        foodItems.push(foodItem)
    }

    return foodItems;
}

async function convertImageToBase64(filePath) {
    // Read the image file
    let input = ''

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        // Convert the binary data to base64
        var base64String = btoa(
            new Uint8Array(data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
        input = 'data:image/jpeg;base64,' + base64String
    });

    console.log(await getReceiptText(input))
}

async function doit()
{
    await convertImageToBase64('src/receipt.jpeg')
}

doit()





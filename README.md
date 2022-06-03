# Fix URLs. Mini JavaScript project

This is a very simple JavaScript project to show some string manipulation and if statement logic. Making practical applications is the best way to learn, even if it's something this simple.

## Files in this repo

- `index.html` -> Holds the code to show the webpage.
- `script.js` -> Holds the code that gives functionality to the page.

## What does it do?
The idea of this application, is to teach the logic behind simple string manipulation.
A user can input a website address, and the program will add HTTPS:// to it, creating a functioning URL.

### The logic:

- A user inserts a webpage address, for example "google.com".
- The program checks the first 4 characters.
  - If the the first 4 characters are not 'http' the program will:
    - log a warning in the console. 
    - Add "https://" to the address inserted by the user.
    - Display the URL as a `<a>` tag on the page.   
  - If the the first 4 characters are 'http' the program will:
     - Log a message and the URL in the console.
     - Display the URL as a `<a>` tag on the page.

> I recommend to run this page with the console open (right-click / inspect / console) to see the console.log() in action. 
> This script logs information about the link that the user inputs on purpose. This way, you can see how you can use the console functionality.

## How to run it
To run it:

 - Save the `index.html` and `script.js` files in a folder on your computer.
 - Open the `index.html` file in a browser.

Insert a webpage address.

![image](https://user-images.githubusercontent.com/99700157/171966719-81984cdc-6048-430e-8267-73d3ad1bd873.png)

Log a warning in the console if "http" is missing.

![image](https://user-images.githubusercontent.com/99700157/171966762-bb25912b-04d6-4d64-81d8-8fa2615bf256.png)

Fix and display the URL.

![image](https://user-images.githubusercontent.com/99700157/171966789-c93ff71c-433f-4861-8493-2c3975e8ec38.png)

Log a message and the URL in the console, if the link inserted has "http".

![image](https://user-images.githubusercontent.com/99700157/171966844-11183776-f316-44c4-8dc9-07974e2cc7d8.png)




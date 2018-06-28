// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function accountInformation(name, number, businessName){
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number: ${number}`);
    console.log(`Business Name: ${businessName}`);
}


// Add function to print all addresses, including a header
function showAddresses(addresses){
    console.log('Addresses:');
    for (let address of addresses) {
        console.log(address);
    }
}

// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers){
    console.log('Phone Numbers:');
    for (let k of phoneNumbers){
        console.log(k[0] + ": " + k[1]);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
let accountTransaction = new Map()

// Add function to add transactions
function addTransaction(date, amount){
    accountTransaction.set(date, amount);
}


// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', +1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);

// Add function to show balance status
function showBalanceStatus(balanceAmount){
    console.log(`Balance: ${balanceAmount}`);
    if (balanceAmount < 0){
        console.log("YOU ARE OVERDRAWN");
    }else if (balanceAmount > 0 && balanceAmount < 20){
        console.log("Warning: You are close to zero balance");
    }else{
        console.log("Thank you for your business");

    }

}

// Add function to show transactions
function showTransactions(accountTransaction, beginningBalance){
    console.log(`Starting balance: ${beginningBalance}`);
    let currentBalance =beginningBalance ;
    for (let k of accountTransaction) {
        currentBalance += k[1];
        let transType ;
        if (k[1]>0){
            transType = "DEPOSIT"
        }else {
            transType = "WITHDRAWAL"
         }   
        console.log(`Transaction date: ${k[0]}, Transaction Type: ${transType} ` + 
                        `Amount Changed: ${k[1]}, NEW BALANCE: ${currentBalance}`);
            
    }
    showBalanceStatus(currentBalance);
    if (currentBalance < 0) {
        addTransaction("June-27",-25);
    }
}  

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const balloonicorn = {
    "Account Holder": accountHolder,
    "Account Number": accountNumber,
    "Business Name": businessName,
    "Addresses": addresses,
    "Phone Numbers": phoneNumbers,
    "Transaction": accountTransaction,
    "starting Balance": 26000

};


// Function to add customer attributes
function addCustomerAttributes(melon="Cantaloupe", pets=0, customer = balloonicorn){
    customer["Favorite Melon"] = melon;
    customer["number of pets"] = pets;
return customer;
}

// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan
function gettBusinessLoan(annual_inc, customer = balloonicorn ) {
    let interestRate;
    if (customer["Favorite Melon"] === 'Casaba' || customer["number of pets"] >= 5){
        let preferred_cust = true;

      }
      if (annual_inc < 100000){
        if (preferred_cust === true){
        interestRate = 5;
        }else {
        interestRate = 5;
      }else{ if (annual_inc > 100000 && annual_inc < 200000){
        if (preferred_cust === true){
        interestRate = 4;
        }else {
        interestRate = 7;
      }
    }else{
        interestRate = 4;
      }
      
    }


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours





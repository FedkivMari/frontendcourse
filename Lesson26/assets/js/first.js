/* Create a “groceries list” array. Each element of the array is an object that contains the name of a product,
 an amount needed and whether it is bought or not. Write a few functions for working with this array. 

Display the entire list, so that the not yet purchased items go before the bought ones. 
Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the
existing purchase, not in a new one. 
Purchasing a product. The function accepts the name of a product and marks it as bought. */

let groceriesList = 
[
   {
    name: "apple",
    amount: 5,
    bought: false,
   },
   {
    name: "juice",
    amount: 2,
    bought: true,
   },
   {
    name: "tomat",
    amount: 3,
    bought: false,
   },
]

function addingPurchase()
{
    let purchaseName = prompt(`Enter name of purchase that you want add`);
    let purchaseAmount = prompt(`Enter the number of items that you want add`);
    let i = groceriesList.indexOf(purchaseName);
    if (i>-1)
    {
        groceriesList[i].amount += purchaseAmount; 
    } else
    {
        groceriesList.push({name:purchaseName, amount:purchaseAmount, bought:false});
    }
    return console.log(`Purchase ${purchaseName} in the amount of ${purchaseAmount} added.`);
};

function  makePurchase()
{
    let purchaseName = prompt(`Enter name of your purchase`);
    let purchaseAmount = prompt(`Enter the number of items`);
    let i = groceriesList.indexOf(purchaseName);
    if (groceriesList[i].amount > purchaseAmount)
    {
        groceriesList[i].amount -= purchaseAmount; 
        return console.log(`Amount of purchase ${purchaseName} decrise by ${purchaseAmount}`)
    } else
    {
        groceriesList.slice(i, 1);
        return console.log(`Purchase ${purchaseName} deleted from the list`);
    }
    
};

addingPurchase();
makePurchase()
for (i = 0; i < groceriesList.length; i++) { console.log(groceriesList[i]); }

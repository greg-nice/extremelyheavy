//--------------------------
// Sample data (leave as-is)
//--------------------------
const data = [
    {
        "id": "3cc51cfd-6e3c-41eb-9604-362da3a6fb64",
        "symbol": "MSFT",
        "companyName": "Microsoft",
        "price": 310.98,
        "quantity": 2000,
        "currency": "USD"
    },
    {
        "id": "0572be22-d790-460e-bf03-8ee1b3b19dad",
        "symbol": "MSFT",
        "companyName": "Microsoft",
        "price": 310.9,
        "quantity": 1500,
        "currency": "USD"
    },
    {
        "id": "8f356500-de35-4378-b7a3-5c587da54cd5",
        "symbol": "AAPL",
        "companyName": "Apple",
        "price": 174.78,
        "quantity": 500,
        "currency": "USD"
    },
    {
        "id": "5f92c4c3-b6b9-4538-9e80-d587217e8410",
        "symbol": "VOD",
        "price": 130.02,
        "quantity": 3290,
        "currency": "GBP"
    },
    {
        "id": "00000000-0000-0000-0000-000000000000",
        "symbol": "XXX",
        "price": 99.99,
        "quantity": 100,
        "currency": "GBP"
    },
    {
        "id": "155ac33b-05c4-42f7-a446-0b7ffacf2504",
        "symbol": "VOD",
        "price": 128.91,
        "quantity": 8500,
        "currency": "GBP"
    }
];


//----------------------
// The method to improve.
// Submit a revised version of this function below, making any changes
// you believe improve the code while satisfying the requirements above.
//----------------------
function doProcesstrades(trades) {

    const output = {};
    output.count = 0;
    output.symbols = new Set();
    output.trades = [];

    //iterate through each trade
    for (const trade of trades) {

        // 0) remove bad trade & skip to next trade
        if (trade.id === '00000000-0000-0000-0000-000000000000') {
            console.log("Bad trade removed:\n", trade);
            continue;
        }

        // 1) add cost to total per currency
        if (!output.hasOwnProperty("total" + trade.currency)) {
            output["total" + trade.currency] = trade.price * trade.quantity;
        } else {
            output["total" + trade.currency] = output["total" + trade.currency] + trade.price * trade.quantity;
        }

        // 2) collect symbol
        output.symbols.add(trade.symbol);

        // 3) handle missing name
        if (!trade.hasOwnProperty("companyName")) {
            trade.companyName = trade.symbol;
        }

        // 4) add trade to returned array
        output.trades.push(trade);

        // 5) increment trade count;
        output.count++;
    }

    output.symbols = Array.from(output.symbols);

    return output;
}


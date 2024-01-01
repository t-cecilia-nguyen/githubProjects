function calculate_coins () {
    var dollar_amount = document.getElementById('dollar_amount').value;

    var parts = dollar_amount.split('.');
    
    if (parts[1].length > 2) {
        return alert("Input must have maximum of 2 decimal places");
    } else {
        var total_cents = dollar_amount * 100 % 100;
        
        dollar_amount -= total_cents / 100;

        var quarter_amount = parseInt(total_cents / 25);
        total_cents %= 25;

        var dime_amount = parseInt(total_cents / 10);
        total_cents %= 10;

        var nickel_amount = parseInt(total_cents / 5);
        total_cents %= 5;

        var penny_amount = total_cents;

        document.getElementById('dollars').innerHTML = dollar_amount;
        document.getElementById('quarters').innerHTML = quarter_amount;
        document.getElementById('dimes').innerHTML = dime_amount;
        document.getElementById('nickels').innerHTML = nickel_amount;
        document.getElementById('pennies').innerHTML = penny_amount;
    }
}


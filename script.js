let currentInput = "";

function append(value)
{
    currentInput += value;

    document.getElementById("expression").innerText =
    currentInput;
}

function clearDisplay()
{
    currentInput = "";

    document.getElementById("expression").innerText = "";

    document.getElementById("result").innerText = "0";
}

function deleteLast()
{
    currentInput =
    currentInput.slice(0,-1);

    document.getElementById("expression").innerText =
    currentInput;
}

function calculate()
{
    try
    {
        let expression =
        currentInput.replace('%','/100');

        let operator;

        if(expression.includes('+'))
            operator='+';

        else if(expression.includes('-'))
            operator='-';

        else if(expression.includes('*'))
            operator='*';

        else if(expression.includes('/'))
            operator='/';

        let parts =
        expression.split(operator);

        let num1 =
        parseFloat(parts[0]);

        let num2 =
        parseFloat(parts[1]);

        let result;

        switch(operator)
        {
            case '+':
                result = num1 + num2;
                break;

            case '-':
                result = num1 - num2;
                break;

            case '*':
                result = num1 * num2;
                break;

            case '/':
                if(num2 == 0)
                    result = "Error";
                else
                    result = num1 / num2;
                break;

            default:
                result = "Error";
        }

        document.getElementById("result").innerText =
        result;
    }
    catch
    {
        document.getElementById("result").innerText =
        "Error";
    }
}

#include <stdio.h>

int main()
{
    double num1, num2, result;
    int choice;

    printf("\n=================================\n");
    printf("      SMART CALCULATOR\n");
    printf("=================================\n");

    printf("\n1. Addition");
    printf("\n2. Subtraction");
    printf("\n3. Multiplication");
    printf("\n4. Division");

    printf("\n\nEnter your choice (1-4): ");
    scanf("%d", &choice);

    printf("Enter first number: ");
    scanf("%lf", &num1);

    printf("Enter second number: ");
    scanf("%lf", &num2);

    switch(choice)
    {
        case 1:
            result = num1 + num2;
            printf("\nResult = %.2lf\n", result);
            break;

        case 2:
            result = num1 - num2;
            printf("\nResult = %.2lf\n", result);
            break;

        case 3:
            result = num1 * num2;
            printf("\nResult = %.2lf\n", result);
            break;

        case 4:

            if(num2 == 0)
            {
                printf("\nError! Division by zero is not allowed.\n");
            }
            else
            {
                result = num1 / num2;
                printf("\nResult = %.2lf\n", result);
            }

            break;

        default:
            printf("\nInvalid Choice!\n");
    }

    return 0;
}
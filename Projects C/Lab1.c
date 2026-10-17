#include <stdio.h>
#include <windows.h>

int main() {
    SetConsoleOutputCP(65001);
    SetConsoleCP(65001);

    double x, y;

    printf("Введіть x: ");
    if (scanf("%lf", &x) != 1) {
        printf("Помилка введення.\n");
        return 1;
    }

    if (x > -15) {
        if (x <= 3) {
            y = 4 * x * x + 2;
            printf("y = %.4lf\n", y);
        } else {
            if (x > 20) {
                y = (3 * x * x * x) / 4.0 - 5;
                printf("y = %.4lf\n", y);
            } else {
                printf("Функція не існує для даного x.\n");
            }
        }
    } else {
        if (x <= -30) {
            y = (3 * x * x * x) / 4.0 - 5;
            printf("y = %.4lf\n", y);
        } else {
            printf("Функція не існує для даного x.\n");
        }
    }

    return 0;
}
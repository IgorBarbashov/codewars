### 99. Двоичный поиск
Реализуйте двоичный поиск в массиве

### Формат ввода
В первой строке входных данных содержатся натуральные числа
`N` и `K`, `(0 < N,K ≤ 100 000)`. Во второй строке задаются `N` элементов первого массива, а в третьей строке - `K` элементов второго массива. Элементы обоих массивов - целые числа, каждое из которых по модулю не превосходит `10^9`


### Формат вывода
Требуется для каждого из `K` чисел вывести в отдельную строку `"YES"`, если это число встречается в первом массиве, и `"NO"` в противном случае.

### Ограничения
- Ограничение времени - **1 с**
- Ограничение памяти - **64 МБ**

### Пример 1
```
Ввод
10 10
1 61 126 217 2876 6127 39162 98126 712687 1000000000
100 6127 1 61 200 -10000 1 217 10000 1000000000

Вывод
NO
YES
YES
YES
NO
NO
YES
YES
NO
YES
```

## Пример 2
```
Ввод
10 10
-8 -6 -4 -4 -2 -1 0 2 3 3
8 3 -3 -2 2 -1 2 9 -8 0

Вывод
NO
YES
NO
YES
YES
YES
YES
NO
YES
YES
```

### Пример 3
```
Ввод
10 5
1 2 3 4 5 6 7 8 9 10
-2 0 4 9 12

Вывод
NO
NO
YES
YES
NO
```
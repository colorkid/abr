# Тестовое задание

npm start - dev \
npm build - prod

## Задание:
Требуется разработать депозитный калькулятор, с интерфейсом, где необходимо выбрать тип вклада, сумму и срок вклада, и рассчитывающий процентную ставку и доход в рублях за выбранный период времени. Необходимо также обеспечить возможность вывода полученных данных на печать в формате pdf. Информация о сопоставлении процентных ставок с возможными суммами и сроками для всех депозитов отражена в файле depcalc.json.

На что требуется обратить внимание:
- При анализе сроков депозита period_from нужно учитывать наличие или отсутствие следующего значения, потому что именно они вместе образуют "Шаги" срока. Например, period_from = 1, period_from = 2 и period_from = 7 образуют шаги срока "1 день, от 2 до 6 дней, больше 7 дней" в случае, если значение "7" будет последним.
- По тому же самому принципу работают шаги с суммами summ_from. Таким образом, summ_from = 100, summ_from = 300 и summ_from = 600, образуют шаги сумм "от 100 до 299 рублей, от 300 до 599 рублей и свыше 600 рублей", если значение 600 будет последним.
- Для каждого из депозитных продуктов требуется анализировать минимальные значения сроков и сумм, не давая в интерфейсе установить значения меньше. На примере json файла для депозита "Универсальный" для срока в 1 день сумма в 1 000 000 рублей будет минимальной, но для срока в 31 день - уже 500 000 рублей будут минимальными.
// Strict Mode
'use strict';


// Node Elements
const $startBtn = document.getElementById('start'),
  $budgetValue = document.querySelector('.budget-value'),
  $daybudgetValue = document.querySelector('.daybudget-value'),
  $levelValue = document.querySelector('.level-value'),
  $expensesValue = document.querySelector('.expenses-value'),
  $optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  $incomeValue = document.querySelector('.income-value'),
  $monthsavingsValue = document.querySelector('.monthsavings-value'),
  $yearsavingsValue = document.querySelector('.yearsavings-value'),


  $expensesItem = document.getElementsByClassName('expenses-item'),
  $expensesItemBtn = document.getElementsByTagName('button')[0],
  $countBudgetBtn = document.querySelector('.count-budget-btn'),
  $optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  $optionalExpensesButton = document.querySelector('.optionalexpenses-btn'),
  $countBtn = document.getElementsByTagName('button')[2],
  $incomeItem = document.querySelector('.choose-income'),
  $checkSavings = document.querySelector('#savings'),
  $sumValue = document.querySelector('.choose-sum'),
  $percentValue = document.querySelector('.choose-percent'),
  $yearValue = document.querySelector('.year-value'),
  $monthValue = document.querySelector('.month-value'),
  $dayValue = document.querySelector('.day-value');


// Global Variables
let money,
  time;


// Start Button
$startBtn.addEventListener('click', (event) => {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while (isNaN(money) || money == '' || money === null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;

  $budgetValue.textContent = money.toFixed();
  $yearValue.value = new Date(Date.parse(time)).getFullYear();
  $monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  $dayValue.value = new Date(Date.parse(time)).getDate();
});


// Expenses Button
$expensesItemBtn.addEventListener('click', (event) => {
  let total = 0;

  for (let i = 0; i < $expensesItem.length; i++) {
    const a = $expensesItem[i].value,
      b = $expensesItem[++i].value;

    if (a && b && a !== '' && b !== '') {
      appData.expenses[a] = b;
      total += +b;
    } else {
      i = i - 1;
    }
  }
  $expensesValue.textContent = total;
});


// Optional Expenses Button
$optionalExpensesButton.addEventListener('click', (event) => {
  for (let i = 0; i < $optionalExpensesItem.length; i++) {
    const a = $optionalExpensesItem[i].value;

    if (a && a !== '') {
      appData.optionalExpenses[i] = a;
      $optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
    }
  }
});

// Count Budget Button
$countBudgetBtn.addEventListener('click', (event) => {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  $daybudgetValue.textContent = appData.moneyPerDay;

  // Detect Level
  function detectLevel(moneyPerDay) {
    if (moneyPerDay < 100) {
      return ('У вас минимальный уровень достатка!');
    } else if (moneyPerDay > 100 && moneyPerDay < 500) {
      return ('У вас маленький уровень достатка!');
    } else if (moneyPerDay > 500 && moneyPerDay < 2000) {
      return ('У вас средний уровень достатка!');
    } else if (moneyPerDay > 2000 && moneyPerDay < 5000) {
      return ('У вас большой уровень достатка!');
    } else if (moneyPerDay > 5000 && moneyPerDay < 10000) {
      return ('У вас огромный уровень достатка!');
    } else {
      return ('Произошла ошибка');
    }
  }
  $levelValue.textContent = detectLevel(appData.moneyPerDay);
});


// Choose Income
$incomeItem.addEventListener('input', (event) => {
  let items = $incomeItem.value;

  if (items && (typeof (items) === 'string')) {
    appData.income = items.split(', ');
    $incomeValue.textContent = appData.income;
  }
});


// Savings
$checkSavings.addEventListener('click', (event) => {
  if ($checkSavings.checked) {
    appData.savings = true;
  } else {
    appData.savings = false;
  }
});

$sumValue.addEventListener('input', (event) => {
  if (appData.savings) {
    let total = +$sumValue.value,
      percent = +$percentValue.value;
    
    appData.monthIncome = (total / 100 / 12 * percent).toFixed();
    appData.yearIncome = (total / 100 * percent).toFixed();

    $monthsavingsValue.textContent = appData.monthIncome;
    $yearsavingsValue.textContent = appData.yearIncome;
  }
});

$percentValue.addEventListener('input', (event) => {
  if (appData.savings) {
    let total = +$sumValue.value,
      percent = +$percentValue.value;

    appData.monthIncome = (total / 100 / 12 * percent).toFixed();
    appData.yearIncome = (total / 100 * percent).toFixed();

    $monthsavingsValue.textContent = appData.monthIncome;
    $yearsavingsValue.textContent = appData.yearIncome;
  }
});


const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};
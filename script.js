document.getElementById('calculate').addEventListener('click', function() {
    const amountStr = document.getElementById('amount').value;
    const amount = parseFloat(amountStr);

    if (isNaN(amount)) {
        alert('请输入一个数字');
        return;
    }

    let result_min, result_max;

    if (amount <= 100000) {
        result_min = 3000;
        result_max = 8000;
    } else if (amount <= 1000000) {
        result_min = 3000 + (amount - 100000) * 0.03;
        result_max = 8000 + (amount - 100000) * 0.06;
    } else if (amount <= 5000000) {
        result_min = 3000 + 27000 + (amount - 1000000) * 0.02;
        result_max = 8000 + 54000 + (amount - 1000000) * 0.05;
    } else if (amount <= 10000000) {
        result_min = 3000 + 27000 + 80000 + (amount - 5000000) * 0.01;
        result_max = 8000 + 54000 + 150000 + (amount - 5000000) * 0.04;
    } else {
        result_min = 3000 + 27000 + 80000 + 50000 + (amount - 10000000) * 0.005;
        result_max = 8000 + 54000 + 150000 + 200000 + (amount - 10000000) * 0.03;
    }

    const result_median = (result_min + result_max) / 2;

    document.getElementById('result').innerHTML = `<p>律师费最低收费：${result_min.toFixed(2)}元</p><p>律师费最高收费：${result_max.toFixed(2)}元</p><p>中位数：${result_median.toFixed(2)}元</p>`;
});
function updateInputChn() {
  const numInput = parseFloat(document.getElementById('app-input').value);
  if (!isNaN(numInput)) {
    const numChn = num2chn(numInput);
    document.getElementById('inputChn').innerHTML = numChn;
  } else {
    document.getElementById('inputChn').innerHTML = '';
  }
}
        // login button event handler
        const enter = document.getElementById('login');
        enter.addEventListener('click', function(){
            const submitArea = document.getElementById('login-area');
            submitArea.style.display = 'none';
            const transactionArea = document.getElementById('transaction-area');
            transactionArea.style.display = 'block';
        })

        // Deposit button event handler
        const depositBtn = document.getElementById('deposit-btn');
        depositBtn.addEventListener('click', function(){
            const depositAmount = document.getElementById('deposit-amount').value;
            const depositNumber = parseFloat(depositAmount);

            updateSpanText('current-deposit', depositNumber);
            updateSpanText('current-balance', depositNumber);

            document.getElementById('deposit-amount').value = '';

        })


        // Withdraw button event handler
        const withdrawBtn = document.getElementById('withdraw-btn');
        withdrawBtn.addEventListener('click', function(){
            const withdrawNumber = getInputNumber('withdraw-amount');
            updateSpanText('current-withdraw', withdrawNumber);
            updateSpanText('current-balance', -1 * withdrawNumber);
            document.getElementById('withdraw-amount').value = '';
        })
        
        function getInputNumber(id){
            const withdrawAmount = document.getElementById(id).value;
            const withdrawNumber = parseFloat(withdrawAmount);
            return withdrawNumber
        }

        function updateSpanText(id, depositNumber){
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const totalBalance = depositNumber + currentNumber;
            document.getElementById(id).innerText = totalBalance;
        }




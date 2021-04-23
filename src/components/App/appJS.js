function methods() 
{
    return (
        function addExpense() {
            setExpenses([...expenses, textInput.current.value])
            textInput.current.value = ""; 
        
          },
          
          function addIncome() {
            setIncome([...income, textInput.current.value]) 
        
          }
    );
 }


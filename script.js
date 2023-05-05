const animateNumber = (element, targetNumber, duration) => {
    const increment = 1;
    const frameTime = duration / (targetNumber / increment);
    let currentNumber = 0;
    
    const updateCounter = () => {
        currentNumber += increment;
        element.textContent = currentNumber;
        
        if (currentNumber < targetNumber) {
            setTimeout(updateCounter, frameTime);
        }
    };
    
    updateCounter();
}

document.getElementById('age-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get current date
    // Get current date
    const now = new Date();
    const [currentYear, currentMonth, currentDay] = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
    const firstDayOfCurrentMonth = new Date(currentYear, currentMonth - 1, 1);
    const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    
    // Get input values
    const [birthDay, birthMonth, birthYear] = [parseInt(document.getElementById('day').value, 10), parseInt(document.getElementById('month').value, 10), parseInt(document.getElementById('year').value, 10)];  
    
    // Calculate difference
    let diffInYears = currentYear - birthYear;
    
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        diffInYears -= 1;
    }
    
    let diffInMonths = currentMonth - birthMonth;
    
    if (currentDay < birthDay) {
        diffInMonths -= 1;
    }
    
    if (diffInMonths < 0) {
        diffInMonths += 12;
    }
    
    let diffInDays = currentDay - birthDay;
    
    if (diffInDays < 0) {
        diffInDays += daysInPreviousMonth;
    }
    
    
    // Update DOM with the increasing number effect
    animateNumber(document.getElementById('years'), diffInYears, 1000);
    animateNumber(document.getElementById('months'), diffInMonths, 1000);
    animateNumber(document.getElementById('days'), diffInDays, 1000);
    
});


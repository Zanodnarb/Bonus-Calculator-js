const employees = [
    {
        name: 'Atticus',
        employeeNumber: '2405',
        annualSalary: 47000,
        reviewRating: 3
    },
    {
        name: 'Jem',
        employeeNumber: '62347',
        annualSalary: 63500,
        reviewRating: 4
    },
    {
        name: 'Scout',
        employeeNumber: '6243',
        annualSalary: 74750,
        reviewRating: 5
    },
    {
        name: 'Robert',
        employeeNumber: '26835',
        annualSalary: 66000,
        reviewRating: 1
    },
    {
        name: 'Mayella',
        employeeNumber: '89068',
        annualSalary: 35000,
        reviewRating: 1
    },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function processEmployee(employee) {
    
      let bonusPercentage = calculateBonus(employee);
    
      let totalBonus = Math.round(bonusPercentage * Number(employee.annualSalary));
    
      let totalCompensation = totalBonus + Number(employee.annualSalary);
    
      let processedEmployee = {
        name: employee.name,
        bonusPercentage: bonusPercentage,
        totalBonus: totalBonus,
        totalCompensation: totalCompensation
      }
    
      return processedEmployee;
    }

function calculateBonus(employee) {
    let bonusPercentage;
  
    
    if (employee.reviewRating <= 2) {
      //  <=2 -- No Bonus added
      bonusPercentage = 0;
    } else if (employee.reviewRating === 3) {
      //  Rating 3 = 4%
      bonusPercentage = .04;
    } else if (employee.reviewRating === 4) {
      //  Rating 4 = 6%
      bonusPercentage = .06;
    } else if (employee.reviewRating === 5) {
      //  Rating 5 = 10%
      bonusPercentage = .1;
    }
    
    if (employee.employeeNumber.length === 4) {
      // IF employeeNumber is 4 digits
      // +5% to BONUS
      bonusPercentage += .05;
    }
    if (parseInt(employee.annualSalary) > 65000) {
      // IF income > $65,000
      // -1% to BONUS
      bonusPercentage -= .01;
    }
    // CAP bonusPercentage at 13%
    if (bonusPercentage > 0.13) {
        bonusPercentage = 0.13;
    } else if (bonusPercentage < 0) {
        bonusPercentage = 0;
    }
    return bonusPercentage;
    }

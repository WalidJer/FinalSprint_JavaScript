fetch('./Employees.json')
    .then(response => response.json())
    .then(data => {
        // Log the entire data to the console
        console.log(data);

        //  Display one key-value pair from each record using forEach
        data.forEach(employee => {

            console.log('%c🚀 Employee Details', 'color: blue; font-weight: bold; font-size: 16px; background-color: #e0f7fa; padding: 5px; border-radius: 5px;');
            console.log(`%c👤 Name: %c${employee.firstName} ${employee.lastName}`, 'color: green;', 'color: black;');
            console.log(`%c💼 Position: %c${employee.position}`, 'color: green;', 'color: black;');
            console.log(`%c🏢 Department: %c${employee.department}`, 'color: green;', 'color: black;');
            console.log(`%c📧 Email: %c${employee.email}`, 'color: green;', 'color: black;');
            console.log(`%c📞 Phone: %c${employee.phone}`, 'color: green;', 'color: black;');
            console.log(`%c🏠 Address: %c${employee.address.street}, ${employee.address.city}, ${employee.address.province}, ${employee.address.postalCode}, ${employee.address.country}`, 'color: green;', 'color: black;');
            console.log(`%c💵 Salary: %c$${employee.salary}`, 'color: green;', 'color: black;');
            console.log(`%c📅 Date of Joining: %c${employee.dateOfJoining}`, 'color: green;', 'color: black;');
            console.log(`%c🎂 Birthdate: %c${employee.birthdate}`, 'color: green;', 'color: black;');
            console.log(`%c💡 Skills: %c${employee.skills.join(', ')}`, 'color: green;', 'color: black;');
            console.log(`%c📈 Years of Experience: %c${employee.yearsOfExperience}`, 'color: green;', 'color: black;');
            console.log('%c--------------------------------------------', 'color: blue; background-color: #e0f7fa; padding: 5px; border-radius: 5px;');
        
        });

        // Function to get employees by department
        function getEmployeesByDepartment(department) {
            let employees = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].department === department) {
                    employees.push(`${data[i].firstName} ${data[i].lastName}`);
                }
            }
            return employees.join(', ');
        }

        // Function to get the average salary
        function getAverageSalary() {
            let totalSalary = 0;
            let employeeCount = data.length;
            for (let i = 0; i < employeeCount; i++) {
                totalSalary += data[i].salary;
            }
            return totalSalary / employeeCount;
        }

        // Function to get employees by skill
        function getEmployeesBySkill(skill) {
            let employees = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].skills && data[i].skills.includes(skill)) {
                    employees.push(`${data[i].firstName} ${data[i].lastName}`);
                }
            }
            return employees.join(', ');
        }

        // Function to get the average years of experience
        function getAverageExperience() {
            let totalExperience = 0;
            let employeeCount = data.length;
            for (let i = 0; i < employeeCount; i++) {
                totalExperience += data[i].yearsOfExperience;
            }
            return totalExperience / employeeCount;
        }

        // Function to get the highest paid employee
        function getHighestPaidEmployee() {
            let highestPaid = data[0];
            for (let i = 1; i < data.length; i++) {
                if (data[i].salary > highestPaid.salary) {
                    highestPaid = data[i];
                }
            }
            return `${highestPaid.firstName} ${highestPaid.lastName}, ${highestPaid.position}, $${highestPaid.salary}`;
        }

        // Function to get the lowest paid employee
        function getLowestPaidEmployee() {
            let lowestPaid = data[0];
            for (let i = 1; i < data.length; i++) {
                if (data[i].salary < lowestPaid.salary) {
                    lowestPaid = data[i];
                }
            }
            return `${lowestPaid.firstName} ${lowestPaid.lastName}, ${lowestPaid.position}, $${lowestPaid.salary}`;
        }


        // Function to get employees with more than a specified number of years of experience
        function getEmployeesWithExperienceGreaterThan(years) {
            let employees = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].yearsOfExperience > years) {
                    employees.push(`${data[i].firstName} ${data[i].lastName}`);
                }
            }
            return employees.join(', ');
        }
        

        // Function to generate full employee profile
        function generateEmployeeProfiles() {
            let profiles = '';
            for (let i = 0; i < data.length; i++) {
                let employee = data[i];
                profiles += `
                <div class="employee-profile">
                    <h3><i class="fas fa-user" style="color: inherit;" ></i> ${employee.firstName} ${employee.lastName}</h3>
                    <p><i class="fas fa-building"></i> <b>Department:</b> ${employee.department}</p>
                    <p><i class="fas fa-envelope"></i> <b>Email:</b> ${employee.email}</p>
                    <p><i class="fas fa-phone"></i> <b>Phone:</b> ${employee.phone}</p>
                    <p><i class="fas fa-map-marker-alt"></i> <b>Address:</b> ${employee.address.street}, ${employee.address.city}, ${employee.address.province}, ${employee.address.postalCode}, ${employee.address.country}</p>
                    <p><i class="fas fa-dollar-sign"></i> <b>Salary:</b> $${employee.salary}</p>
                    <p><i class="fas fa-calendar-alt"></i> <b>Date of Joining:</b> ${employee.dateOfJoining}</p>
                    <p><i class="fas fa-birthday-cake"></i> <b>Birthdate:</b> ${employee.birthdate}</p>
                    <p><i class="fas fa-cogs"></i> <b>Skills:</b> ${employee.skills.join(', ')}</p>
                    <p><i class="fas fa-clock"></i> <b>Years of Experience:</b> ${employee.yearsOfExperience}</p>
                    <hr>
                    </div>`;
            }
            return profiles;
        }

        // Function to get employee info based on criterion
        function getEmployeeInfo(criterion) {
            switch (criterion) {
                case 'marketing':
                    return `<b><i class="fas fa-bullhorn"></i> Employees in Marketing:</b> ${getEmployeesByDepartment('Marketing')}`;
                case 'averageSalary':
                    return `<b><i class="fas fa-dollar-sign"></i> Average Salary:</b> $${getAverageSalary().toFixed(2)}`;
                case 'jsSkill':
                    return `<b><i class="fas fa-code"></i> Employees with JavaScript Skill:</b> ${getEmployeesBySkill('JavaScript')}`;
                case 'averageExperience':
                    return `<b><i class="fas fa-clock"></i> Average Years of Experience:</b> ${getAverageExperience().toFixed(2)}`;
                case 'highestPaid':
                    return `<b><i class="fas fa-trophy"></i> Highest Paid Employee:</b> ${getHighestPaidEmployee()}`;
                case 'lowestPaid':
                    return `<b><i class="fas fa-exclamation-circle"></i> Lowest Paid Employee:</b> ${getLowestPaidEmployee()}`;
                case 'yearsOfExperienceGreaterThan':
                    return `<b><i class="fas fa-briefcase"></i> Employees with more than 5 years of experience:</b> ${getEmployeesWithExperienceGreaterThan(5)}`;
                default:
                    return 'Invalid criterion';
            }
        }



        // Display the results in the browser window
        document.getElementById('employee-profiles').innerHTML = `
            <p>${getEmployeeInfo('marketing')}</p>
            <p>${getEmployeeInfo('averageSalary')}</p>
            <p>${getEmployeeInfo('jsSkill')}</p>
            <p>${getEmployeeInfo('averageExperience')}</p>
            <p>${getEmployeeInfo('highestPaid')}</p>
            <p>${getEmployeeInfo('lowestPaid')}</p>
            <p>${getEmployeeInfo('yearsOfExperienceGreaterThan')}</p>
            <h2>Employee Details</h2>
            ${generateEmployeeProfiles()}
        `;
    })
    .catch(error => {
        // Handle any errors that occur while fetching the file
        console.error(error);
    });
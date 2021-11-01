import { useState, useEffect } from "react";

const MortgageCalculatorForm = ({onMortgageSubmit}) => {


    // convention if you want empty state, use empty data type, in this scenario strings ""
    // setSalary and setDeposit are methods that let us change the value of salary and deposit
    const [ salary, setSalary ] = useState("");
    const [ deposit, setDeposit ] = useState("");

    const getMortgage = () => {
        console.log('getting launch information');
    }

    useEffect(() => {
        getMortgage()
    }, [salary])


    const handleSalaryChange = (event) => {
        // console.log(event.target.value);
        setSalary(event.target.value);
    }

    const handleDepositChange = (event) => {
        // console.log(event.target.value);
        setDeposit(event.target.value);
    }

    const handleFormSubmit = (event) => {
        // stop default behaviour refresh when form submitted
        event.preventDefault();

        // VALIDATE
        // take off spaces off the end of form input value
        const salaryToSubmit = salary.trim();
        const depositToSubmit = deposit.trim();
        // if salaryToSubmit is empty then fire a return
        if (!salaryToSubmit || !depositToSubmit) {
            return;
        }

        // 2. UPDATE
        onMortgageSubmit ({
            salary: salaryToSubmit,
            deposit: depositToSubmit
        });

        //  3. RESET
        console.log("MortgageForm submit function called...")
        setSalary("");
    }

    return (
        <>
        {/* when form submitted run handleFormSubmit function */}
        <form onSubmit={handleFormSubmit}>
            <label>Your Salary(£): </label>
            <input
                type="number"
                placeholder="Your Salary"
                value={salary}
                onChange={handleSalaryChange}
            />
            <label>Your Deposit(£): </label>
            <input
                type="number"
                placeholder="Your Deposit"
                value={deposit}
                onChange={handleDepositChange}
            />
            <input 
                type="submit"
                value="Submit"
            />
        </form>
        </>
    );
}

export default MortgageCalculatorForm;
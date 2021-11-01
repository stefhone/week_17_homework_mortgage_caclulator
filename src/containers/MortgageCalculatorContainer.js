import { useState } from "react";
import MortgageList from "../components/MortgageList"
import MortgageCalculatorForm from "../components/MortgageCalculatorForm";

const MortgageCalculatorContainer = () => {

    const [mortgages, setMortgages] = useState([{}]);

    const addMortgage = (submittedMortgage) => {
        // unique key value
        submittedMortgage.id = Date.now();
        // updatedComments equals a copy of everything in the comments array and add on submittedComment to the end
        const updatedMortgages = [...mortgages, submittedMortgage];
        setMortgages(updatedMortgages);
    }


    return (
        <>
            <h1>MortgageCalculatorContainer gos here.</h1>
            <MortgageCalculatorForm onMortgageSubmit={ (mortgage) => addMortgage(mortgage) }/>

            <MortgageList mortgages={ mortgages }/>
        </>
    )
}

export default MortgageCalculatorContainer;
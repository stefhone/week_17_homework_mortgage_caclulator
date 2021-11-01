import Mortgage from './Mortgage'

const MortgageList = ({ mortgages }) => {

    const mortgageNodes = mortgages.map(mortgage =>  {
        return (
            <Mortgage salary={mortgage.salary} deposit={mortgage.deposit} />
        );
    })

    return (
        <>
            {mortgageNodes}
        </>
    );
}

export default MortgageList;
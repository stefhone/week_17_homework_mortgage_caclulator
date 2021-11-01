const Mortgage = ({ salary , deposit}) => {

    return (
        <>
            <p>Your Mortgage Amount: £{ salary * 3}</p>
            <p>Your Deposit Amount: £{ deposit }</p>
            <p>Your Mortgage including Deposit Amount: £</p>
        </>
    );
}

export default Mortgage;
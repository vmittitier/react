const Challenge = () => {
    let num1 = 1
    let num2 = 2

    const handleSum = (e) => {
        let sumNum = num1+num2
        return console.log(sumNum);
    } 

    return(
        <div>
            <p>Primeiro numero:{num1}</p>
            
            <p>Segundo numero:{num2}</p>

            <button onClick={handleSum}>Somar</button>
        </div>
    )
}

export default Challenge;
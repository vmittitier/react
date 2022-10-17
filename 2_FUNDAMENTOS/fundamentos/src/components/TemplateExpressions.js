const TemplateExpressions = () => {

    const name = "Vini";
    const data = {
        age: 32,
        job: "Jr Programmer",
    };

    return(
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Voce tem {data.age} anos e atua como {data.job}.</p>
            <p>{console.log("JSX React")}</p>    
        </div>
    )

}

export  default TemplateExpressions;
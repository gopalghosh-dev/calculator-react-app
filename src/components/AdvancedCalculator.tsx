"use client";

import { useState } from "react";
import { Input } from "./shadcnui/input";

const AdvancedCalculator = () => {

    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [operator, setOperator] = useState("");
    const [total, setTotal] = useState("");

    const handleCalculate = () => {
        if (number1 !== "" && number2 !== "" && operator !== "") {
            const num1 = parseInt(number1);
			const num2 = parseInt(number2);


            switch (operator) {
                case "+":
                    setTotal((num1 + num2).toString())
                    break;


                case "-":
                    setTotal((num1 - num2).toString())
                    break;


                case "x":
                    setTotal((num1 * num2).toString())
                    break;


                case "/":
                    setTotal((num1 / num2).toString())
                    break;
            
                
            
        }
    }

    setNumber1("");
    setNumber2("");
    setOperator("");  
};

const handleReset = () =>{
    setNumber1("");
    setNumber2("");
    setOperator("");
    setTotal("");
};


 return (
        <div className="grid grid-cols-2 gap-6">
            <Input 
            type="number"
            placeholder="Number 1"
            onChange={(e) => setNumber1(e.target.value)}
            value={number1}
            />

            
        </div>
    );

export default AdvancedCalculator;

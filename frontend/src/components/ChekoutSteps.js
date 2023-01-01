import React from "react";

export default function CheckoutSteps(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1?'active':' '}>Вход</div>
            <div className={props.step2?'active':' '}>Доставка</div>
            <div className={props.step3?'active':' '}>Плащане</div>
            <div className={props.step4?'active':' '}>Завършване</div>
        </div>
    )
}
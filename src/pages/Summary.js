import { Link } from "react-router-dom";
import Button from "../components/Button/Button.tsx";
import Sidebar from "../components/Sidebar/Sidebar";
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { CheckBoxContext } from "../context/CheckBoxContext";

const Summary = () => {
    const { selectCards, toggleSelection, cardPrice } = useContext(CardContext);
    const { selectedServices } = useContext(CheckBoxContext);

    const isYearlyPlan = toggleSelection === "Yearly";
    const cardPriceYearly = cardPrice * 12 
    const servicesPriceYearly = selectedServices.reduce((total, service) => {
        console.log(total + service.price)
        return total + service.price
    },0)

    let totalPrice;
    if (isYearlyPlan){
        totalPrice = cardPriceYearly + servicesPriceYearly;
        console.log(totalPrice)
    }
    else {
        const selectedServicesTotal = selectedServices.reduce((total, service) => {
            return total + service.price
        },0);
        totalPrice = cardPrice + selectedServicesTotal;
    }
    return (
        <AppLayout>
            <Sidebar currentStep="4" />
            <MainWrapper>
                <HeadingGroup 
                        heading="Finishing up" 
                        ptag="Double-check everything looks ok before confirming." />
                <div id="form" className="form-class">
                    <div className="bill-container">
                        <div className="plan-details-container">
                            <div className="selected-plan">
                                <div class="plan-text-group">
                                    <div class="plan"><h4>{selectCards}</h4></div>
                                    <Link to="/select-plan">Change</Link>
                                </div>
                                <div className="plan-price">
                                    +${isYearlyPlan
                                        ? cardPriceYearly
                                        : cardPrice }{isYearlyPlan ? "/yr" : "/mo"}
                                </div>
                            </div>
                            <hr />
                            <div className="selected-addons">
                                <div className="addon-text-group">
                                    {selectedServices.length > 0 ? (
                                        selectedServices.map((service, index) => (
                                            <div key={index} className="addon">
                                                <p className="addons-p">{service.service}</p>
                                                <p className="addons-price">
                                                    +${service.price}{isYearlyPlan ? "/yr" : "/mo"}  
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No add-ons selected.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="total">
                            <h1 className="total-heading">Total {isYearlyPlan ? " (Per year)" : " (Per month)"}</h1>
                            <p className="total-price">${totalPrice}{isYearlyPlan ? "/yr" : "/mo"} </p>
                        </div>
                    </div>
                    <div className="form-buttons">
                        <Link to="/add-ons">
                            <Button type="submit" className="btn-goback">
                                Go Back
                            </Button>
                        </Link>
                        <Link to="/thank-you">
                            <Button type="submit" className="btn">
                                Confirm
                            </Button>
                        </Link>
                    </div>
                </div>
            </MainWrapper>
        </AppLayout>
    );
}

export default Summary;

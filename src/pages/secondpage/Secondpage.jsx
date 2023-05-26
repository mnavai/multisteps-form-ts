import Button from "../../components/Button/Button";
import HeadingGroup from "../../components/HeadingGroup/HeadingGroup";
import Slidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";

const SecondPage = () => {
    return(
        <div className="SecondPage">
            <Slidebar />
            <main class="main-section">
                <HeadingGroup />
                <div id="form" class="form-group">
                    <div class="card-group">
                        <Card src="assets/images/icon-arcade.svg"
                            altText="arcade icon"
                            label="Arcade"
                            price="$9/mon"/>
                        <Card src="assets/images/icon-advanced.svg" 
                            altText="advanced icon"
                            label="Advanced"
                            price="$12/mon"/>
                        <Card
                            src="assets/images/icon-pro.svg"
                            altText="pro icon"
                            label="Pro"
                            price="$15/mon"/>
                    </div>
                    <div class="grey-bar">
                        <h5 class="grey-bar-month">Monthly</h5>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                        <p className="grey-bar-year">Yearly</p>
                    </div>
                    <div className="buttons">
                        <Button type="submit" className="btn-goback">Go Back</Button>
                        <Button type="submit" className="btn">Next Step</Button>
                    </div>
                </div>
            </main>        
        </div>
    );
}
export default SecondPage;
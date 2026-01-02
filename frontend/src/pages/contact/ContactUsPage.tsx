import NavBar from "../../components/navBar/NavBar";
import '../product/ProductPage.css';
import './ContactUsPage.css';
import contact from '../../images/contact-us.jpg';
import TextFiled from "../../components/input/TextField";
import Button from "../../components/button/Button";

const ContactUsPage = () => {
    return(
        <div className="product-outer">
            <NavBar/>
            <div className="allProducts">
                <div className="top-bar">
                    <p>CONTACT US</p>
                </div>
                <div className="contact-inner">
                    <div className="contact-inner-left">
                        <img src={contact} alt="pic" />
                    </div>
                    <div className="contact-inner-right">
                        <TextFiled className="textfield" placeholder="Name"/>
                        <TextFiled className="textfield description" placeholder="Description"/>
                        <TextFiled className="textfield" placeholder="Contact Number"/>
                        <Button className="button" type="submit" name="SUBMIT"/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;
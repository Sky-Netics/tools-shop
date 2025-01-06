import MobileFooter from "./mobileFooter";

const Footer = () => {
    return ( 
        <div>
            <div className="sm:hidden">
                <MobileFooter />
            </div>
        </div>
     );
}
 
export default Footer;
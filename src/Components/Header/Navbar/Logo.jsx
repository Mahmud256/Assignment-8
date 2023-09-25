import LogoImage from '../../../assets/Logo.png'; // Import the image

const Logo = () => {
    return (
         <div>
            <img src={LogoImage} alt="Logo" /> {/* Use LogoImage as the src */}
         </div>
    );
};

export default Logo;
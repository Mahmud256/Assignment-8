import Swal from 'sweetalert2'

const DonationsCard = ({ donation }) => {
    const { id, cover, title, paragraph, cover_background_color, text_color } = donation || {};

    const handleAddToDonations = () => {

        const addDonationsArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if (!donationItems) {
            addDonationsArray.push(donation)
            localStorage.setItem('donations', JSON.stringify(addDonationsArray))
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: 'Product Added Successfully!',
              })
        }

        else {

            const isExits = donationItems.find(donation => donation.id === id)
            
            if(!isExits){
                addDonationsArray.push(...donationItems, donation)
                localStorage.setItem('donations', JSON.stringify(addDonationsArray))
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'Product Added Successfully!',
                  })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'This product has been added before. A product can be added at most once.....',
                  })
            }

           
        }


        // localStorage.setItem('test', JSON.stringify([{ name: "mahmud" }, { name: "dn" }]))
    }

    const cardStyle = {
        backgroundColor: cover_background_color,
    };

    const textStyle = {
        color: text_color,
    };

    return (
        <div>
            <div onClick={handleAddToDonations} className="card w-72 bg-base-100 shadow-xl" style={cardStyle}>
                <figure>
                    <img src={cover} alt="Shoes" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card_title w-20 text-center text-sm font-medium rounded p-2" style={{ ...textStyle, ...cardStyle }}>
                        {title}
                    </h2>

                    <p className="text-xl font-semibold" style={textStyle}>{paragraph}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationsCard;

import React from 'react';
import Swal from 'sweetalert2'

const DonateCard = ({ donation }) => {
    const { id, cover, price, paragraph, description, text_color } = donation || {};

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
    
                if (!isExits) {
                    addDonationsArray.push(...donationItems, donation)
                    localStorage.setItem('donations', JSON.stringify(addDonationsArray))
                    Swal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'Product Added Successfully!',
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'This product has been added before. A product can be added at most once.....',
                    })
                }
    
    
            }
    
    
            // localStorage.setItem('test', JSON.stringify([{ name: "mahmud" }, { name: "dn" }]))
        }

    const btnStyle = {
        backgroundColor: text_color,
    };

    return (
        <div>

            <div className="card bg-base-100">
                <figure><img className='w-full' src={cover} alt="" /></figure>
                <div className="card-actions justify-start relative top-[-4rem]  left-10">
                    <button onClick={handleAddToDonations} className="btn normal-case text-[#fff]" style={btnStyle}>Donate {price}</button>
                </div>
                <div className="cardbody pb-10">
                    <h2 className="card-title">{paragraph}</h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default DonateCard;
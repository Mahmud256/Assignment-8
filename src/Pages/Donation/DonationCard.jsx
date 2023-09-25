import React from 'react';

const DonationCard = ({ donation }) => {
    const { id, cover, title, paragraph, price, cover_background_color, text_color } = donation || {};

    const cardStyle = {
        backgroundColor: cover_background_color,
    };

    const textStyle = {
        color: text_color,
    };

    const btnStyle = {
        backgroundColor: text_color,
    };

    return (
        <div>
            <div className="card w-72 lg:w-[600px] lg:card-side bg-base-100" style={cardStyle}>
                <figure><img src={cover} alt="Movie" /></figure>
                <div className="card-body p-4">
                    <h2 className="card_title w-20 text-center text-sm font-medium rounded p-2" style={{ ...textStyle, ...cardStyle }}>
                        {title}
                    </h2>

                    <p className="text-xl font-semibold">{paragraph}</p>
                    <p className="text-xl font-semibold" style={textStyle}>{price}.00</p>

                    <div className="card-actions justify-start">
                        <button className="btn text-[#fff]" style={btnStyle}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;
const DonationsCard = ({ donation }) => {
    const { id, cover, title, paragraph, cover_background_color, text_color } = donation || {};

    const cardStyle = {
        backgroundColor: cover_background_color,
    };

    const textStyle = {
        color: text_color,
    };

    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl" style={cardStyle}>
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

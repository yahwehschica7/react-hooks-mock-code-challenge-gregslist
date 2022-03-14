import React, {useState} from "react";

function ListingCard({listing, handleDeleteListing}) {

  const [isFavorited, setIsFavorited] = useState(false)

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => handleDeleteListing(listing.id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button 
          onClick={() => setIsFavorited(false)} 
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={() => setIsFavorited(true)}
          className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button 
        onClick={handleDelete}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

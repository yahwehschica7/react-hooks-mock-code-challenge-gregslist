import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {

 const[listing, setListing] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(listing => setListing(listing))
  }, [])

  function handleDeleteListing(id) {
    const updatedListingsArray = listing.filter(listingItem => listingItem.id !== id)
    setListing(updatedListingsArray)
   }

   const filteredListingArray = listing.filter((listingItem) => {
     return listingItem.description.toLowerCase().includes(search.toLowerCase())
   })

   console.log(filteredListingArray)
   
  const listingCards = filteredListingArray.map((listingObject) => {
    return <ListingCard 
    key={listingObject.id} 
    listing={listingObject}
    handleDeleteListing={handleDeleteListing}
    />
  })
  
  return (
    <main>
      <ul className="cards" >
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;

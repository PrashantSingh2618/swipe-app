export default function Footer() {
    return (
      <>
        <div className="fixed px-4 mb-2 bottom-0 w-full">
          <div className="h-[4px] w-4 w-full bg-gray-200 mb-4" />
          <div className="w-full bg-white flex justify-between items-center mb-2">
            <div className="flex flex-col items-center">
              <img src="home.png" alt="Home" className="h-6 mb-1" />
              <span>Home</span>
            </div>
  
            <div className="flex flex-col items-center ">
              <img src="discover.png" alt="Discover" className="h-6 mb-1" />
              <span>Discover</span>
            </div>
  
            <div className="flex flex-col items-center">
              <img src="bag.png" alt="Bag" className="h-6 mb-1" />
              <span>Bag</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="heartinactive.png" alt="Wishlist" className="h-6 mb-1" />
              <span>Wishlist</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="account.png" alt="Account" className="h-6 mb-1" />
              <span>Account</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  
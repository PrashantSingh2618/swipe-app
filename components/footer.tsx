import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div className="sticky px-4 pt-4 mb-2 bottom-0 w-full border-t border-gray-200">
        <div className="w-full bg-white flex justify-between items-center mb-2">
          <div className="flex flex-col items-center">
            <img src="home.png" alt="Home" className="h-6 mb-1" />
            <span>Home</span>
          </div>

          <div className="flex flex-col items-center ">
            <img src="discover.png" alt="Discover" className="h-6 mb-1" />
            <span>Discover</span>
          </div>

          <div onClick={() => router.push('/cart')} className="flex flex-col items-center">
            <img src="bag.png" alt="Bag" className="h-6 mb-1" />
            <span>Bag</span>
          </div>
          <div onClick={() => router.push('/wishlist')} className="flex flex-col items-center">
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

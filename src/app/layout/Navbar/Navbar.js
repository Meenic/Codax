function Navbar() {
   return (
      <div className="h-16 border-b border-opacity-20">
         <div className="flex justify-between h-full items-center mx-4">
            <div>
               <ul className="flex space-x-3">
                  <li>
                     <a href="/" className="hover:underline">Friends</a>
                  </li>
                  <li>
                     <a href="/" className="hover:underline">Messages</a>
                  </li>
                  <li>
                     <a href="/" className="hover:underline">Posts</a>
                  </li>
               </ul>
            </div>
            <div>
               <button className="px-3 py-2 bg-primary rounded font-semibold">Login</button>
            </div>
         </div>
      </div>
   );
}

export default Navbar;

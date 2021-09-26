function Sidebar() {
   return (
      <aside className="w-64 bg-black flex-shrink-0">
         <div className="h-full flex flex-col">
            <a href="/" className="flex justify-center text-white text-2xl font-semibold my-4">
               Codax
            </a>

            <ul className="flex flex-col mx-6 pt-6 pb-4 space-y-1 border-t border-b border-opacity-20">
               <li>
                  <a
                     href="/"
                     className="h-10 px-2 flex items-center transition bg-module-active hover:bg-module-hover text-link-active hover:text-link-hover rounded font-semibold"
                  >
                     Home
                  </a>
               </li>
               <li>
                  <a
                     href="/"
                     className="h-10 px-2 flex items-center transition hover:bg-module-hover text-link hover:text-link-hover rounded font-semibold"
                  >
                     Codes
                  </a>
               </li>
               <li>
                  <a
                     href="/"
                     className="h-10 px-2 flex items-center transition hover:bg-module-hover text-link hover:text-link-hover rounded font-semibold"
                  >
                     Questions
                  </a>
               </li>
               <li>
                  <a
                     href="/"
                     className="h-10 px-2 flex items-center transition  hover:bg-gray-800 text-link hover:text-link-hover rounded font-semibold"
                  >
                     Discussion
                  </a>
               </li>
            </ul>

            <div className="mt-4 overflow-hidden">
               <h4 className="ml-6 font-bold">Active Friends</h4>
               <div className="flex flex-col mt-4 space-y-2 max-h-40 overflow-auto">
                  <div className="flex justify-between flex-shrink-0 items-center mx-6 bg-secondary h-14 rounded">
                     <div className="flex items-center cursor-default">
                        <img
                           src="https://cdn.discordapp.com/avatars/748366237788012695/55d85f68b2d8ae3c98a178e2754ef3a5.png"
                           alt="Crawl's Logo"
                           width="35"
                           height="35"
                           className="rounded-full border border-link m-2"
                        />
                        <span className="font-semibold overflow-hidden whitespace-nowrap">Crawl</span>
                     </div>
                     <div className="mx-2 rounded-sm">
                        <a href="/">
                           <button className="p-2 transition bg-primary">
                              <img src="/assets/icons/ViewIcon.svg" alt="View Icon" width="24px" height="24px" className="text-white" />
                           </button>
                        </a>
                     </div>
                  </div>
                  <div className="flex justify-between flex-shrink-0 items-center mx-6 bg-secondary h-14 rounded">
                     <div className="flex items-center cursor-default">
                        <img
                           src="https://cdn.discordapp.com/avatars/748366237788012695/55d85f68b2d8ae3c98a178e2754ef3a5.png"
                           alt="Crawl's Logo"
                           width="35"
                           height="35"
                           className="rounded-full border border-link m-2"
                        />
                        <span className="font-semibold overflow-hidden whitespace-nowrap">Crawl</span>
                     </div>
                     <div className="mx-2 rounded-sm">
                        <a href="/">
                           <button className="p-2 transition bg-primary">
                              <img src="/assets/icons/ViewIcon.svg" alt="View Icon" width="24px" height="24px" className="text-white" />
                           </button>
                        </a>
                     </div>
                  </div>
                  <div className="flex justify-between flex-shrink-0 items-center mx-6 bg-secondary h-14 rounded">
                     <div className="flex items-center cursor-default">
                        <img
                           src="https://cdn.discordapp.com/avatars/748366237788012695/55d85f68b2d8ae3c98a178e2754ef3a5.png"
                           alt="Crawl's Logo"
                           width="35"
                           height="35"
                           className="rounded-full border border-link m-2"
                        />
                        <span className="font-semibold overflow-hidden whitespace-nowrap">Crawl</span>
                     </div>
                     <div className="mx-2 rounded-sm">
                        <a href="/">
                           <button className="p-2 transition bg-primary">
                              <img src="/assets/icons/ViewIcon.svg" alt="View Icon" width="24px" height="24px" className="text-white" />
                           </button>
                        </a>
                     </div>
                  </div>
                  <div className="flex justify-between flex-shrink-0 items-center mx-6 bg-secondary h-14 rounded">
                     <div className="flex items-center cursor-default">
                        <img
                           src="https://cdn.discordapp.com/avatars/748366237788012695/55d85f68b2d8ae3c98a178e2754ef3a5.png"
                           alt="Crawl's Logo"
                           width="35"
                           height="35"
                           className="rounded-full border border-link m-2"
                        />
                        <span className="font-semibold overflow-hidden whitespace-nowrap">Crawl</span>
                     </div>
                     <div className="mx-2 rounded-sm">
                        <a href="/">
                           <button className="p-2 transition bg-primary">
                              <img src="/assets/icons/ViewIcon.svg" alt="View Icon" width="24px" height="24px" className="text-white" />
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </aside>
   );
}

export default Sidebar;

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-tertiary-container dark:bg-black text-on-tertiary-fixed py-section-gap w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-headline-sm font-headline-sm font-bold text-on-tertiary">Cozy</h3>
          <p className="text-body-md font-body-md text-on-tertiary-container">12 Main St, London</p>
          <p className="text-body-md font-body-md text-on-tertiary-container">+44 3656 4567</p>
          <p className="text-body-md font-body-md text-on-tertiary-container">contact@cozytheme.com</p>
        </div>
        
        {/* Links 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-label-caps font-label-caps text-on-tertiary mb-2 uppercase tracking-widest">About Us</h4>
          <Link className="text-label-sm font-label-sm text-on-tertiary-container hover:text-on-tertiary transition-colors opacity-80 hover:opacity-100" href="#">Furniture Blog & Tips</Link>
          <Link className="text-label-sm font-label-sm text-on-tertiary-container hover:text-on-tertiary transition-colors opacity-80 hover:opacity-100" href="#">Working With Us</Link>
          <Link className="text-label-sm font-label-sm text-on-tertiary-container hover:text-on-tertiary transition-colors opacity-80 hover:opacity-100" href="#">Be Our Partner</Link>
          <Link className="text-label-sm font-label-sm text-on-tertiary-container hover:text-on-tertiary transition-colors opacity-80 hover:opacity-100" href="#">Our Mission</Link>
        </div>
        
        {/* Links 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-label-caps font-label-caps text-on-tertiary mb-2 uppercase tracking-widest">Support</h4>
          <Link className="text-label-sm font-label-sm text-on-tertiary-container hover:text-on-tertiary transition-colors opacity-80 hover:opacity-100" href="#">Customer Support</Link>
          <Link className="text-label-sm font-label-sm text-on-tertiary-container hover:text-on-tertiary transition-colors opacity-80 hover:opacity-100" href="#">Privacy & Policy</Link>
          <Link className="text-label-sm font-label-sm text-on-tertiary-container hover:text-on-tertiary transition-colors opacity-80 hover:opacity-100" href="#">Contact Channels</Link>
        </div>
        
        {/* Subscribe */}
        <div className="flex flex-col gap-4">
          <h4 className="text-label-caps font-label-caps text-on-tertiary mb-2 uppercase tracking-widest">Subscribe Now</h4>
          <p className="text-body-md font-body-md text-on-tertiary-container">Don't miss To Get Update</p>
          <div className="flex mt-2">
            <input className="w-full bg-surface-container-highest/20 text-on-tertiary placeholder:text-on-tertiary-container rounded-l-full border-none focus:ring-1 focus:ring-on-tertiary px-4 py-2 text-label-sm font-label-sm" placeholder="Your email here" type="email"/>
            <button className="bg-on-tertiary text-tertiary px-6 py-2 rounded-r-full text-label-sm font-label-sm font-medium hover:bg-surface-variant transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-16 pt-8 border-t border-outline/20 text-center">
        <p className="text-label-sm font-label-sm text-on-tertiary-container">©2023 Cozy All Rights Reserved</p>
      </div>
    </footer>
  );
}

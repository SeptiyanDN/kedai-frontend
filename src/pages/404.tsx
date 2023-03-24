export default function NotFound() {
    return ( 
<section className="py-5">
        <div className="container">
            <div className="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left">
                <div className="-intro-x lg:mr-20">
                    <img alt="Rubick Tailwind HTML Admin Template" className="h-48 lg:h-auto" src="/assets/images/error-illustration.svg"/>
                </div>
                <div className="text-white mt-10 lg:mt-0">
                    <div className="intro-x text-8xl font-medium">404</div>
                    <div className="intro-x text-xl lg:text-3xl font-medium mt-5">Oops. This page has gone missing.</div>
                    <div className="intro-x text-lg mt-3">You may have mistyped the address or the page may have moved.</div>
                    <button className="intro-x btn py-3 px-4 text-white border-white dark:border-darkmode-400 dark:text-slate-200 mt-10">Back to Home</button>
                </div>
            </div>
        </div>
        <div data-url="main-dark-error-page.html" className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
            <div className="mr-4 text-slate-600 dark:text-slate-200">Dark Mode</div>
            <div className="dark-mode-switcher__toggle border"></div>
        </div>
        
    </section>
    )
}
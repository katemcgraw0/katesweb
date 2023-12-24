
const footer = () => {
    
    
    return (
        <footer className=" text-white p-4 mt-auto">
            <div className="border-t border-green5 mb-5"></div> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
                <div className="flex items-center justify-end">
                <a href="https://github.com/katemcgraw0" target = "_blank" className="flex items-center space-x-2">
                    <img src="/github.png" alt="Image 1" className="w-16 h-auto cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/katherine-mcgraw/" target = "_blank" className="flex items-center space-x-2">
                    <img src="/linkedIn2.png" alt="Image 2" className="w-16 h-auto ml-5 cursor-pointer " />
                </a>
                </div>
            </div>
        </footer>
    );
};

export default footer;
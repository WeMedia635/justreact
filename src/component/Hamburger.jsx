import React,{useState} from 'react'

const Hamburger = () => {
    const [isOpen, setIsopen] = useState(false);
    
    const togglemenu = () =>{
        setIsopen(!isOpen);
    }
    

  return (
    <>
    <div className='relative'>
        <button className="text-2xl p-2 focus:outline-none z-50"
        onClick={togglemenu}
        >
        {isOpen ? 'X' : '☰'}
        </button>

        {isOpen ? (
            <div className="absolute top-10 left-0 w-40 bg-white shadow-lg rounded p-4">
                <ul className="space-y-2">
                    <li><a href="#home" className="text-gray-800">Home</a></li>
                    <li><a href="#about" className="text-gray-800">About</a></li>
                    <li><a href="#services" className="text-gray-800">Services</a></li>
                    <li><a href="#contact" className="text-gray-800">Contact</a></li>
                </ul>
            </div>
        ): (<div className="text-gray-400 mt-4">Menu is closed. Click ☰ to open.</div>)}
    </div>
    </>
  )
}

export default Hamburger
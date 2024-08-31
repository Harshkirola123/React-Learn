function BgButton({colors, onClick}) {
    return (
      <button 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: colors}}
        onClick={onClick} // Handle the click event
      >
        {colors}
      </button>
    );
  }
  
  export default BgButton;
  
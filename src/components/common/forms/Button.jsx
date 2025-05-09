const Button = ({ children }) => (
    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-boton-primario hover:bg-boton-hover text-white font-medium py-2 px-4 rounded-lg"
      >
        {children}
      </button>
    </div>
  );
  
  export default Button;
  
const FormSelect = ({ className = "", children, ...props }) => (
    <select
      {...props}
      className={`bg-input border border-input-borde focus:outline-none focus:ring-2 focus:ring-input-foco text-texto placeholder-texto-secundario rounded-lg pl-4 pr-4 py-2 ${className}`}
    >
      {children}
    </select>
  );
  
  export default FormSelect;
  
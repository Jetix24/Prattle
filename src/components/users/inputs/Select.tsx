"use client";

import ReactSelect from "react-select";

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  disabled
}) => {
  return ( 
  <div className="z-[100]">
    <label
      className="
        block
        text-sm
        font-medium
        leading-6
        text-white
      "
    >
      {label}
    </label>
    <div className="mt-2">
      <ReactSelect
        isDisabled={disabled}
        value={value}
        onChange={onChange}
        isMulti
        options={options}
        menuPortalTarget={typeof window !== 'undefined' ? document.body : undefined} // esta linea hace que el menu se muestre por encima de otros elementos
      styles={{
        menuPortal: (base) => ({
          ...base,
          zIndex: 9999
        })
      }}
        classNames={{
          control: () => "text-sm"
        }}
      />
    </div>
  </div>
   );
}
 
export default Select;
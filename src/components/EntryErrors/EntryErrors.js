import React from "react";

/// component to return the appropriate message relating to the field if formErrors exist
const EntryErrors = ({ formErrors }) => (
    <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p className="alert" key={i}>{formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>
    
);

export default EntryErrors;
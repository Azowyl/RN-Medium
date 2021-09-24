import {useEffect} from 'react';

const {useState} = require('react');

const useFormFields = (defaultFields) => {
  const [fields, setFields] = useState(defaultFields);

  useEffect(() => {
    setFields(defaultFields)
  }, [defaultFields.id]);

  const handleFieldChange = (field, value) => {
    setFields({...fields, [field]: value});
  }

  return [fields, handleFieldChange];
}

export default useFormFields;

import { useState } from "react";

const useForm = (validate) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  // Set empty object to use later in the validate function
  const [errors, setErrors] = useState({});

  const handleUpdate = (field, { target }) => {
    setFormData({
      ...formData,
      [field]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(formData));
    alert(`Form Submission Details:
            ${formData.email}
            `);
  };

  return { handleUpdate, handleSubmit, formData, errors };
};

export default useForm;

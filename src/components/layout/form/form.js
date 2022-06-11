import React from "react";
import useForm from "./useForm";
import validate from "../../../helpers/validate";
import Button from "../../reusable/button/button";
import FormField from "../../reusable/form-field/form-field";
import styled from "styled-components";

const StyledForm = styled.form`
  background-color: inherit;
  padding: 1rem;
`;

const Form = () => {
  const { handleUpdate, handleSubmit, formData, errors } = useForm(validate);

  const handleButton = () => {
    console.log("Button is clicked");
  };

  return (
    <React.Fragment>
      <StyledForm action="/index.html" method="get" onSubmit={handleSubmit}>
        <fieldset>
          <div className="flex__container">
            <FormField
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleUpdate("email", e)}
              placeholder="Email Address"
              label="Email Address Field"
              id="form_email"
              errors={errors.email}
            />

            <Button handleButton={handleButton}></Button>
          </div>
        </fieldset>
      </StyledForm>
    </React.Fragment>
  );
};
export default Form;

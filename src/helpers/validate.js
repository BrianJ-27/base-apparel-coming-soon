export default function validateForm(formData) {
  let errors = {};

  if (!formData.email) {
    errors.email = "Looks like this is not an email";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid";
  }

  console.log(errors);
  return errors;
}

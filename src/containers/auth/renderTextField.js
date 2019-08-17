import React from "react";
import TextField from "@material-ui/core/TextField";

export const renderTextField = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...custom
}) => {
  return (
  <TextField
    label={label}
    type={type}
    error={touched && Boolean(error)}
    helperText={error}
    {...input}
    {...custom}
  />
  )
};

import React from "react";
import Card from "../../card/Card";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";

const inputMock = [
  {
    id: "standard-password-input",
    label: "Text field",
    autoComplete: "current-password",
    variant: "outlined",
    fullWidth: true,
    size: "small",
  },
  {
    id: "standard-password-input",
    label: "Text field error",
    autoComplete: "current-password",
    variant: "outlined",
    fullWidth: true,
    size: "small",
    error: true,
    helperText: "Incorrect entry.",
  },
  {
    id: "standard-password-input",
    label: "Number field",
    type: "number",
    autoComplete: "current-password",
    variant: "outlined",
    fullWidth: true,
    size: "small",
  },
  {
    id: "standard-password-input",
    label: "Time field",
    type: "tume",
    autoComplete: "current-password",
    variant: "outlined",
    fullWidth: true,
    size: "small",
  },
  {
    id: "standard-password-input",
    label: "Date field",
    type: "date",
    autoComplete: "current-password",
    variant: "outlined",
    fullWidth: true,
    size: "small",
  },
  {
    id: "standard-password-input",
    label: "Month field",
    type: "month",
    autoComplete: "current-password",
    variant: "outlined",
    fullWidth: true,
    size: "small",
  },
  {
    id: "standard-password-input",
    label: "Password",
    type: "password",
    autoComplete: "current-password",
    variant: "outlined",
    fullWidth: true,
    size: "small",
  },
  {
    id: "standard-password-input",
    label: "Disabled field",
    type: "text",
    autoComplete: "current-password",
    variant: "outlined",
    fullWidth: true,
    size: "small",
    disabled: true,
  },
  {
    id: "outlined-textarea",
    label: "Multiline Placeholder",
    placeholder: "Placeholder",
    multiline: true,
    variant: "outlined",
    fullWidth: true,
    size: "small",
  },
  {
    id: "outlined-multiline-static",
    label: "Multiline (textarea)",
    multiline: true,
    rows: 4,
    defaultValue: "Default Value",
    variant: "outlined",
    fullWidth: true,
    size: "small",
  },
];

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "???",
  },
  {
    value: "BTC",
    label: "???",
  },
  {
    value: "JPY",
    label: "??",
  },
];

const InputsContainer = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <Card>
      <Typography variant="h5" noWrap style={{ marginBottom: 30 }}>
        Inputs
      </Typography>
      <Grid container>
        {inputMock.map((item, index) => {
          return (
            <Grid
              item
              xs={6}
              sm={4}
              key={index}
              style={{ minHeight: "80px", padding: "10px" }}
            >
              <TextField
                id={item.id}
                label={item.label}
                multiline={item.multiline}
                rows={item.rows}
                defaultValue={item.defaultValue}
                type={item.type}
                variant={
                  item.variant as "outlined" | "filled" | "standard" | undefined
                }
                fullWidth={item.fullWidth}
                size={item.size as "small" | "medium" | undefined}
                error={item.error}
                helperText={item.helperText}
                InputLabelProps={{ shrink: true }}
                disabled={item.disabled}
              />
            </Grid>
          );
        })}
        <Grid item xs={6} sm={4}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleCurrency}
            // helperText="Please select your currency"
            variant="outlined"
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
            style={{ minHeight: "80px", padding: "10px" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InputsContainer;

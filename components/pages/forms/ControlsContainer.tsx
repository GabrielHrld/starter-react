import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "../../card/Card";
import CustomCheckbox from "../../controls/CustomCheckbox";
import CustomRadio from "../../controls/CustomRadio";
import CustomSwitch from "../../controls/CustomSwitch";

const ControlsContainer = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
    checkedC: false,
    checkedD: true,
    checkedE: true,
    checkedF: false,
    checkedG: true,
  });

  const [radioValue, setRadioValue] = React.useState<string>("a");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event?.target.name]: event?.target.checked,
    });
  };

  return (
    <Card>
      <Typography variant="h5" noWrap style={{ marginBottom: 30 }}>
        Controls
      </Typography>
      <Grid container>
        <Grid item xs={6} sm={4}>
          <Typography variant="h6" noWrap style={{ marginBottom: 10 }}>
            Checkboxes
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <CustomCheckbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Checkbox"
              />
              <FormControlLabel
                control={
                  <CustomCheckbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                  />
                }
                label="Checked"
              />
              <FormControlLabel
                control={
                  <CustomCheckbox
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    disabled
                  />
                }
                label="Disabled"
              />
              <FormControlLabel
                control={
                  <CustomCheckbox
                    checked={state.checkedD}
                    onChange={handleChange}
                    name="checkedD"
                    disabled
                  />
                }
                label="Disabled checked"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="h6" noWrap style={{ marginBottom: 10 }}>
            Radio buttons
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={radioValue}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                control={<CustomRadio value="a" onChange={handleRadioChange} />}
                label="A radio"
              />
              <FormControlLabel
                control={<CustomRadio value="b" onChange={handleRadioChange} />}
                label="A checked radio"
              />
              <FormControlLabel
                control={
                  <CustomRadio
                    value="c"
                    onChange={handleRadioChange}
                    checked
                    disabled
                  />
                }
                label="A disabled radio"
              />
              <FormControlLabel
                control={
                  <CustomRadio
                    value="d"
                    onChange={handleRadioChange}
                    disabled
                  />
                }
                label="A disabled checked radio"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="h6" noWrap style={{ marginBottom: 10 }}>
            Switch
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <CustomSwitch
                    checked={state.checkedE}
                    onChange={handleChange}
                    name="checkedE"
                  />
                }
                label="A switch"
              />
              <FormControlLabel
                control={
                  <CustomSwitch
                    checked={state.checkedF}
                    onChange={handleChange}
                    name="checkedF"
                    disabled
                  />
                }
                label="A disabled switch"
              />
              <FormControlLabel
                control={
                  <CustomSwitch
                    checked={state.checkedG}
                    onChange={handleChange}
                    name="checkedG"
                    disabled
                  />
                }
                label="A disabled switch checked"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ControlsContainer;

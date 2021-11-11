import React from "react";
import {
  DateTimePicker,
  DesktopDatePicker,
  LocalizationProvider,
  MobileDatePicker,
  TimePicker,
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Stack, TextField, Typography } from "@mui/material";
import Card from "../../card/Card";

const DatepickerContainer = () => {
  const [dateValue, setDateValue] = React.useState<Date | null>(new Date());
  const handleDate = (date: Date | null) => {
    setDateValue(date);
  };

  return (
    <Card sx={{ height: "100%" }}>
      <Typography variant="h5" noWrap style={{ marginBottom: 30 }}>
        Date Picker
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={dateValue}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/dd/yyyy"
            value={dateValue}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Time"
            value={dateValue}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <DateTimePicker
            label="Date&Time picker"
            value={dateValue}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </Card>
  );
};

export default DatepickerContainer;

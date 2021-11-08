import type { NextPage } from "next";
import Head from "next/head";
import Card from "../../components/card/Card";
import { Grid } from "@mui/material";
import Input, { InputProps } from "../../components/Input";

const mockInputs: InputProps[] = [
  {
    label: "Input Text",
    type: "text",
    id: "field1",
  },
  {
    label: "Input Number",
    type: "number",
    id: "field2",
  },
  {
    label: "Input email",
    type: "email",
    id: "field3",
  },
  {
    label: "Radio items",
    isRadio: true,
    id: "radiofield",
    "aria-label": "aria-label-radio",
    radioItems: [
      {
        label: "foo",
        value: "foo",
      },
      { label: "faa", value: "faa" },
    ],
  },
  {
    label: "Text Area",
    id: "field4",
    isTextArea: true,
  },
];

const forms = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Card>
            <Grid container>
              <Grid item md={5}>
                {mockInputs.map((input, index) => (
                  <Input
                    key={index}
                    label={input.label}
                    type={input.type}
                    id={input.id}
                    width="90%"
                    isTextArea={input.isTextArea}
                    isRadio={input.isRadio}
                    radioItems={input.radioItems}
                  />
                ))}
              </Grid>
              <Grid item md={2}></Grid>
              <Grid item md={5}>
                {mockInputs.map((input, index) => (
                  <Input
                    key={index}
                    width="90%"
                    label={input.label}
                    type={input.type}
                    id={`${input.id}-2`}
                    isTextArea={input.isTextArea}
                  />
                ))}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card></Card>
        </Grid>
      </Grid>
    </>
  );
};

export default forms;

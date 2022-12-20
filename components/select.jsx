/* eslint-disable react/jsx-no-undef */
import React from "react";

const SelectInput = (props) => {
  const { options = [] } = props;

  return (
    <Select
      onChange={props.onChange}
      required
      MenuProps={{
        style: {
          maxHeight: 220,
        },
      }}
    >
      {options.map((option) => (
        <MenuItem value={option} key={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

const ufList = [];
const cidadeList = [];

export const Main = (props) => {
  const { options = [] } = props;

  return (
    <>
      {props.type === "UF" && <SelectInput options={ufList} />}
      {props.type === "Cidade" && <SelectInput options={cidadeList} />}
    </>
  );
};

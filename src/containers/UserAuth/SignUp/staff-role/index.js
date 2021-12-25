import React from "react";
import { InputGroup, AuthWrapper } from "../../style/user-auth.styled";
import { Fade } from "react-awesome-reveal";
import Select from "react-dropdown-select";

const Role = () => {
  const [value, setValue] = React.useState("");

  const options = [
    { label: "Field Worker", value: "field worker" },
    { label: "Manager", value: "manager" },
    { label: "Assistant Manager", value: "assistant manager" },
  ];

  return (
    <React.Fragment>
      <Fade cascade triggerOnce>
        <h1>Complete Your profile!</h1>
        <p className="auth-instruction">
          For the purpose of industry regulation, your details are required.
        </p>
        <InputGroup>
          <label htmlFor="fullname">Role</label>
          <Select
            value={value}
            options={options}
            placeholder="Please select your role"
            required={true}
            dropdownPosition="top"
            className="staff-country"
            color="var(--primary)"
            onChange={(value) => setValue(value)}
          />
        </InputGroup>
      </Fade>
    </React.Fragment>
  );
};

export default Role;

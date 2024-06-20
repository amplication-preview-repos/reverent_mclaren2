import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const UserRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="contentLength" source="contentLength" />
        <TextInput label="contentTone" source="contentTone" />
        <TextInput label="requestType" source="requestType" />
        <TextInput label="youtubeLink" source="youtubeLink" />
      </SimpleForm>
    </Create>
  );
};

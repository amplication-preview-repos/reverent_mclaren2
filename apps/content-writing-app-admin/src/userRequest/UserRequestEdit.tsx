import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const UserRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="contentLength" source="contentLength" />
        <TextInput label="contentTone" source="contentTone" />
        <TextInput label="requestType" source="requestType" />
        <TextInput label="youtubeLink" source="youtubeLink" />
      </SimpleForm>
    </Edit>
  );
};

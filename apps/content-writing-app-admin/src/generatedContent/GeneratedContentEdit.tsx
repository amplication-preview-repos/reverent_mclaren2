import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GeneratedContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contentText" multiline source="contentText" />
        <NumberInput label="seoScore" source="seoScore" />
      </SimpleForm>
    </Edit>
  );
};

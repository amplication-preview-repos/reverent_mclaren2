import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GeneratedContentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contentText" multiline source="contentText" />
        <NumberInput label="seoScore" source="seoScore" />
      </SimpleForm>
    </Create>
  );
};

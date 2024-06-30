import { Grid, GridItem } from "@chakra-ui/react";
import { Field } from "@saas-ui/react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <Grid templateColumns={"repeat(1, 1fr)"} gap={5}>
      <GridItem>
        <Field type="text" name="name" label="Name" />
      </GridItem>

      <GridItem>
        <Field type="email" name="email" label="Email" />
      </GridItem>

      <GridItem>
        <Field type="textarea" name="message" label="Message" />
      </GridItem>
    </Grid>
  );
};

export default ContactForm;

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form } from "@saas-ui/forms/zod";
import { FormLayout, SubmitButton } from "@saas-ui/react";
import useHash from "hooks/use-hash";
import { sendMessage } from "services/contact-service";
import { contactSchema, ContactType } from "./contact-config";
import ContactForm from "./contact-form";

// ----------------------------------------------------------------------

type Props = {};

// ----------------------------------------------------------------------

const ContactSection = (props: Props) => {
  const [hash, setHash] = useHash();
  const toast = useToast();

  const handleClose = () => setHash("");

  const handleSubmit = async (values: ContactType) => {
    const response = await sendMessage(
      values.name,
      values.email,
      values.message
    );

    if (response.isError) {
      toast({
        title: "Cannot send message!",
        description: "Sorry, Looks like there is some technical issue.",
        status: "error",
        variant: "solid",
      });
    } else {
      toast({
        title: "Message Sent!",
        description: "Our team will contact you soon. Till then take care.",
        status: "success",
        variant: "solid",
      });
      handleClose();
    }
  };

  return (
    <Modal
      isOpen={hash === "#contact"}
      onClose={handleClose}
      size={"xl"}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text mb={1}>Contact Us</Text>
          <Text fontSize={"sm"} fontWeight={"normal"}>
            {`Get in touch with us for any inquiries or support. We're here to
            help you with your projects and answer any questions you may have.`}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <Form
          onSubmit={handleSubmit}
          defaultValues={{ name: "", email: "", message: "" }}
          schema={contactSchema}
        >
          <FormLayout>
            <ModalBody>
              <ContactForm />
            </ModalBody>

            <ModalFooter gap={1}>
              <Button size={"md"} onClick={handleClose}>
                Cancel
              </Button>
              <SubmitButton size={"md"} colorScheme="primary" type="submit">
                Send Message
              </SubmitButton>
            </ModalFooter>
          </FormLayout>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default ContactSection;

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
import { useCalendly } from "contexts/calendly";
import useRouterQuery from "hooks/use-router-query";
import { sendMessage } from "services/contact-service";
import { contactSchema, ContactType } from "./contact-config";
import ContactForm from "./contact-form";

// ----------------------------------------------------------------------

type Props = {};

// ----------------------------------------------------------------------

const ContactSection = (props: Props) => {
  const [showContact, setShowContact] = useRouterQuery("show_contact");
  const { onOpen } = useCalendly();
  const toast = useToast();

  const handleClose = () => setShowContact(null);

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
      isOpen={showContact === "true"}
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

            <ModalFooter
              flexDirection={{ base: "column", sm: "row-reverse" }}
              alignItems={{ base: "stretch", sm: "center" }}
              justifyContent={{ sm: "end" }}
              gap={{ base: 2, sm: 1 }}
            >
              <SubmitButton size={"md"} colorScheme="primary" type="submit">
                Send Message
              </SubmitButton>
              <Button size={"md"} onClick={onOpen}>
                Book A Meeting Instead
              </Button>
            </ModalFooter>
          </FormLayout>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default ContactSection;

"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useQueryRouter } from "@/hooks/use-query-router";
import { sendMessage } from "@/services/contact-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import Fields from "./fields";
import { schema, SchemaType } from "./schema";

type Props = {};

const defaultValues: SchemaType = {
  name: "",
  email: "",
  message: "",
};

const ContactModal = (props: Props) => {
  const searchParams = useSearchParams();
  const queryRouter = useQueryRouter();
  const showContact = searchParams.get("show_contact");

  const onClose = () => {
    queryRouter.replace({ show_contact: undefined });
  };

  const formOptions = useForm({ defaultValues, resolver: zodResolver(schema) });
  const { handleSubmit, formState } = formOptions;

  const onSubmit: SubmitHandler<SchemaType> = async (values) => {
    const response = await sendMessage(
      values.name,
      values.email,
      values.message
    );

    if (response.isError) {
      toast.error("Cannot send message!", {
        description: "Sorry, Looks like there is some technical issue.",
      });
    } else {
      toast.success("Message Sent!", {
        description: "Our team will contact you soon. Till then take care.",
      });
      onClose();
    }
  };

  return (
    <Dialog open={showContact === "true"} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Get in touch with us for any inquiries or support. We&apos;re here
            to help you with your projects and answer any questions you may
            have.
          </DialogDescription>
        </DialogHeader>
        <Form {...formOptions}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Fields />
            <DialogFooter>
              <Button
                disabled={formState.isSubmitting}
                variant={"secondary"}
                type="button"
              >
                Book A Meeting Instead
              </Button>
              <Button disabled={formState.isSubmitting} type="submit">
                Send Message
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;

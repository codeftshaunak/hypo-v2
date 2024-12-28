import { RHFTextareaField, RHFTextField } from "@/components/common/rhf";

type Props = {};

const Fields = (props: Props) => {
  return (
    <div className="space-y-4 mt-4 mb-10">
      <RHFTextField name="name" label="Name" />
      <RHFTextField name="email" label="Email" type="email" />
      <RHFTextareaField name="message" label="Message" />
    </div>
  );
};

export default Fields;

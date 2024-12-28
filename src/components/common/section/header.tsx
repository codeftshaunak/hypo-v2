import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  text?: string;
  centered?: boolean;
};

export const SectionHeader = (props: Props) => {
  const { text, title, centered } = props;
  return (
    <div className="mb-16">
      {title && (
        <h3
          className={cn(
            centered ? "text-center" : "text-left",
            "text-3xl font-bold mb-4"
          )}
        >
          {title}
        </h3>
      )}
      {text && (
        <p
          className={cn(
            centered ? "text-center" : "text-left",
            "text-xl text-muted-foreground"
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
};

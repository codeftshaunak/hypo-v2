import { Fragment } from "react";

import { generateBreadcrumbSchema } from "@/utils/schema-org";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export type BreadcrumbItem = {
  title: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const Breadcrumbs = (props: Props) => {
  const { items } = props;
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index, array) => (
            <Fragment key={index}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index + 1 !== array.length && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(items)),
        }}
      />
    </>
  );
};

export default Breadcrumbs;

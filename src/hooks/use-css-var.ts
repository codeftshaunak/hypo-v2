import { useEffect, useState } from "react";

const useCSSVariable = (
  variableName: string,
  element: HTMLElement | null = null
) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const target = element || document.documentElement;
    const updateValue = () => {
      const styles = getComputedStyle(target);
      const variableValue = styles.getPropertyValue(variableName).trim();
      setValue(variableValue);
    };

    updateValue();

    // Optional: Listen for changes in the document
    const observer = new MutationObserver(updateValue);
    observer.observe(target, { attributes: true, subtree: true });

    return () => observer.disconnect();
  }, [variableName, element]);

  return value;
};

export default useCSSVariable;

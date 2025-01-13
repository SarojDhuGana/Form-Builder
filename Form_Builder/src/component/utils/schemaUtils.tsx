export const generateSchema = (components: string[]) => {
  return {
    type: "object",
    properties: components.reduce((acc, type, index) => {
      acc[`field_${index}`] = { type: getType(type) };
      return acc;
    }, {} as Record<string, { type: string }>),
  };
};

const getType = (type: string): string => {
  switch (type) {
    case "text":
      return "string";
    case "select":
      return "string";
    case "radio":
      return "string";
    default:
      return "string";
  }
};

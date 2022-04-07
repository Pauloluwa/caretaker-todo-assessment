const isoFormat = (date = Date()) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  } as const;
  const eventDate = new Date(date);
  return eventDate.toLocaleDateString("en-US", options);
};

export { isoFormat };

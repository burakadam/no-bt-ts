const UL = <T,>({
  items,
  render,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render(item: T): React.ReactNode;
}) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{render(item)}</li>
    ))}
  </ul>
);

export default UL;

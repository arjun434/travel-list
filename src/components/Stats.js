export default function Stats({ items }) {
  const numItems = items.length;
  if (numItems === 0)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list !🚀 </em>
      </footer>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const numPackedPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numPackedPercentage === 100
          ? "You got everything ! Ready togo ✈️"
          : `You have ${numItems} items on your list, and you already packed ${""}
      ${numPacked} item (${numPackedPercentage} %)`}
      </em>
    </footer>
  );
}

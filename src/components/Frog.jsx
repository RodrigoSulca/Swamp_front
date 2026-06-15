function Frog({ frog, x, y }) {
  return (
    <div
      className="absolute flex flex-col items-center select-none"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <img
        src="/images/Frog.png"
        alt={frog.name}
        className="w-20"
      />

      <span className="font-semibold text-green-950">
        {frog.name}
      </span>
    </div>
  );
}

export default Frog;
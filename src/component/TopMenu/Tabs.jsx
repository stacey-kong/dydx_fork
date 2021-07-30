export default function Tabs() {
  return (
    <div className="hidden lg:inline-flex w-1/2 justify-around text-number items-center">
      <span>About</span>
      <span>Company</span>
      <span>Products</span>
      <span>Developers</span>
      <span>Community</span>
      <span className="bg-indigo-500 py-2 px-4 rounded-lg">Trade</span>
    </div>
  );
}

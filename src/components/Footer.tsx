export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 p-4 text-center mt-auto border-t border-slate-700">
      <p className="text-sm">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
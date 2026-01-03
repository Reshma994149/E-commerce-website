import { useThemeStore } from "../store/themeStore";

export default function ThemeToggle() {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  return (
    <button className="btn" onClick={toggleTheme}>
      Dark
    </button>
  );
}

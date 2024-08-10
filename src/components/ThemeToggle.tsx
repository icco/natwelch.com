"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { resolvedTheme, theme, setTheme } = useTheme()

  let isDark = resolvedTheme === "dark"

  const onChange = () => {
    setTheme(isDark ? "light" : "dark")
    isDark = theme === "dark"
  }

  return (
    <>
      <label className="swap swap-rotate align-text-top">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          checked={isDark}
          onChange={onChange}
          className="theme-controller"
          value={resolvedTheme}
        />

        <SunIcon className="swap-off w-4 h-4" />

        <MoonIcon className="swap-on w-4 h-4" />
      </label>
    </>
  )
}

export default ThemeToggle

// app/components/SearchTrigger.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function SearchTrigger() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // mount guard for portal
  useEffect(() => setMounted(true), []);

  // lock scroll when open
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  // keyboard shortcuts: Cmd/Ctrl+K and '/'
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      // ignore typing in inputs/textareas when using '/'
      const target = e.target as HTMLElement;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        (target as HTMLElement)?.isContentEditable;

      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "/" && !isTyping) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // autofocus input when opened
  useEffect(() => {
    if (open) {
      // slight delay lets the element render before focus
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [open]);

  // close when clicking the scrim (but not the panel)
  function onScrimClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) setOpen(false);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.toString().trim() ?? "";
    if (!q) return;
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <>
      {/* Trigger button (replace your <Link> with this button) */}
      <button
        type="button"
        aria-label="Search"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/10"
      >
        <svg
          width={24}
          height={24}
          stroke="currentColor"
          fill="none"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" strokeWidth={1.5} />
          <path d="M20 20l-3.5-3.5" strokeWidth={1.5} />
        </svg>
      </button>

      {/* Overlay */}
      {mounted &&
        createPortal(
          <div
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            onMouseDown={onScrimClick}
            className={clsx(
              "fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity",
              open
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            {/* Panel */}
            <div className={clsx("mx-auto mt-24 w-full max-w-2xl px-4")}>
              <div
                className={clsx(
                  "rounded-2xl bg-white shadow-xl ring-1 ring-black/5 transition-all",
                  open
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                )}
              >
                <form
                  onSubmit={onSubmit}
                  className="flex items-center gap-3 px-4 py-3"
                >
                  <svg
                    width={20}
                    height={20}
                    stroke="currentColor"
                    fill="none"
                    aria-hidden
                  >
                    <circle cx="9" cy="9" r="7" strokeWidth={1.5} />
                    <path d="M17 17l-3-3" strokeWidth={1.5} />
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    name="q"
                    placeholder="Search products, categories, help…"
                    aria-label="Search"
                    className="peer w-full bg-transparent text-base outline-none placeholder:text-gray-400"
                  />
                  <kbd className="hidden md:inline-flex select-none items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-500">
                    ⌘K
                  </kbd>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100"
                    aria-label="Close search"
                  >
                    Esc
                  </button>
                </form>

                {/* (Optional) quick links / recent searches */}
                <div className="border-t border-gray-100 px-4 py-3">
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          router.push("/search?q=milk");
                        }}
                        className="w-full rounded-lg bg-gray-50 px-3 py-2 text-left hover:bg-gray-100"
                      >
                        Milk
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          router.push("/search?q=toilet%20paper");
                        }}
                        className="w-full rounded-lg bg-gray-50 px-3 py-2 text-left hover:bg-gray-100"
                      >
                        Toilet paper
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* helper text */}
              <div className="mt-3 text-center text-xs text-white/80">
                Tip: Press{" "}
                <span className="rounded bg-white/20 px-1 py-0.5">/</span> or{" "}
                <span className="rounded bg-white/20 px-1 py-0.5">⌘K</span> to
                open search anywhere.
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

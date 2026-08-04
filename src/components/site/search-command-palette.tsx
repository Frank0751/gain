"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, FileText, Calendar, BookOpen, HelpCircle, Home } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SEARCH_INDEX, type SearchResult } from "@/lib/search-index";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Pages: Home,
  Legal: FileText,
  Programmes: BookOpen,
  Blog: BookOpen,
  "Upcoming Events": Calendar,
  "Past Events": Calendar,
  FAQ: HelpCircle,
};

interface SearchCommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommandPalette({ open, onOpenChange }: SearchCommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults(SEARCH_INDEX.slice(0, 8));
      setSelectedIndex(0);
    }
  }, [open]);

  React.useEffect(() => {
    if (!query.trim()) {
      setResults(SEARCH_INDEX.slice(0, 8));
      return;
    }
    const lower = query.toLowerCase();
    const filtered = SEARCH_INDEX.filter((item) => {
      return (
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        (item.keywords?.toLowerCase().includes(lower) ?? false) ||
        item.category.toLowerCase().includes(lower)
      );
    }).slice(0, 12);
    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    router.push(result.href);
    onOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-0 p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Search GAIN</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="size-5 shrink-0 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search pages, blog posts, events, FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-10 border-0 px-0 text-base shadow-none focus-visible:ring-0"
          />
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Close search"
            className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <p className="text-sm text-muted-foreground">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try searching for &ldquo;donate&rdquo;, &ldquo;volunteer&rdquo;, or &ldquo;events&rdquo;
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {!query && (
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Quick Links
                </p>
              )}
              {results.map((result, index) => {
                const Icon = categoryIcons[result.category] ?? PageIcon;
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={`${result.href}-${index}`}
                    onClick={() => handleSelect(result)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                      isSelected ? "bg-primary/10" : "hover:bg-secondary/60"
                    }`}
                  >
                    <div className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md ${isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                      <Icon className="size-4" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center gap-2">
                        <p className={`truncate text-sm font-medium ${isSelected ? "text-primary" : "text-foreground"}`}>
                          {result.title}
                        </p>
                        <Badge variant="secondary" className="shrink-0 border-0 bg-secondary text-[10px] text-muted-foreground">
                          {result.category}
                        </Badge>
                      </div>
                      <p className="mt-0.5 truncate text-xs text-muted-foreground">
                        {result.description}
                      </p>
                    </div>
                    {isSelected && (
                      <ArrowRight className="mt-1 size-4 shrink-0 text-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px]">↑↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px]">↵</kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px]">Esc</kbd>
              Close
            </span>
          </div>
          <span>{results.length} results</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

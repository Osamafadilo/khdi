import React, { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface SearchBarProps {
  onSearch?: (query: string, filters: string[]) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  onSearch = () => {},
  placeholder = "Search for services...",
  className = "",
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const categories = [
    { id: "residence", label: "Residence" },
    { id: "stores", label: "Stores" },
    { id: "restaurants", label: "Restaurants" },
    { id: "maintenance", label: "Maintenance" },
    { id: "travel", label: "Travel" },
    { id: "delivery", label: "Delivery" },
    { id: "investment", label: "Investment" },
  ];

  const handleSearch = () => {
    onSearch(searchQuery, selectedFilters);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div
      className={`flex items-center w-full max-w-[600px] relative bg-white ${className}`}
    >
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pr-10 pl-4 py-6 rounded-l-md border-r-0 focus-visible:ring-offset-0 focus-visible:ring-1"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
          onClick={() => setSearchQuery("")}
          aria-label="Clear search"
        >
          {searchQuery && <X className="h-4 w-4" />}
        </Button>
      </div>

      <Popover open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={`px-3 py-6 border-l-0 rounded-none ${selectedFilters.length > 0 ? "bg-primary/10" : ""}`}
            aria-label="Filter options"
          >
            <Filter className="h-5 w-5" />
            {selectedFilters.length > 0 && (
              <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center">
                {selectedFilters.length}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4" align="end">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Filter by Category</h3>
              {selectedFilters.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="h-auto py-1 px-2 text-xs"
                >
                  Clear all
                </Button>
              )}
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedFilters.includes(category.id)}
                    onCheckedChange={() => toggleFilter(category.id)}
                  />
                  <Label htmlFor={category.id} className="cursor-pointer">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Button
        type="button"
        onClick={handleSearch}
        className="rounded-r-md py-6"
        aria-label="Search"
      >
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

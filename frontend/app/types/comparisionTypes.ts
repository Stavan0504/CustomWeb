import { PortableTextBlock } from "@portabletext/types";
import { SanityImageAssetDocument } from "@sanity/client";

// Define a type for individual products
export interface Product {
  name: string;
  image: SanityImageAssetDocument;
  content: PortableTextBlock[];
}

// Define a type for the content item that contains a list of filtered products
export interface ContentItem {
  filteredList: Product[];
}

// Define a type for a section that contains content items
export interface Section {
  content: ContentItem[];
}

// Define the main type for the filtered content array passed to ComparePage
export interface comparisionType {
  filteredContent: Section[];
}

// Example usage in the ComparePage component
export default function ComparePage({ filteredContent }: comparisionType) {
  // Component logic as shown in your code
}

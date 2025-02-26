#!/bin/bash
input_folder="overrides/test"
output_folder="overrides/testw"

mkdir -p "$output_folder"

# Find all SVG files and process them
find "$input_folder" -type f -name "*.svg" | while read file; do
    # Preserve subfolder structure
    relative_path="${file#$input_folder/}"  # Remove input_folder prefix
    output_path="$output_folder/$relative_path"  # Keep subfolder structure

    mkdir -p "$(dirname "$output_path")"  # Ensure subfolders exist
    echo "Processing: $file -> $output_path"
    scour -i "$file" -o "$output_path"
done

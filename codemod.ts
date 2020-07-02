// Fragile find and replace of imports
import {
  walk,
  readFileStr,
} from "https://deno.land/std/fs/mod.ts";
import {
  join,
  dirname,
} from "https://deno.land/std/path/mod.ts";

const importRegex = / from "([^"]*)"/;

// Async
const jsonSet = new Set<string>();

const printFilesNames = async () => {
  for await (const entry of walk(".")) {
    if (!entry.path.startsWith(".")) {
      if (entry.path.includes("/")) {
        if (entry.path.endsWith(".ts")) {
          let file = await readFileStr(entry.path);
          for (let i = 0; importRegex.test(file) && i < 1; i++) {
            const match = (file.match(importRegex) as RegExpMatchArray);
            const index = match.index as number;
            const path = match[1];

            if (path.endsWith(".json")) {
              jsonSet.add(
                join(dirname(entry.path), path),
              );
            } else {
              console.log(index);
              console.log(path.length);
              file = file.replace(
                file.slice(index, index + path.length + 8),
                ` from '${path.startsWith(".") ? path : `../${path}`}'`,
              );
            }
          }
        }
      }
    }
  }
};

await printFilesNames();

if (jsonSet.size > 0) {
  console.log("There are some JSON files to manually fix to work with Deno");
  console.log([...jsonSet].join("\n"));
} else {
  console.log("Done.");
}

# deno-htmlparser2

Deno port of HTML Parser 2 (and its dependencies).

```ts
// direct
import { Parser } from "https://rawcdn.githack.com/tbjgolden/deno-htmlparser2/451e3693f15dd2735283e65085edf3db94587d10/htmlparser2/index.ts";

const parser = new Parser(
  {
    onopentag(name, attribs) {
      if (name === "script" && attribs.type === "text/javascript") {
        console.log("JS! Hooray!");
      }
    },
    ontext(text) {
      console.log("-->", text);
    },
    onclosetag(tagname) {
      if (tagname === "script") {
        console.log("That's it?!");
      }
    },
    onend() {
      console.log("Done");
    },
  },
  { decodeEntities: true },
);
parser.write(
  "Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>",
);
parser.end();
```

logs

```
--> Xyz 
JS! Hooray!
--> var foo = '
--> <
--> <bar>>';
That's it?!
Done
```

See htmlparser2 for documentation and for any issues that are present in both this port and the original project.

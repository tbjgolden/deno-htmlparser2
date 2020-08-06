These are a list of instructions that should be followed when updating the
source code of this project.

1. Clone the latest version of each project

```
dom-serializer domhandler     entities
domelementtype domutils       htmlparser2
```

2. Remove all files, except ts files (remove test files too)

```
rm -rf **/.github
rm -rf **/docs
rm -rf **/scripts
rm -rf **/__*
rm -rf **/*.{spec,test}.ts
rm */*
rm -rf */.*
```

3. Move all src files down a directory

```
mv dom-serializer/src/* dom-serializer
rm -rf dom-serializer/src
mv domelementtype/src/* domelementtype
rm -rf domelementtype/src
mv domhandler/src/* domhandler
rm -rf domhandler/src
mv domutils/src/* domutils
rm -rf domutils/src
mv entities/src/* entities
rm -rf entities/src
mv htmlparser2/src/* htmlparser2
rm -rf htmlparser2/src
```

4. Run codemod script

```
deno run -A --unstable codemod.ts
```

5. Manually change .json files to .ts files, and change imports from .json to .ts

6. Replace the event emitter import with a deno equivalent

```
// replace
import { EventEmitter } from '../events/index.ts';
// with
import EventEmitter from 'https://deno.land/x/events@v1.0.0/mod.ts';
```

7. Remove all uses and definitions of WritableStream.

8. Finally, scan through all the .ts files in each project for any unforeseen errors.

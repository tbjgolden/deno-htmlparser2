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

2. Move all src files down a directory

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

3. Run codemod script

```

```

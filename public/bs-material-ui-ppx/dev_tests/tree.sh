#!/bin/sh
# ocamlc -pp "./node_modules/.bin/bsrefmt --print binary" -dparsetree -impl "$1"
# ./node_modules/.bin/bsc -dparsetree "$1"
cat "$1" | /Users/jonathansiebern/.esy/3_________________________________________________________/i/opam__s__reason-opam__c__3.6.0-0272b08e/bin/refmt --parse re --print binary | ../_build/default/src/bin.exe /dev/stdin /dev/stdout | /Users/jonathansiebern/.esy/3_________________________________________________________/i/opam__s__reason-opam__c__3.6.0-0272b08e/bin/refmt --parse binary --interface false
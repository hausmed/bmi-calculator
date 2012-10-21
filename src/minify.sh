#!/bin/bash
curl -s \
 -d compilation_level=SIMPLE_OPTIMIZATIONS \
 -d output_format=text \
 -d output_info=compiled_code \
 --data-urlencode "js_code@`dirname $0`/hm-bmi-calc.js" \
 http://closure-compiler.appspot.com/compile \
 > `dirname $0`/../hm-bmi-calc.compressed.js
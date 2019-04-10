#!/usr/bin/env python
import os
import re

script_dir = os.path.dirname(__file__)
node_root  = os.path.normpath(os.path.join(script_dir, os.pardir))
output_dir = os.path.join(os.path.abspath(node_root), 'out')

cmake_debug_path = os.path.join(output_dir, 'Debug', 'CMakeLists.txt')
cmake_release_path = os.path.join(output_dir, 'Release', 'CMakeLists.txt')

def fix_cmake_list(path):
  with open(path, 'r') as f:
    fixed_lines = []
    for line in f.readlines():
      line = re.sub(r'--whole-archive', '-force_load', line)
      line = re.sub(r'-Wl,--no-whole-archive', '', line)
      line = line.replace('"../../', '"')
      line = line.replace('${CMAKE_CURRENT_LIST_DIR}/../..', '${CMAKE_CURRENT_LIST_DIR}')
      line = line.replace('  "src/tracing/trace_event.hsrc/util.h"\n', '  "src/tracing/trace_event.h"\n  "src/util.h"\n')
      line = line.replace('"deps/include/v8-inspector.h"', '"deps/v8/include/v8-inspector.h"')
      line = line.replace('"deps/include/v8-inspector-protocol.h"', '"deps/v8/include/v8-inspector-protocol.h"')
      line = line.replace('"${builddir}/obj.target/node/gen', '"${builddir}/CMakeFiles/node.dir/obj/gen')
      line = line.replace('"${builddir}/obj.target/node', '"${builddir}/CMakeFiles/node.dir')
      line = line.replace('add_library(v8_external_snapshot STATIC)', 'add_library(v8_external_snapshot STATIC "deps/v8/src/setup-isolate-deserialize.cc" "deps/v8/src/snapshot/natives-external.cc" "deps/v8/src/snapshot/snapshot-external.cc")')
      fixed_lines.append(line)

  with open(path, 'w') as f:
    f.writelines(fixed_lines)

def fix_cmake_lists():
  fix_cmake_list(cmake_debug_path)
  fix_cmake_list(cmake_release_path)

if __name__ == '__main__':
  fix_cmake_lists()

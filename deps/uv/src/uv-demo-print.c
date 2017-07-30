#include "uv.h"

void demo_print(const char * const string, const unsigned int flags) {
  char* format;

  if (flags & INIT && flags & MAIN)
    format = "INIT: %s                          |\n";
  else if (flags & INIT && flags & THREAD_POOL)
    format = "                                  |   INIT: %s\n";
  else if (flags & DONE && flags & MAIN)
    format = "DONE: %s                          |\n";
  else if (flags & DONE && flags & THREAD_POOL)
    format = "                                  |   DONE: %s\n";

  printf(format, string);
}

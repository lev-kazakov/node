#ifndef UV_DEMO_PRINT_H
#define UV_DEMO_PRINT_H

#include <stdio.h>

enum {
  INIT = 1 << 0,  // enter
  DONE = 1 << 1, // exit

  MAIN = 1 << 2,
  THREAD_POOL = 1 << 3
};

void demo_print(const char * const string, const unsigned int flags);

#endif /* UV_DEMO_PRINT_H */

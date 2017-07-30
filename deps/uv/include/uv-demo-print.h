#ifndef UV_DEMO_PRINT_H
#define UV_DEMO_PRINT_H

#include <stdio.h>

enum {
  HEADER      = 1 << 0,  // enter

  INIT        = 1 << 1,  // enter
  DONE        = 1 << 2, // exit

  MAIN        = 1 << 3,
  THREAD_POOL = 1 << 4
};

void uv_demo_print(const char *const message, const unsigned int flags);

#endif /* UV_DEMO_PRINT_H */

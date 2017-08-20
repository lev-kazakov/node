#ifndef UV_DEMO_PRINT_H
#define UV_DEMO_PRINT_H

#include <stdio.h>

enum {
  HEADER      = 1 << 0,
  LINE_BREAK  = 1 << 1,

  INIT        = 1 << 2, // enter
  DONE        = 1 << 3, // exit

  MAIN        = 1 << 4,
  THREAD_POOL = 1 << 5
};

void uv_demo_print(const char *const message, const unsigned int flags);

#endif /* UV_DEMO_PRINT_H */

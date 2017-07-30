#include "uv.h"

#define RED   "\x1B[31m"
#define GRN   "\x1B[32m"
#define YEL   "\x1B[33m"
#define BLU   "\x1B[34m"
#define MAG   "\x1B[35m"
#define CYN   "\x1B[36m"
#define WHT   "\x1B[37m"
#define RESET "\x1B[0m"


void uv_demo_print(const char* message, const unsigned int flags) {
  if (flags & HEADER) {
    printf(GRN "MAIN THREAD                                     " CYN "|  " MAG "THREAD POOL\n");
    printf("                                                " CYN "|\n");
    return;
  }

  char* format;

  char placeholder[] = "                                          ";
  int index = 0;
  while (*message) {
    placeholder[index] = *message;
    index++;
    message++;
  }

  if (flags & INIT && flags & MAIN)
    format = GRN "INIT: %s" CYN "|\n";
  else if (flags & INIT && flags & THREAD_POOL)
    format = "                                  " CYN "|" MAG "   INIT: %s\n";
  else if (flags & DONE && flags & MAIN)
    format = GRN "DONE: %s" CYN "|\n";
  else if (flags & DONE && flags & THREAD_POOL)
    format = "                                  " CYN "|" MAG "   DONE: %s\n";

  printf(format, placeholder);
}

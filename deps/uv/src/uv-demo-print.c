#include "uv.h"

#define RED   "\x1B[31m"
#define GRN   "\x1B[32m"
#define YEL   "\x1B[33m"
#define BLU   "\x1B[34m"
#define MAG   "\x1B[35m"
#define CYN   "\x1B[36m"
#define WHT   "\x1B[37m"
#define RESET "\x1B[0m"

#define COLUMN_LENGTH 50
#define COLUMN "                                                  "

static int indent = 0;

void uv_demo_print(const char* message, const unsigned int flags) {
  if (flags & HEADER) {
    printf(GRN "MAIN THREAD                                             " CYN "|  " MAG "THREAD POOL\n" RESET);
    printf(COLUMN "      " CYN "|\n" RESET);
    return;
  }

  char* format = NULL;
  char placeholder[] = COLUMN;

  if (flags & DONE) {
    indent--;
  }

  int index = indent * 2;
  while (*message && index < COLUMN_LENGTH) {
    placeholder[index] = *message;
    index++;
    message++;
  }

  if (flags & INIT) {
    indent++;
  }

  if (flags & INIT && flags & MAIN)
    format = GRN "INIT: %s" CYN "|\n" RESET;
  else if (flags & DONE && flags & MAIN)
    format = GRN "DONE: %s" CYN "|\n" RESET;
  else if (flags & INIT && flags & THREAD_POOL)
    format = COLUMN "      " CYN "|" MAG "   INIT: %s\n" RESET;
  else if (flags & DONE && flags & THREAD_POOL)
    format = COLUMN "      " CYN "|" MAG "   DONE: %s\n" RESET;

  printf(format, placeholder);
}

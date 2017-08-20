#include "uv.h"

#define RED   "\x1B[31m"
#define GRN   "\x1B[32m"
#define YEL   "\x1B[33m"
#define BLU   "\x1B[34m"
#define MAG   "\x1B[35m"
#define CYN   "\x1B[36m"
#define WHT   "\x1B[37m"
#define RESET "\x1B[0m"

#define COLUMN_LENGTH 80
#define COLUMN "                                                                                "

void uv_demo_print(const char* message, const unsigned int flags) {
  if (flags & HEADER) {
    printf(GRN "MAIN THREAD                                                                           " RESET "|  " MAG "THREAD POOL\n" RESET);
    return;
  }

  if (flags & LINE_BREAK) {
    printf(COLUMN "      |\n");
    return;
  }

  static int main_thread_indent = 0;
  static int thread_pool_indent = 0;
  int index = 0;

  if (flags & INIT) {
    if (flags & MAIN) {
      index = main_thread_indent;
      main_thread_indent++;
    } else if (flags & THREAD_POOL) {
      index = thread_pool_indent;
      thread_pool_indent++;
    }
  }

  if (flags & DONE) {
    if (flags & MAIN) {
      main_thread_indent--;
      index = main_thread_indent;
    } else if (flags & THREAD_POOL) {
      thread_pool_indent--;
      index = thread_pool_indent;
    }
  }

  index *= 2;
  char placeholder[] = COLUMN;
  while (*message && index < COLUMN_LENGTH) {
    placeholder[index] = *message;
    index++;
    message++;
  }

  char* format;
  if (flags & INIT && flags & DONE && flags & MAIN)
    format = GRN "INFO: %s" RESET "|\n";
  else if (flags & INIT && flags & MAIN)
    format = GRN "INIT: %s" RESET "|\n";
  else if (flags & DONE && flags & MAIN)
    format = GRN "DONE: %s" RESET "|\n";
  else if (flags & INIT && flags & DONE && flags & THREAD_POOL)
    format = COLUMN "      " RESET "|" MAG "   INFO: %s\n" RESET;
  else if (flags & INIT && flags & THREAD_POOL)
    format = COLUMN "      " RESET "|" MAG "   INIT: %s\n" RESET;
  else if (flags & DONE && flags & THREAD_POOL)
    format = COLUMN "      " RESET "|" MAG "   DONE: %s\n" RESET;

  printf(format, placeholder);
}

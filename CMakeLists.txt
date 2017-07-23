cmake_minimum_required(VERSION 2.8.8 FATAL_ERROR)
cmake_policy(VERSION 2.8.8)
project(node)
set(configuration "Debug")
enable_language(ASM)
set(builddir "${CMAKE_CURRENT_BINARY_DIR}")
set(obj "${builddir}/obj")

set(CMAKE_C_OUTPUT_EXTENSION_REPLACE 1)
set(CMAKE_CXX_OUTPUT_EXTENSION_REPLACE 1)



#/tools/icu/icu-generic.gyp:icu_uconfig_target#target
set(TARGET "icu_uconfig_target")
set(TOOLSET "target")
add_custom_target(icu_uconfig_target SOURCES)
set_target_properties(icu_uconfig_target PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icu_uconfig#target
set(TARGET "icu_uconfig")
set(TOOLSET "target")
add_custom_target(icu_uconfig SOURCES)
set_target_properties(icu_uconfig PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icu_uconfig#host
set(TARGET "icu_uconfig")
set(TOOLSET "host")
add_custom_target(icu_uconfig_host SOURCES)
set_target_properties(icu_uconfig_host PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icu_implementation#target
set(TARGET "icu_implementation")
set(TOOLSET "target")
add_custom_target(icu_implementation SOURCES)
set_target_properties(icu_implementation PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icuucx#target
set(TARGET "icuucx")
set(TOOLSET "target")
list(APPEND icuucx__cxx_srcs
  "./deps/icu-small/source/common/appendable.cpp"
  "./deps/icu-small/source/common/bmpset.cpp"
  "./deps/icu-small/source/common/brkeng.cpp"
  "./deps/icu-small/source/common/brkiter.cpp"
  "./deps/icu-small/source/common/bytestream.cpp"
  "./deps/icu-small/source/common/bytestrie.cpp"
  "./deps/icu-small/source/common/bytestriebuilder.cpp"
  "./deps/icu-small/source/common/bytestrieiterator.cpp"
  "./deps/icu-small/source/common/caniter.cpp"
  "./deps/icu-small/source/common/chariter.cpp"
  "./deps/icu-small/source/common/charstr.cpp"
  "./deps/icu-small/source/common/cmemory.cpp"
  "./deps/icu-small/source/common/cstr.cpp"
  "./deps/icu-small/source/common/cstring.cpp"
  "./deps/icu-small/source/common/cwchar.cpp"
  "./deps/icu-small/source/common/dictbe.cpp"
  "./deps/icu-small/source/common/dictionarydata.cpp"
  "./deps/icu-small/source/common/dtintrv.cpp"
  "./deps/icu-small/source/common/edits.cpp"
  "./deps/icu-small/source/common/errorcode.cpp"
  "./deps/icu-small/source/common/filteredbrk.cpp"
  "./deps/icu-small/source/common/filterednormalizer2.cpp"
  "./deps/icu-small/source/common/icudataver.cpp"
  "./deps/icu-small/source/common/icuplug.cpp"
  "./deps/icu-small/source/common/listformatter.cpp"
  "./deps/icu-small/source/common/loadednormalizer2impl.cpp"
  "./deps/icu-small/source/common/locavailable.cpp"
  "./deps/icu-small/source/common/locbased.cpp"
  "./deps/icu-small/source/common/locdispnames.cpp"
  "./deps/icu-small/source/common/locdspnm.cpp"
  "./deps/icu-small/source/common/locid.cpp"
  "./deps/icu-small/source/common/loclikely.cpp"
  "./deps/icu-small/source/common/locmap.cpp"
  "./deps/icu-small/source/common/locresdata.cpp"
  "./deps/icu-small/source/common/locutil.cpp"
  "./deps/icu-small/source/common/messagepattern.cpp"
  "./deps/icu-small/source/common/normalizer2.cpp"
  "./deps/icu-small/source/common/normalizer2impl.cpp"
  "./deps/icu-small/source/common/normlzr.cpp"
  "./deps/icu-small/source/common/parsepos.cpp"
  "./deps/icu-small/source/common/patternprops.cpp"
  "./deps/icu-small/source/common/pluralmap.cpp"
  "./deps/icu-small/source/common/propname.cpp"
  "./deps/icu-small/source/common/propsvec.cpp"
  "./deps/icu-small/source/common/punycode.cpp"
  "./deps/icu-small/source/common/putil.cpp"
  "./deps/icu-small/source/common/rbbi.cpp"
  "./deps/icu-small/source/common/rbbidata.cpp"
  "./deps/icu-small/source/common/rbbinode.cpp"
  "./deps/icu-small/source/common/rbbirb.cpp"
  "./deps/icu-small/source/common/rbbiscan.cpp"
  "./deps/icu-small/source/common/rbbisetb.cpp"
  "./deps/icu-small/source/common/rbbistbl.cpp"
  "./deps/icu-small/source/common/rbbitblb.cpp"
  "./deps/icu-small/source/common/resbund.cpp"
  "./deps/icu-small/source/common/resbund_cnv.cpp"
  "./deps/icu-small/source/common/resource.cpp"
  "./deps/icu-small/source/common/ruleiter.cpp"
  "./deps/icu-small/source/common/schriter.cpp"
  "./deps/icu-small/source/common/serv.cpp"
  "./deps/icu-small/source/common/servlk.cpp"
  "./deps/icu-small/source/common/servlkf.cpp"
  "./deps/icu-small/source/common/servls.cpp"
  "./deps/icu-small/source/common/servnotf.cpp"
  "./deps/icu-small/source/common/servrbf.cpp"
  "./deps/icu-small/source/common/servslkf.cpp"
  "./deps/icu-small/source/common/sharedobject.cpp"
  "./deps/icu-small/source/common/simpleformatter.cpp"
  "./deps/icu-small/source/common/stringpiece.cpp"
  "./deps/icu-small/source/common/stringtriebuilder.cpp"
  "./deps/icu-small/source/common/uarrsort.cpp"
  "./deps/icu-small/source/common/ubidi.cpp"
  "./deps/icu-small/source/common/ubidi_props.cpp"
  "./deps/icu-small/source/common/ubidiln.cpp"
  "./deps/icu-small/source/common/ubiditransform.cpp"
  "./deps/icu-small/source/common/ubidiwrt.cpp"
  "./deps/icu-small/source/common/ubrk.cpp"
  "./deps/icu-small/source/common/ucase.cpp"
  "./deps/icu-small/source/common/ucasemap.cpp"
  "./deps/icu-small/source/common/ucasemap_titlecase_brkiter.cpp"
  "./deps/icu-small/source/common/ucat.cpp"
  "./deps/icu-small/source/common/uchar.cpp"
  "./deps/icu-small/source/common/ucharstrie.cpp"
  "./deps/icu-small/source/common/ucharstriebuilder.cpp"
  "./deps/icu-small/source/common/ucharstrieiterator.cpp"
  "./deps/icu-small/source/common/uchriter.cpp"
  "./deps/icu-small/source/common/ucln_cmn.cpp"
  "./deps/icu-small/source/common/ucmndata.cpp"
  "./deps/icu-small/source/common/ucnv.cpp"
  "./deps/icu-small/source/common/ucnv2022.cpp"
  "./deps/icu-small/source/common/ucnv_bld.cpp"
  "./deps/icu-small/source/common/ucnv_cb.cpp"
  "./deps/icu-small/source/common/ucnv_cnv.cpp"
  "./deps/icu-small/source/common/ucnv_ct.cpp"
  "./deps/icu-small/source/common/ucnv_err.cpp"
  "./deps/icu-small/source/common/ucnv_ext.cpp"
  "./deps/icu-small/source/common/ucnv_io.cpp"
  "./deps/icu-small/source/common/ucnv_lmb.cpp"
  "./deps/icu-small/source/common/ucnv_set.cpp"
  "./deps/icu-small/source/common/ucnv_u16.cpp"
  "./deps/icu-small/source/common/ucnv_u32.cpp"
  "./deps/icu-small/source/common/ucnv_u7.cpp"
  "./deps/icu-small/source/common/ucnv_u8.cpp"
  "./deps/icu-small/source/common/ucnvbocu.cpp"
  "./deps/icu-small/source/common/ucnvdisp.cpp"
  "./deps/icu-small/source/common/ucnvhz.cpp"
  "./deps/icu-small/source/common/ucnvisci.cpp"
  "./deps/icu-small/source/common/ucnvlat1.cpp"
  "./deps/icu-small/source/common/ucnvmbcs.cpp"
  "./deps/icu-small/source/common/ucnvscsu.cpp"
  "./deps/icu-small/source/common/ucnvsel.cpp"
  "./deps/icu-small/source/common/ucol_swp.cpp"
  "./deps/icu-small/source/common/ucurr.cpp"
  "./deps/icu-small/source/common/udata.cpp"
  "./deps/icu-small/source/common/udatamem.cpp"
  "./deps/icu-small/source/common/udataswp.cpp"
  "./deps/icu-small/source/common/uenum.cpp"
  "./deps/icu-small/source/common/uhash.cpp"
  "./deps/icu-small/source/common/uhash_us.cpp"
  "./deps/icu-small/source/common/uidna.cpp"
  "./deps/icu-small/source/common/uinit.cpp"
  "./deps/icu-small/source/common/uinvchar.cpp"
  "./deps/icu-small/source/common/uiter.cpp"
  "./deps/icu-small/source/common/ulist.cpp"
  "./deps/icu-small/source/common/ulistformatter.cpp"
  "./deps/icu-small/source/common/uloc.cpp"
  "./deps/icu-small/source/common/uloc_keytype.cpp"
  "./deps/icu-small/source/common/uloc_tag.cpp"
  "./deps/icu-small/source/common/umapfile.cpp"
  "./deps/icu-small/source/common/umath.cpp"
  "./deps/icu-small/source/common/umutex.cpp"
  "./deps/icu-small/source/common/unames.cpp"
  "./deps/icu-small/source/common/unifiedcache.cpp"
  "./deps/icu-small/source/common/unifilt.cpp"
  "./deps/icu-small/source/common/unifunct.cpp"
  "./deps/icu-small/source/common/uniset.cpp"
  "./deps/icu-small/source/common/uniset_closure.cpp"
  "./deps/icu-small/source/common/uniset_props.cpp"
  "./deps/icu-small/source/common/unisetspan.cpp"
  "./deps/icu-small/source/common/unistr.cpp"
  "./deps/icu-small/source/common/unistr_case.cpp"
  "./deps/icu-small/source/common/unistr_case_locale.cpp"
  "./deps/icu-small/source/common/unistr_cnv.cpp"
  "./deps/icu-small/source/common/unistr_props.cpp"
  "./deps/icu-small/source/common/unistr_titlecase_brkiter.cpp"
  "./deps/icu-small/source/common/unorm.cpp"
  "./deps/icu-small/source/common/unormcmp.cpp"
  "./deps/icu-small/source/common/uobject.cpp"
  "./deps/icu-small/source/common/uprops.cpp"
  "./deps/icu-small/source/common/ures_cnv.cpp"
  "./deps/icu-small/source/common/uresbund.cpp"
  "./deps/icu-small/source/common/uresdata.cpp"
  "./deps/icu-small/source/common/usc_impl.cpp"
  "./deps/icu-small/source/common/uscript.cpp"
  "./deps/icu-small/source/common/uscript_props.cpp"
  "./deps/icu-small/source/common/uset.cpp"
  "./deps/icu-small/source/common/uset_props.cpp"
  "./deps/icu-small/source/common/usetiter.cpp"
  "./deps/icu-small/source/common/ushape.cpp"
  "./deps/icu-small/source/common/usprep.cpp"
  "./deps/icu-small/source/common/ustack.cpp"
  "./deps/icu-small/source/common/ustr_cnv.cpp"
  "./deps/icu-small/source/common/ustr_titlecase_brkiter.cpp"
  "./deps/icu-small/source/common/ustr_wcs.cpp"
  "./deps/icu-small/source/common/ustrcase.cpp"
  "./deps/icu-small/source/common/ustrcase_locale.cpp"
  "./deps/icu-small/source/common/ustrenum.cpp"
  "./deps/icu-small/source/common/ustrfmt.cpp"
  "./deps/icu-small/source/common/ustring.cpp"
  "./deps/icu-small/source/common/ustrtrns.cpp"
  "./deps/icu-small/source/common/utext.cpp"
  "./deps/icu-small/source/common/utf_impl.cpp"
  "./deps/icu-small/source/common/util.cpp"
  "./deps/icu-small/source/common/util_props.cpp"
  "./deps/icu-small/source/common/utrace.cpp"
  "./deps/icu-small/source/common/utrie.cpp"
  "./deps/icu-small/source/common/utrie2.cpp"
  "./deps/icu-small/source/common/utrie2_builder.cpp"
  "./deps/icu-small/source/common/uts46.cpp"
  "./deps/icu-small/source/common/utypes.cpp"
  "./deps/icu-small/source/common/uvector.cpp"
  "./deps/icu-small/source/common/uvectr32.cpp"
  "./deps/icu-small/source/common/uvectr64.cpp"
  "./deps/icu-small/source/common/wintz.cpp")
list(APPEND icuucx__other_srcs
  "./deps/icu-small/source/common/bmpset.h"
  "./deps/icu-small/source/common/brkeng.h"
  "./deps/icu-small/source/common/charstr.h"
  "./deps/icu-small/source/common/cmemory.h"
  "./deps/icu-small/source/common/cpputils.h"
  "./deps/icu-small/source/common/cstr.h"
  "./deps/icu-small/source/common/cstring.h"
  "./deps/icu-small/source/common/cwchar.h"
  "./deps/icu-small/source/common/dictbe.h"
  "./deps/icu-small/source/common/dictionarydata.h"
  "./deps/icu-small/source/common/hash.h"
  "./deps/icu-small/source/common/icuplugimp.h"
  "./deps/icu-small/source/common/localsvc.h"
  "./deps/icu-small/source/common/locbased.h"
  "./deps/icu-small/source/common/locmap.h"
  "./deps/icu-small/source/common/locutil.h"
  "./deps/icu-small/source/common/messageimpl.h"
  "./deps/icu-small/source/common/msvcres.h"
  "./deps/icu-small/source/common/mutex.h"
  "./deps/icu-small/source/common/norm2_nfc_data.h"
  "./deps/icu-small/source/common/norm2allmodes.h"
  "./deps/icu-small/source/common/normalizer2impl.h"
  "./deps/icu-small/source/common/patternprops.h"
  "./deps/icu-small/source/common/pluralmap.h"
  "./deps/icu-small/source/common/propname.h"
  "./deps/icu-small/source/common/propname_data.h"
  "./deps/icu-small/source/common/propsvec.h"
  "./deps/icu-small/source/common/punycode.h"
  "./deps/icu-small/source/common/putilimp.h"
  "./deps/icu-small/source/common/rbbidata.h"
  "./deps/icu-small/source/common/rbbinode.h"
  "./deps/icu-small/source/common/rbbirb.h"
  "./deps/icu-small/source/common/rbbirpt.h"
  "./deps/icu-small/source/common/rbbiscan.h"
  "./deps/icu-small/source/common/rbbisetb.h"
  "./deps/icu-small/source/common/rbbitblb.h"
  "./deps/icu-small/source/common/resource.h"
  "./deps/icu-small/source/common/ruleiter.h"
  "./deps/icu-small/source/common/serv.h"
  "./deps/icu-small/source/common/servloc.h"
  "./deps/icu-small/source/common/servnotf.h"
  "./deps/icu-small/source/common/sharedobject.h"
  "./deps/icu-small/source/common/sprpimpl.h"
  "./deps/icu-small/source/common/uarrsort.h"
  "./deps/icu-small/source/common/uassert.h"
  "./deps/icu-small/source/common/ubidi_props.h"
  "./deps/icu-small/source/common/ubidi_props_data.h"
  "./deps/icu-small/source/common/ubidiimp.h"
  "./deps/icu-small/source/common/ubrkimpl.h"
  "./deps/icu-small/source/common/ucase.h"
  "./deps/icu-small/source/common/ucase_props_data.h"
  "./deps/icu-small/source/common/ucasemap_imp.h"
  "./deps/icu-small/source/common/uchar_props_data.h"
  "./deps/icu-small/source/common/ucln.h"
  "./deps/icu-small/source/common/ucln_cmn.h"
  "./deps/icu-small/source/common/ucln_imp.h"
  "./deps/icu-small/source/common/ucmndata.h"
  "./deps/icu-small/source/common/ucnv_bld.h"
  "./deps/icu-small/source/common/ucnv_cnv.h"
  "./deps/icu-small/source/common/ucnv_ext.h"
  "./deps/icu-small/source/common/ucnv_imp.h"
  "./deps/icu-small/source/common/ucnv_io.h"
  "./deps/icu-small/source/common/ucnvmbcs.h"
  "./deps/icu-small/source/common/ucol_data.h"
  "./deps/icu-small/source/common/ucol_swp.h"
  "./deps/icu-small/source/common/ucurrimp.h"
  "./deps/icu-small/source/common/udatamem.h"
  "./deps/icu-small/source/common/udataswp.h"
  "./deps/icu-small/source/common/uelement.h"
  "./deps/icu-small/source/common/uenumimp.h"
  "./deps/icu-small/source/common/uhash.h"
  "./deps/icu-small/source/common/uinvchar.h"
  "./deps/icu-small/source/common/ulist.h"
  "./deps/icu-small/source/common/ulocimp.h"
  "./deps/icu-small/source/common/umapfile.h"
  "./deps/icu-small/source/common/umutex.h"
  "./deps/icu-small/source/common/unifiedcache.h"
  "./deps/icu-small/source/common/unisetspan.h"
  "./deps/icu-small/source/common/unistrappender.h"
  "./deps/icu-small/source/common/unormimp.h"
  "./deps/icu-small/source/common/uposixdefs.h"
  "./deps/icu-small/source/common/uprops.h"
  "./deps/icu-small/source/common/uresdata.h"
  "./deps/icu-small/source/common/uresimp.h"
  "./deps/icu-small/source/common/ureslocs.h"
  "./deps/icu-small/source/common/usc_impl.h"
  "./deps/icu-small/source/common/uset_imp.h"
  "./deps/icu-small/source/common/ustr_cnv.h"
  "./deps/icu-small/source/common/ustr_imp.h"
  "./deps/icu-small/source/common/ustrenum.h"
  "./deps/icu-small/source/common/ustrfmt.h"
  "./deps/icu-small/source/common/util.h"
  "./deps/icu-small/source/common/utracimp.h"
  "./deps/icu-small/source/common/utrie.h"
  "./deps/icu-small/source/common/utrie2.h"
  "./deps/icu-small/source/common/utrie2_impl.h"
  "./deps/icu-small/source/common/utypeinfo.h"
  "./deps/icu-small/source/common/uvector.h"
  "./deps/icu-small/source/common/uvectr32.h"
  "./deps/icu-small/source/common/uvectr64.h"
  "./deps/icu-small/source/common/wintz.h")
add_library(icuucx STATIC ${icuucx__cxx_srcs} ${icuucx__other_srcs})
set_target_properties(icuucx PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${icuucx__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(icuucx PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/tools/icu")
set_target_properties(icuucx PROPERTIES PREFIX "lib")
set_target_properties(icuucx PROPERTIES ARCHIVE_OUTPUT_NAME "icuucx")
set_target_properties(icuucx PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/tools/icu/libicuucx.a PROPERTIES GENERATED "TRUE")
set(icuucx__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common")
set_property(TARGET icuucx APPEND PROPERTY INCLUDE_DIRECTORIES ${icuucx__include_dirs})
set_target_properties(icuucx PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;U_COMMON_IMPLEMENTATION=1;U_ATTRIBUTE_DEPRECATED=;_CRT_SECURE_NO_DEPRECATE=;U_STATIC_IMPLEMENTATION=1;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(icuucx PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "YES")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(icuucx PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(icuucx
  icu_implementation
  icu_uconfig
  icu_uconfig_target
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icui18n#target
set(TARGET "icui18n")
set(TOOLSET "target")
list(APPEND icui18n__cxx_srcs
  "./deps/icu-small/source/i18n/affixpatternparser.cpp"
  "./deps/icu-small/source/i18n/alphaindex.cpp"
  "./deps/icu-small/source/i18n/anytrans.cpp"
  "./deps/icu-small/source/i18n/astro.cpp"
  "./deps/icu-small/source/i18n/basictz.cpp"
  "./deps/icu-small/source/i18n/bocsu.cpp"
  "./deps/icu-small/source/i18n/brktrans.cpp"
  "./deps/icu-small/source/i18n/buddhcal.cpp"
  "./deps/icu-small/source/i18n/calendar.cpp"
  "./deps/icu-small/source/i18n/casetrn.cpp"
  "./deps/icu-small/source/i18n/cecal.cpp"
  "./deps/icu-small/source/i18n/chnsecal.cpp"
  "./deps/icu-small/source/i18n/choicfmt.cpp"
  "./deps/icu-small/source/i18n/coleitr.cpp"
  "./deps/icu-small/source/i18n/coll.cpp"
  "./deps/icu-small/source/i18n/collation.cpp"
  "./deps/icu-small/source/i18n/collationbuilder.cpp"
  "./deps/icu-small/source/i18n/collationcompare.cpp"
  "./deps/icu-small/source/i18n/collationdata.cpp"
  "./deps/icu-small/source/i18n/collationdatabuilder.cpp"
  "./deps/icu-small/source/i18n/collationdatareader.cpp"
  "./deps/icu-small/source/i18n/collationdatawriter.cpp"
  "./deps/icu-small/source/i18n/collationfastlatin.cpp"
  "./deps/icu-small/source/i18n/collationfastlatinbuilder.cpp"
  "./deps/icu-small/source/i18n/collationfcd.cpp"
  "./deps/icu-small/source/i18n/collationiterator.cpp"
  "./deps/icu-small/source/i18n/collationkeys.cpp"
  "./deps/icu-small/source/i18n/collationroot.cpp"
  "./deps/icu-small/source/i18n/collationrootelements.cpp"
  "./deps/icu-small/source/i18n/collationruleparser.cpp"
  "./deps/icu-small/source/i18n/collationsets.cpp"
  "./deps/icu-small/source/i18n/collationsettings.cpp"
  "./deps/icu-small/source/i18n/collationtailoring.cpp"
  "./deps/icu-small/source/i18n/collationweights.cpp"
  "./deps/icu-small/source/i18n/compactdecimalformat.cpp"
  "./deps/icu-small/source/i18n/coptccal.cpp"
  "./deps/icu-small/source/i18n/cpdtrans.cpp"
  "./deps/icu-small/source/i18n/csdetect.cpp"
  "./deps/icu-small/source/i18n/csmatch.cpp"
  "./deps/icu-small/source/i18n/csr2022.cpp"
  "./deps/icu-small/source/i18n/csrecog.cpp"
  "./deps/icu-small/source/i18n/csrmbcs.cpp"
  "./deps/icu-small/source/i18n/csrsbcs.cpp"
  "./deps/icu-small/source/i18n/csrucode.cpp"
  "./deps/icu-small/source/i18n/csrutf8.cpp"
  "./deps/icu-small/source/i18n/curramt.cpp"
  "./deps/icu-small/source/i18n/currfmt.cpp"
  "./deps/icu-small/source/i18n/currpinf.cpp"
  "./deps/icu-small/source/i18n/currunit.cpp"
  "./deps/icu-small/source/i18n/dangical.cpp"
  "./deps/icu-small/source/i18n/datefmt.cpp"
  "./deps/icu-small/source/i18n/dayperiodrules.cpp"
  "./deps/icu-small/source/i18n/dcfmtsym.cpp"
  "./deps/icu-small/source/i18n/decContext.cpp"
  "./deps/icu-small/source/i18n/decfmtst.cpp"
  "./deps/icu-small/source/i18n/decimalformatpattern.cpp"
  "./deps/icu-small/source/i18n/decimfmt.cpp"
  "./deps/icu-small/source/i18n/decimfmtimpl.cpp"
  "./deps/icu-small/source/i18n/decNumber.cpp"
  "./deps/icu-small/source/i18n/digitaffix.cpp"
  "./deps/icu-small/source/i18n/digitaffixesandpadding.cpp"
  "./deps/icu-small/source/i18n/digitformatter.cpp"
  "./deps/icu-small/source/i18n/digitgrouping.cpp"
  "./deps/icu-small/source/i18n/digitinterval.cpp"
  "./deps/icu-small/source/i18n/digitlst.cpp"
  "./deps/icu-small/source/i18n/dtfmtsym.cpp"
  "./deps/icu-small/source/i18n/dtitvfmt.cpp"
  "./deps/icu-small/source/i18n/dtitvinf.cpp"
  "./deps/icu-small/source/i18n/dtptngen.cpp"
  "./deps/icu-small/source/i18n/dtrule.cpp"
  "./deps/icu-small/source/i18n/esctrn.cpp"
  "./deps/icu-small/source/i18n/ethpccal.cpp"
  "./deps/icu-small/source/i18n/fmtable.cpp"
  "./deps/icu-small/source/i18n/fmtable_cnv.cpp"
  "./deps/icu-small/source/i18n/format.cpp"
  "./deps/icu-small/source/i18n/fphdlimp.cpp"
  "./deps/icu-small/source/i18n/fpositer.cpp"
  "./deps/icu-small/source/i18n/funcrepl.cpp"
  "./deps/icu-small/source/i18n/gender.cpp"
  "./deps/icu-small/source/i18n/gregocal.cpp"
  "./deps/icu-small/source/i18n/gregoimp.cpp"
  "./deps/icu-small/source/i18n/hebrwcal.cpp"
  "./deps/icu-small/source/i18n/indiancal.cpp"
  "./deps/icu-small/source/i18n/inputext.cpp"
  "./deps/icu-small/source/i18n/islamcal.cpp"
  "./deps/icu-small/source/i18n/japancal.cpp"
  "./deps/icu-small/source/i18n/measfmt.cpp"
  "./deps/icu-small/source/i18n/measunit.cpp"
  "./deps/icu-small/source/i18n/measure.cpp"
  "./deps/icu-small/source/i18n/msgfmt.cpp"
  "./deps/icu-small/source/i18n/name2uni.cpp"
  "./deps/icu-small/source/i18n/nfrs.cpp"
  "./deps/icu-small/source/i18n/nfrule.cpp"
  "./deps/icu-small/source/i18n/nfsubs.cpp"
  "./deps/icu-small/source/i18n/nortrans.cpp"
  "./deps/icu-small/source/i18n/nultrans.cpp"
  "./deps/icu-small/source/i18n/numfmt.cpp"
  "./deps/icu-small/source/i18n/numsys.cpp"
  "./deps/icu-small/source/i18n/olsontz.cpp"
  "./deps/icu-small/source/i18n/persncal.cpp"
  "./deps/icu-small/source/i18n/pluralaffix.cpp"
  "./deps/icu-small/source/i18n/plurfmt.cpp"
  "./deps/icu-small/source/i18n/plurrule.cpp"
  "./deps/icu-small/source/i18n/precision.cpp"
  "./deps/icu-small/source/i18n/quant.cpp"
  "./deps/icu-small/source/i18n/quantityformatter.cpp"
  "./deps/icu-small/source/i18n/rbnf.cpp"
  "./deps/icu-small/source/i18n/rbt.cpp"
  "./deps/icu-small/source/i18n/rbt_data.cpp"
  "./deps/icu-small/source/i18n/rbt_pars.cpp"
  "./deps/icu-small/source/i18n/rbt_rule.cpp"
  "./deps/icu-small/source/i18n/rbt_set.cpp"
  "./deps/icu-small/source/i18n/rbtz.cpp"
  "./deps/icu-small/source/i18n/regexcmp.cpp"
  "./deps/icu-small/source/i18n/regeximp.cpp"
  "./deps/icu-small/source/i18n/regexst.cpp"
  "./deps/icu-small/source/i18n/regextxt.cpp"
  "./deps/icu-small/source/i18n/region.cpp"
  "./deps/icu-small/source/i18n/reldatefmt.cpp"
  "./deps/icu-small/source/i18n/reldtfmt.cpp"
  "./deps/icu-small/source/i18n/rematch.cpp"
  "./deps/icu-small/source/i18n/remtrans.cpp"
  "./deps/icu-small/source/i18n/repattrn.cpp"
  "./deps/icu-small/source/i18n/rulebasedcollator.cpp"
  "./deps/icu-small/source/i18n/scientificnumberformatter.cpp"
  "./deps/icu-small/source/i18n/scriptset.cpp"
  "./deps/icu-small/source/i18n/search.cpp"
  "./deps/icu-small/source/i18n/selfmt.cpp"
  "./deps/icu-small/source/i18n/sharedbreakiterator.cpp"
  "./deps/icu-small/source/i18n/simpletz.cpp"
  "./deps/icu-small/source/i18n/smallintformatter.cpp"
  "./deps/icu-small/source/i18n/smpdtfmt.cpp"
  "./deps/icu-small/source/i18n/smpdtfst.cpp"
  "./deps/icu-small/source/i18n/sortkey.cpp"
  "./deps/icu-small/source/i18n/standardplural.cpp"
  "./deps/icu-small/source/i18n/strmatch.cpp"
  "./deps/icu-small/source/i18n/strrepl.cpp"
  "./deps/icu-small/source/i18n/stsearch.cpp"
  "./deps/icu-small/source/i18n/taiwncal.cpp"
  "./deps/icu-small/source/i18n/timezone.cpp"
  "./deps/icu-small/source/i18n/titletrn.cpp"
  "./deps/icu-small/source/i18n/tmunit.cpp"
  "./deps/icu-small/source/i18n/tmutamt.cpp"
  "./deps/icu-small/source/i18n/tmutfmt.cpp"
  "./deps/icu-small/source/i18n/tolowtrn.cpp"
  "./deps/icu-small/source/i18n/toupptrn.cpp"
  "./deps/icu-small/source/i18n/translit.cpp"
  "./deps/icu-small/source/i18n/transreg.cpp"
  "./deps/icu-small/source/i18n/tridpars.cpp"
  "./deps/icu-small/source/i18n/tzfmt.cpp"
  "./deps/icu-small/source/i18n/tzgnames.cpp"
  "./deps/icu-small/source/i18n/tznames.cpp"
  "./deps/icu-small/source/i18n/tznames_impl.cpp"
  "./deps/icu-small/source/i18n/tzrule.cpp"
  "./deps/icu-small/source/i18n/tztrans.cpp"
  "./deps/icu-small/source/i18n/ucal.cpp"
  "./deps/icu-small/source/i18n/ucln_in.cpp"
  "./deps/icu-small/source/i18n/ucol.cpp"
  "./deps/icu-small/source/i18n/ucol_res.cpp"
  "./deps/icu-small/source/i18n/ucol_sit.cpp"
  "./deps/icu-small/source/i18n/ucoleitr.cpp"
  "./deps/icu-small/source/i18n/ucsdet.cpp"
  "./deps/icu-small/source/i18n/udat.cpp"
  "./deps/icu-small/source/i18n/udateintervalformat.cpp"
  "./deps/icu-small/source/i18n/udatpg.cpp"
  "./deps/icu-small/source/i18n/ufieldpositer.cpp"
  "./deps/icu-small/source/i18n/uitercollationiterator.cpp"
  "./deps/icu-small/source/i18n/ulocdata.cpp"
  "./deps/icu-small/source/i18n/umsg.cpp"
  "./deps/icu-small/source/i18n/unesctrn.cpp"
  "./deps/icu-small/source/i18n/uni2name.cpp"
  "./deps/icu-small/source/i18n/unum.cpp"
  "./deps/icu-small/source/i18n/unumsys.cpp"
  "./deps/icu-small/source/i18n/upluralrules.cpp"
  "./deps/icu-small/source/i18n/uregex.cpp"
  "./deps/icu-small/source/i18n/uregexc.cpp"
  "./deps/icu-small/source/i18n/uregion.cpp"
  "./deps/icu-small/source/i18n/usearch.cpp"
  "./deps/icu-small/source/i18n/uspoof.cpp"
  "./deps/icu-small/source/i18n/uspoof_build.cpp"
  "./deps/icu-small/source/i18n/uspoof_conf.cpp"
  "./deps/icu-small/source/i18n/uspoof_impl.cpp"
  "./deps/icu-small/source/i18n/utf16collationiterator.cpp"
  "./deps/icu-small/source/i18n/utf8collationiterator.cpp"
  "./deps/icu-small/source/i18n/utmscale.cpp"
  "./deps/icu-small/source/i18n/utrans.cpp"
  "./deps/icu-small/source/i18n/valueformatter.cpp"
  "./deps/icu-small/source/i18n/visibledigits.cpp"
  "./deps/icu-small/source/i18n/vtzone.cpp"
  "./deps/icu-small/source/i18n/vzone.cpp"
  "./deps/icu-small/source/i18n/windtfmt.cpp"
  "./deps/icu-small/source/i18n/winnmfmt.cpp"
  "./deps/icu-small/source/i18n/wintzimpl.cpp"
  "./deps/icu-small/source/i18n/zonemeta.cpp"
  "./deps/icu-small/source/i18n/zrule.cpp"
  "./deps/icu-small/source/i18n/ztrans.cpp")
list(APPEND icui18n__other_srcs
  "./deps/icu-small/source/i18n/affixpatternparser.h"
  "./deps/icu-small/source/i18n/anytrans.h"
  "./deps/icu-small/source/i18n/astro.h"
  "./deps/icu-small/source/i18n/bocsu.h"
  "./deps/icu-small/source/i18n/brktrans.h"
  "./deps/icu-small/source/i18n/buddhcal.h"
  "./deps/icu-small/source/i18n/casetrn.h"
  "./deps/icu-small/source/i18n/cecal.h"
  "./deps/icu-small/source/i18n/chnsecal.h"
  "./deps/icu-small/source/i18n/collation.h"
  "./deps/icu-small/source/i18n/collationbuilder.h"
  "./deps/icu-small/source/i18n/collationcompare.h"
  "./deps/icu-small/source/i18n/collationdata.h"
  "./deps/icu-small/source/i18n/collationdatabuilder.h"
  "./deps/icu-small/source/i18n/collationdatareader.h"
  "./deps/icu-small/source/i18n/collationdatawriter.h"
  "./deps/icu-small/source/i18n/collationfastlatin.h"
  "./deps/icu-small/source/i18n/collationfastlatinbuilder.h"
  "./deps/icu-small/source/i18n/collationfcd.h"
  "./deps/icu-small/source/i18n/collationiterator.h"
  "./deps/icu-small/source/i18n/collationkeys.h"
  "./deps/icu-small/source/i18n/collationroot.h"
  "./deps/icu-small/source/i18n/collationrootelements.h"
  "./deps/icu-small/source/i18n/collationruleparser.h"
  "./deps/icu-small/source/i18n/collationsets.h"
  "./deps/icu-small/source/i18n/collationsettings.h"
  "./deps/icu-small/source/i18n/collationtailoring.h"
  "./deps/icu-small/source/i18n/collationweights.h"
  "./deps/icu-small/source/i18n/collunsafe.h"
  "./deps/icu-small/source/i18n/coptccal.h"
  "./deps/icu-small/source/i18n/cpdtrans.h"
  "./deps/icu-small/source/i18n/csdetect.h"
  "./deps/icu-small/source/i18n/csmatch.h"
  "./deps/icu-small/source/i18n/csr2022.h"
  "./deps/icu-small/source/i18n/csrecog.h"
  "./deps/icu-small/source/i18n/csrmbcs.h"
  "./deps/icu-small/source/i18n/csrsbcs.h"
  "./deps/icu-small/source/i18n/csrucode.h"
  "./deps/icu-small/source/i18n/csrutf8.h"
  "./deps/icu-small/source/i18n/currfmt.h"
  "./deps/icu-small/source/i18n/dangical.h"
  "./deps/icu-small/source/i18n/dayperiodrules.h"
  "./deps/icu-small/source/i18n/dcfmtimp.h"
  "./deps/icu-small/source/i18n/decContext.h"
  "./deps/icu-small/source/i18n/decfmtst.h"
  "./deps/icu-small/source/i18n/decimalformatpattern.h"
  "./deps/icu-small/source/i18n/decimalformatpatternimpl.h"
  "./deps/icu-small/source/i18n/decimfmtimpl.h"
  "./deps/icu-small/source/i18n/decNumber.h"
  "./deps/icu-small/source/i18n/decNumberLocal.h"
  "./deps/icu-small/source/i18n/digitaffix.h"
  "./deps/icu-small/source/i18n/digitaffixesandpadding.h"
  "./deps/icu-small/source/i18n/digitformatter.h"
  "./deps/icu-small/source/i18n/digitgrouping.h"
  "./deps/icu-small/source/i18n/digitinterval.h"
  "./deps/icu-small/source/i18n/digitlst.h"
  "./deps/icu-small/source/i18n/dt_impl.h"
  "./deps/icu-small/source/i18n/dtitv_impl.h"
  "./deps/icu-small/source/i18n/dtptngen_impl.h"
  "./deps/icu-small/source/i18n/esctrn.h"
  "./deps/icu-small/source/i18n/ethpccal.h"
  "./deps/icu-small/source/i18n/fmtableimp.h"
  "./deps/icu-small/source/i18n/fphdlimp.h"
  "./deps/icu-small/source/i18n/funcrepl.h"
  "./deps/icu-small/source/i18n/gregoimp.h"
  "./deps/icu-small/source/i18n/hebrwcal.h"
  "./deps/icu-small/source/i18n/indiancal.h"
  "./deps/icu-small/source/i18n/inputext.h"
  "./deps/icu-small/source/i18n/islamcal.h"
  "./deps/icu-small/source/i18n/japancal.h"
  "./deps/icu-small/source/i18n/msgfmt_impl.h"
  "./deps/icu-small/source/i18n/name2uni.h"
  "./deps/icu-small/source/i18n/nfrlist.h"
  "./deps/icu-small/source/i18n/nfrs.h"
  "./deps/icu-small/source/i18n/nfrule.h"
  "./deps/icu-small/source/i18n/nfsubs.h"
  "./deps/icu-small/source/i18n/nortrans.h"
  "./deps/icu-small/source/i18n/nultrans.h"
  "./deps/icu-small/source/i18n/numsys_impl.h"
  "./deps/icu-small/source/i18n/olsontz.h"
  "./deps/icu-small/source/i18n/persncal.h"
  "./deps/icu-small/source/i18n/pluralaffix.h"
  "./deps/icu-small/source/i18n/plurrule_impl.h"
  "./deps/icu-small/source/i18n/precision.h"
  "./deps/icu-small/source/i18n/quant.h"
  "./deps/icu-small/source/i18n/quantityformatter.h"
  "./deps/icu-small/source/i18n/rbt.h"
  "./deps/icu-small/source/i18n/rbt_data.h"
  "./deps/icu-small/source/i18n/rbt_pars.h"
  "./deps/icu-small/source/i18n/rbt_rule.h"
  "./deps/icu-small/source/i18n/rbt_set.h"
  "./deps/icu-small/source/i18n/regexcmp.h"
  "./deps/icu-small/source/i18n/regexcst.h"
  "./deps/icu-small/source/i18n/regeximp.h"
  "./deps/icu-small/source/i18n/regexst.h"
  "./deps/icu-small/source/i18n/regextxt.h"
  "./deps/icu-small/source/i18n/region_impl.h"
  "./deps/icu-small/source/i18n/reldtfmt.h"
  "./deps/icu-small/source/i18n/remtrans.h"
  "./deps/icu-small/source/i18n/scriptset.h"
  "./deps/icu-small/source/i18n/selfmtimpl.h"
  "./deps/icu-small/source/i18n/sharedbreakiterator.h"
  "./deps/icu-small/source/i18n/sharedcalendar.h"
  "./deps/icu-small/source/i18n/shareddateformatsymbols.h"
  "./deps/icu-small/source/i18n/sharednumberformat.h"
  "./deps/icu-small/source/i18n/sharedpluralrules.h"
  "./deps/icu-small/source/i18n/significantdigitinterval.h"
  "./deps/icu-small/source/i18n/smallintformatter.h"
  "./deps/icu-small/source/i18n/smpdtfst.h"
  "./deps/icu-small/source/i18n/standardplural.h"
  "./deps/icu-small/source/i18n/strmatch.h"
  "./deps/icu-small/source/i18n/strrepl.h"
  "./deps/icu-small/source/i18n/taiwncal.h"
  "./deps/icu-small/source/i18n/titletrn.h"
  "./deps/icu-small/source/i18n/tolowtrn.h"
  "./deps/icu-small/source/i18n/toupptrn.h"
  "./deps/icu-small/source/i18n/transreg.h"
  "./deps/icu-small/source/i18n/tridpars.h"
  "./deps/icu-small/source/i18n/tzgnames.h"
  "./deps/icu-small/source/i18n/tznames_impl.h"
  "./deps/icu-small/source/i18n/ucln_in.h"
  "./deps/icu-small/source/i18n/ucol_imp.h"
  "./deps/icu-small/source/i18n/uitercollationiterator.h"
  "./deps/icu-small/source/i18n/umsg_imp.h"
  "./deps/icu-small/source/i18n/unesctrn.h"
  "./deps/icu-small/source/i18n/uni2name.h"
  "./deps/icu-small/source/i18n/uspoof_conf.h"
  "./deps/icu-small/source/i18n/uspoof_impl.h"
  "./deps/icu-small/source/i18n/usrchimp.h"
  "./deps/icu-small/source/i18n/utf16collationiterator.h"
  "./deps/icu-small/source/i18n/utf8collationiterator.h"
  "./deps/icu-small/source/i18n/valueformatter.h"
  "./deps/icu-small/source/i18n/visibledigits.h"
  "./deps/icu-small/source/i18n/vzone.h"
  "./deps/icu-small/source/i18n/windtfmt.h"
  "./deps/icu-small/source/i18n/winnmfmt.h"
  "./deps/icu-small/source/i18n/wintzimpl.h"
  "./deps/icu-small/source/i18n/zonemeta.h"
  "./deps/icu-small/source/i18n/zrule.h"
  "./deps/icu-small/source/i18n/ztrans.h")
add_library(icui18n STATIC ${icui18n__cxx_srcs} ${icui18n__other_srcs})
set_target_properties(icui18n PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${icui18n__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(icui18n PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/tools/icu")
set_target_properties(icui18n PROPERTIES PREFIX "lib")
set_target_properties(icui18n PROPERTIES ARCHIVE_OUTPUT_NAME "icui18n")
set_target_properties(icui18n PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/tools/icu/libicui18n.a PROPERTIES GENERATED "TRUE")
list(APPEND icui18n__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common")
set_property(TARGET icui18n APPEND PROPERTY INCLUDE_DIRECTORIES ${icui18n__include_dirs})
set_target_properties(icui18n PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;U_I18N_IMPLEMENTATION=1;U_ATTRIBUTE_DEPRECATED=;_CRT_SECURE_NO_DEPRECATE=;U_STATIC_IMPLEMENTATION=1;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(icui18n PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "YES")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(icui18n PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(icui18n
  icu_implementation
  icu_uconfig
  icu_uconfig_target
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icustubdata#target
set(TARGET "icustubdata")
set(TOOLSET "target")
set(icustubdata__cxx_srcs "./deps/icu-small/source/stubdata/stubdata.cpp")
add_library(icustubdata STATIC ${icustubdata__cxx_srcs})
set_target_properties(icustubdata PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(icustubdata PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/tools/icu")
set_target_properties(icustubdata PROPERTIES PREFIX "lib")
set_target_properties(icustubdata PROPERTIES ARCHIVE_OUTPUT_NAME "icustubdata")
set_target_properties(icustubdata PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/tools/icu/libicustubdata.a PROPERTIES GENERATED "TRUE")
set(icustubdata__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common")
set_property(TARGET icustubdata APPEND PROPERTY INCLUDE_DIRECTORIES ${icustubdata__include_dirs})
set_target_properties(icustubdata PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;U_ATTRIBUTE_DEPRECATED=;_CRT_SECURE_NO_DEPRECATE=;U_STATIC_IMPLEMENTATION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(icustubdata PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "YES")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(icustubdata PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(icustubdata
  icu_implementation
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icu_implementation#host
set(TARGET "icu_implementation")
set(TOOLSET "host")
add_custom_target(icu_implementation_host SOURCES)
set_target_properties(icu_implementation_host PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icutools#host
set(TARGET "icutools")
set(TOOLSET "host")
list(APPEND icutools_host__cxx_srcs
  "./deps/icu-small/source/tools/toolutil/collationinfo.cpp"
  "./deps/icu-small/source/tools/toolutil/denseranges.cpp"
  "./deps/icu-small/source/tools/toolutil/filestrm.cpp"
  "./deps/icu-small/source/tools/toolutil/filetools.cpp"
  "./deps/icu-small/source/tools/toolutil/flagparser.cpp"
  "./deps/icu-small/source/tools/toolutil/package.cpp"
  "./deps/icu-small/source/tools/toolutil/pkg_genc.cpp"
  "./deps/icu-small/source/tools/toolutil/pkg_gencmn.cpp"
  "./deps/icu-small/source/tools/toolutil/pkg_icu.cpp"
  "./deps/icu-small/source/tools/toolutil/pkgitems.cpp"
  "./deps/icu-small/source/tools/toolutil/ppucd.cpp"
  "./deps/icu-small/source/tools/toolutil/swapimpl.cpp"
  "./deps/icu-small/source/tools/toolutil/toolutil.cpp"
  "./deps/icu-small/source/tools/toolutil/ucbuf.cpp"
  "./deps/icu-small/source/tools/toolutil/ucln_tu.cpp"
  "./deps/icu-small/source/tools/toolutil/ucm.cpp"
  "./deps/icu-small/source/tools/toolutil/ucmstate.cpp"
  "./deps/icu-small/source/tools/toolutil/unewdata.cpp"
  "./deps/icu-small/source/tools/toolutil/uoptions.cpp"
  "./deps/icu-small/source/tools/toolutil/uparse.cpp"
  "./deps/icu-small/source/tools/toolutil/writesrc.cpp"
  "./deps/icu-small/source/tools/toolutil/xmlparser.cpp"
  "./deps/icu-small/source/common/appendable.cpp"
  "./deps/icu-small/source/common/bmpset.cpp"
  "./deps/icu-small/source/common/brkeng.cpp"
  "./deps/icu-small/source/common/brkiter.cpp"
  "./deps/icu-small/source/common/bytestream.cpp"
  "./deps/icu-small/source/common/bytestrie.cpp"
  "./deps/icu-small/source/common/bytestriebuilder.cpp"
  "./deps/icu-small/source/common/bytestrieiterator.cpp"
  "./deps/icu-small/source/common/caniter.cpp"
  "./deps/icu-small/source/common/chariter.cpp"
  "./deps/icu-small/source/common/charstr.cpp"
  "./deps/icu-small/source/common/cmemory.cpp"
  "./deps/icu-small/source/common/cstr.cpp"
  "./deps/icu-small/source/common/cstring.cpp"
  "./deps/icu-small/source/common/cwchar.cpp"
  "./deps/icu-small/source/common/dictbe.cpp"
  "./deps/icu-small/source/common/dictionarydata.cpp"
  "./deps/icu-small/source/common/dtintrv.cpp"
  "./deps/icu-small/source/common/edits.cpp"
  "./deps/icu-small/source/common/errorcode.cpp"
  "./deps/icu-small/source/common/filteredbrk.cpp"
  "./deps/icu-small/source/common/filterednormalizer2.cpp"
  "./deps/icu-small/source/common/icudataver.cpp"
  "./deps/icu-small/source/common/icuplug.cpp"
  "./deps/icu-small/source/common/listformatter.cpp"
  "./deps/icu-small/source/common/loadednormalizer2impl.cpp"
  "./deps/icu-small/source/common/locavailable.cpp"
  "./deps/icu-small/source/common/locbased.cpp"
  "./deps/icu-small/source/common/locdispnames.cpp"
  "./deps/icu-small/source/common/locdspnm.cpp"
  "./deps/icu-small/source/common/locid.cpp"
  "./deps/icu-small/source/common/loclikely.cpp"
  "./deps/icu-small/source/common/locmap.cpp"
  "./deps/icu-small/source/common/locresdata.cpp"
  "./deps/icu-small/source/common/locutil.cpp"
  "./deps/icu-small/source/common/messagepattern.cpp"
  "./deps/icu-small/source/common/normalizer2.cpp"
  "./deps/icu-small/source/common/normalizer2impl.cpp"
  "./deps/icu-small/source/common/normlzr.cpp"
  "./deps/icu-small/source/common/parsepos.cpp"
  "./deps/icu-small/source/common/patternprops.cpp"
  "./deps/icu-small/source/common/pluralmap.cpp"
  "./deps/icu-small/source/common/propname.cpp"
  "./deps/icu-small/source/common/propsvec.cpp"
  "./deps/icu-small/source/common/punycode.cpp"
  "./deps/icu-small/source/common/putil.cpp"
  "./deps/icu-small/source/common/rbbi.cpp"
  "./deps/icu-small/source/common/rbbidata.cpp"
  "./deps/icu-small/source/common/rbbinode.cpp"
  "./deps/icu-small/source/common/rbbirb.cpp"
  "./deps/icu-small/source/common/rbbiscan.cpp"
  "./deps/icu-small/source/common/rbbisetb.cpp"
  "./deps/icu-small/source/common/rbbistbl.cpp"
  "./deps/icu-small/source/common/rbbitblb.cpp"
  "./deps/icu-small/source/common/resbund.cpp"
  "./deps/icu-small/source/common/resbund_cnv.cpp"
  "./deps/icu-small/source/common/resource.cpp"
  "./deps/icu-small/source/common/ruleiter.cpp"
  "./deps/icu-small/source/common/schriter.cpp"
  "./deps/icu-small/source/common/serv.cpp"
  "./deps/icu-small/source/common/servlk.cpp"
  "./deps/icu-small/source/common/servlkf.cpp"
  "./deps/icu-small/source/common/servls.cpp"
  "./deps/icu-small/source/common/servnotf.cpp"
  "./deps/icu-small/source/common/servrbf.cpp"
  "./deps/icu-small/source/common/servslkf.cpp"
  "./deps/icu-small/source/common/sharedobject.cpp"
  "./deps/icu-small/source/common/simpleformatter.cpp"
  "./deps/icu-small/source/common/stringpiece.cpp"
  "./deps/icu-small/source/common/stringtriebuilder.cpp"
  "./deps/icu-small/source/common/uarrsort.cpp"
  "./deps/icu-small/source/common/ubidi.cpp"
  "./deps/icu-small/source/common/ubidi_props.cpp"
  "./deps/icu-small/source/common/ubidiln.cpp"
  "./deps/icu-small/source/common/ubiditransform.cpp"
  "./deps/icu-small/source/common/ubidiwrt.cpp"
  "./deps/icu-small/source/common/ubrk.cpp"
  "./deps/icu-small/source/common/ucase.cpp"
  "./deps/icu-small/source/common/ucasemap.cpp"
  "./deps/icu-small/source/common/ucasemap_titlecase_brkiter.cpp"
  "./deps/icu-small/source/common/ucat.cpp"
  "./deps/icu-small/source/common/uchar.cpp"
  "./deps/icu-small/source/common/ucharstrie.cpp"
  "./deps/icu-small/source/common/ucharstriebuilder.cpp"
  "./deps/icu-small/source/common/ucharstrieiterator.cpp"
  "./deps/icu-small/source/common/uchriter.cpp"
  "./deps/icu-small/source/common/ucln_cmn.cpp"
  "./deps/icu-small/source/common/ucmndata.cpp"
  "./deps/icu-small/source/common/ucnv.cpp"
  "./deps/icu-small/source/common/ucnv2022.cpp"
  "./deps/icu-small/source/common/ucnv_bld.cpp"
  "./deps/icu-small/source/common/ucnv_cb.cpp"
  "./deps/icu-small/source/common/ucnv_cnv.cpp"
  "./deps/icu-small/source/common/ucnv_ct.cpp"
  "./deps/icu-small/source/common/ucnv_err.cpp"
  "./deps/icu-small/source/common/ucnv_ext.cpp"
  "./deps/icu-small/source/common/ucnv_io.cpp"
  "./deps/icu-small/source/common/ucnv_lmb.cpp"
  "./deps/icu-small/source/common/ucnv_set.cpp"
  "./deps/icu-small/source/common/ucnv_u16.cpp"
  "./deps/icu-small/source/common/ucnv_u32.cpp"
  "./deps/icu-small/source/common/ucnv_u7.cpp"
  "./deps/icu-small/source/common/ucnv_u8.cpp"
  "./deps/icu-small/source/common/ucnvbocu.cpp"
  "./deps/icu-small/source/common/ucnvdisp.cpp"
  "./deps/icu-small/source/common/ucnvhz.cpp"
  "./deps/icu-small/source/common/ucnvisci.cpp"
  "./deps/icu-small/source/common/ucnvlat1.cpp"
  "./deps/icu-small/source/common/ucnvmbcs.cpp"
  "./deps/icu-small/source/common/ucnvscsu.cpp"
  "./deps/icu-small/source/common/ucnvsel.cpp"
  "./deps/icu-small/source/common/ucol_swp.cpp"
  "./deps/icu-small/source/common/ucurr.cpp"
  "./deps/icu-small/source/common/udata.cpp"
  "./deps/icu-small/source/common/udatamem.cpp"
  "./deps/icu-small/source/common/udataswp.cpp"
  "./deps/icu-small/source/common/uenum.cpp"
  "./deps/icu-small/source/common/uhash.cpp"
  "./deps/icu-small/source/common/uhash_us.cpp"
  "./deps/icu-small/source/common/uidna.cpp"
  "./deps/icu-small/source/common/uinit.cpp"
  "./deps/icu-small/source/common/uinvchar.cpp"
  "./deps/icu-small/source/common/uiter.cpp"
  "./deps/icu-small/source/common/ulist.cpp"
  "./deps/icu-small/source/common/ulistformatter.cpp"
  "./deps/icu-small/source/common/uloc.cpp"
  "./deps/icu-small/source/common/uloc_keytype.cpp"
  "./deps/icu-small/source/common/uloc_tag.cpp"
  "./deps/icu-small/source/common/umapfile.cpp"
  "./deps/icu-small/source/common/umath.cpp"
  "./deps/icu-small/source/common/umutex.cpp"
  "./deps/icu-small/source/common/unames.cpp"
  "./deps/icu-small/source/common/unifiedcache.cpp"
  "./deps/icu-small/source/common/unifilt.cpp"
  "./deps/icu-small/source/common/unifunct.cpp"
  "./deps/icu-small/source/common/uniset.cpp"
  "./deps/icu-small/source/common/uniset_closure.cpp"
  "./deps/icu-small/source/common/uniset_props.cpp"
  "./deps/icu-small/source/common/unisetspan.cpp"
  "./deps/icu-small/source/common/unistr.cpp"
  "./deps/icu-small/source/common/unistr_case.cpp"
  "./deps/icu-small/source/common/unistr_case_locale.cpp"
  "./deps/icu-small/source/common/unistr_cnv.cpp"
  "./deps/icu-small/source/common/unistr_props.cpp"
  "./deps/icu-small/source/common/unistr_titlecase_brkiter.cpp"
  "./deps/icu-small/source/common/unorm.cpp"
  "./deps/icu-small/source/common/unormcmp.cpp"
  "./deps/icu-small/source/common/uobject.cpp"
  "./deps/icu-small/source/common/uprops.cpp"
  "./deps/icu-small/source/common/ures_cnv.cpp"
  "./deps/icu-small/source/common/uresbund.cpp"
  "./deps/icu-small/source/common/uresdata.cpp"
  "./deps/icu-small/source/common/usc_impl.cpp"
  "./deps/icu-small/source/common/uscript.cpp"
  "./deps/icu-small/source/common/uscript_props.cpp"
  "./deps/icu-small/source/common/uset.cpp"
  "./deps/icu-small/source/common/uset_props.cpp"
  "./deps/icu-small/source/common/usetiter.cpp"
  "./deps/icu-small/source/common/ushape.cpp"
  "./deps/icu-small/source/common/usprep.cpp"
  "./deps/icu-small/source/common/ustack.cpp"
  "./deps/icu-small/source/common/ustr_cnv.cpp"
  "./deps/icu-small/source/common/ustr_titlecase_brkiter.cpp"
  "./deps/icu-small/source/common/ustr_wcs.cpp"
  "./deps/icu-small/source/common/ustrcase.cpp"
  "./deps/icu-small/source/common/ustrcase_locale.cpp"
  "./deps/icu-small/source/common/ustrenum.cpp"
  "./deps/icu-small/source/common/ustrfmt.cpp"
  "./deps/icu-small/source/common/ustring.cpp"
  "./deps/icu-small/source/common/ustrtrns.cpp"
  "./deps/icu-small/source/common/utext.cpp"
  "./deps/icu-small/source/common/utf_impl.cpp"
  "./deps/icu-small/source/common/util.cpp"
  "./deps/icu-small/source/common/util_props.cpp"
  "./deps/icu-small/source/common/utrace.cpp"
  "./deps/icu-small/source/common/utrie.cpp"
  "./deps/icu-small/source/common/utrie2.cpp"
  "./deps/icu-small/source/common/utrie2_builder.cpp"
  "./deps/icu-small/source/common/uts46.cpp"
  "./deps/icu-small/source/common/utypes.cpp"
  "./deps/icu-small/source/common/uvector.cpp"
  "./deps/icu-small/source/common/uvectr32.cpp"
  "./deps/icu-small/source/common/uvectr64.cpp"
  "./deps/icu-small/source/common/wintz.cpp"
  "./deps/icu-small/source/i18n/affixpatternparser.cpp"
  "./deps/icu-small/source/i18n/alphaindex.cpp"
  "./deps/icu-small/source/i18n/anytrans.cpp"
  "./deps/icu-small/source/i18n/astro.cpp"
  "./deps/icu-small/source/i18n/basictz.cpp"
  "./deps/icu-small/source/i18n/bocsu.cpp"
  "./deps/icu-small/source/i18n/brktrans.cpp"
  "./deps/icu-small/source/i18n/buddhcal.cpp"
  "./deps/icu-small/source/i18n/calendar.cpp"
  "./deps/icu-small/source/i18n/casetrn.cpp"
  "./deps/icu-small/source/i18n/cecal.cpp"
  "./deps/icu-small/source/i18n/chnsecal.cpp"
  "./deps/icu-small/source/i18n/choicfmt.cpp"
  "./deps/icu-small/source/i18n/coleitr.cpp"
  "./deps/icu-small/source/i18n/coll.cpp"
  "./deps/icu-small/source/i18n/collation.cpp"
  "./deps/icu-small/source/i18n/collationbuilder.cpp"
  "./deps/icu-small/source/i18n/collationcompare.cpp"
  "./deps/icu-small/source/i18n/collationdata.cpp"
  "./deps/icu-small/source/i18n/collationdatabuilder.cpp"
  "./deps/icu-small/source/i18n/collationdatareader.cpp"
  "./deps/icu-small/source/i18n/collationdatawriter.cpp"
  "./deps/icu-small/source/i18n/collationfastlatin.cpp"
  "./deps/icu-small/source/i18n/collationfastlatinbuilder.cpp"
  "./deps/icu-small/source/i18n/collationfcd.cpp"
  "./deps/icu-small/source/i18n/collationiterator.cpp"
  "./deps/icu-small/source/i18n/collationkeys.cpp"
  "./deps/icu-small/source/i18n/collationroot.cpp"
  "./deps/icu-small/source/i18n/collationrootelements.cpp"
  "./deps/icu-small/source/i18n/collationruleparser.cpp"
  "./deps/icu-small/source/i18n/collationsets.cpp"
  "./deps/icu-small/source/i18n/collationsettings.cpp"
  "./deps/icu-small/source/i18n/collationtailoring.cpp"
  "./deps/icu-small/source/i18n/collationweights.cpp"
  "./deps/icu-small/source/i18n/compactdecimalformat.cpp"
  "./deps/icu-small/source/i18n/coptccal.cpp"
  "./deps/icu-small/source/i18n/cpdtrans.cpp"
  "./deps/icu-small/source/i18n/csdetect.cpp"
  "./deps/icu-small/source/i18n/csmatch.cpp"
  "./deps/icu-small/source/i18n/csr2022.cpp"
  "./deps/icu-small/source/i18n/csrecog.cpp"
  "./deps/icu-small/source/i18n/csrmbcs.cpp"
  "./deps/icu-small/source/i18n/csrsbcs.cpp"
  "./deps/icu-small/source/i18n/csrucode.cpp"
  "./deps/icu-small/source/i18n/csrutf8.cpp"
  "./deps/icu-small/source/i18n/curramt.cpp"
  "./deps/icu-small/source/i18n/currfmt.cpp"
  "./deps/icu-small/source/i18n/currpinf.cpp"
  "./deps/icu-small/source/i18n/currunit.cpp"
  "./deps/icu-small/source/i18n/dangical.cpp"
  "./deps/icu-small/source/i18n/datefmt.cpp"
  "./deps/icu-small/source/i18n/dayperiodrules.cpp"
  "./deps/icu-small/source/i18n/dcfmtsym.cpp"
  "./deps/icu-small/source/i18n/decContext.cpp"
  "./deps/icu-small/source/i18n/decfmtst.cpp"
  "./deps/icu-small/source/i18n/decimalformatpattern.cpp"
  "./deps/icu-small/source/i18n/decimfmt.cpp"
  "./deps/icu-small/source/i18n/decimfmtimpl.cpp"
  "./deps/icu-small/source/i18n/decNumber.cpp"
  "./deps/icu-small/source/i18n/digitaffix.cpp"
  "./deps/icu-small/source/i18n/digitaffixesandpadding.cpp"
  "./deps/icu-small/source/i18n/digitformatter.cpp"
  "./deps/icu-small/source/i18n/digitgrouping.cpp"
  "./deps/icu-small/source/i18n/digitinterval.cpp"
  "./deps/icu-small/source/i18n/digitlst.cpp"
  "./deps/icu-small/source/i18n/dtfmtsym.cpp"
  "./deps/icu-small/source/i18n/dtitvfmt.cpp"
  "./deps/icu-small/source/i18n/dtitvinf.cpp"
  "./deps/icu-small/source/i18n/dtptngen.cpp"
  "./deps/icu-small/source/i18n/dtrule.cpp"
  "./deps/icu-small/source/i18n/esctrn.cpp"
  "./deps/icu-small/source/i18n/ethpccal.cpp"
  "./deps/icu-small/source/i18n/fmtable.cpp"
  "./deps/icu-small/source/i18n/fmtable_cnv.cpp"
  "./deps/icu-small/source/i18n/format.cpp"
  "./deps/icu-small/source/i18n/fphdlimp.cpp"
  "./deps/icu-small/source/i18n/fpositer.cpp"
  "./deps/icu-small/source/i18n/funcrepl.cpp"
  "./deps/icu-small/source/i18n/gender.cpp"
  "./deps/icu-small/source/i18n/gregocal.cpp"
  "./deps/icu-small/source/i18n/gregoimp.cpp"
  "./deps/icu-small/source/i18n/hebrwcal.cpp"
  "./deps/icu-small/source/i18n/indiancal.cpp"
  "./deps/icu-small/source/i18n/inputext.cpp"
  "./deps/icu-small/source/i18n/islamcal.cpp"
  "./deps/icu-small/source/i18n/japancal.cpp"
  "./deps/icu-small/source/i18n/measfmt.cpp"
  "./deps/icu-small/source/i18n/measunit.cpp"
  "./deps/icu-small/source/i18n/measure.cpp"
  "./deps/icu-small/source/i18n/msgfmt.cpp"
  "./deps/icu-small/source/i18n/name2uni.cpp"
  "./deps/icu-small/source/i18n/nfrs.cpp"
  "./deps/icu-small/source/i18n/nfrule.cpp"
  "./deps/icu-small/source/i18n/nfsubs.cpp"
  "./deps/icu-small/source/i18n/nortrans.cpp"
  "./deps/icu-small/source/i18n/nultrans.cpp"
  "./deps/icu-small/source/i18n/numfmt.cpp"
  "./deps/icu-small/source/i18n/numsys.cpp"
  "./deps/icu-small/source/i18n/olsontz.cpp"
  "./deps/icu-small/source/i18n/persncal.cpp"
  "./deps/icu-small/source/i18n/pluralaffix.cpp"
  "./deps/icu-small/source/i18n/plurfmt.cpp"
  "./deps/icu-small/source/i18n/plurrule.cpp"
  "./deps/icu-small/source/i18n/precision.cpp"
  "./deps/icu-small/source/i18n/quant.cpp"
  "./deps/icu-small/source/i18n/quantityformatter.cpp"
  "./deps/icu-small/source/i18n/rbnf.cpp"
  "./deps/icu-small/source/i18n/rbt.cpp"
  "./deps/icu-small/source/i18n/rbt_data.cpp"
  "./deps/icu-small/source/i18n/rbt_pars.cpp"
  "./deps/icu-small/source/i18n/rbt_rule.cpp"
  "./deps/icu-small/source/i18n/rbt_set.cpp"
  "./deps/icu-small/source/i18n/rbtz.cpp"
  "./deps/icu-small/source/i18n/regexcmp.cpp"
  "./deps/icu-small/source/i18n/regeximp.cpp"
  "./deps/icu-small/source/i18n/regexst.cpp"
  "./deps/icu-small/source/i18n/regextxt.cpp"
  "./deps/icu-small/source/i18n/region.cpp"
  "./deps/icu-small/source/i18n/reldatefmt.cpp"
  "./deps/icu-small/source/i18n/reldtfmt.cpp"
  "./deps/icu-small/source/i18n/rematch.cpp"
  "./deps/icu-small/source/i18n/remtrans.cpp"
  "./deps/icu-small/source/i18n/repattrn.cpp"
  "./deps/icu-small/source/i18n/rulebasedcollator.cpp"
  "./deps/icu-small/source/i18n/scientificnumberformatter.cpp"
  "./deps/icu-small/source/i18n/scriptset.cpp"
  "./deps/icu-small/source/i18n/search.cpp"
  "./deps/icu-small/source/i18n/selfmt.cpp"
  "./deps/icu-small/source/i18n/sharedbreakiterator.cpp"
  "./deps/icu-small/source/i18n/simpletz.cpp"
  "./deps/icu-small/source/i18n/smallintformatter.cpp"
  "./deps/icu-small/source/i18n/smpdtfmt.cpp"
  "./deps/icu-small/source/i18n/smpdtfst.cpp"
  "./deps/icu-small/source/i18n/sortkey.cpp"
  "./deps/icu-small/source/i18n/standardplural.cpp"
  "./deps/icu-small/source/i18n/strmatch.cpp"
  "./deps/icu-small/source/i18n/strrepl.cpp"
  "./deps/icu-small/source/i18n/stsearch.cpp"
  "./deps/icu-small/source/i18n/taiwncal.cpp"
  "./deps/icu-small/source/i18n/timezone.cpp"
  "./deps/icu-small/source/i18n/titletrn.cpp"
  "./deps/icu-small/source/i18n/tmunit.cpp"
  "./deps/icu-small/source/i18n/tmutamt.cpp"
  "./deps/icu-small/source/i18n/tmutfmt.cpp"
  "./deps/icu-small/source/i18n/tolowtrn.cpp"
  "./deps/icu-small/source/i18n/toupptrn.cpp"
  "./deps/icu-small/source/i18n/translit.cpp"
  "./deps/icu-small/source/i18n/transreg.cpp"
  "./deps/icu-small/source/i18n/tridpars.cpp"
  "./deps/icu-small/source/i18n/tzfmt.cpp"
  "./deps/icu-small/source/i18n/tzgnames.cpp"
  "./deps/icu-small/source/i18n/tznames.cpp"
  "./deps/icu-small/source/i18n/tznames_impl.cpp"
  "./deps/icu-small/source/i18n/tzrule.cpp"
  "./deps/icu-small/source/i18n/tztrans.cpp"
  "./deps/icu-small/source/i18n/ucal.cpp"
  "./deps/icu-small/source/i18n/ucln_in.cpp"
  "./deps/icu-small/source/i18n/ucol.cpp"
  "./deps/icu-small/source/i18n/ucol_res.cpp"
  "./deps/icu-small/source/i18n/ucol_sit.cpp"
  "./deps/icu-small/source/i18n/ucoleitr.cpp"
  "./deps/icu-small/source/i18n/ucsdet.cpp"
  "./deps/icu-small/source/i18n/udat.cpp"
  "./deps/icu-small/source/i18n/udateintervalformat.cpp"
  "./deps/icu-small/source/i18n/udatpg.cpp"
  "./deps/icu-small/source/i18n/ufieldpositer.cpp"
  "./deps/icu-small/source/i18n/uitercollationiterator.cpp"
  "./deps/icu-small/source/i18n/ulocdata.cpp"
  "./deps/icu-small/source/i18n/umsg.cpp"
  "./deps/icu-small/source/i18n/unesctrn.cpp"
  "./deps/icu-small/source/i18n/uni2name.cpp"
  "./deps/icu-small/source/i18n/unum.cpp"
  "./deps/icu-small/source/i18n/unumsys.cpp"
  "./deps/icu-small/source/i18n/upluralrules.cpp"
  "./deps/icu-small/source/i18n/uregex.cpp"
  "./deps/icu-small/source/i18n/uregexc.cpp"
  "./deps/icu-small/source/i18n/uregion.cpp"
  "./deps/icu-small/source/i18n/usearch.cpp"
  "./deps/icu-small/source/i18n/uspoof.cpp"
  "./deps/icu-small/source/i18n/uspoof_build.cpp"
  "./deps/icu-small/source/i18n/uspoof_conf.cpp"
  "./deps/icu-small/source/i18n/uspoof_impl.cpp"
  "./deps/icu-small/source/i18n/utf16collationiterator.cpp"
  "./deps/icu-small/source/i18n/utf8collationiterator.cpp"
  "./deps/icu-small/source/i18n/utmscale.cpp"
  "./deps/icu-small/source/i18n/utrans.cpp"
  "./deps/icu-small/source/i18n/valueformatter.cpp"
  "./deps/icu-small/source/i18n/visibledigits.cpp"
  "./deps/icu-small/source/i18n/vtzone.cpp"
  "./deps/icu-small/source/i18n/vzone.cpp"
  "./deps/icu-small/source/i18n/windtfmt.cpp"
  "./deps/icu-small/source/i18n/winnmfmt.cpp"
  "./deps/icu-small/source/i18n/wintzimpl.cpp"
  "./deps/icu-small/source/i18n/zonemeta.cpp"
  "./deps/icu-small/source/i18n/zrule.cpp"
  "./deps/icu-small/source/i18n/ztrans.cpp"
  "./deps/icu-small/source/stubdata/stubdata.cpp")
list(APPEND icutools_host__other_srcs
  "./deps/icu-small/source/tools/toolutil/collationinfo.h"
  "./deps/icu-small/source/tools/toolutil/denseranges.h"
  "./deps/icu-small/source/tools/toolutil/filestrm.h"
  "./deps/icu-small/source/tools/toolutil/filetools.h"
  "./deps/icu-small/source/tools/toolutil/flagparser.h"
  "./deps/icu-small/source/tools/toolutil/package.h"
  "./deps/icu-small/source/tools/toolutil/pkg_genc.h"
  "./deps/icu-small/source/tools/toolutil/pkg_gencmn.h"
  "./deps/icu-small/source/tools/toolutil/pkg_icu.h"
  "./deps/icu-small/source/tools/toolutil/pkg_imp.h"
  "./deps/icu-small/source/tools/toolutil/ppucd.h"
  "./deps/icu-small/source/tools/toolutil/swapimpl.h"
  "./deps/icu-small/source/tools/toolutil/toolutil.h"
  "./deps/icu-small/source/tools/toolutil/ucbuf.h"
  "./deps/icu-small/source/tools/toolutil/ucm.h"
  "./deps/icu-small/source/tools/toolutil/unewdata.h"
  "./deps/icu-small/source/tools/toolutil/uoptions.h"
  "./deps/icu-small/source/tools/toolutil/uparse.h"
  "./deps/icu-small/source/tools/toolutil/writesrc.h"
  "./deps/icu-small/source/tools/toolutil/xmlparser.h"
  "./deps/icu-small/source/common/bmpset.h"
  "./deps/icu-small/source/common/brkeng.h"
  "./deps/icu-small/source/common/charstr.h"
  "./deps/icu-small/source/common/cmemory.h"
  "./deps/icu-small/source/common/cpputils.h"
  "./deps/icu-small/source/common/cstr.h"
  "./deps/icu-small/source/common/cstring.h"
  "./deps/icu-small/source/common/cwchar.h"
  "./deps/icu-small/source/common/dictbe.h"
  "./deps/icu-small/source/common/dictionarydata.h"
  "./deps/icu-small/source/common/hash.h"
  "./deps/icu-small/source/common/icuplugimp.h"
  "./deps/icu-small/source/common/localsvc.h"
  "./deps/icu-small/source/common/locbased.h"
  "./deps/icu-small/source/common/locmap.h"
  "./deps/icu-small/source/common/locutil.h"
  "./deps/icu-small/source/common/messageimpl.h"
  "./deps/icu-small/source/common/msvcres.h"
  "./deps/icu-small/source/common/mutex.h"
  "./deps/icu-small/source/common/norm2_nfc_data.h"
  "./deps/icu-small/source/common/norm2allmodes.h"
  "./deps/icu-small/source/common/normalizer2impl.h"
  "./deps/icu-small/source/common/patternprops.h"
  "./deps/icu-small/source/common/pluralmap.h"
  "./deps/icu-small/source/common/propname.h"
  "./deps/icu-small/source/common/propname_data.h"
  "./deps/icu-small/source/common/propsvec.h"
  "./deps/icu-small/source/common/punycode.h"
  "./deps/icu-small/source/common/putilimp.h"
  "./deps/icu-small/source/common/rbbidata.h"
  "./deps/icu-small/source/common/rbbinode.h"
  "./deps/icu-small/source/common/rbbirb.h"
  "./deps/icu-small/source/common/rbbirpt.h"
  "./deps/icu-small/source/common/rbbiscan.h"
  "./deps/icu-small/source/common/rbbisetb.h"
  "./deps/icu-small/source/common/rbbitblb.h"
  "./deps/icu-small/source/common/resource.h"
  "./deps/icu-small/source/common/ruleiter.h"
  "./deps/icu-small/source/common/serv.h"
  "./deps/icu-small/source/common/servloc.h"
  "./deps/icu-small/source/common/servnotf.h"
  "./deps/icu-small/source/common/sharedobject.h"
  "./deps/icu-small/source/common/sprpimpl.h"
  "./deps/icu-small/source/common/uarrsort.h"
  "./deps/icu-small/source/common/uassert.h"
  "./deps/icu-small/source/common/ubidi_props.h"
  "./deps/icu-small/source/common/ubidi_props_data.h"
  "./deps/icu-small/source/common/ubidiimp.h"
  "./deps/icu-small/source/common/ubrkimpl.h"
  "./deps/icu-small/source/common/ucase.h"
  "./deps/icu-small/source/common/ucase_props_data.h"
  "./deps/icu-small/source/common/ucasemap_imp.h"
  "./deps/icu-small/source/common/uchar_props_data.h"
  "./deps/icu-small/source/common/ucln.h"
  "./deps/icu-small/source/common/ucln_cmn.h"
  "./deps/icu-small/source/common/ucln_imp.h"
  "./deps/icu-small/source/common/ucmndata.h"
  "./deps/icu-small/source/common/ucnv_bld.h"
  "./deps/icu-small/source/common/ucnv_cnv.h"
  "./deps/icu-small/source/common/ucnv_ext.h"
  "./deps/icu-small/source/common/ucnv_imp.h"
  "./deps/icu-small/source/common/ucnv_io.h"
  "./deps/icu-small/source/common/ucnvmbcs.h"
  "./deps/icu-small/source/common/ucol_data.h"
  "./deps/icu-small/source/common/ucol_swp.h"
  "./deps/icu-small/source/common/ucurrimp.h"
  "./deps/icu-small/source/common/udatamem.h"
  "./deps/icu-small/source/common/udataswp.h"
  "./deps/icu-small/source/common/uelement.h"
  "./deps/icu-small/source/common/uenumimp.h"
  "./deps/icu-small/source/common/uhash.h"
  "./deps/icu-small/source/common/uinvchar.h"
  "./deps/icu-small/source/common/ulist.h"
  "./deps/icu-small/source/common/ulocimp.h"
  "./deps/icu-small/source/common/umapfile.h"
  "./deps/icu-small/source/common/umutex.h"
  "./deps/icu-small/source/common/unifiedcache.h"
  "./deps/icu-small/source/common/unisetspan.h"
  "./deps/icu-small/source/common/unistrappender.h"
  "./deps/icu-small/source/common/unormimp.h"
  "./deps/icu-small/source/common/uposixdefs.h"
  "./deps/icu-small/source/common/uprops.h"
  "./deps/icu-small/source/common/uresdata.h"
  "./deps/icu-small/source/common/uresimp.h"
  "./deps/icu-small/source/common/ureslocs.h"
  "./deps/icu-small/source/common/usc_impl.h"
  "./deps/icu-small/source/common/uset_imp.h"
  "./deps/icu-small/source/common/ustr_cnv.h"
  "./deps/icu-small/source/common/ustr_imp.h"
  "./deps/icu-small/source/common/ustrenum.h"
  "./deps/icu-small/source/common/ustrfmt.h"
  "./deps/icu-small/source/common/util.h"
  "./deps/icu-small/source/common/utracimp.h"
  "./deps/icu-small/source/common/utrie.h"
  "./deps/icu-small/source/common/utrie2.h"
  "./deps/icu-small/source/common/utrie2_impl.h"
  "./deps/icu-small/source/common/utypeinfo.h"
  "./deps/icu-small/source/common/uvector.h"
  "./deps/icu-small/source/common/uvectr32.h"
  "./deps/icu-small/source/common/uvectr64.h"
  "./deps/icu-small/source/common/wintz.h"
  "./deps/icu-small/source/i18n/affixpatternparser.h"
  "./deps/icu-small/source/i18n/anytrans.h"
  "./deps/icu-small/source/i18n/astro.h"
  "./deps/icu-small/source/i18n/bocsu.h"
  "./deps/icu-small/source/i18n/brktrans.h"
  "./deps/icu-small/source/i18n/buddhcal.h"
  "./deps/icu-small/source/i18n/casetrn.h"
  "./deps/icu-small/source/i18n/cecal.h"
  "./deps/icu-small/source/i18n/chnsecal.h"
  "./deps/icu-small/source/i18n/collation.h"
  "./deps/icu-small/source/i18n/collationbuilder.h"
  "./deps/icu-small/source/i18n/collationcompare.h"
  "./deps/icu-small/source/i18n/collationdata.h"
  "./deps/icu-small/source/i18n/collationdatabuilder.h"
  "./deps/icu-small/source/i18n/collationdatareader.h"
  "./deps/icu-small/source/i18n/collationdatawriter.h"
  "./deps/icu-small/source/i18n/collationfastlatin.h"
  "./deps/icu-small/source/i18n/collationfastlatinbuilder.h"
  "./deps/icu-small/source/i18n/collationfcd.h"
  "./deps/icu-small/source/i18n/collationiterator.h"
  "./deps/icu-small/source/i18n/collationkeys.h"
  "./deps/icu-small/source/i18n/collationroot.h"
  "./deps/icu-small/source/i18n/collationrootelements.h"
  "./deps/icu-small/source/i18n/collationruleparser.h"
  "./deps/icu-small/source/i18n/collationsets.h"
  "./deps/icu-small/source/i18n/collationsettings.h"
  "./deps/icu-small/source/i18n/collationtailoring.h"
  "./deps/icu-small/source/i18n/collationweights.h"
  "./deps/icu-small/source/i18n/collunsafe.h"
  "./deps/icu-small/source/i18n/coptccal.h"
  "./deps/icu-small/source/i18n/cpdtrans.h"
  "./deps/icu-small/source/i18n/csdetect.h"
  "./deps/icu-small/source/i18n/csmatch.h"
  "./deps/icu-small/source/i18n/csr2022.h"
  "./deps/icu-small/source/i18n/csrecog.h"
  "./deps/icu-small/source/i18n/csrmbcs.h"
  "./deps/icu-small/source/i18n/csrsbcs.h"
  "./deps/icu-small/source/i18n/csrucode.h"
  "./deps/icu-small/source/i18n/csrutf8.h"
  "./deps/icu-small/source/i18n/currfmt.h"
  "./deps/icu-small/source/i18n/dangical.h"
  "./deps/icu-small/source/i18n/dayperiodrules.h"
  "./deps/icu-small/source/i18n/dcfmtimp.h"
  "./deps/icu-small/source/i18n/decContext.h"
  "./deps/icu-small/source/i18n/decfmtst.h"
  "./deps/icu-small/source/i18n/decimalformatpattern.h"
  "./deps/icu-small/source/i18n/decimalformatpatternimpl.h"
  "./deps/icu-small/source/i18n/decimfmtimpl.h"
  "./deps/icu-small/source/i18n/decNumber.h"
  "./deps/icu-small/source/i18n/decNumberLocal.h"
  "./deps/icu-small/source/i18n/digitaffix.h"
  "./deps/icu-small/source/i18n/digitaffixesandpadding.h"
  "./deps/icu-small/source/i18n/digitformatter.h"
  "./deps/icu-small/source/i18n/digitgrouping.h"
  "./deps/icu-small/source/i18n/digitinterval.h"
  "./deps/icu-small/source/i18n/digitlst.h"
  "./deps/icu-small/source/i18n/dt_impl.h"
  "./deps/icu-small/source/i18n/dtitv_impl.h"
  "./deps/icu-small/source/i18n/dtptngen_impl.h"
  "./deps/icu-small/source/i18n/esctrn.h"
  "./deps/icu-small/source/i18n/ethpccal.h"
  "./deps/icu-small/source/i18n/fmtableimp.h"
  "./deps/icu-small/source/i18n/fphdlimp.h"
  "./deps/icu-small/source/i18n/funcrepl.h"
  "./deps/icu-small/source/i18n/gregoimp.h"
  "./deps/icu-small/source/i18n/hebrwcal.h"
  "./deps/icu-small/source/i18n/indiancal.h"
  "./deps/icu-small/source/i18n/inputext.h"
  "./deps/icu-small/source/i18n/islamcal.h"
  "./deps/icu-small/source/i18n/japancal.h"
  "./deps/icu-small/source/i18n/msgfmt_impl.h"
  "./deps/icu-small/source/i18n/name2uni.h"
  "./deps/icu-small/source/i18n/nfrlist.h"
  "./deps/icu-small/source/i18n/nfrs.h"
  "./deps/icu-small/source/i18n/nfrule.h"
  "./deps/icu-small/source/i18n/nfsubs.h"
  "./deps/icu-small/source/i18n/nortrans.h"
  "./deps/icu-small/source/i18n/nultrans.h"
  "./deps/icu-small/source/i18n/numsys_impl.h"
  "./deps/icu-small/source/i18n/olsontz.h"
  "./deps/icu-small/source/i18n/persncal.h"
  "./deps/icu-small/source/i18n/pluralaffix.h"
  "./deps/icu-small/source/i18n/plurrule_impl.h"
  "./deps/icu-small/source/i18n/precision.h"
  "./deps/icu-small/source/i18n/quant.h"
  "./deps/icu-small/source/i18n/quantityformatter.h"
  "./deps/icu-small/source/i18n/rbt.h"
  "./deps/icu-small/source/i18n/rbt_data.h"
  "./deps/icu-small/source/i18n/rbt_pars.h"
  "./deps/icu-small/source/i18n/rbt_rule.h"
  "./deps/icu-small/source/i18n/rbt_set.h"
  "./deps/icu-small/source/i18n/regexcmp.h"
  "./deps/icu-small/source/i18n/regexcst.h"
  "./deps/icu-small/source/i18n/regeximp.h"
  "./deps/icu-small/source/i18n/regexst.h"
  "./deps/icu-small/source/i18n/regextxt.h"
  "./deps/icu-small/source/i18n/region_impl.h"
  "./deps/icu-small/source/i18n/reldtfmt.h"
  "./deps/icu-small/source/i18n/remtrans.h"
  "./deps/icu-small/source/i18n/scriptset.h"
  "./deps/icu-small/source/i18n/selfmtimpl.h"
  "./deps/icu-small/source/i18n/sharedbreakiterator.h"
  "./deps/icu-small/source/i18n/sharedcalendar.h"
  "./deps/icu-small/source/i18n/shareddateformatsymbols.h"
  "./deps/icu-small/source/i18n/sharednumberformat.h"
  "./deps/icu-small/source/i18n/sharedpluralrules.h"
  "./deps/icu-small/source/i18n/significantdigitinterval.h"
  "./deps/icu-small/source/i18n/smallintformatter.h"
  "./deps/icu-small/source/i18n/smpdtfst.h"
  "./deps/icu-small/source/i18n/standardplural.h"
  "./deps/icu-small/source/i18n/strmatch.h"
  "./deps/icu-small/source/i18n/strrepl.h"
  "./deps/icu-small/source/i18n/taiwncal.h"
  "./deps/icu-small/source/i18n/titletrn.h"
  "./deps/icu-small/source/i18n/tolowtrn.h"
  "./deps/icu-small/source/i18n/toupptrn.h"
  "./deps/icu-small/source/i18n/transreg.h"
  "./deps/icu-small/source/i18n/tridpars.h"
  "./deps/icu-small/source/i18n/tzgnames.h"
  "./deps/icu-small/source/i18n/tznames_impl.h"
  "./deps/icu-small/source/i18n/ucln_in.h"
  "./deps/icu-small/source/i18n/ucol_imp.h"
  "./deps/icu-small/source/i18n/uitercollationiterator.h"
  "./deps/icu-small/source/i18n/umsg_imp.h"
  "./deps/icu-small/source/i18n/unesctrn.h"
  "./deps/icu-small/source/i18n/uni2name.h"
  "./deps/icu-small/source/i18n/uspoof_conf.h"
  "./deps/icu-small/source/i18n/uspoof_impl.h"
  "./deps/icu-small/source/i18n/usrchimp.h"
  "./deps/icu-small/source/i18n/utf16collationiterator.h"
  "./deps/icu-small/source/i18n/utf8collationiterator.h"
  "./deps/icu-small/source/i18n/valueformatter.h"
  "./deps/icu-small/source/i18n/visibledigits.h"
  "./deps/icu-small/source/i18n/vzone.h"
  "./deps/icu-small/source/i18n/windtfmt.h"
  "./deps/icu-small/source/i18n/winnmfmt.h"
  "./deps/icu-small/source/i18n/wintzimpl.h"
  "./deps/icu-small/source/i18n/zonemeta.h"
  "./deps/icu-small/source/i18n/zrule.h"
  "./deps/icu-small/source/i18n/ztrans.h")
add_library(icutools_host STATIC ${icutools_host__cxx_srcs} ${icutools_host__other_srcs})
set_target_properties(icutools_host PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${icutools_host__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(icutools_host PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/tools/icu")
set_target_properties(icutools_host PROPERTIES PREFIX "lib")
set_target_properties(icutools_host PROPERTIES ARCHIVE_OUTPUT_NAME "icutools")
set_target_properties(icutools_host PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/tools/icu/libicutools.a PROPERTIES GENERATED "TRUE")
list(APPEND icutools_host__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/io"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/tools/toolutil")
set_property(TARGET icutools_host APPEND PROPERTY INCLUDE_DIRECTORIES ${icutools_host__include_dirs})
set_target_properties(icutools_host PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;U_COMMON_IMPLEMENTATION=1;U_I18N_IMPLEMENTATION=1;U_IO_IMPLEMENTATION=1;U_TOOLUTIL_IMPLEMENTATION=1;U_ATTRIBUTE_DEPRECATED=;_CRT_SECURE_NO_DEPRECATE=;U_STATIC_IMPLEMENTATION=1;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(icutools_host PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "YES")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(icutools_host PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(icutools_host
  icu_implementation_host
  icu_uconfig_host
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icuuc#host
set(TARGET "icuuc")
set(TOOLSET "host")
add_custom_target(icuuc_host SOURCES)
set_target_properties(icuuc_host PROPERTIES EXCLUDE_FROM_ALL "TRUE")
add_dependencies(icuuc_host
  icutools_host
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icupkg#host
set(TARGET "icupkg")
set(TOOLSET "host")
list(APPEND icupkg_host__cxx_srcs
  "./deps/icu-small/source/tools/icupkg/icupkg.cpp"
  "./tools/icu/no-op.cc")
add_executable(icupkg_host ${icupkg_host__cxx_srcs})
set_target_properties(icupkg_host PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(icupkg_host PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(icupkg_host PROPERTIES PREFIX "")
set_target_properties(icupkg_host PROPERTIES RUNTIME_OUTPUT_NAME "icupkg")
set_target_properties(icupkg_host PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/icupkg PROPERTIES GENERATED "TRUE")
list(APPEND icupkg_host__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/io"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/tools/toolutil")
set_property(TARGET icupkg_host APPEND PROPERTY INCLUDE_DIRECTORIES ${icupkg_host__include_dirs})
set_target_properties(icupkg_host PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_STATIC_IMPLEMENTATION=1;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(icupkg_host PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(icupkg_host PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(icupkg_host
  icu_implementation_host
  icu_uconfig_host
)
target_link_libraries(icupkg_host
  icutools_host
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:iculslocs#host
set(TARGET "iculslocs")
set(TOOLSET "host")
list(APPEND iculslocs_host__cxx_srcs
  "./tools/icu/iculslocs.cc"
  "./tools/icu/no-op.cc")
add_executable(iculslocs_host ${iculslocs_host__cxx_srcs})
set_target_properties(iculslocs_host PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(iculslocs_host PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(iculslocs_host PROPERTIES PREFIX "")
set_target_properties(iculslocs_host PROPERTIES RUNTIME_OUTPUT_NAME "iculslocs")
set_target_properties(iculslocs_host PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/iculslocs PROPERTIES GENERATED "TRUE")
list(APPEND iculslocs_host__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/io"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/tools/toolutil")
set_property(TARGET iculslocs_host APPEND PROPERTY INCLUDE_DIRECTORIES ${iculslocs_host__include_dirs})
set_target_properties(iculslocs_host PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_STATIC_IMPLEMENTATION=1;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(iculslocs_host PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(iculslocs_host PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(iculslocs_host
  icu_implementation_host
  icu_uconfig_host
)
target_link_libraries(iculslocs_host
  icutools_host
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icui18n#host
set(TARGET "icui18n")
set(TOOLSET "host")
add_custom_target(icui18n_host SOURCES)
set_target_properties(icui18n_host PROPERTIES EXCLUDE_FROM_ALL "TRUE")
add_dependencies(icui18n_host
  icutools_host
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:genrb#host
set(TARGET "genrb")
set(TOOLSET "host")
list(APPEND genrb_host__c_srcs
  "./deps/icu-small/source/tools/genrb/errmsg.c"
  "./deps/icu-small/source/tools/genrb/rbutil.c"
  "./deps/icu-small/source/tools/genrb/read.c"
  "./deps/icu-small/source/tools/genrb/rle.c"
  "./deps/icu-small/source/tools/genrb/ustr.c")
list(APPEND genrb_host__cxx_srcs
  "./deps/icu-small/source/tools/genrb/genrb.cpp"
  "./deps/icu-small/source/tools/genrb/parse.cpp"
  "./deps/icu-small/source/tools/genrb/prscmnts.cpp"
  "./deps/icu-small/source/tools/genrb/reslist.cpp"
  "./deps/icu-small/source/tools/genrb/wrtjava.cpp"
  "./deps/icu-small/source/tools/genrb/wrtxml.cpp")
list(APPEND genrb_host__other_srcs
  "./deps/icu-small/source/tools/genrb/errmsg.h"
  "./deps/icu-small/source/tools/genrb/genrb.h"
  "./deps/icu-small/source/tools/genrb/parse.h"
  "./deps/icu-small/source/tools/genrb/prscmnts.h"
  "./deps/icu-small/source/tools/genrb/rbutil.h"
  "./deps/icu-small/source/tools/genrb/read.h"
  "./deps/icu-small/source/tools/genrb/reslist.h"
  "./deps/icu-small/source/tools/genrb/rle.h"
  "./deps/icu-small/source/tools/genrb/ustr.h")
add_executable(genrb_host ${genrb_host__c_srcs} ${genrb_host__cxx_srcs} ${genrb_host__other_srcs})
set_target_properties(genrb_host PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${genrb_host__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(genrb_host PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(genrb_host PROPERTIES PREFIX "")
set_target_properties(genrb_host PROPERTIES RUNTIME_OUTPUT_NAME "genrb")
set_target_properties(genrb_host PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/genrb PROPERTIES GENERATED "TRUE")
list(APPEND genrb_host__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/io"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/tools/toolutil")
set_property(TARGET genrb_host APPEND PROPERTY INCLUDE_DIRECTORIES ${genrb_host__include_dirs})
set_target_properties(genrb_host PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_STATIC_IMPLEMENTATION=1;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_source_files_properties(${genrb_host__c_srcs} PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_source_files_properties(${genrb_host__cxx_srcs} PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(genrb_host PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(genrb_host
  icu_implementation_host
  icu_uconfig_host
)
target_link_libraries(genrb_host
  icutools_host
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:genccode#host
set(TARGET "genccode")
set(TOOLSET "host")
set(genccode_host__c_srcs "./deps/icu-small/source/tools/genccode/genccode.c")
set(genccode_host__cxx_srcs "./tools/icu/no-op.cc")
add_executable(genccode_host ${genccode_host__c_srcs} ${genccode_host__cxx_srcs})
set_target_properties(genccode_host PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(genccode_host PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(genccode_host PROPERTIES PREFIX "")
set_target_properties(genccode_host PROPERTIES RUNTIME_OUTPUT_NAME "genccode")
set_target_properties(genccode_host PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/genccode PROPERTIES GENERATED "TRUE")
list(APPEND genccode_host__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/io"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/tools/toolutil")
set_property(TARGET genccode_host APPEND PROPERTY INCLUDE_DIRECTORIES ${genccode_host__include_dirs})
set_target_properties(genccode_host PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_STATIC_IMPLEMENTATION=1;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_source_files_properties(${genccode_host__c_srcs} PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_source_files_properties(${genccode_host__cxx_srcs} PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(genccode_host PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(genccode_host
  icu_implementation_host
  icu_uconfig_host
)
target_link_libraries(genccode_host
  icutools_host
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icudata#target
set(TARGET "icudata")
set(TOOLSET "target")
list(APPEND icudata__icutrim__input
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/data/in/icudt59l.dat"
  "${CMAKE_CURRENT_LIST_DIR}/tools/icu/icu_small.json")
set(icudata__icutrim__output "${obj}/gen/icutmp/icudt59l.dat")
add_custom_command(OUTPUT ${icudata__icutrim__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen/icutmp
  COMMAND python icutrim.py -P "${builddir}" -D ${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/data/in/icudt59l.dat --delete-tmp -T "${obj}/gen/icutmp" -F icu_small.json -O icudt59l.dat -v -L en,root
  DEPENDS ${icudata__icutrim__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/tools/icu
  COMMENT icudata__icutrim
  VERBATIM
)
add_custom_target(icudata__icutrim
  DEPENDS ${icudata__icutrim__output}
  SOURCES ${icudata__icutrim__input}
)
set(icudata__rename__input "${obj}/gen/icutmp/icudt59l.dat")
set(icudata__rename__output "${obj}/gen/icutmp/icusmdt59.dat")
add_custom_command(OUTPUT ${icudata__rename__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen/icutmp
  COMMAND cp "${obj}/gen/icutmp/icudt59l.dat" "${obj}/gen/icutmp/icusmdt59.dat"
  DEPENDS ${icudata__rename__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/tools/icu
  COMMENT icudata__rename
  VERBATIM
)
add_custom_target(icudata__rename
  DEPENDS ${icudata__rename__output}
  SOURCES ${icudata__rename__input}
)
set(icudata__genccode__input "${obj}/gen/icutmp/icusmdt59.dat")
set(icudata__genccode__output "${obj}/gen/icusmdt59_dat.c")
add_custom_command(OUTPUT ${icudata__genccode__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND "${builddir}/genccode" -d "${obj}/gen" "${obj}/gen/icutmp/icusmdt59.dat"
  DEPENDS ${icudata__genccode__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/tools/icu
  COMMENT icudata__genccode
  VERBATIM
)
add_custom_target(icudata__genccode
  DEPENDS ${icudata__genccode__output}
  SOURCES ${icudata__genccode__input}
)
set(icudata__c_srcs "${obj}/gen/icusmdt59_dat.c")
add_library(icudata STATIC ${icudata__c_srcs})
set_target_properties(icudata PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(icudata__icutrim PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(icudata__rename PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(icudata__genccode PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(icudata PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/tools/icu")
set_target_properties(icudata PROPERTIES PREFIX "lib")
set_target_properties(icudata PROPERTIES ARCHIVE_OUTPUT_NAME "icudata")
set_target_properties(icudata PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/tools/icu/libicudata.a PROPERTIES GENERATED "TRUE")
set(icudata__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common")
set_property(TARGET icudata APPEND PROPERTY INCLUDE_DIRECTORIES ${icudata__include_dirs})
set_target_properties(icudata PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;U_ATTRIBUTE_DEPRECATED=;_CRT_SECURE_NO_DEPRECATE=;U_STATIC_IMPLEMENTATION=1;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(icudata PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "YES")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(icudata PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(icudata__icutrim
  genccode_host
  icupkg_host
  genrb_host
  iculslocs_host
  icu_implementation
  icu_uconfig
)
add_dependencies(icudata__rename
  genccode_host
  icupkg_host
  genrb_host
  iculslocs_host
  icu_implementation
  icu_uconfig
)
add_dependencies(icudata__genccode
  genccode_host
  icupkg_host
  genrb_host
  iculslocs_host
  icu_implementation
  icu_uconfig
)
add_dependencies(icudata
  genccode_host
  icupkg_host
  genrb_host
  iculslocs_host
  icu_implementation
  icu_uconfig
  icudata__icutrim
  icudata__rename
  icudata__genccode
)
unset(TOOLSET)
unset(TARGET)

#/tools/icu/icu-generic.gyp:icuuc#target
set(TARGET "icuuc")
set(TOOLSET "target")
add_custom_target(icuuc SOURCES)
set_target_properties(icuuc PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(icuuc
  icuucx
  icudata
)
unset(TOOLSET)
unset(TARGET)

#/node.gyp:v8_inspector_compress_protocol_json#host
set(TARGET "v8_inspector_compress_protocol_json")
set(TOOLSET "host")
set(v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json__input "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector/js_protocol.json")
set(v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json__output "${obj}/gen/v8_inspector_protocol_json.h")
add_custom_command(OUTPUT ${v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND python tools/compress_json.py deps/v8/src/inspector/js_protocol.json "${obj}/gen/v8_inspector_protocol_json.h"
  DEPENDS ${v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/
  COMMENT v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json
  VERBATIM
)
add_custom_target(v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json
  DEPENDS ${v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json__output}
  SOURCES ${v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json__input}
)
set(v8_inspector_compress_protocol_json_host__other_srcs "${obj}/gen/v8_inspector_protocol_json.h")
add_custom_target(v8_inspector_compress_protocol_json_host SOURCES ${v8_inspector_compress_protocol_json_host__other_srcs})
set_target_properties(v8_inspector_compress_protocol_json_host PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(v8_inspector_compress_protocol_json_host
  v8_inspector_compress_protocol_json_host__v8_inspector_compress_protocol_json
)
unset(TOOLSET)
unset(TARGET)

#/node.gyp:specialize_node_d#target
set(TARGET "specialize_node_d")
set(TOOLSET "target")
set(specialize_node_d__specialize_node_d__input "${CMAKE_CURRENT_LIST_DIR}/src/node.d")
set(specialize_node_d__specialize_node_d__output "${builddir}/node.d")
add_custom_command(OUTPUT ${specialize_node_d__specialize_node_d__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${builddir}
  COMMAND tools/specialize_node_d.py "${builddir}/node.d" src/node.d mac x64
  DEPENDS ${specialize_node_d__specialize_node_d__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/
  COMMENT specialize_node_d__specialize_node_d
  VERBATIM
)
add_custom_target(specialize_node_d__specialize_node_d
  DEPENDS ${specialize_node_d__specialize_node_d__output}
  SOURCES ${specialize_node_d__specialize_node_d__input}
)
add_custom_target(specialize_node_d SOURCES)
set_target_properties(specialize_node_d PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(specialize_node_d__specialize_node_d PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(specialize_node_d
  specialize_node_d__specialize_node_d
)
unset(TOOLSET)
unset(TARGET)

#/node.gyp:node_perfctr#target
set(TARGET "node_perfctr")
set(TOOLSET "target")
add_custom_target(node_perfctr SOURCES)
set_target_properties(node_perfctr PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/node.gyp:node_js2c#host
set(TARGET "node_js2c")
set(TOOLSET "host")
list(APPEND node_js2c_host__node_js2c__input
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/bootstrap_node.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/async_hooks.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/assert.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/buffer.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/child_process.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/console.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/constants.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/crypto.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/cluster.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/dgram.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/dns.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/domain.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/events.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/fs.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/http.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_http_agent.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_http_client.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_http_common.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_http_incoming.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_http_outgoing.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_http_server.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/https.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/inspector.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/module.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/net.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/os.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/path.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/process.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/punycode.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/querystring.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/readline.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/repl.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/stream.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_stream_readable.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_stream_writable.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_stream_duplex.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_stream_transform.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_stream_passthrough.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_stream_wrap.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/string_decoder.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/sys.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/timers.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/tls.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_tls_common.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_tls_legacy.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/_tls_wrap.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/tty.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/url.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/util.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/v8.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/vm.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/zlib.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/buffer.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/child_process.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/cluster/child.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/cluster/master.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/cluster/round_robin_handle.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/cluster/shared_handle.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/cluster/utils.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/cluster/worker.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/errors.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/freelist.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/fs.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/http.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/linkedlist.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/net.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/module.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/process/next_tick.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/process/promises.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/process/stdio.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/process/warning.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/process.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/querystring.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/process/write-coverage.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/readline.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/repl.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/socket_list.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/test/unicode.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/url.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/util.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/v8_prof_polyfill.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/v8_prof_processor.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/streams/lazy_transform.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/streams/BufferList.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/streams/legacy.js"
  "${CMAKE_CURRENT_LIST_DIR}/lib/internal/streams/destroy.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/splaytree.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/codemap.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/consarray.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/csvparser.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/profile.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/profile_view.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/logreader.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/tickprocessor.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/SourceMap.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/tickprocessor-driver.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/node-inspect/lib/_inspect.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/node-inspect/lib/internal/inspect_client.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/node-inspect/lib/internal/inspect_repl.js"
  "${CMAKE_CURRENT_LIST_DIR}/config.gypi"
  "${CMAKE_CURRENT_LIST_DIR}/src/nolttng_macros.py"
  "${CMAKE_CURRENT_LIST_DIR}/src/perfctr_macros.py")
set(node_js2c_host__node_js2c__output "${obj}/gen/node_javascript.cc")
add_custom_command(OUTPUT ${node_js2c_host__node_js2c__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND python tools/js2c.py "${obj}/gen/node_javascript.cc" lib/internal/bootstrap_node.js lib/async_hooks.js lib/assert.js lib/buffer.js lib/child_process.js lib/console.js lib/constants.js lib/crypto.js lib/cluster.js lib/dgram.js lib/dns.js lib/domain.js lib/events.js lib/fs.js lib/http.js lib/_http_agent.js lib/_http_client.js lib/_http_common.js lib/_http_incoming.js lib/_http_outgoing.js lib/_http_server.js lib/https.js lib/inspector.js lib/module.js lib/net.js lib/os.js lib/path.js lib/process.js lib/punycode.js lib/querystring.js lib/readline.js lib/repl.js lib/stream.js lib/_stream_readable.js lib/_stream_writable.js lib/_stream_duplex.js lib/_stream_transform.js lib/_stream_passthrough.js lib/_stream_wrap.js lib/string_decoder.js lib/sys.js lib/timers.js lib/tls.js lib/_tls_common.js lib/_tls_legacy.js lib/_tls_wrap.js lib/tty.js lib/url.js lib/util.js lib/v8.js lib/vm.js lib/zlib.js lib/internal/buffer.js lib/internal/child_process.js lib/internal/cluster/child.js lib/internal/cluster/master.js lib/internal/cluster/round_robin_handle.js lib/internal/cluster/shared_handle.js lib/internal/cluster/utils.js lib/internal/cluster/worker.js lib/internal/errors.js lib/internal/freelist.js lib/internal/fs.js lib/internal/http.js lib/internal/linkedlist.js lib/internal/net.js lib/internal/module.js lib/internal/process/next_tick.js lib/internal/process/promises.js lib/internal/process/stdio.js lib/internal/process/warning.js lib/internal/process.js lib/internal/querystring.js lib/internal/process/write-coverage.js lib/internal/readline.js lib/internal/repl.js lib/internal/socket_list.js lib/internal/test/unicode.js lib/internal/url.js lib/internal/util.js lib/internal/v8_prof_polyfill.js lib/internal/v8_prof_processor.js lib/internal/streams/lazy_transform.js lib/internal/streams/BufferList.js lib/internal/streams/legacy.js lib/internal/streams/destroy.js deps/v8/tools/splaytree.js deps/v8/tools/codemap.js deps/v8/tools/consarray.js deps/v8/tools/csvparser.js deps/v8/tools/profile.js deps/v8/tools/profile_view.js deps/v8/tools/logreader.js deps/v8/tools/tickprocessor.js deps/v8/tools/SourceMap.js deps/v8/tools/tickprocessor-driver.js deps/node-inspect/lib/_inspect.js deps/node-inspect/lib/internal/inspect_client.js deps/node-inspect/lib/internal/inspect_repl.js ./config.gypi src/nolttng_macros.py src/perfctr_macros.py
  DEPENDS ${node_js2c_host__node_js2c__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/
  COMMENT node_js2c_host__node_js2c
  VERBATIM
)
add_custom_target(node_js2c_host__node_js2c
  DEPENDS ${node_js2c_host__node_js2c__output}
  SOURCES ${node_js2c_host__node_js2c__input}
)
set(node_js2c_host__cxx_srcs "${obj}/gen/node_javascript.cc")
add_custom_target(node_js2c_host SOURCES ${node_js2c_host__cxx_srcs})
set_target_properties(node_js2c_host PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(node_js2c_host__node_js2c PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(node_js2c_host
  node_js2c_host__node_js2c
)
unset(TOOLSET)
unset(TARGET)

#/node.gyp:node_etw#target
set(TARGET "node_etw")
set(TOOLSET "target")
add_custom_target(node_etw SOURCES)
set_target_properties(node_etw PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/node.gyp:node_dtrace_ustack#target
set(TARGET "node_dtrace_ustack")
set(TOOLSET "target")
add_custom_target(node_dtrace_ustack SOURCES)
set_target_properties(node_dtrace_ustack PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/node.gyp:node_dtrace_provider#target
set(TARGET "node_dtrace_provider")
set(TOOLSET "target")
add_custom_target(node_dtrace_provider SOURCES)
set_target_properties(node_dtrace_provider PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/node.gyp:node_dtrace_header#target
set(TARGET "node_dtrace_header")
set(TOOLSET "target")
set(node_dtrace_header__node_dtrace_header__input "${CMAKE_CURRENT_LIST_DIR}/src/node_provider.d")
set(node_dtrace_header__node_dtrace_header__output "${obj}/gen/node_provider.h")
add_custom_command(OUTPUT ${node_dtrace_header__node_dtrace_header__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND dtrace -h -xnolibs -s src/node_provider.d -o "${obj}/gen/node_provider.h"
  DEPENDS ${node_dtrace_header__node_dtrace_header__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/
  COMMENT node_dtrace_header__node_dtrace_header
  VERBATIM
)
add_custom_target(node_dtrace_header__node_dtrace_header
  DEPENDS ${node_dtrace_header__node_dtrace_header__output}
  SOURCES ${node_dtrace_header__node_dtrace_header__input}
)
add_custom_target(node_dtrace_header SOURCES)
set_target_properties(node_dtrace_header PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(node_dtrace_header__node_dtrace_header PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(node_dtrace_header
  node_dtrace_header__node_dtrace_header
)
unset(TOOLSET)
unset(TARGET)

#/node.gyp:mkssldef#target
set(TARGET "mkssldef")
set(TOOLSET "target")
add_custom_target(mkssldef SOURCES)
set_target_properties(mkssldef PROPERTIES EXCLUDE_FROM_ALL "FALSE")
unset(TOOLSET)
unset(TARGET)

#/deps/zlib/zlib.gyp:zlib#target
set(TARGET "zlib")
set(TOOLSET "target")
list(APPEND zlib__c_srcs
  "./deps/zlib/adler32.c"
  "./deps/zlib/compress.c"
  "./deps/zlib/crc32.c"
  "./deps/zlib/deflate.c"
  "./deps/zlib/gzclose.c"
  "./deps/zlib/gzlib.c"
  "./deps/zlib/gzread.c"
  "./deps/zlib/gzwrite.c"
  "./deps/zlib/infback.c"
  "./deps/zlib/inffast.c"
  "./deps/zlib/inflate.c"
  "./deps/zlib/inftrees.c"
  "./deps/zlib/trees.c"
  "./deps/zlib/uncompr.c"
  "./deps/zlib/zutil.c")
list(APPEND zlib__other_srcs
  "./deps/zlib/crc32.h"
  "./deps/zlib/deflate.h"
  "./deps/zlib/gzguts.h"
  "./deps/zlib/inffast.h"
  "./deps/zlib/inffixed.h"
  "./deps/zlib/inflate.h"
  "./deps/zlib/inftrees.h"
  "./deps/zlib/trees.h"
  "./deps/zlib/zconf.h"
  "./deps/zlib/zlib.h"
  "./deps/zlib/zutil.h")
add_library(zlib STATIC ${zlib__c_srcs} ${zlib__other_srcs})
set_target_properties(zlib PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${zlib__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(zlib PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/zlib")
set_target_properties(zlib PROPERTIES PREFIX "lib")
set_target_properties(zlib PROPERTIES ARCHIVE_OUTPUT_NAME "zlib")
set_target_properties(zlib PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/zlib/libzlib.a PROPERTIES GENERATED "TRUE")
set(zlib__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/zlib")
set_property(TARGET zlib APPEND PROPERTY INCLUDE_DIRECTORIES ${zlib__include_dirs})
set_target_properties(zlib PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;Z_HAVE_UNISTD_H;HAVE_HIDDEN;USE_FILE32API;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(zlib PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(zlib PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:v8_libbase#target
set(TARGET "v8_libbase")
set(TOOLSET "target")
list(APPEND v8_libbase__cxx_srcs
  "./deps/v8/src/base/bits.cc"
  "./deps/v8/src/base/cpu.cc"
  "./deps/v8/src/base/division-by-constant.cc"
  "./deps/v8/src/base/debug/stack_trace.cc"
  "./deps/v8/src/base/file-utils.cc"
  "./deps/v8/src/base/functional.cc"
  "./deps/v8/src/base/ieee754.cc"
  "./deps/v8/src/base/logging.cc"
  "./deps/v8/src/base/once.cc"
  "./deps/v8/src/base/platform/time.cc"
  "./deps/v8/src/base/platform/condition-variable.cc"
  "./deps/v8/src/base/platform/mutex.cc"
  "./deps/v8/src/base/platform/semaphore.cc"
  "./deps/v8/src/base/sys-info.cc"
  "./deps/v8/src/base/utils/random-number-generator.cc"
  "./deps/v8/src/base/debug/stack_trace_posix.cc"
  "./deps/v8/src/base/platform/platform-macos.cc"
  "./deps/v8/src/base/platform/platform-posix.cc")
list(APPEND v8_libbase__other_srcs
  "./deps/v8/src/base/adapters.h"
  "./deps/v8/src/base/atomic-utils.h"
  "./deps/v8/src/base/atomicops.h"
  "./deps/v8/src/base/atomicops_internals_atomicword_compat.h"
  "./deps/v8/src/base/atomicops_internals_portable.h"
  "./deps/v8/src/base/atomicops_internals_x86_msvc.h"
  "./deps/v8/src/base/base-export.h"
  "./deps/v8/src/base/bits.h"
  "./deps/v8/src/base/build_config.h"
  "./deps/v8/src/base/compiler-specific.h"
  "./deps/v8/src/base/cpu.h"
  "./deps/v8/src/base/division-by-constant.h"
  "./deps/v8/src/base/debug/stack_trace.h"
  "./deps/v8/src/base/file-utils.h"
  "./deps/v8/src/base/flags.h"
  "./deps/v8/src/base/format-macros.h"
  "./deps/v8/src/base/free_deleter.h"
  "./deps/v8/src/base/functional.h"
  "./deps/v8/src/base/hashmap.h"
  "./deps/v8/src/base/hashmap-entry.h"
  "./deps/v8/src/base/ieee754.h"
  "./deps/v8/src/base/iterator.h"
  "./deps/v8/src/base/lazy-instance.h"
  "./deps/v8/src/base/logging.h"
  "./deps/v8/src/base/macros.h"
  "./deps/v8/src/base/once.h"
  "./deps/v8/src/base/platform/elapsed-timer.h"
  "./deps/v8/src/base/platform/time.h"
  "./deps/v8/src/base/platform/condition-variable.h"
  "./deps/v8/src/base/platform/mutex.h"
  "./deps/v8/src/base/platform/platform.h"
  "./deps/v8/src/base/platform/semaphore.h"
  "./deps/v8/src/base/ring-buffer.h"
  "./deps/v8/src/base/safe_conversions.h"
  "./deps/v8/src/base/safe_conversions_impl.h"
  "./deps/v8/src/base/safe_math.h"
  "./deps/v8/src/base/safe_math_impl.h"
  "./deps/v8/src/base/sys-info.h"
  "./deps/v8/src/base/timezone-cache.h"
  "./deps/v8/src/base/utils/random-number-generator.h"
  "./deps/v8/src/base/platform/platform-posix.h")
add_library(v8_libbase STATIC ${v8_libbase__cxx_srcs} ${v8_libbase__other_srcs})
set_target_properties(v8_libbase PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${v8_libbase__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(v8_libbase PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/v8/src")
set_target_properties(v8_libbase PROPERTIES PREFIX "lib")
set_target_properties(v8_libbase PROPERTIES ARCHIVE_OUTPUT_NAME "v8_libbase")
set_target_properties(v8_libbase PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/v8/src/libv8_libbase.a PROPERTIES GENERATED "TRUE")
set(v8_libbase__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/v8")
set_property(TARGET v8_libbase APPEND PROPERTY INCLUDE_DIRECTORIES ${v8_libbase__include_dirs})
set_target_properties(v8_libbase PROPERTIES COMPILE_DEFINITIONS "V8_GYP_BUILD;_DARWIN_USE_64_BIT_INODE=1;V8_TARGET_ARCH_X64;ENABLE_DISASSEMBLER;V8_PROMISE_INTERNAL_FIELD_COUNT;v8_promise_internal_field_count;V8_I18N_SUPPORT;V8_ENABLE_CHECKS;OBJECT_PRINT;VERIFY_HEAP;DEBUG;TRACE_MAPS;ENABLE_HANDLE_ZAPPING;ENABLE_SLOW_DCHECKS;_DEBUG;")
set_target_properties(v8_libbase PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(v8_libbase PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:v8_libsampler#target
set(TARGET "v8_libsampler")
set(TOOLSET "target")
set(v8_libsampler__cxx_srcs "./deps/v8/src/libsampler/sampler.cc")
set(v8_libsampler__other_srcs "./deps/v8/src/libsampler/sampler.h")
add_library(v8_libsampler STATIC ${v8_libsampler__cxx_srcs} ${v8_libsampler__other_srcs})
set_target_properties(v8_libsampler PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${v8_libsampler__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(v8_libsampler PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/v8/src")
set_target_properties(v8_libsampler PROPERTIES PREFIX "lib")
set_target_properties(v8_libsampler PROPERTIES ARCHIVE_OUTPUT_NAME "v8_libsampler")
set_target_properties(v8_libsampler PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/v8/src/libv8_libsampler.a PROPERTIES GENERATED "TRUE")
list(APPEND v8_libsampler__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/include")
set_property(TARGET v8_libsampler APPEND PROPERTY INCLUDE_DIRECTORIES ${v8_libsampler__include_dirs})
set_target_properties(v8_libsampler PROPERTIES COMPILE_DEFINITIONS "V8_GYP_BUILD;_DARWIN_USE_64_BIT_INODE=1;V8_TARGET_ARCH_X64;ENABLE_DISASSEMBLER;V8_PROMISE_INTERNAL_FIELD_COUNT;v8_promise_internal_field_count;V8_I18N_SUPPORT;V8_ENABLE_CHECKS;OBJECT_PRINT;VERIFY_HEAP;DEBUG;TRACE_MAPS;ENABLE_HANDLE_ZAPPING;ENABLE_SLOW_DCHECKS;_DEBUG;")
set_target_properties(v8_libsampler PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(v8_libsampler PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:v8_libplatform#target
set(TARGET "v8_libplatform")
set(TOOLSET "target")
list(APPEND v8_libplatform__cxx_srcs
  "./deps/v8/src/libplatform/default-platform.cc"
  "./deps/v8/src/libplatform/task-queue.cc"
  "./deps/v8/src/libplatform/tracing/trace-buffer.cc"
  "./deps/v8/src/libplatform/tracing/trace-config.cc"
  "./deps/v8/src/libplatform/tracing/trace-object.cc"
  "./deps/v8/src/libplatform/tracing/trace-writer.cc"
  "./deps/v8/src/libplatform/tracing/tracing-controller.cc"
  "./deps/v8/src/libplatform/worker-thread.cc")
list(APPEND v8_libplatform__other_srcs
  "./deps/v8/include/libplatform/libplatform.h"
  "./deps/v8/include/libplatform/libplatform-export.h"
  "./deps/v8/include/libplatform/v8-tracing.h"
  "./deps/v8/src/libplatform/default-platform.h"
  "./deps/v8/src/libplatform/task-queue.h"
  "./deps/v8/src/libplatform/tracing/trace-buffer.h"
  "./deps/v8/src/libplatform/tracing/trace-writer.h"
  "./deps/v8/src/libplatform/worker-thread.h")
add_library(v8_libplatform STATIC ${v8_libplatform__cxx_srcs} ${v8_libplatform__other_srcs})
set_target_properties(v8_libplatform PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${v8_libplatform__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(v8_libplatform PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/v8/src")
set_target_properties(v8_libplatform PROPERTIES PREFIX "lib")
set_target_properties(v8_libplatform PROPERTIES ARCHIVE_OUTPUT_NAME "v8_libplatform")
set_target_properties(v8_libplatform PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/v8/src/libv8_libplatform.a PROPERTIES GENERATED "TRUE")
list(APPEND v8_libplatform__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8"
  "${CMAKE_CURRENT_LIST_DIR}/"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/include")
set_property(TARGET v8_libplatform APPEND PROPERTY INCLUDE_DIRECTORIES ${v8_libplatform__include_dirs})
set_target_properties(v8_libplatform PROPERTIES COMPILE_DEFINITIONS "V8_GYP_BUILD;_DARWIN_USE_64_BIT_INODE=1;V8_TARGET_ARCH_X64;ENABLE_DISASSEMBLER;V8_PROMISE_INTERNAL_FIELD_COUNT;v8_promise_internal_field_count;V8_I18N_SUPPORT;V8_ENABLE_CHECKS;OBJECT_PRINT;VERIFY_HEAP;DEBUG;TRACE_MAPS;ENABLE_HANDLE_ZAPPING;ENABLE_SLOW_DCHECKS;_DEBUG;")
set_target_properties(v8_libplatform PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(v8_libplatform PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:v8_external_snapshot#target
set(TARGET "v8_external_snapshot")
set(TOOLSET "target")
add_library(v8_external_snapshot STATIC)
set_target_properties(v8_external_snapshot PROPERTIES EXCLUDE_FROM_ALL "TRUE")
set_target_properties(v8_external_snapshot PROPERTIES LINKER_LANGUAGE "C")
set_target_properties(v8_external_snapshot PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/v8/src")
set_target_properties(v8_external_snapshot PROPERTIES PREFIX "lib")
set_target_properties(v8_external_snapshot PROPERTIES ARCHIVE_OUTPUT_NAME "v8_external_snapshot")
set_target_properties(v8_external_snapshot PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/v8/src/libv8_external_snapshot.a PROPERTIES GENERATED "TRUE")
set_target_properties(v8_external_snapshot PROPERTIES COMPILE_DEFINITIONS "V8_GYP_BUILD;_DARWIN_USE_64_BIT_INODE=1;V8_TARGET_ARCH_X64;ENABLE_DISASSEMBLER;V8_PROMISE_INTERNAL_FIELD_COUNT;v8_promise_internal_field_count;V8_I18N_SUPPORT;V8_ENABLE_CHECKS;OBJECT_PRINT;VERIFY_HEAP;DEBUG;TRACE_MAPS;ENABLE_HANDLE_ZAPPING;ENABLE_SLOW_DCHECKS;_DEBUG;")
set_target_properties(v8_external_snapshot PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(v8_external_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:postmortem-metadata#target
set(TARGET "postmortem-metadata")
set(TOOLSET "target")
list(APPEND postmortem-metadata__gen-postmortem-metadata__input
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/gen-postmortem-metadata.py"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/objects.h"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/objects-inl.h")
set(postmortem-metadata__gen-postmortem-metadata__output "${obj}/gen/debug-support.cc")
add_custom_command(OUTPUT ${postmortem-metadata__gen-postmortem-metadata__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND python ../tools/gen-postmortem-metadata.py "${obj}/gen/debug-support.cc" objects.h objects-inl.h
  DEPENDS ${postmortem-metadata__gen-postmortem-metadata__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src
  COMMENT postmortem-metadata__gen-postmortem-metadata
  VERBATIM
)
add_custom_target(postmortem-metadata__gen-postmortem-metadata
  DEPENDS ${postmortem-metadata__gen-postmortem-metadata__output}
  SOURCES ${postmortem-metadata__gen-postmortem-metadata__input}
)
add_custom_target(postmortem-metadata SOURCES)
set_target_properties(postmortem-metadata PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(postmortem-metadata__gen-postmortem-metadata PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(postmortem-metadata
  postmortem-metadata__gen-postmortem-metadata
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:natives_blob#target
set(TARGET "natives_blob")
set(TOOLSET "target")
add_custom_target(natives_blob SOURCES)
set_target_properties(natives_blob PROPERTIES EXCLUDE_FROM_ALL "TRUE")
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:js2c#target
set(TARGET "js2c")
set(TOOLSET "target")
list(APPEND js2c__js2c__input
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/js2c.py"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/macros.py"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/messages.h"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/prologue.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/runtime.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/v8natives.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/array.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/string.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/typedarray.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/collection.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/weak-collection.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/collection-iterator.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/promise.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/messages.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/templates.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/spread.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/proxy.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/harmony-string-padding.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/debug/mirrors.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/debug/debug.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/debug/liveedit.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/i18n.js")
set(js2c__js2c__output "${obj}/gen/libraries.cc")
add_custom_command(OUTPUT ${js2c__js2c__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND python ../tools/js2c.py "${obj}/gen/libraries.cc" CORE js/macros.py messages.h js/prologue.js js/runtime.js js/v8natives.js js/array.js js/string.js js/typedarray.js js/collection.js js/weak-collection.js js/collection-iterator.js js/promise.js js/messages.js js/templates.js js/spread.js js/proxy.js js/harmony-string-padding.js debug/mirrors.js debug/debug.js debug/liveedit.js js/i18n.js
  DEPENDS ${js2c__js2c__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src
  COMMENT js2c__js2c
  VERBATIM
)
add_custom_target(js2c__js2c
  DEPENDS ${js2c__js2c__output}
  SOURCES ${js2c__js2c__input}
)
list(APPEND js2c__js2c_bin__input
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/js2c.py"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/macros.py"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/messages.h"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/prologue.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/runtime.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/v8natives.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/array.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/string.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/typedarray.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/collection.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/weak-collection.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/collection-iterator.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/promise.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/messages.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/templates.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/spread.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/proxy.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/harmony-string-padding.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/debug/mirrors.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/debug/debug.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/debug/liveedit.js"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/js/i18n.js")
set(js2c__js2c_bin__output "${obj}/gen/libraries.bin")
add_custom_command(OUTPUT ${js2c__js2c_bin__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND python ../tools/js2c.py "${obj}/gen/libraries.cc" CORE js/macros.py messages.h js/prologue.js js/runtime.js js/v8natives.js js/array.js js/string.js js/typedarray.js js/collection.js js/weak-collection.js js/collection-iterator.js js/promise.js js/messages.js js/templates.js js/spread.js js/proxy.js js/harmony-string-padding.js debug/mirrors.js debug/debug.js debug/liveedit.js js/i18n.js --startup_blob "${obj}/gen/libraries.bin" --nojs
  DEPENDS ${js2c__js2c_bin__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src
  COMMENT js2c__js2c_bin
  VERBATIM
)
add_custom_target(js2c__js2c_bin
  DEPENDS ${js2c__js2c_bin__output}
  SOURCES ${js2c__js2c_bin__input}
)
set(js2c__js2c_extras__input "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/js2c.py")
set(js2c__js2c_extras__output "${obj}/gen/extras-libraries.cc")
add_custom_command(OUTPUT ${js2c__js2c_extras__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND python ../tools/js2c.py "${obj}/gen/extras-libraries.cc" EXTRAS
  DEPENDS ${js2c__js2c_extras__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src
  COMMENT js2c__js2c_extras
  VERBATIM
)
add_custom_target(js2c__js2c_extras
  DEPENDS ${js2c__js2c_extras__output}
  SOURCES ${js2c__js2c_extras__input}
)
set(js2c__js2c_extras_bin__input "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/js2c.py")
set(js2c__js2c_extras_bin__output "${obj}/gen/libraries-extras.bin")
add_custom_command(OUTPUT ${js2c__js2c_extras_bin__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND python ../tools/js2c.py "${obj}/gen/extras-libraries.cc" EXTRAS --startup_blob "${obj}/gen/libraries-extras.bin" --nojs
  DEPENDS ${js2c__js2c_extras_bin__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src
  COMMENT js2c__js2c_extras_bin
  VERBATIM
)
add_custom_target(js2c__js2c_extras_bin
  DEPENDS ${js2c__js2c_extras_bin__output}
  SOURCES ${js2c__js2c_extras_bin__input}
)
set(js2c__js2c_experimental_extras__input "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/js2c.py")
set(js2c__js2c_experimental_extras__output "${obj}/gen/experimental-extras-libraries.cc")
add_custom_command(OUTPUT ${js2c__js2c_experimental_extras__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND python ../tools/js2c.py "${obj}/gen/experimental-extras-libraries.cc" EXPERIMENTAL_EXTRAS
  DEPENDS ${js2c__js2c_experimental_extras__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src
  COMMENT js2c__js2c_experimental_extras
  VERBATIM
)
add_custom_target(js2c__js2c_experimental_extras
  DEPENDS ${js2c__js2c_experimental_extras__output}
  SOURCES ${js2c__js2c_experimental_extras__input}
)
set(js2c__js2c_experimental_extras_bin__input "${CMAKE_CURRENT_LIST_DIR}/deps/v8/tools/js2c.py")
set(js2c__js2c_experimental_extras_bin__output "${obj}/gen/libraries-experimental-extras.bin")
add_custom_command(OUTPUT ${js2c__js2c_experimental_extras_bin__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen
  COMMAND python ../tools/js2c.py "${obj}/gen/experimental-extras-libraries.cc" EXPERIMENTAL_EXTRAS --startup_blob "${obj}/gen/libraries-experimental-extras.bin" --nojs
  DEPENDS ${js2c__js2c_experimental_extras_bin__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src
  COMMENT js2c__js2c_experimental_extras_bin
  VERBATIM
)
add_custom_target(js2c__js2c_experimental_extras_bin
  DEPENDS ${js2c__js2c_experimental_extras_bin__output}
  SOURCES ${js2c__js2c_experimental_extras_bin__input}
)
add_custom_target(js2c SOURCES)
set_target_properties(js2c PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(js2c__js2c PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(js2c__js2c_bin PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(js2c__js2c_extras PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(js2c__js2c_extras_bin PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(js2c__js2c_experimental_extras PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(js2c__js2c_experimental_extras_bin PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(js2c
  js2c__js2c
  js2c__js2c_bin
  js2c__js2c_extras
  js2c__js2c_extras_bin
  js2c__js2c_experimental_extras
  js2c__js2c_experimental_extras_bin
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/inspector/inspector.gyp:protocol_compatibility#target
set(TARGET "protocol_compatibility")
set(TOOLSET "target")
set(protocol_compatibility__protocol_compatibility__input "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector/js_protocol.json")
set(protocol_compatibility__protocol_compatibility__output "${obj}/gen/src/js_protocol.stamp")
add_custom_command(OUTPUT ${protocol_compatibility__protocol_compatibility__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen/src
  COMMAND python ${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/CheckProtocolCompatibility.py --stamp "${obj}/gen/src/js_protocol.stamp" js_protocol.json
  DEPENDS ${protocol_compatibility__protocol_compatibility__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector
  COMMENT Generating inspector protocol sources from protocol json definition
  VERBATIM
)
add_custom_target(protocol_compatibility__protocol_compatibility
  DEPENDS ${protocol_compatibility__protocol_compatibility__output}
  SOURCES ${protocol_compatibility__protocol_compatibility__input}
)
add_custom_target(protocol_compatibility SOURCES)
set_target_properties(protocol_compatibility PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(protocol_compatibility__protocol_compatibility PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(protocol_compatibility
  protocol_compatibility__protocol_compatibility
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/inspector/inspector.gyp:protocol_generated_sources#target
set(TARGET "protocol_generated_sources")
set(TOOLSET "target")
list(APPEND protocol_generated_sources__protocol_generated_sources__input
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector/js_protocol.json"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector/inspector_protocol_config.json"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Allocator_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Array_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Collections_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/DispatcherBase_cpp.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/DispatcherBase_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/ErrorSupport_cpp.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/ErrorSupport_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Forward_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/FrontendChannel_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Maybe_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Object_cpp.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Object_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Parser_cpp.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Parser_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Protocol_cpp.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/ValueConversions_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Values_cpp.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/lib/Values_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/templates/Exported_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/templates/Imported_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/templates/TypeBuilder_cpp.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/templates/TypeBuilder_h.template"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/CodeGenerator.py")
list(APPEND protocol_generated_sources__protocol_generated_sources__output
  "${obj}/gen/src/inspector/protocol/Forward.h"
  "${obj}/gen/src/inspector/protocol/Protocol.cpp"
  "${obj}/gen/src/inspector/protocol/Protocol.h"
  "${obj}/gen/src/inspector/protocol/Console.cpp"
  "${obj}/gen/src/inspector/protocol/Console.h"
  "${obj}/gen/src/inspector/protocol/Debugger.cpp"
  "${obj}/gen/src/inspector/protocol/Debugger.h"
  "${obj}/gen/src/inspector/protocol/HeapProfiler.cpp"
  "${obj}/gen/src/inspector/protocol/HeapProfiler.h"
  "${obj}/gen/src/inspector/protocol/Profiler.cpp"
  "${obj}/gen/src/inspector/protocol/Profiler.h"
  "${obj}/gen/src/inspector/protocol/Runtime.cpp"
  "${obj}/gen/src/inspector/protocol/Runtime.h"
  "${obj}/gen/src/inspector/protocol/Schema.cpp"
  "${obj}/gen/src/inspector/protocol/Schema.h"
  "${obj}/gen/include/inspector/Debugger.h"
  "${obj}/gen/include/inspector/Runtime.h"
  "${obj}/gen/include/inspector/Schema.h")
add_custom_command(OUTPUT ${protocol_generated_sources__protocol_generated_sources__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen/include/inspector
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen/src/inspector/protocol
  COMMAND python ${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party/inspector_protocol/CodeGenerator.py --jinja_dir ${CMAKE_CURRENT_LIST_DIR}/deps/v8/third_party --output_base "${obj}/gen/src/inspector" --config inspector_protocol_config.json
  DEPENDS ${protocol_generated_sources__protocol_generated_sources__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector
  COMMENT Generating inspector protocol sources from protocol json
  VERBATIM
)
add_custom_target(protocol_generated_sources__protocol_generated_sources
  DEPENDS ${protocol_generated_sources__protocol_generated_sources__output}
  SOURCES ${protocol_generated_sources__protocol_generated_sources__input}
)
add_custom_target(protocol_generated_sources SOURCES)
set_target_properties(protocol_generated_sources PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(protocol_generated_sources__protocol_generated_sources PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(protocol_generated_sources__protocol_generated_sources
  protocol_compatibility
)
add_dependencies(protocol_generated_sources
  protocol_compatibility
  protocol_generated_sources__protocol_generated_sources
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/inspector/inspector.gyp:inspector_injected_script#target
set(TARGET "inspector_injected_script")
set(TOOLSET "target")
list(APPEND inspector_injected_script__convert_js_to_cpp_char_array__input
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector/build/xxd.py"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector/injected-script-source.js")
set(inspector_injected_script__convert_js_to_cpp_char_array__output "${obj}/gen/src/inspector/injected-script-source.h")
add_custom_command(OUTPUT ${inspector_injected_script__convert_js_to_cpp_char_array__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen/src/inspector
  COMMAND python build/xxd.py InjectedScriptSource_js injected-script-source.js "${obj}/gen/src/inspector/injected-script-source.h"
  DEPENDS ${inspector_injected_script__convert_js_to_cpp_char_array__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector
  COMMENT inspector_injected_script__convert_js_to_cpp_char_array
  VERBATIM
)
add_custom_target(inspector_injected_script__convert_js_to_cpp_char_array
  DEPENDS ${inspector_injected_script__convert_js_to_cpp_char_array__output}
  SOURCES ${inspector_injected_script__convert_js_to_cpp_char_array__input}
)
add_custom_target(inspector_injected_script SOURCES)
set_target_properties(inspector_injected_script PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(inspector_injected_script__convert_js_to_cpp_char_array PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(inspector_injected_script
  inspector_injected_script__convert_js_to_cpp_char_array
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/inspector/inspector.gyp:inspector_debugger_script#target
set(TARGET "inspector_debugger_script")
set(TOOLSET "target")
list(APPEND inspector_debugger_script__convert_js_to_cpp_char_array__input
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector/build/xxd.py"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector/debugger-script.js")
set(inspector_debugger_script__convert_js_to_cpp_char_array__output "${obj}/gen/src/inspector/debugger-script.h")
add_custom_command(OUTPUT ${inspector_debugger_script__convert_js_to_cpp_char_array__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}/gen/src/inspector
  COMMAND python build/xxd.py DebuggerScript_js debugger-script.js "${obj}/gen/src/inspector/debugger-script.h"
  DEPENDS ${inspector_debugger_script__convert_js_to_cpp_char_array__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src/inspector
  COMMENT inspector_debugger_script__convert_js_to_cpp_char_array
  VERBATIM
)
add_custom_target(inspector_debugger_script__convert_js_to_cpp_char_array
  DEPENDS ${inspector_debugger_script__convert_js_to_cpp_char_array__output}
  SOURCES ${inspector_debugger_script__convert_js_to_cpp_char_array__input}
)
add_custom_target(inspector_debugger_script SOURCES)
set_target_properties(inspector_debugger_script PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(inspector_debugger_script__convert_js_to_cpp_char_array PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(inspector_debugger_script
  inspector_debugger_script__convert_js_to_cpp_char_array
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:v8_base#target
set(TARGET "v8_base")
set(TOOLSET "target")
list(APPEND v8_base__cxx_srcs
  "${obj}/gen/src/inspector/protocol/Protocol.cpp"
  "${obj}/gen/src/inspector/protocol/Console.cpp"
  "${obj}/gen/src/inspector/protocol/Debugger.cpp"
  "${obj}/gen/src/inspector/protocol/HeapProfiler.cpp"
  "${obj}/gen/src/inspector/protocol/Profiler.cpp"
  "${obj}/gen/src/inspector/protocol/Runtime.cpp"
  "${obj}/gen/src/inspector/protocol/Schema.cpp"
  "./deps/v8/src/inspector/injected-script.cc"
  "./deps/v8/src/inspector/injected-script-native.cc"
  "./deps/v8/src/inspector/inspected-context.cc"
  "./deps/v8/src/inspector/java-script-call-frame.cc"
  "./deps/v8/src/inspector/remote-object-id.cc"
  "./deps/v8/src/inspector/search-util.cc"
  "./deps/v8/src/inspector/string-16.cc"
  "./deps/v8/src/inspector/string-util.cc"
  "./deps/v8/src/inspector/test-interface.cc"
  "./deps/v8/src/inspector/v8-console.cc"
  "./deps/v8/src/inspector/v8-console-agent-impl.cc"
  "./deps/v8/src/inspector/v8-console-message.cc"
  "./deps/v8/src/inspector/v8-debugger.cc"
  "./deps/v8/src/inspector/v8-debugger-agent-impl.cc"
  "./deps/v8/src/inspector/v8-debugger-script.cc"
  "./deps/v8/src/inspector/v8-function-call.cc"
  "./deps/v8/src/inspector/v8-heap-profiler-agent-impl.cc"
  "./deps/v8/src/inspector/v8-injected-script-host.cc"
  "./deps/v8/src/inspector/v8-inspector-impl.cc"
  "./deps/v8/src/inspector/v8-inspector-session-impl.cc"
  "./deps/v8/src/inspector/v8-internal-value-type.cc"
  "./deps/v8/src/inspector/v8-profiler-agent-impl.cc"
  "./deps/v8/src/inspector/v8-regex.cc"
  "./deps/v8/src/inspector/v8-runtime-agent-impl.cc"
  "./deps/v8/src/inspector/v8-schema-agent-impl.cc"
  "./deps/v8/src/inspector/v8-stack-trace-impl.cc"
  "./deps/v8/src/inspector/v8-value-copier.cc"
  "./deps/v8/src/inspector/wasm-translation.cc"
  "./deps/v8/src/accessors.cc"
  "./deps/v8/src/address-map.cc"
  "./deps/v8/src/allocation.cc"
  "./deps/v8/src/allocation-site-scopes.cc"
  "./deps/v8/src/api.cc"
  "./deps/v8/src/api-arguments.cc"
  "./deps/v8/src/api-natives.cc"
  "./deps/v8/src/arguments.cc"
  "./deps/v8/src/asmjs/asm-js.cc"
  "./deps/v8/src/asmjs/asm-parser.cc"
  "./deps/v8/src/asmjs/asm-scanner.cc"
  "./deps/v8/src/asmjs/asm-typer.cc"
  "./deps/v8/src/asmjs/asm-types.cc"
  "./deps/v8/src/asmjs/asm-wasm-builder.cc"
  "./deps/v8/src/asmjs/switch-logic.cc"
  "./deps/v8/src/assembler.cc"
  "./deps/v8/src/assert-scope.cc"
  "./deps/v8/src/ast/ast-expression-rewriter.cc"
  "./deps/v8/src/ast/ast-function-literal-id-reindexer.cc"
  "./deps/v8/src/ast/ast-numbering.cc"
  "./deps/v8/src/ast/ast-types.cc"
  "./deps/v8/src/ast/ast-value-factory.cc"
  "./deps/v8/src/ast/ast.cc"
  "./deps/v8/src/ast/compile-time-value.cc"
  "./deps/v8/src/ast/context-slot-cache.cc"
  "./deps/v8/src/ast/modules.cc"
  "./deps/v8/src/ast/prettyprinter.cc"
  "./deps/v8/src/ast/scopes.cc"
  "./deps/v8/src/ast/variables.cc"
  "./deps/v8/src/background-parsing-task.cc"
  "./deps/v8/src/bailout-reason.cc"
  "./deps/v8/src/basic-block-profiler.cc"
  "./deps/v8/src/bignum-dtoa.cc"
  "./deps/v8/src/bignum.cc"
  "./deps/v8/src/bit-vector.cc"
  "./deps/v8/src/bootstrapper.cc"
  "./deps/v8/src/builtins/builtins-api.cc"
  "./deps/v8/src/builtins/builtins-arguments-gen.cc"
  "./deps/v8/src/builtins/builtins-arraybuffer.cc"
  "./deps/v8/src/builtins/builtins-array.cc"
  "./deps/v8/src/builtins/builtins-array-gen.cc"
  "./deps/v8/src/builtins/builtins-async-function-gen.cc"
  "./deps/v8/src/builtins/builtins-async-generator-gen.cc"
  "./deps/v8/src/builtins/builtins-async-iterator-gen.cc"
  "./deps/v8/src/builtins/builtins-async-gen.cc"
  "./deps/v8/src/builtins/builtins-boolean.cc"
  "./deps/v8/src/builtins/builtins-boolean-gen.cc"
  "./deps/v8/src/builtins/builtins-call.cc"
  "./deps/v8/src/builtins/builtins-call-gen.cc"
  "./deps/v8/src/builtins/builtins-callsite.cc"
  "./deps/v8/src/builtins/builtins-constructor-gen.cc"
  "./deps/v8/src/builtins/builtins-conversion-gen.cc"
  "./deps/v8/src/builtins/builtins-dataview.cc"
  "./deps/v8/src/builtins/builtins-date.cc"
  "./deps/v8/src/builtins/builtins-date-gen.cc"
  "./deps/v8/src/builtins/builtins-debug.cc"
  "./deps/v8/src/builtins/builtins-error.cc"
  "./deps/v8/src/builtins/builtins-forin-gen.cc"
  "./deps/v8/src/builtins/builtins-function.cc"
  "./deps/v8/src/builtins/builtins-function-gen.cc"
  "./deps/v8/src/builtins/builtins-generator-gen.cc"
  "./deps/v8/src/builtins/builtins-global.cc"
  "./deps/v8/src/builtins/builtins-global-gen.cc"
  "./deps/v8/src/builtins/builtins-handler-gen.cc"
  "./deps/v8/src/builtins/builtins-ic-gen.cc"
  "./deps/v8/src/builtins/builtins-internal.cc"
  "./deps/v8/src/builtins/builtins-internal-gen.cc"
  "./deps/v8/src/builtins/builtins-interpreter.cc"
  "./deps/v8/src/builtins/builtins-interpreter-gen.cc"
  "./deps/v8/src/builtins/builtins-json.cc"
  "./deps/v8/src/builtins/builtins-math.cc"
  "./deps/v8/src/builtins/builtins-math-gen.cc"
  "./deps/v8/src/builtins/builtins-number.cc"
  "./deps/v8/src/builtins/builtins-number-gen.cc"
  "./deps/v8/src/builtins/builtins-object.cc"
  "./deps/v8/src/builtins/builtins-object-gen.cc"
  "./deps/v8/src/builtins/builtins-promise-gen.cc"
  "./deps/v8/src/builtins/builtins-proxy.cc"
  "./deps/v8/src/builtins/builtins-reflect.cc"
  "./deps/v8/src/builtins/builtins-regexp.cc"
  "./deps/v8/src/builtins/builtins-regexp-gen.cc"
  "./deps/v8/src/builtins/builtins-sharedarraybuffer.cc"
  "./deps/v8/src/builtins/builtins-sharedarraybuffer-gen.cc"
  "./deps/v8/src/builtins/builtins-string.cc"
  "./deps/v8/src/builtins/builtins-string-gen.cc"
  "./deps/v8/src/builtins/builtins-intl.cc"
  "./deps/v8/src/builtins/builtins-symbol.cc"
  "./deps/v8/src/builtins/builtins-symbol-gen.cc"
  "./deps/v8/src/builtins/builtins-typedarray.cc"
  "./deps/v8/src/builtins/builtins-typedarray-gen.cc"
  "./deps/v8/src/builtins/builtins-wasm-gen.cc"
  "./deps/v8/src/builtins/builtins.cc"
  "./deps/v8/src/builtins/setup-builtins-internal.cc"
  "./deps/v8/src/cached-powers.cc"
  "./deps/v8/src/cancelable-task.cc"
  "./deps/v8/src/char-predicates.cc"
  "./deps/v8/src/code-factory.cc"
  "./deps/v8/src/code-stub-assembler.cc"
  "./deps/v8/src/code-stubs.cc"
  "./deps/v8/src/code-stubs-hydrogen.cc"
  "./deps/v8/src/codegen.cc"
  "./deps/v8/src/compilation-cache.cc"
  "./deps/v8/src/compilation-dependencies.cc"
  "./deps/v8/src/compilation-info.cc"
  "./deps/v8/src/compilation-statistics.cc"
  "./deps/v8/src/compiler/access-builder.cc"
  "./deps/v8/src/compiler/access-info.cc"
  "./deps/v8/src/compiler/all-nodes.cc"
  "./deps/v8/src/compiler/ast-graph-builder.cc"
  "./deps/v8/src/compiler/ast-loop-assignment-analyzer.cc"
  "./deps/v8/src/compiler/basic-block-instrumentor.cc"
  "./deps/v8/src/compiler/branch-elimination.cc"
  "./deps/v8/src/compiler/bytecode-analysis.cc"
  "./deps/v8/src/compiler/bytecode-graph-builder.cc"
  "./deps/v8/src/compiler/bytecode-liveness-map.cc"
  "./deps/v8/src/compiler/c-linkage.cc"
  "./deps/v8/src/compiler/checkpoint-elimination.cc"
  "./deps/v8/src/compiler/code-generator.cc"
  "./deps/v8/src/compiler/code-assembler.cc"
  "./deps/v8/src/compiler/common-node-cache.cc"
  "./deps/v8/src/compiler/common-operator-reducer.cc"
  "./deps/v8/src/compiler/common-operator.cc"
  "./deps/v8/src/compiler/control-builders.cc"
  "./deps/v8/src/compiler/control-equivalence.cc"
  "./deps/v8/src/compiler/control-flow-optimizer.cc"
  "./deps/v8/src/compiler/dead-code-elimination.cc"
  "./deps/v8/src/compiler/effect-control-linearizer.cc"
  "./deps/v8/src/compiler/escape-analysis.cc"
  "./deps/v8/src/compiler/escape-analysis-reducer.cc"
  "./deps/v8/src/compiler/frame.cc"
  "./deps/v8/src/compiler/frame-elider.cc"
  "./deps/v8/src/compiler/frame-states.cc"
  "./deps/v8/src/compiler/gap-resolver.cc"
  "./deps/v8/src/compiler/graph-assembler.cc"
  "./deps/v8/src/compiler/graph-reducer.cc"
  "./deps/v8/src/compiler/graph-trimmer.cc"
  "./deps/v8/src/compiler/graph-visualizer.cc"
  "./deps/v8/src/compiler/graph.cc"
  "./deps/v8/src/compiler/instruction-selector.cc"
  "./deps/v8/src/compiler/instruction-scheduler.cc"
  "./deps/v8/src/compiler/instruction.cc"
  "./deps/v8/src/compiler/int64-lowering.cc"
  "./deps/v8/src/compiler/js-builtin-reducer.cc"
  "./deps/v8/src/compiler/js-call-reducer.cc"
  "./deps/v8/src/compiler/js-context-specialization.cc"
  "./deps/v8/src/compiler/js-create-lowering.cc"
  "./deps/v8/src/compiler/js-frame-specialization.cc"
  "./deps/v8/src/compiler/js-generic-lowering.cc"
  "./deps/v8/src/compiler/js-graph.cc"
  "./deps/v8/src/compiler/js-inlining.cc"
  "./deps/v8/src/compiler/js-inlining-heuristic.cc"
  "./deps/v8/src/compiler/js-intrinsic-lowering.cc"
  "./deps/v8/src/compiler/js-native-context-specialization.cc"
  "./deps/v8/src/compiler/js-operator.cc"
  "./deps/v8/src/compiler/js-type-hint-lowering.cc"
  "./deps/v8/src/compiler/js-typed-lowering.cc"
  "./deps/v8/src/compiler/jump-threading.cc"
  "./deps/v8/src/compiler/linkage.cc"
  "./deps/v8/src/compiler/liveness-analyzer.cc"
  "./deps/v8/src/compiler/live-range-separator.cc"
  "./deps/v8/src/compiler/load-elimination.cc"
  "./deps/v8/src/compiler/loop-analysis.cc"
  "./deps/v8/src/compiler/loop-peeling.cc"
  "./deps/v8/src/compiler/loop-variable-optimizer.cc"
  "./deps/v8/src/compiler/machine-operator-reducer.cc"
  "./deps/v8/src/compiler/machine-operator.cc"
  "./deps/v8/src/compiler/machine-graph-verifier.cc"
  "./deps/v8/src/compiler/memory-optimizer.cc"
  "./deps/v8/src/compiler/move-optimizer.cc"
  "./deps/v8/src/compiler/node-cache.cc"
  "./deps/v8/src/compiler/node-marker.cc"
  "./deps/v8/src/compiler/node-matchers.cc"
  "./deps/v8/src/compiler/node-properties.cc"
  "./deps/v8/src/compiler/node.cc"
  "./deps/v8/src/compiler/opcodes.cc"
  "./deps/v8/src/compiler/operation-typer.cc"
  "./deps/v8/src/compiler/operator-properties.cc"
  "./deps/v8/src/compiler/operator.cc"
  "./deps/v8/src/compiler/osr.cc"
  "./deps/v8/src/compiler/pipeline.cc"
  "./deps/v8/src/compiler/pipeline-statistics.cc"
  "./deps/v8/src/compiler/raw-machine-assembler.cc"
  "./deps/v8/src/compiler/redundancy-elimination.cc"
  "./deps/v8/src/compiler/register-allocator.cc"
  "./deps/v8/src/compiler/register-allocator-verifier.cc"
  "./deps/v8/src/compiler/representation-change.cc"
  "./deps/v8/src/compiler/schedule.cc"
  "./deps/v8/src/compiler/scheduler.cc"
  "./deps/v8/src/compiler/select-lowering.cc"
  "./deps/v8/src/compiler/simd-scalar-lowering.cc"
  "./deps/v8/src/compiler/simplified-lowering.cc"
  "./deps/v8/src/compiler/simplified-operator-reducer.cc"
  "./deps/v8/src/compiler/simplified-operator.cc"
  "./deps/v8/src/compiler/compiler-source-position-table.cc"
  "./deps/v8/src/compiler/state-values-utils.cc"
  "./deps/v8/src/compiler/store-store-elimination.cc"
  "./deps/v8/src/compiler/tail-call-optimization.cc"
  "./deps/v8/src/compiler/types.cc"
  "./deps/v8/src/compiler/type-cache.cc"
  "./deps/v8/src/compiler/typed-optimization.cc"
  "./deps/v8/src/compiler/typer.cc"
  "./deps/v8/src/compiler/value-numbering-reducer.cc"
  "./deps/v8/src/compiler/verifier.cc"
  "./deps/v8/src/compiler/wasm-compiler.cc"
  "./deps/v8/src/compiler/wasm-linkage.cc"
  "./deps/v8/src/compiler/zone-stats.cc"
  "./deps/v8/src/compiler-dispatcher/compiler-dispatcher.cc"
  "./deps/v8/src/compiler-dispatcher/compiler-dispatcher-job.cc"
  "./deps/v8/src/compiler-dispatcher/compiler-dispatcher-tracer.cc"
  "./deps/v8/src/compiler-dispatcher/optimizing-compile-dispatcher.cc"
  "./deps/v8/src/compiler.cc"
  "./deps/v8/src/contexts.cc"
  "./deps/v8/src/conversions.cc"
  "./deps/v8/src/counters.cc"
  "./deps/v8/src/crankshaft/compilation-phase.cc"
  "./deps/v8/src/crankshaft/hydrogen-bce.cc"
  "./deps/v8/src/crankshaft/hydrogen-canonicalize.cc"
  "./deps/v8/src/crankshaft/hydrogen-check-elimination.cc"
  "./deps/v8/src/crankshaft/hydrogen-dce.cc"
  "./deps/v8/src/crankshaft/hydrogen-dehoist.cc"
  "./deps/v8/src/crankshaft/hydrogen-environment-liveness.cc"
  "./deps/v8/src/crankshaft/hydrogen-escape-analysis.cc"
  "./deps/v8/src/crankshaft/hydrogen-gvn.cc"
  "./deps/v8/src/crankshaft/hydrogen-infer-representation.cc"
  "./deps/v8/src/crankshaft/hydrogen-infer-types.cc"
  "./deps/v8/src/crankshaft/hydrogen-instructions.cc"
  "./deps/v8/src/crankshaft/hydrogen-load-elimination.cc"
  "./deps/v8/src/crankshaft/hydrogen-mark-unreachable.cc"
  "./deps/v8/src/crankshaft/hydrogen-osr.cc"
  "./deps/v8/src/crankshaft/hydrogen-range-analysis.cc"
  "./deps/v8/src/crankshaft/hydrogen-redundant-phi.cc"
  "./deps/v8/src/crankshaft/hydrogen-removable-simulates.cc"
  "./deps/v8/src/crankshaft/hydrogen-representation-changes.cc"
  "./deps/v8/src/crankshaft/hydrogen-sce.cc"
  "./deps/v8/src/crankshaft/hydrogen-store-elimination.cc"
  "./deps/v8/src/crankshaft/hydrogen-types.cc"
  "./deps/v8/src/crankshaft/hydrogen-uint32-analysis.cc"
  "./deps/v8/src/crankshaft/hydrogen.cc"
  "./deps/v8/src/crankshaft/lithium-allocator.cc"
  "./deps/v8/src/crankshaft/lithium-codegen.cc"
  "./deps/v8/src/crankshaft/lithium.cc"
  "./deps/v8/src/crankshaft/typing.cc"
  "./deps/v8/src/date.cc"
  "./deps/v8/src/dateparser.cc"
  "./deps/v8/src/debug/debug-coverage.cc"
  "./deps/v8/src/debug/debug-evaluate.cc"
  "./deps/v8/src/debug/debug-frames.cc"
  "./deps/v8/src/debug/debug-scopes.cc"
  "./deps/v8/src/debug/debug.cc"
  "./deps/v8/src/debug/liveedit.cc"
  "./deps/v8/src/deoptimize-reason.cc"
  "./deps/v8/src/deoptimizer.cc"
  "./deps/v8/src/disassembler.cc"
  "./deps/v8/src/diy-fp.cc"
  "./deps/v8/src/dtoa.cc"
  "./deps/v8/src/eh-frame.cc"
  "./deps/v8/src/elements-kind.cc"
  "./deps/v8/src/elements.cc"
  "./deps/v8/src/execution.cc"
  "./deps/v8/src/extensions/externalize-string-extension.cc"
  "./deps/v8/src/extensions/free-buffer-extension.cc"
  "./deps/v8/src/extensions/gc-extension.cc"
  "./deps/v8/src/extensions/ignition-statistics-extension.cc"
  "./deps/v8/src/extensions/statistics-extension.cc"
  "./deps/v8/src/extensions/trigger-failure-extension.cc"
  "./deps/v8/src/external-reference-table.cc"
  "./deps/v8/src/factory.cc"
  "./deps/v8/src/fast-dtoa.cc"
  "./deps/v8/src/feedback-vector.cc"
  "./deps/v8/src/ffi/ffi-compiler.cc"
  "./deps/v8/src/field-type.cc"
  "./deps/v8/src/fixed-dtoa.cc"
  "./deps/v8/src/flags.cc"
  "./deps/v8/src/frames.cc"
  "./deps/v8/src/full-codegen/full-codegen.cc"
  "./deps/v8/src/futex-emulation.cc"
  "./deps/v8/src/gdb-jit.cc"
  "./deps/v8/src/global-handles.cc"
  "./deps/v8/src/handles.cc"
  "./deps/v8/src/heap/array-buffer-tracker.cc"
  "./deps/v8/src/heap/code-stats.cc"
  "./deps/v8/src/heap/concurrent-marking.cc"
  "./deps/v8/src/heap/embedder-tracing.cc"
  "./deps/v8/src/heap/memory-reducer.cc"
  "./deps/v8/src/heap/gc-idle-time-handler.cc"
  "./deps/v8/src/heap/gc-tracer.cc"
  "./deps/v8/src/heap/heap.cc"
  "./deps/v8/src/heap/incremental-marking-job.cc"
  "./deps/v8/src/heap/incremental-marking.cc"
  "./deps/v8/src/heap/mark-compact.cc"
  "./deps/v8/src/heap/object-stats.cc"
  "./deps/v8/src/heap/objects-visiting.cc"
  "./deps/v8/src/heap/scavenge-job.cc"
  "./deps/v8/src/heap/scavenger.cc"
  "./deps/v8/src/heap/spaces.cc"
  "./deps/v8/src/heap/store-buffer.cc"
  "./deps/v8/src/i18n.cc"
  "./deps/v8/src/icu_util.cc"
  "./deps/v8/src/ic/access-compiler.cc"
  "./deps/v8/src/ic/accessor-assembler.cc"
  "./deps/v8/src/ic/binary-op-assembler.cc"
  "./deps/v8/src/ic/call-optimization.cc"
  "./deps/v8/src/ic/handler-compiler.cc"
  "./deps/v8/src/ic/ic-state.cc"
  "./deps/v8/src/ic/ic-stats.cc"
  "./deps/v8/src/ic/ic.cc"
  "./deps/v8/src/ic/keyed-store-generic.cc"
  "./deps/v8/src/identity-map.cc"
  "./deps/v8/src/interface-descriptors.cc"
  "./deps/v8/src/interpreter/bytecodes.cc"
  "./deps/v8/src/interpreter/bytecode-array-accessor.cc"
  "./deps/v8/src/interpreter/bytecode-array-builder.cc"
  "./deps/v8/src/interpreter/bytecode-array-iterator.cc"
  "./deps/v8/src/interpreter/bytecode-array-random-iterator.cc"
  "./deps/v8/src/interpreter/bytecode-array-writer.cc"
  "./deps/v8/src/interpreter/bytecode-decoder.cc"
  "./deps/v8/src/interpreter/bytecode-flags.cc"
  "./deps/v8/src/interpreter/bytecode-generator.cc"
  "./deps/v8/src/interpreter/bytecode-label.cc"
  "./deps/v8/src/interpreter/bytecode-operands.cc"
  "./deps/v8/src/interpreter/bytecode-pipeline.cc"
  "./deps/v8/src/interpreter/bytecode-register.cc"
  "./deps/v8/src/interpreter/bytecode-register-optimizer.cc"
  "./deps/v8/src/interpreter/constant-array-builder.cc"
  "./deps/v8/src/interpreter/control-flow-builders.cc"
  "./deps/v8/src/interpreter/handler-table-builder.cc"
  "./deps/v8/src/interpreter/interpreter.cc"
  "./deps/v8/src/interpreter/interpreter-assembler.cc"
  "./deps/v8/src/interpreter/interpreter-generator.cc"
  "./deps/v8/src/interpreter/interpreter-intrinsics.cc"
  "./deps/v8/src/interpreter/interpreter-intrinsics-generator.cc"
  "./deps/v8/src/interpreter/setup-interpreter-internal.cc"
  "./deps/v8/src/isolate.cc"
  "./deps/v8/src/json-parser.cc"
  "./deps/v8/src/json-stringifier.cc"
  "./deps/v8/src/keys.cc"
  "./deps/v8/src/layout-descriptor.cc"
  "./deps/v8/src/log-utils.cc"
  "./deps/v8/src/log.cc"
  "./deps/v8/src/lookup-cache.cc"
  "./deps/v8/src/lookup.cc"
  "./deps/v8/src/map-updater.cc"
  "./deps/v8/src/machine-type.cc"
  "./deps/v8/src/messages.cc"
  "./deps/v8/src/objects-debug.cc"
  "./deps/v8/src/objects-printer.cc"
  "./deps/v8/src/objects.cc"
  "./deps/v8/src/objects/literal-objects.cc"
  "./deps/v8/src/objects/scope-info.cc"
  "./deps/v8/src/ostreams.cc"
  "./deps/v8/src/parsing/func-name-inferrer.cc"
  "./deps/v8/src/parsing/parameter-initializer-rewriter.cc"
  "./deps/v8/src/parsing/parse-info.cc"
  "./deps/v8/src/parsing/parser.cc"
  "./deps/v8/src/parsing/parsing.cc"
  "./deps/v8/src/parsing/pattern-rewriter.cc"
  "./deps/v8/src/parsing/preparse-data.cc"
  "./deps/v8/src/parsing/preparsed-scope-data.cc"
  "./deps/v8/src/parsing/preparser.cc"
  "./deps/v8/src/parsing/rewriter.cc"
  "./deps/v8/src/parsing/scanner-character-streams.cc"
  "./deps/v8/src/parsing/scanner.cc"
  "./deps/v8/src/parsing/token.cc"
  "./deps/v8/src/pending-compilation-error-handler.cc"
  "./deps/v8/src/perf-jit.cc"
  "./deps/v8/src/profiler/allocation-tracker.cc"
  "./deps/v8/src/profiler/cpu-profiler.cc"
  "./deps/v8/src/profiler/heap-profiler.cc"
  "./deps/v8/src/profiler/heap-snapshot-generator.cc"
  "./deps/v8/src/profiler/profiler-listener.cc"
  "./deps/v8/src/profiler/profile-generator.cc"
  "./deps/v8/src/profiler/sampling-heap-profiler.cc"
  "./deps/v8/src/profiler/strings-storage.cc"
  "./deps/v8/src/profiler/tick-sample.cc"
  "./deps/v8/src/profiler/tracing-cpu-profiler.cc"
  "./deps/v8/src/property-descriptor.cc"
  "./deps/v8/src/property.cc"
  "./deps/v8/src/regexp/interpreter-irregexp.cc"
  "./deps/v8/src/regexp/jsregexp.cc"
  "./deps/v8/src/regexp/regexp-ast.cc"
  "./deps/v8/src/regexp/regexp-macro-assembler-irregexp.cc"
  "./deps/v8/src/regexp/regexp-macro-assembler-tracer.cc"
  "./deps/v8/src/regexp/regexp-macro-assembler.cc"
  "./deps/v8/src/regexp/regexp-parser.cc"
  "./deps/v8/src/regexp/regexp-stack.cc"
  "./deps/v8/src/regexp/regexp-utils.cc"
  "./deps/v8/src/register-configuration.cc"
  "./deps/v8/src/runtime-profiler.cc"
  "./deps/v8/src/runtime/runtime-array.cc"
  "./deps/v8/src/runtime/runtime-atomics.cc"
  "./deps/v8/src/runtime/runtime-classes.cc"
  "./deps/v8/src/runtime/runtime-collections.cc"
  "./deps/v8/src/runtime/runtime-compiler.cc"
  "./deps/v8/src/runtime/runtime-date.cc"
  "./deps/v8/src/runtime/runtime-debug.cc"
  "./deps/v8/src/runtime/runtime-forin.cc"
  "./deps/v8/src/runtime/runtime-function.cc"
  "./deps/v8/src/runtime/runtime-error.cc"
  "./deps/v8/src/runtime/runtime-futex.cc"
  "./deps/v8/src/runtime/runtime-generator.cc"
  "./deps/v8/src/runtime/runtime-i18n.cc"
  "./deps/v8/src/runtime/runtime-internal.cc"
  "./deps/v8/src/runtime/runtime-interpreter.cc"
  "./deps/v8/src/runtime/runtime-literals.cc"
  "./deps/v8/src/runtime/runtime-liveedit.cc"
  "./deps/v8/src/runtime/runtime-maths.cc"
  "./deps/v8/src/runtime/runtime-module.cc"
  "./deps/v8/src/runtime/runtime-numbers.cc"
  "./deps/v8/src/runtime/runtime-object.cc"
  "./deps/v8/src/runtime/runtime-operators.cc"
  "./deps/v8/src/runtime/runtime-promise.cc"
  "./deps/v8/src/runtime/runtime-proxy.cc"
  "./deps/v8/src/runtime/runtime-regexp.cc"
  "./deps/v8/src/runtime/runtime-scopes.cc"
  "./deps/v8/src/runtime/runtime-strings.cc"
  "./deps/v8/src/runtime/runtime-symbol.cc"
  "./deps/v8/src/runtime/runtime-test.cc"
  "./deps/v8/src/runtime/runtime-typedarray.cc"
  "./deps/v8/src/runtime/runtime-wasm.cc"
  "./deps/v8/src/runtime/runtime.cc"
  "./deps/v8/src/safepoint-table.cc"
  "./deps/v8/src/setup-isolate-full.cc"
  "./deps/v8/src/snapshot/code-serializer.cc"
  "./deps/v8/src/snapshot/deserializer.cc"
  "./deps/v8/src/snapshot/natives-common.cc"
  "./deps/v8/src/snapshot/partial-serializer.cc"
  "./deps/v8/src/snapshot/serializer.cc"
  "./deps/v8/src/snapshot/serializer-common.cc"
  "./deps/v8/src/snapshot/snapshot-common.cc"
  "./deps/v8/src/snapshot/snapshot-source-sink.cc"
  "./deps/v8/src/snapshot/startup-serializer.cc"
  "./deps/v8/src/source-position-table.cc"
  "./deps/v8/src/source-position.cc"
  "./deps/v8/src/startup-data-util.cc"
  "./deps/v8/src/string-builder.cc"
  "./deps/v8/src/string-case.cc"
  "./deps/v8/src/string-stream.cc"
  "./deps/v8/src/strtod.cc"
  "./deps/v8/src/ic/stub-cache.cc"
  "./deps/v8/src/tracing/trace-event.cc"
  "./deps/v8/src/tracing/traced-value.cc"
  "./deps/v8/src/tracing/tracing-category-observer.cc"
  "./deps/v8/src/transitions.cc"
  "./deps/v8/src/trap-handler/handler-outside.cc"
  "./deps/v8/src/trap-handler/handler-shared.cc"
  "./deps/v8/src/type-hints.cc"
  "./deps/v8/src/type-info.cc"
  "./deps/v8/src/unicode.cc"
  "./deps/v8/src/unicode-decoder.cc"
  "./deps/v8/src/uri.cc"
  "./deps/v8/src/utils.cc"
  "./deps/v8/src/v8.cc"
  "./deps/v8/src/v8threads.cc"
  "./deps/v8/src/value-serializer.cc"
  "./deps/v8/src/version.cc"
  "./deps/v8/src/wasm/function-body-decoder.cc"
  "./deps/v8/src/wasm/module-decoder.cc"
  "./deps/v8/src/wasm/signature-map.cc"
  "./deps/v8/src/wasm/wasm-code-specialization.cc"
  "./deps/v8/src/wasm/wasm-debug.cc"
  "./deps/v8/src/wasm/wasm-external-refs.cc"
  "./deps/v8/src/wasm/wasm-js.cc"
  "./deps/v8/src/wasm/wasm-module.cc"
  "./deps/v8/src/wasm/wasm-module-builder.cc"
  "./deps/v8/src/wasm/wasm-interpreter.cc"
  "./deps/v8/src/wasm/wasm-objects.cc"
  "./deps/v8/src/wasm/wasm-opcodes.cc"
  "./deps/v8/src/wasm/wasm-result.cc"
  "./deps/v8/src/wasm/wasm-text.cc"
  "./deps/v8/src/zone/accounting-allocator.cc"
  "./deps/v8/src/zone/zone-segment.cc"
  "./deps/v8/src/zone/zone.cc"
  "./deps/v8/src/builtins/x64/builtins-x64.cc"
  "./deps/v8/src/compiler/x64/code-generator-x64.cc"
  "./deps/v8/src/compiler/x64/instruction-scheduler-x64.cc"
  "./deps/v8/src/compiler/x64/instruction-selector-x64.cc"
  "./deps/v8/src/compiler/x64/unwinding-info-writer-x64.cc"
  "./deps/v8/src/crankshaft/x64/lithium-codegen-x64.cc"
  "./deps/v8/src/crankshaft/x64/lithium-gap-resolver-x64.cc"
  "./deps/v8/src/crankshaft/x64/lithium-x64.cc"
  "./deps/v8/src/x64/assembler-x64.cc"
  "./deps/v8/src/x64/code-stubs-x64.cc"
  "./deps/v8/src/x64/codegen-x64.cc"
  "./deps/v8/src/x64/cpu-x64.cc"
  "./deps/v8/src/x64/deoptimizer-x64.cc"
  "./deps/v8/src/x64/disasm-x64.cc"
  "./deps/v8/src/x64/eh-frame-x64.cc"
  "./deps/v8/src/x64/frames-x64.cc"
  "./deps/v8/src/x64/interface-descriptors-x64.cc"
  "./deps/v8/src/x64/macro-assembler-x64.cc"
  "./deps/v8/src/x64/simulator-x64.cc"
  "./deps/v8/src/debug/x64/debug-x64.cc"
  "./deps/v8/src/full-codegen/x64/full-codegen-x64.cc"
  "./deps/v8/src/ic/x64/access-compiler-x64.cc"
  "./deps/v8/src/ic/x64/handler-compiler-x64.cc"
  "./deps/v8/src/ic/x64/ic-x64.cc"
  "./deps/v8/src/regexp/x64/regexp-macro-assembler-x64.cc"
  "${obj}/gen/debug-support.cc")
list(APPEND v8_base__other_srcs
  "${obj}/gen/src/inspector/protocol/Forward.h"
  "${obj}/gen/src/inspector/protocol/Protocol.h"
  "${obj}/gen/src/inspector/protocol/Console.h"
  "${obj}/gen/src/inspector/protocol/Debugger.h"
  "${obj}/gen/src/inspector/protocol/HeapProfiler.h"
  "${obj}/gen/src/inspector/protocol/Profiler.h"
  "${obj}/gen/src/inspector/protocol/Runtime.h"
  "${obj}/gen/src/inspector/protocol/Schema.h"
  "${obj}/gen/include/inspector/Debugger.h"
  "${obj}/gen/include/inspector/Runtime.h"
  "${obj}/gen/include/inspector/Schema.h"
  "${obj}/gen/src/inspector/injected-script-source.h"
  "${obj}/gen/src/inspector/debugger-script.h"
  "./deps/v8/include/v8-inspector.h"
  "./deps/v8/include/v8-inspector-protocol.h"
  "./deps/v8/src/inspector/injected-script.h"
  "./deps/v8/src/inspector/injected-script-native.h"
  "./deps/v8/src/inspector/inspected-context.h"
  "./deps/v8/src/inspector/java-script-call-frame.h"
  "./deps/v8/src/inspector/remote-object-id.h"
  "./deps/v8/src/inspector/script-breakpoint.h"
  "./deps/v8/src/inspector/search-util.h"
  "./deps/v8/src/inspector/string-16.h"
  "./deps/v8/src/inspector/string-util.h"
  "./deps/v8/src/inspector/test-interface.h"
  "./deps/v8/src/inspector/v8-console.h"
  "./deps/v8/src/inspector/v8-console-agent-impl.h"
  "./deps/v8/src/inspector/v8-console-message.h"
  "./deps/v8/src/inspector/v8-debugger.h"
  "./deps/v8/src/inspector/v8-debugger-agent-impl.h"
  "./deps/v8/src/inspector/v8-debugger-script.h"
  "./deps/v8/src/inspector/v8-function-call.h"
  "./deps/v8/src/inspector/v8-heap-profiler-agent-impl.h"
  "./deps/v8/src/inspector/v8-injected-script-host.h"
  "./deps/v8/src/inspector/v8-inspector-impl.h"
  "./deps/v8/src/inspector/v8-inspector-session-impl.h"
  "./deps/v8/src/inspector/v8-internal-value-type.h"
  "./deps/v8/src/inspector/v8-profiler-agent-impl.h"
  "./deps/v8/src/inspector/v8-regex.h"
  "./deps/v8/src/inspector/v8-runtime-agent-impl.h"
  "./deps/v8/src/inspector/v8-schema-agent-impl.h"
  "./deps/v8/src/inspector/v8-stack-trace-impl.h"
  "./deps/v8/src/inspector/v8-value-copier.h"
  "./deps/v8/src/inspector/wasm-translation.h"
  "./deps/v8/include/v8-debug.h"
  "./deps/v8/include/v8-platform.h"
  "./deps/v8/include/v8-profiler.h"
  "./deps/v8/include/v8-testing.h"
  "./deps/v8/include/v8-util.h"
  "./deps/v8/include/v8-version-string.h"
  "./deps/v8/include/v8-version.h"
  "./deps/v8/include/v8.h"
  "./deps/v8/include/v8config.h"
  "./deps/v8/src/accessors.h"
  "./deps/v8/src/address-map.h"
  "./deps/v8/src/allocation.h"
  "./deps/v8/src/allocation-site-scopes.h"
  "./deps/v8/src/api.h"
  "./deps/v8/src/api-arguments-inl.h"
  "./deps/v8/src/api-arguments.h"
  "./deps/v8/src/api-natives.h"
  "./deps/v8/src/arguments.h"
  "./deps/v8/src/asmjs/asm-js.h"
  "./deps/v8/src/asmjs/asm-names.h"
  "./deps/v8/src/asmjs/asm-parser.h"
  "./deps/v8/src/asmjs/asm-scanner.h"
  "./deps/v8/src/asmjs/asm-typer.h"
  "./deps/v8/src/asmjs/asm-types.h"
  "./deps/v8/src/asmjs/asm-wasm-builder.h"
  "./deps/v8/src/asmjs/switch-logic.h"
  "./deps/v8/src/assembler.h"
  "./deps/v8/src/assembler-inl.h"
  "./deps/v8/src/assert-scope.h"
  "./deps/v8/src/ast/ast-expression-rewriter.h"
  "./deps/v8/src/ast/ast-function-literal-id-reindexer.h"
  "./deps/v8/src/ast/ast-numbering.h"
  "./deps/v8/src/ast/ast-traversal-visitor.h"
  "./deps/v8/src/ast/ast-type-bounds.h"
  "./deps/v8/src/ast/ast-types.h"
  "./deps/v8/src/ast/ast-value-factory.h"
  "./deps/v8/src/ast/ast.h"
  "./deps/v8/src/ast/compile-time-value.h"
  "./deps/v8/src/ast/context-slot-cache.h"
  "./deps/v8/src/ast/modules.h"
  "./deps/v8/src/ast/prettyprinter.h"
  "./deps/v8/src/ast/scopes.h"
  "./deps/v8/src/ast/variables.h"
  "./deps/v8/src/background-parsing-task.h"
  "./deps/v8/src/bailout-reason.h"
  "./deps/v8/src/basic-block-profiler.h"
  "./deps/v8/src/bignum-dtoa.h"
  "./deps/v8/src/bignum.h"
  "./deps/v8/src/bit-vector.h"
  "./deps/v8/src/bootstrapper.h"
  "./deps/v8/src/builtins/builtins-arguments-gen.h"
  "./deps/v8/src/builtins/builtins-async-gen.h"
  "./deps/v8/src/builtins/builtins-constructor-gen.h"
  "./deps/v8/src/builtins/builtins-constructor.h"
  "./deps/v8/src/builtins/builtins-definitions.h"
  "./deps/v8/src/builtins/builtins-descriptors.h"
  "./deps/v8/src/builtins/builtins-forin-gen.h"
  "./deps/v8/src/builtins/builtins-promise-gen.h"
  "./deps/v8/src/builtins/builtins-regexp-gen.h"
  "./deps/v8/src/builtins/builtins-utils.h"
  "./deps/v8/src/builtins/builtins-utils-gen.h"
  "./deps/v8/src/builtins/builtins.h"
  "./deps/v8/src/cached-powers.h"
  "./deps/v8/src/callable.h"
  "./deps/v8/src/cancelable-task.h"
  "./deps/v8/src/char-predicates-inl.h"
  "./deps/v8/src/char-predicates.h"
  "./deps/v8/src/checks.h"
  "./deps/v8/src/code-events.h"
  "./deps/v8/src/code-factory.h"
  "./deps/v8/src/code-stub-assembler.h"
  "./deps/v8/src/code-stubs.h"
  "./deps/v8/src/code-stubs-utils.h"
  "./deps/v8/src/codegen.h"
  "./deps/v8/src/collector.h"
  "./deps/v8/src/compilation-cache.h"
  "./deps/v8/src/compilation-dependencies.h"
  "./deps/v8/src/compilation-info.h"
  "./deps/v8/src/compilation-statistics.h"
  "./deps/v8/src/compiler/access-builder.h"
  "./deps/v8/src/compiler/access-info.h"
  "./deps/v8/src/compiler/all-nodes.h"
  "./deps/v8/src/compiler/ast-graph-builder.h"
  "./deps/v8/src/compiler/ast-loop-assignment-analyzer.h"
  "./deps/v8/src/compiler/basic-block-instrumentor.h"
  "./deps/v8/src/compiler/branch-elimination.h"
  "./deps/v8/src/compiler/bytecode-analysis.h"
  "./deps/v8/src/compiler/bytecode-graph-builder.h"
  "./deps/v8/src/compiler/bytecode-liveness-map.h"
  "./deps/v8/src/compiler/checkpoint-elimination.h"
  "./deps/v8/src/compiler/code-generator-impl.h"
  "./deps/v8/src/compiler/code-generator.h"
  "./deps/v8/src/compiler/code-assembler.h"
  "./deps/v8/src/compiler/common-node-cache.h"
  "./deps/v8/src/compiler/common-operator-reducer.h"
  "./deps/v8/src/compiler/common-operator.h"
  "./deps/v8/src/compiler/control-builders.h"
  "./deps/v8/src/compiler/control-equivalence.h"
  "./deps/v8/src/compiler/control-flow-optimizer.h"
  "./deps/v8/src/compiler/dead-code-elimination.h"
  "./deps/v8/src/compiler/diamond.h"
  "./deps/v8/src/compiler/effect-control-linearizer.h"
  "./deps/v8/src/compiler/escape-analysis.h"
  "./deps/v8/src/compiler/escape-analysis-reducer.h"
  "./deps/v8/src/compiler/frame.h"
  "./deps/v8/src/compiler/frame-elider.h"
  "./deps/v8/src/compiler/frame-states.h"
  "./deps/v8/src/compiler/gap-resolver.h"
  "./deps/v8/src/compiler/graph-assembler.h"
  "./deps/v8/src/compiler/graph-reducer.h"
  "./deps/v8/src/compiler/graph-trimmer.h"
  "./deps/v8/src/compiler/graph-visualizer.h"
  "./deps/v8/src/compiler/graph.h"
  "./deps/v8/src/compiler/instruction-codes.h"
  "./deps/v8/src/compiler/instruction-selector-impl.h"
  "./deps/v8/src/compiler/instruction-selector.h"
  "./deps/v8/src/compiler/instruction-scheduler.h"
  "./deps/v8/src/compiler/instruction.h"
  "./deps/v8/src/compiler/int64-lowering.h"
  "./deps/v8/src/compiler/js-builtin-reducer.h"
  "./deps/v8/src/compiler/js-call-reducer.h"
  "./deps/v8/src/compiler/js-context-specialization.h"
  "./deps/v8/src/compiler/js-create-lowering.h"
  "./deps/v8/src/compiler/js-frame-specialization.h"
  "./deps/v8/src/compiler/js-generic-lowering.h"
  "./deps/v8/src/compiler/js-graph.h"
  "./deps/v8/src/compiler/js-inlining.h"
  "./deps/v8/src/compiler/js-inlining-heuristic.h"
  "./deps/v8/src/compiler/js-intrinsic-lowering.h"
  "./deps/v8/src/compiler/js-native-context-specialization.h"
  "./deps/v8/src/compiler/js-operator.h"
  "./deps/v8/src/compiler/js-type-hint-lowering.h"
  "./deps/v8/src/compiler/js-typed-lowering.h"
  "./deps/v8/src/compiler/jump-threading.h"
  "./deps/v8/src/compiler/linkage.h"
  "./deps/v8/src/compiler/liveness-analyzer.h"
  "./deps/v8/src/compiler/live-range-separator.h"
  "./deps/v8/src/compiler/load-elimination.h"
  "./deps/v8/src/compiler/loop-analysis.h"
  "./deps/v8/src/compiler/loop-peeling.h"
  "./deps/v8/src/compiler/loop-variable-optimizer.h"
  "./deps/v8/src/compiler/machine-operator-reducer.h"
  "./deps/v8/src/compiler/machine-operator.h"
  "./deps/v8/src/compiler/machine-graph-verifier.h"
  "./deps/v8/src/compiler/memory-optimizer.h"
  "./deps/v8/src/compiler/move-optimizer.h"
  "./deps/v8/src/compiler/node-aux-data.h"
  "./deps/v8/src/compiler/node-cache.h"
  "./deps/v8/src/compiler/node-marker.h"
  "./deps/v8/src/compiler/node-matchers.h"
  "./deps/v8/src/compiler/node-properties.h"
  "./deps/v8/src/compiler/node.h"
  "./deps/v8/src/compiler/opcodes.h"
  "./deps/v8/src/compiler/operation-typer.h"
  "./deps/v8/src/compiler/operator-properties.h"
  "./deps/v8/src/compiler/operator.h"
  "./deps/v8/src/compiler/osr.h"
  "./deps/v8/src/compiler/pipeline.h"
  "./deps/v8/src/compiler/pipeline-statistics.h"
  "./deps/v8/src/compiler/raw-machine-assembler.h"
  "./deps/v8/src/compiler/redundancy-elimination.h"
  "./deps/v8/src/compiler/register-allocator.h"
  "./deps/v8/src/compiler/register-allocator-verifier.h"
  "./deps/v8/src/compiler/representation-change.h"
  "./deps/v8/src/compiler/schedule.h"
  "./deps/v8/src/compiler/scheduler.h"
  "./deps/v8/src/compiler/select-lowering.h"
  "./deps/v8/src/compiler/simd-scalar-lowering.h"
  "./deps/v8/src/compiler/simplified-lowering.h"
  "./deps/v8/src/compiler/simplified-operator-reducer.h"
  "./deps/v8/src/compiler/simplified-operator.h"
  "./deps/v8/src/compiler/compiler-source-position-table.h"
  "./deps/v8/src/compiler/state-values-utils.h"
  "./deps/v8/src/compiler/store-store-elimination.h"
  "./deps/v8/src/compiler/tail-call-optimization.h"
  "./deps/v8/src/compiler/types.h"
  "./deps/v8/src/compiler/type-cache.h"
  "./deps/v8/src/compiler/typed-optimization.h"
  "./deps/v8/src/compiler/typer.h"
  "./deps/v8/src/compiler/unwinding-info-writer.h"
  "./deps/v8/src/compiler/value-numbering-reducer.h"
  "./deps/v8/src/compiler/verifier.h"
  "./deps/v8/src/compiler/wasm-compiler.h"
  "./deps/v8/src/compiler/zone-stats.h"
  "./deps/v8/src/compiler-dispatcher/compiler-dispatcher.h"
  "./deps/v8/src/compiler-dispatcher/compiler-dispatcher-job.h"
  "./deps/v8/src/compiler-dispatcher/compiler-dispatcher-tracer.h"
  "./deps/v8/src/compiler-dispatcher/optimizing-compile-dispatcher.h"
  "./deps/v8/src/compiler.h"
  "./deps/v8/src/contexts-inl.h"
  "./deps/v8/src/contexts.h"
  "./deps/v8/src/conversions-inl.h"
  "./deps/v8/src/conversions.h"
  "./deps/v8/src/counters-inl.h"
  "./deps/v8/src/counters.h"
  "./deps/v8/src/crankshaft/compilation-phase.h"
  "./deps/v8/src/crankshaft/hydrogen-alias-analysis.h"
  "./deps/v8/src/crankshaft/hydrogen-bce.h"
  "./deps/v8/src/crankshaft/hydrogen-canonicalize.h"
  "./deps/v8/src/crankshaft/hydrogen-check-elimination.h"
  "./deps/v8/src/crankshaft/hydrogen-dce.h"
  "./deps/v8/src/crankshaft/hydrogen-dehoist.h"
  "./deps/v8/src/crankshaft/hydrogen-environment-liveness.h"
  "./deps/v8/src/crankshaft/hydrogen-escape-analysis.h"
  "./deps/v8/src/crankshaft/hydrogen-flow-engine.h"
  "./deps/v8/src/crankshaft/hydrogen-gvn.h"
  "./deps/v8/src/crankshaft/hydrogen-infer-representation.h"
  "./deps/v8/src/crankshaft/hydrogen-infer-types.h"
  "./deps/v8/src/crankshaft/hydrogen-instructions.h"
  "./deps/v8/src/crankshaft/hydrogen-load-elimination.h"
  "./deps/v8/src/crankshaft/hydrogen-mark-unreachable.h"
  "./deps/v8/src/crankshaft/hydrogen-osr.h"
  "./deps/v8/src/crankshaft/hydrogen-range-analysis.h"
  "./deps/v8/src/crankshaft/hydrogen-redundant-phi.h"
  "./deps/v8/src/crankshaft/hydrogen-removable-simulates.h"
  "./deps/v8/src/crankshaft/hydrogen-representation-changes.h"
  "./deps/v8/src/crankshaft/hydrogen-sce.h"
  "./deps/v8/src/crankshaft/hydrogen-store-elimination.h"
  "./deps/v8/src/crankshaft/hydrogen-types.h"
  "./deps/v8/src/crankshaft/hydrogen-uint32-analysis.h"
  "./deps/v8/src/crankshaft/hydrogen.h"
  "./deps/v8/src/crankshaft/lithium-allocator-inl.h"
  "./deps/v8/src/crankshaft/lithium-allocator.h"
  "./deps/v8/src/crankshaft/lithium-codegen.h"
  "./deps/v8/src/crankshaft/lithium.h"
  "./deps/v8/src/crankshaft/lithium-inl.h"
  "./deps/v8/src/crankshaft/typing.h"
  "./deps/v8/src/crankshaft/unique.h"
  "./deps/v8/src/date.h"
  "./deps/v8/src/dateparser-inl.h"
  "./deps/v8/src/dateparser.h"
  "./deps/v8/src/debug/debug-coverage.h"
  "./deps/v8/src/debug/debug-evaluate.h"
  "./deps/v8/src/debug/debug-interface.h"
  "./deps/v8/src/debug/debug-frames.h"
  "./deps/v8/src/debug/debug-scopes.h"
  "./deps/v8/src/debug/debug.h"
  "./deps/v8/src/debug/interface-types.h"
  "./deps/v8/src/debug/liveedit.h"
  "./deps/v8/src/deoptimize-reason.h"
  "./deps/v8/src/deoptimizer.h"
  "./deps/v8/src/disasm.h"
  "./deps/v8/src/disassembler.h"
  "./deps/v8/src/diy-fp.h"
  "./deps/v8/src/double.h"
  "./deps/v8/src/dtoa.h"
  "./deps/v8/src/effects.h"
  "./deps/v8/src/eh-frame.h"
  "./deps/v8/src/elements-kind.h"
  "./deps/v8/src/elements.h"
  "./deps/v8/src/execution.h"
  "./deps/v8/src/extensions/externalize-string-extension.h"
  "./deps/v8/src/extensions/free-buffer-extension.h"
  "./deps/v8/src/extensions/gc-extension.h"
  "./deps/v8/src/extensions/ignition-statistics-extension.h"
  "./deps/v8/src/extensions/statistics-extension.h"
  "./deps/v8/src/extensions/trigger-failure-extension.h"
  "./deps/v8/src/external-reference-table.h"
  "./deps/v8/src/factory.h"
  "./deps/v8/src/fast-dtoa.h"
  "./deps/v8/src/feedback-vector-inl.h"
  "./deps/v8/src/feedback-vector.h"
  "./deps/v8/src/ffi/ffi-compiler.h"
  "./deps/v8/src/field-index.h"
  "./deps/v8/src/field-index-inl.h"
  "./deps/v8/src/field-type.h"
  "./deps/v8/src/find-and-replace-pattern.h"
  "./deps/v8/src/fixed-dtoa.h"
  "./deps/v8/src/flag-definitions.h"
  "./deps/v8/src/flags.h"
  "./deps/v8/src/frames-inl.h"
  "./deps/v8/src/frames.h"
  "./deps/v8/src/full-codegen/full-codegen.h"
  "./deps/v8/src/futex-emulation.h"
  "./deps/v8/src/gdb-jit.h"
  "./deps/v8/src/global-handles.h"
  "./deps/v8/src/globals.h"
  "./deps/v8/src/handles-inl.h"
  "./deps/v8/src/handles.h"
  "./deps/v8/src/heap-symbols.h"
  "./deps/v8/src/heap/array-buffer-tracker-inl.h"
  "./deps/v8/src/heap/array-buffer-tracker.h"
  "./deps/v8/src/heap/code-stats.h"
  "./deps/v8/src/heap/concurrent-marking.h"
  "./deps/v8/src/heap/embedder-tracing.h"
  "./deps/v8/src/heap/memory-reducer.h"
  "./deps/v8/src/heap/gc-idle-time-handler.h"
  "./deps/v8/src/heap/gc-tracer.h"
  "./deps/v8/src/heap/heap-inl.h"
  "./deps/v8/src/heap/heap.h"
  "./deps/v8/src/heap/incremental-marking-inl.h"
  "./deps/v8/src/heap/incremental-marking-job.h"
  "./deps/v8/src/heap/incremental-marking.h"
  "./deps/v8/src/heap/mark-compact-inl.h"
  "./deps/v8/src/heap/mark-compact.h"
  "./deps/v8/src/heap/marking.h"
  "./deps/v8/src/heap/object-stats.h"
  "./deps/v8/src/heap/objects-visiting-inl.h"
  "./deps/v8/src/heap/objects-visiting.h"
  "./deps/v8/src/heap/page-parallel-job.h"
  "./deps/v8/src/heap/remembered-set.h"
  "./deps/v8/src/heap/scavenge-job.h"
  "./deps/v8/src/heap/scavenger-inl.h"
  "./deps/v8/src/heap/scavenger.h"
  "./deps/v8/src/heap/slot-set.h"
  "./deps/v8/src/heap/spaces-inl.h"
  "./deps/v8/src/heap/spaces.h"
  "./deps/v8/src/heap/store-buffer.h"
  "./deps/v8/src/i18n.h"
  "./deps/v8/src/icu_util.h"
  "./deps/v8/src/ic/access-compiler-data.h"
  "./deps/v8/src/ic/access-compiler.h"
  "./deps/v8/src/ic/accessor-assembler.h"
  "./deps/v8/src/ic/binary-op-assembler.h"
  "./deps/v8/src/ic/call-optimization.h"
  "./deps/v8/src/ic/handler-compiler.h"
  "./deps/v8/src/ic/handler-configuration-inl.h"
  "./deps/v8/src/ic/handler-configuration.h"
  "./deps/v8/src/ic/ic-inl.h"
  "./deps/v8/src/ic/ic-state.h"
  "./deps/v8/src/ic/ic-stats.h"
  "./deps/v8/src/ic/ic.h"
  "./deps/v8/src/ic/keyed-store-generic.h"
  "./deps/v8/src/identity-map.h"
  "./deps/v8/src/interface-descriptors.h"
  "./deps/v8/src/interpreter/bytecodes.h"
  "./deps/v8/src/interpreter/bytecode-array-accessor.h"
  "./deps/v8/src/interpreter/bytecode-array-builder.h"
  "./deps/v8/src/interpreter/bytecode-array-iterator.h"
  "./deps/v8/src/interpreter/bytecode-array-random-iterator.h"
  "./deps/v8/src/interpreter/bytecode-array-writer.h"
  "./deps/v8/src/interpreter/bytecode-decoder.h"
  "./deps/v8/src/interpreter/bytecode-flags.h"
  "./deps/v8/src/interpreter/bytecode-generator.h"
  "./deps/v8/src/interpreter/bytecode-label.h"
  "./deps/v8/src/interpreter/bytecode-operands.h"
  "./deps/v8/src/interpreter/bytecode-pipeline.h"
  "./deps/v8/src/interpreter/bytecode-register.h"
  "./deps/v8/src/interpreter/bytecode-register-allocator.h"
  "./deps/v8/src/interpreter/bytecode-register-optimizer.h"
  "./deps/v8/src/interpreter/bytecode-traits.h"
  "./deps/v8/src/interpreter/constant-array-builder.h"
  "./deps/v8/src/interpreter/control-flow-builders.h"
  "./deps/v8/src/interpreter/handler-table-builder.h"
  "./deps/v8/src/interpreter/interpreter.h"
  "./deps/v8/src/interpreter/interpreter-assembler.h"
  "./deps/v8/src/interpreter/interpreter-generator.h"
  "./deps/v8/src/interpreter/interpreter-intrinsics.h"
  "./deps/v8/src/interpreter/interpreter-intrinsics-generator.h"
  "./deps/v8/src/interpreter/setup-interpreter.h"
  "./deps/v8/src/isolate-inl.h"
  "./deps/v8/src/isolate.h"
  "./deps/v8/src/json-parser.h"
  "./deps/v8/src/json-stringifier.h"
  "./deps/v8/src/keys.h"
  "./deps/v8/src/label.h"
  "./deps/v8/src/layout-descriptor-inl.h"
  "./deps/v8/src/layout-descriptor.h"
  "./deps/v8/src/list-inl.h"
  "./deps/v8/src/list.h"
  "./deps/v8/src/locked-queue-inl.h"
  "./deps/v8/src/locked-queue.h"
  "./deps/v8/src/log-inl.h"
  "./deps/v8/src/log-utils.h"
  "./deps/v8/src/log.h"
  "./deps/v8/src/lookup-cache-inl.h"
  "./deps/v8/src/lookup-cache.h"
  "./deps/v8/src/lookup.h"
  "./deps/v8/src/map-updater.h"
  "./deps/v8/src/macro-assembler-inl.h"
  "./deps/v8/src/macro-assembler.h"
  "./deps/v8/src/machine-type.h"
  "./deps/v8/src/managed.h"
  "./deps/v8/src/messages.h"
  "./deps/v8/src/msan.h"
  "./deps/v8/src/objects-body-descriptors-inl.h"
  "./deps/v8/src/objects-body-descriptors.h"
  "./deps/v8/src/objects-inl.h"
  "./deps/v8/src/objects.h"
  "./deps/v8/src/objects/code-cache.h"
  "./deps/v8/src/objects/code-cache-inl.h"
  "./deps/v8/src/objects/compilation-cache.h"
  "./deps/v8/src/objects/compilation-cache-inl.h"
  "./deps/v8/src/objects/descriptor-array.h"
  "./deps/v8/src/objects/dictionary.h"
  "./deps/v8/src/objects/frame-array.h"
  "./deps/v8/src/objects/frame-array-inl.h"
  "./deps/v8/src/objects/hash-table.h"
  "./deps/v8/src/objects/literal-objects.h"
  "./deps/v8/src/objects/module-info.h"
  "./deps/v8/src/objects/object-macros.h"
  "./deps/v8/src/objects/object-macros-undef.h"
  "./deps/v8/src/objects/regexp-match-info.h"
  "./deps/v8/src/objects/scope-info.h"
  "./deps/v8/src/objects/string-table.h"
  "./deps/v8/src/ostreams.h"
  "./deps/v8/src/parsing/duplicate-finder.h"
  "./deps/v8/src/parsing/expression-classifier.h"
  "./deps/v8/src/parsing/func-name-inferrer.h"
  "./deps/v8/src/parsing/parameter-initializer-rewriter.h"
  "./deps/v8/src/parsing/parse-info.h"
  "./deps/v8/src/parsing/parser-base.h"
  "./deps/v8/src/parsing/parser.h"
  "./deps/v8/src/parsing/parsing.h"
  "./deps/v8/src/parsing/preparse-data-format.h"
  "./deps/v8/src/parsing/preparse-data.h"
  "./deps/v8/src/parsing/preparsed-scope-data.h"
  "./deps/v8/src/parsing/preparser.h"
  "./deps/v8/src/parsing/rewriter.h"
  "./deps/v8/src/parsing/scanner-character-streams.h"
  "./deps/v8/src/parsing/scanner.h"
  "./deps/v8/src/parsing/token.h"
  "./deps/v8/src/pending-compilation-error-handler.h"
  "./deps/v8/src/perf-jit.h"
  "./deps/v8/src/profiler/allocation-tracker.h"
  "./deps/v8/src/profiler/circular-queue-inl.h"
  "./deps/v8/src/profiler/circular-queue.h"
  "./deps/v8/src/profiler/cpu-profiler-inl.h"
  "./deps/v8/src/profiler/cpu-profiler.h"
  "./deps/v8/src/profiler/heap-profiler.h"
  "./deps/v8/src/profiler/heap-snapshot-generator-inl.h"
  "./deps/v8/src/profiler/heap-snapshot-generator.h"
  "./deps/v8/src/profiler/profiler-listener.h"
  "./deps/v8/src/profiler/profile-generator-inl.h"
  "./deps/v8/src/profiler/profile-generator.h"
  "./deps/v8/src/profiler/sampling-heap-profiler.h"
  "./deps/v8/src/profiler/strings-storage.h"
  "./deps/v8/src/profiler/tick-sample.h"
  "./deps/v8/src/profiler/tracing-cpu-profiler.h"
  "./deps/v8/src/profiler/unbound-queue-inl.h"
  "./deps/v8/src/profiler/unbound-queue.h"
  "./deps/v8/src/property-descriptor.h"
  "./deps/v8/src/property-details.h"
  "./deps/v8/src/property.h"
  "./deps/v8/src/prototype.h"
  "./deps/v8/src/regexp/bytecodes-irregexp.h"
  "./deps/v8/src/regexp/interpreter-irregexp.h"
  "./deps/v8/src/regexp/jsregexp-inl.h"
  "./deps/v8/src/regexp/jsregexp.h"
  "./deps/v8/src/regexp/regexp-ast.h"
  "./deps/v8/src/regexp/regexp-macro-assembler-irregexp-inl.h"
  "./deps/v8/src/regexp/regexp-macro-assembler-irregexp.h"
  "./deps/v8/src/regexp/regexp-macro-assembler-tracer.h"
  "./deps/v8/src/regexp/regexp-macro-assembler.h"
  "./deps/v8/src/regexp/regexp-parser.h"
  "./deps/v8/src/regexp/regexp-stack.h"
  "./deps/v8/src/regexp/regexp-utils.h"
  "./deps/v8/src/register-configuration.h"
  "./deps/v8/src/runtime-profiler.h"
  "./deps/v8/src/runtime/runtime-utils.h"
  "./deps/v8/src/runtime/runtime.h"
  "./deps/v8/src/safepoint-table.h"
  "./deps/v8/src/setup-isolate.h"
  "./deps/v8/src/signature.h"
  "./deps/v8/src/simulator.h"
  "./deps/v8/src/small-pointer-list.h"
  "./deps/v8/src/snapshot/code-serializer.h"
  "./deps/v8/src/snapshot/deserializer.h"
  "./deps/v8/src/snapshot/natives.h"
  "./deps/v8/src/snapshot/partial-serializer.h"
  "./deps/v8/src/snapshot/serializer.h"
  "./deps/v8/src/snapshot/serializer-common.h"
  "./deps/v8/src/snapshot/snapshot.h"
  "./deps/v8/src/snapshot/snapshot-source-sink.h"
  "./deps/v8/src/snapshot/startup-serializer.h"
  "./deps/v8/src/source-position-table.h"
  "./deps/v8/src/source-position.h"
  "./deps/v8/src/splay-tree.h"
  "./deps/v8/src/splay-tree-inl.h"
  "./deps/v8/src/startup-data-util.h"
  "./deps/v8/src/string-builder.h"
  "./deps/v8/src/string-case.h"
  "./deps/v8/src/string-search.h"
  "./deps/v8/src/string-stream.h"
  "./deps/v8/src/strtod.h"
  "./deps/v8/src/ic/stub-cache.h"
  "./deps/v8/src/tracing/trace-event.h"
  "./deps/v8/src/tracing/traced-value.h"
  "./deps/v8/src/tracing/tracing-category-observer.h"
  "./deps/v8/src/transitions-inl.h"
  "./deps/v8/src/transitions.h"
  "./deps/v8/src/trap-handler/trap-handler.h"
  "./deps/v8/src/trap-handler/trap-handler-internal.h"
  "./deps/v8/src/type-hints.h"
  "./deps/v8/src/type-info.h"
  "./deps/v8/src/unicode-inl.h"
  "./deps/v8/src/unicode.h"
  "./deps/v8/src/unicode-cache-inl.h"
  "./deps/v8/src/unicode-cache.h"
  "./deps/v8/src/unicode-decoder.h"
  "./deps/v8/src/uri.h"
  "./deps/v8/src/utils-inl.h"
  "./deps/v8/src/utils.h"
  "./deps/v8/src/v8.h"
  "./deps/v8/src/v8memory.h"
  "./deps/v8/src/v8threads.h"
  "./deps/v8/src/value-serializer.h"
  "./deps/v8/src/vector.h"
  "./deps/v8/src/version.h"
  "./deps/v8/src/vm-state-inl.h"
  "./deps/v8/src/vm-state.h"
  "./deps/v8/src/wasm/decoder.h"
  "./deps/v8/src/wasm/function-body-decoder.h"
  "./deps/v8/src/wasm/function-body-decoder-impl.h"
  "./deps/v8/src/wasm/leb-helper.h"
  "./deps/v8/src/wasm/module-decoder.h"
  "./deps/v8/src/wasm/signature-map.h"
  "./deps/v8/src/wasm/wasm-code-specialization.h"
  "./deps/v8/src/wasm/wasm-external-refs.h"
  "./deps/v8/src/wasm/wasm-js.h"
  "./deps/v8/src/wasm/wasm-limits.h"
  "./deps/v8/src/wasm/wasm-macro-gen.h"
  "./deps/v8/src/wasm/wasm-module.h"
  "./deps/v8/src/wasm/wasm-module-builder.h"
  "./deps/v8/src/wasm/wasm-interpreter.h"
  "./deps/v8/src/wasm/wasm-objects.h"
  "./deps/v8/src/wasm/wasm-opcodes.h"
  "./deps/v8/src/wasm/wasm-result.h"
  "./deps/v8/src/wasm/wasm-text.h"
  "./deps/v8/src/zone/accounting-allocator.h"
  "./deps/v8/src/zone/zone-segment.h"
  "./deps/v8/src/zone/zone.h"
  "./deps/v8/src/zone/zone-chunk-list.h"
  "./deps/v8/src/zone/zone-allocator.h"
  "./deps/v8/src/zone/zone-containers.h"
  "./deps/v8/src/zone/zone-handle-set.h"
  "./deps/v8/src/compiler/x64/instruction-codes-x64.h"
  "./deps/v8/src/compiler/x64/unwinding-info-writer-x64.h"
  "./deps/v8/src/crankshaft/x64/lithium-codegen-x64.h"
  "./deps/v8/src/crankshaft/x64/lithium-gap-resolver-x64.h"
  "./deps/v8/src/crankshaft/x64/lithium-x64.h"
  "./deps/v8/src/x64/assembler-x64-inl.h"
  "./deps/v8/src/x64/assembler-x64.h"
  "./deps/v8/src/x64/code-stubs-x64.h"
  "./deps/v8/src/x64/codegen-x64.h"
  "./deps/v8/src/x64/frames-x64.h"
  "./deps/v8/src/x64/macro-assembler-x64.h"
  "./deps/v8/src/x64/simulator-x64.h"
  "./deps/v8/src/x64/sse-instr.h"
  "./deps/v8/src/regexp/x64/regexp-macro-assembler-x64.h"
  "./deps/v8/src/third_party/valgrind/valgrind.h")
add_library(v8_base STATIC ${v8_base__cxx_srcs} ${v8_base__other_srcs})
set_target_properties(v8_base PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${v8_base__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(v8_base PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/v8/src")
set_target_properties(v8_base PROPERTIES PREFIX "lib")
set_target_properties(v8_base PROPERTIES ARCHIVE_OUTPUT_NAME "v8_base")
set_target_properties(v8_base PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/v8/src/libv8_base.a PROPERTIES GENERATED "TRUE")
list(APPEND v8_base__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8"
  "${CMAKE_CURRENT_LIST_DIR}/"
  "${obj}/gen"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common")
set_property(TARGET v8_base APPEND PROPERTY INCLUDE_DIRECTORIES ${v8_base__include_dirs})
set_target_properties(v8_base PROPERTIES COMPILE_DEFINITIONS "V8_GYP_BUILD;_DARWIN_USE_64_BIT_INODE=1;V8_TARGET_ARCH_X64;ENABLE_DISASSEMBLER;V8_PROMISE_INTERNAL_FIELD_COUNT;v8_promise_internal_field_count;V8_I18N_SUPPORT;ICU_UTIL_DATA_IMPL=ICU_UTIL_DATA_STATIC;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_STATIC_IMPLEMENTATION=1;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;V8_ENABLE_CHECKS;OBJECT_PRINT;VERIFY_HEAP;DEBUG;TRACE_MAPS;ENABLE_HANDLE_ZAPPING;ENABLE_SLOW_DCHECKS;_DEBUG;")
set_target_properties(v8_base PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(v8_base PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(v8_base
  protocol_generated_sources
  inspector_injected_script
  inspector_debugger_script
  icuuc
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:v8_nosnapshot#target
set(TARGET "v8_nosnapshot")
set(TOOLSET "target")
list(APPEND v8_nosnapshot__cxx_srcs
  "${obj}/gen/libraries.cc"
  "${obj}/gen/extras-libraries.cc"
  "${obj}/gen/experimental-extras-libraries.cc"
  "./deps/v8/src/snapshot/snapshot-empty.cc")
add_library(v8_nosnapshot STATIC ${v8_nosnapshot__cxx_srcs})
set_target_properties(v8_nosnapshot PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(v8_nosnapshot PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/v8/src")
set_target_properties(v8_nosnapshot PROPERTIES PREFIX "lib")
set_target_properties(v8_nosnapshot PROPERTIES ARCHIVE_OUTPUT_NAME "v8_nosnapshot")
set_target_properties(v8_nosnapshot PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/v8/src/libv8_nosnapshot.a PROPERTIES GENERATED "TRUE")
list(APPEND v8_nosnapshot__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8"
  "${CMAKE_CURRENT_LIST_DIR}/")
set_property(TARGET v8_nosnapshot APPEND PROPERTY INCLUDE_DIRECTORIES ${v8_nosnapshot__include_dirs})
set_target_properties(v8_nosnapshot PROPERTIES COMPILE_DEFINITIONS "V8_GYP_BUILD;_DARWIN_USE_64_BIT_INODE=1;V8_TARGET_ARCH_X64;ENABLE_DISASSEMBLER;V8_PROMISE_INTERNAL_FIELD_COUNT;v8_promise_internal_field_count;V8_I18N_SUPPORT;V8_ENABLE_CHECKS;OBJECT_PRINT;VERIFY_HEAP;DEBUG;TRACE_MAPS;ENABLE_HANDLE_ZAPPING;ENABLE_SLOW_DCHECKS;_DEBUG;")
set_target_properties(v8_nosnapshot PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(v8_nosnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(v8_nosnapshot
  js2c
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:mksnapshot#target
set(TARGET "mksnapshot")
set(TOOLSET "target")
set(mksnapshot__cxx_srcs "./deps/v8/src/snapshot/mksnapshot.cc")
add_executable(mksnapshot ${mksnapshot__cxx_srcs})
set_target_properties(mksnapshot PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(mksnapshot PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(mksnapshot PROPERTIES PREFIX "")
set_target_properties(mksnapshot PROPERTIES RUNTIME_OUTPUT_NAME "mksnapshot")
set_target_properties(mksnapshot PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/mksnapshot PROPERTIES GENERATED "TRUE")
list(APPEND mksnapshot__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8"
  "${CMAKE_CURRENT_LIST_DIR}/"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common")
set_property(TARGET mksnapshot APPEND PROPERTY INCLUDE_DIRECTORIES ${mksnapshot__include_dirs})
set_target_properties(mksnapshot PROPERTIES COMPILE_DEFINITIONS "V8_GYP_BUILD;_DARWIN_USE_64_BIT_INODE=1;V8_TARGET_ARCH_X64;ENABLE_DISASSEMBLER;V8_PROMISE_INTERNAL_FIELD_COUNT;v8_promise_internal_field_count;V8_I18N_SUPPORT;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_STATIC_IMPLEMENTATION=1;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;V8_ENABLE_CHECKS;OBJECT_PRINT;VERIFY_HEAP;DEBUG;TRACE_MAPS;ENABLE_HANDLE_ZAPPING;ENABLE_SLOW_DCHECKS;_DEBUG;")
set_target_properties(mksnapshot PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(mksnapshot PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(mksnapshot
  icuuc
  protocol_generated_sources
  protocol_compatibility
  inspector_injected_script
  inspector_debugger_script
  icu_implementation
  icu_uconfig
  icu_uconfig_target
  js2c
)
target_link_libraries(mksnapshot
  v8_base
  v8_libbase
  v8_nosnapshot
  v8_libplatform
  icui18n
  v8_libsampler
  icuucx
  icudata
  icustubdata
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:v8_snapshot#target
set(TARGET "v8_snapshot")
set(TOOLSET "target")
set(v8_snapshot__run_mksnapshot__input "${builddir}/mksnapshot")
set(v8_snapshot__run_mksnapshot__output "${obj}.${TOOLSET}/${TARGET}/geni/snapshot.cc")
add_custom_command(OUTPUT ${v8_snapshot__run_mksnapshot__output}
  COMMAND ${CMAKE_COMMAND} -E make_directory ${obj}.${TOOLSET}/${TARGET}/geni
  COMMAND "${builddir}/mksnapshot" --startup_src "${obj}.${TOOLSET}/${TARGET}/geni/snapshot.cc" ""
  DEPENDS ${v8_snapshot__run_mksnapshot__input}
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/deps/v8/src
  COMMENT v8_snapshot__run_mksnapshot
  VERBATIM
)
add_custom_target(v8_snapshot__run_mksnapshot
  DEPENDS ${v8_snapshot__run_mksnapshot__output}
  SOURCES ${v8_snapshot__run_mksnapshot__input}
)
list(APPEND v8_snapshot__cxx_srcs
  "${obj}/gen/libraries.cc"
  "${obj}/gen/extras-libraries.cc"
  "${obj}/gen/experimental-extras-libraries.cc"
  "${obj}.${TOOLSET}/${TARGET}/geni/snapshot.cc")
add_library(v8_snapshot STATIC ${v8_snapshot__cxx_srcs})
set_target_properties(v8_snapshot PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(v8_snapshot__run_mksnapshot PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(v8_snapshot PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/v8/src")
set_target_properties(v8_snapshot PROPERTIES PREFIX "lib")
set_target_properties(v8_snapshot PROPERTIES ARCHIVE_OUTPUT_NAME "v8_snapshot")
set_target_properties(v8_snapshot PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/v8/src/libv8_snapshot.a PROPERTIES GENERATED "TRUE")
list(APPEND v8_snapshot__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8"
  "${CMAKE_CURRENT_LIST_DIR}/")
set_property(TARGET v8_snapshot APPEND PROPERTY INCLUDE_DIRECTORIES ${v8_snapshot__include_dirs})
set_target_properties(v8_snapshot PROPERTIES COMPILE_DEFINITIONS "V8_GYP_BUILD;_DARWIN_USE_64_BIT_INODE=1;V8_TARGET_ARCH_X64;ENABLE_DISASSEMBLER;V8_PROMISE_INTERNAL_FIELD_COUNT;v8_promise_internal_field_count;V8_I18N_SUPPORT;V8_ENABLE_CHECKS;OBJECT_PRINT;VERIFY_HEAP;DEBUG;TRACE_MAPS;ENABLE_HANDLE_ZAPPING;ENABLE_SLOW_DCHECKS;_DEBUG;")
set_target_properties(v8_snapshot PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(v8_snapshot PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(v8_snapshot__run_mksnapshot
  mksnapshot
  js2c
)
add_dependencies(v8_snapshot
  mksnapshot
  js2c
  v8_snapshot__run_mksnapshot
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:v8_maybe_snapshot#target
set(TARGET "v8_maybe_snapshot")
set(TOOLSET "target")
add_custom_target(v8_maybe_snapshot SOURCES)
set_target_properties(v8_maybe_snapshot PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(v8_maybe_snapshot
  v8_base
  v8_snapshot
)
unset(TOOLSET)
unset(TARGET)

#/deps/v8/src/v8.gyp:v8#target
set(TARGET "v8")
set(TOOLSET "target")
add_custom_target(v8 SOURCES)
set_target_properties(v8 PROPERTIES EXCLUDE_FROM_ALL "FALSE")
add_dependencies(v8
  v8_maybe_snapshot
)
unset(TOOLSET)
unset(TARGET)

#/deps/uv/uv.gyp:libuv#target
set(TARGET "libuv")
set(TOOLSET "target")
list(APPEND libuv__c_srcs
  "./deps/uv/src/fs-poll.c"
  "./deps/uv/src/inet.c"
  "./deps/uv/src/threadpool.c"
  "./deps/uv/src/uv-common.c"
  "./deps/uv/src/version.c"
  "./deps/uv/src/unix/async.c"
  "./deps/uv/src/unix/core.c"
  "./deps/uv/src/unix/dl.c"
  "./deps/uv/src/unix/fs.c"
  "./deps/uv/src/unix/getaddrinfo.c"
  "./deps/uv/src/unix/getnameinfo.c"
  "./deps/uv/src/unix/loop.c"
  "./deps/uv/src/unix/loop-watcher.c"
  "./deps/uv/src/unix/pipe.c"
  "./deps/uv/src/unix/poll.c"
  "./deps/uv/src/unix/process.c"
  "./deps/uv/src/unix/signal.c"
  "./deps/uv/src/unix/stream.c"
  "./deps/uv/src/unix/tcp.c"
  "./deps/uv/src/unix/thread.c"
  "./deps/uv/src/unix/timer.c"
  "./deps/uv/src/unix/tty.c"
  "./deps/uv/src/unix/udp.c"
  "./deps/uv/src/unix/proctitle.c"
  "./deps/uv/src/unix/darwin.c"
  "./deps/uv/src/unix/fsevents.c"
  "./deps/uv/src/unix/darwin-proctitle.c"
  "./deps/uv/src/unix/pthread-barrier.c"
  "./deps/uv/src/unix/bsd-ifaddrs.c"
  "./deps/uv/src/unix/kqueue.c")
list(APPEND libuv__other_srcs
  "./deps/uv/common.gypi"
  "./deps/uv/include/uv.h"
  "./deps/uv/include/tree.h"
  "./deps/uv/include/uv-errno.h"
  "./deps/uv/include/uv-threadpool.h"
  "./deps/uv/include/uv-version.h"
  "./deps/uv/src/heap-inl.h"
  "./deps/uv/src/queue.h"
  "./deps/uv/src/uv-common.h"
  "./deps/uv/include/uv-unix.h"
  "./deps/uv/include/uv-linux.h"
  "./deps/uv/include/uv-sunos.h"
  "./deps/uv/include/uv-darwin.h"
  "./deps/uv/include/uv-bsd.h"
  "./deps/uv/include/uv-aix.h"
  "./deps/uv/src/unix/atomic-ops.h"
  "./deps/uv/src/unix/internal.h"
  "./deps/uv/src/unix/spinlock.h")
add_library(libuv STATIC ${libuv__c_srcs} ${libuv__other_srcs})
set_target_properties(libuv PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${libuv__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(libuv PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/uv")
set_target_properties(libuv PROPERTIES PREFIX "lib")
set_target_properties(libuv PROPERTIES ARCHIVE_OUTPUT_NAME "uv")
set_target_properties(libuv PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/uv/libuv.a PROPERTIES GENERATED "TRUE")
list(APPEND libuv__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/uv/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/uv/src")
set_property(TARGET libuv APPEND PROPERTY INCLUDE_DIRECTORIES ${libuv__include_dirs})
set_target_properties(libuv PROPERTIES COMPILE_DEFINITIONS "_LARGEFILE_SOURCE;_FILE_OFFSET_BITS=64;_DARWIN_USE_64_BIT_INODE=1;_DARWIN_UNLIMITED_SELECT=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(libuv PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -fvisibility=hidden -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wextra -Wno-unused-parameter -Wstrict-prototypes -Wall -Wendif-labels -W -Wno-unused-parameter -g --std=gnu89 -pedantic -fno-strict-aliasing ")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-g --std=gnu89 -pedantic -fno-strict-aliasing ")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wextra -Wno-unused-parameter -Wstrict-prototypes -Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_GCC_SYMBOLS_PRIVATE_EXTERN "YES")
set_target_properties(libuv PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/uv/uv.gyp:run-tests#target
set(TARGET "run-tests")
set(TOOLSET "target")
list(APPEND run-tests__c_srcs
  "./deps/uv/test/blackhole-server.c"
  "./deps/uv/test/echo-server.c"
  "./deps/uv/test/run-tests.c"
  "./deps/uv/test/runner.c"
  "./deps/uv/test/test-get-loadavg.c"
  "./deps/uv/test/test-active.c"
  "./deps/uv/test/test-async.c"
  "./deps/uv/test/test-async-null-cb.c"
  "./deps/uv/test/test-callback-stack.c"
  "./deps/uv/test/test-callback-order.c"
  "./deps/uv/test/test-close-fd.c"
  "./deps/uv/test/test-close-order.c"
  "./deps/uv/test/test-connection-fail.c"
  "./deps/uv/test/test-cwd-and-chdir.c"
  "./deps/uv/test/test-default-loop-close.c"
  "./deps/uv/test/test-delayed-accept.c"
  "./deps/uv/test/test-eintr-handling.c"
  "./deps/uv/test/test-error.c"
  "./deps/uv/test/test-embed.c"
  "./deps/uv/test/test-emfile.c"
  "./deps/uv/test/test-env-vars.c"
  "./deps/uv/test/test-fail-always.c"
  "./deps/uv/test/test-fork.c"
  "./deps/uv/test/test-fs.c"
  "./deps/uv/test/test-fs-event.c"
  "./deps/uv/test/test-get-currentexe.c"
  "./deps/uv/test/test-get-memory.c"
  "./deps/uv/test/test-get-passwd.c"
  "./deps/uv/test/test-getaddrinfo.c"
  "./deps/uv/test/test-gethostname.c"
  "./deps/uv/test/test-getnameinfo.c"
  "./deps/uv/test/test-getsockname.c"
  "./deps/uv/test/test-handle-fileno.c"
  "./deps/uv/test/test-homedir.c"
  "./deps/uv/test/test-hrtime.c"
  "./deps/uv/test/test-idle.c"
  "./deps/uv/test/test-ip6-addr.c"
  "./deps/uv/test/test-ipc.c"
  "./deps/uv/test/test-ipc-send-recv.c"
  "./deps/uv/test/test-loop-handles.c"
  "./deps/uv/test/test-loop-alive.c"
  "./deps/uv/test/test-loop-close.c"
  "./deps/uv/test/test-loop-stop.c"
  "./deps/uv/test/test-loop-time.c"
  "./deps/uv/test/test-loop-configure.c"
  "./deps/uv/test/test-walk-handles.c"
  "./deps/uv/test/test-watcher-cross-stop.c"
  "./deps/uv/test/test-multiple-listen.c"
  "./deps/uv/test/test-osx-select.c"
  "./deps/uv/test/test-pass-always.c"
  "./deps/uv/test/test-ping-pong.c"
  "./deps/uv/test/test-pipe-bind-error.c"
  "./deps/uv/test/test-pipe-connect-error.c"
  "./deps/uv/test/test-pipe-connect-multiple.c"
  "./deps/uv/test/test-pipe-connect-prepare.c"
  "./deps/uv/test/test-pipe-getsockname.c"
  "./deps/uv/test/test-pipe-pending-instances.c"
  "./deps/uv/test/test-pipe-sendmsg.c"
  "./deps/uv/test/test-pipe-server-close.c"
  "./deps/uv/test/test-pipe-close-stdout-read-stdin.c"
  "./deps/uv/test/test-pipe-set-non-blocking.c"
  "./deps/uv/test/test-platform-output.c"
  "./deps/uv/test/test-poll.c"
  "./deps/uv/test/test-poll-close.c"
  "./deps/uv/test/test-poll-close-doesnt-corrupt-stack.c"
  "./deps/uv/test/test-poll-closesocket.c"
  "./deps/uv/test/test-process-title.c"
  "./deps/uv/test/test-queue-foreach-delete.c"
  "./deps/uv/test/test-ref.c"
  "./deps/uv/test/test-run-nowait.c"
  "./deps/uv/test/test-run-once.c"
  "./deps/uv/test/test-semaphore.c"
  "./deps/uv/test/test-shutdown-close.c"
  "./deps/uv/test/test-shutdown-eof.c"
  "./deps/uv/test/test-shutdown-twice.c"
  "./deps/uv/test/test-signal.c"
  "./deps/uv/test/test-signal-multiple-loops.c"
  "./deps/uv/test/test-socket-buffer-size.c"
  "./deps/uv/test/test-spawn.c"
  "./deps/uv/test/test-fs-poll.c"
  "./deps/uv/test/test-stdio-over-pipes.c"
  "./deps/uv/test/test-tcp-alloc-cb-fail.c"
  "./deps/uv/test/test-tcp-bind-error.c"
  "./deps/uv/test/test-tcp-bind6-error.c"
  "./deps/uv/test/test-tcp-close.c"
  "./deps/uv/test/test-tcp-close-accept.c"
  "./deps/uv/test/test-tcp-close-while-connecting.c"
  "./deps/uv/test/test-tcp-create-socket-early.c"
  "./deps/uv/test/test-tcp-connect-error-after-write.c"
  "./deps/uv/test/test-tcp-shutdown-after-write.c"
  "./deps/uv/test/test-tcp-flags.c"
  "./deps/uv/test/test-tcp-connect-error.c"
  "./deps/uv/test/test-tcp-connect-timeout.c"
  "./deps/uv/test/test-tcp-connect6-error.c"
  "./deps/uv/test/test-tcp-open.c"
  "./deps/uv/test/test-tcp-write-to-half-open-connection.c"
  "./deps/uv/test/test-tcp-write-after-connect.c"
  "./deps/uv/test/test-tcp-writealot.c"
  "./deps/uv/test/test-tcp-write-fail.c"
  "./deps/uv/test/test-tcp-try-write.c"
  "./deps/uv/test/test-tcp-unexpected-read.c"
  "./deps/uv/test/test-tcp-oob.c"
  "./deps/uv/test/test-tcp-read-stop.c"
  "./deps/uv/test/test-tcp-write-queue-order.c"
  "./deps/uv/test/test-threadpool.c"
  "./deps/uv/test/test-threadpool-cancel.c"
  "./deps/uv/test/test-thread-equal.c"
  "./deps/uv/test/test-tmpdir.c"
  "./deps/uv/test/test-mutexes.c"
  "./deps/uv/test/test-thread.c"
  "./deps/uv/test/test-barrier.c"
  "./deps/uv/test/test-condvar.c"
  "./deps/uv/test/test-timer-again.c"
  "./deps/uv/test/test-timer-from-check.c"
  "./deps/uv/test/test-timer.c"
  "./deps/uv/test/test-tty.c"
  "./deps/uv/test/test-udp-alloc-cb-fail.c"
  "./deps/uv/test/test-udp-bind.c"
  "./deps/uv/test/test-udp-create-socket-early.c"
  "./deps/uv/test/test-udp-dgram-too-big.c"
  "./deps/uv/test/test-udp-ipv6.c"
  "./deps/uv/test/test-udp-open.c"
  "./deps/uv/test/test-udp-options.c"
  "./deps/uv/test/test-udp-send-and-recv.c"
  "./deps/uv/test/test-udp-send-hang-loop.c"
  "./deps/uv/test/test-udp-send-immediate.c"
  "./deps/uv/test/test-udp-send-unreachable.c"
  "./deps/uv/test/test-udp-multicast-join.c"
  "./deps/uv/test/test-udp-multicast-join6.c"
  "./deps/uv/test/test-dlerror.c"
  "./deps/uv/test/test-udp-multicast-ttl.c"
  "./deps/uv/test/test-ip4-addr.c"
  "./deps/uv/test/test-udp-multicast-interface.c"
  "./deps/uv/test/test-udp-multicast-interface6.c"
  "./deps/uv/test/test-udp-try-send.c"
  "./deps/uv/test/runner-unix.c")
list(APPEND run-tests__other_srcs
  "./deps/uv/test/runner.h"
  "./deps/uv/test/task.h"
  "./deps/uv/test/test-list.h"
  "./deps/uv/test/runner-unix.h")
add_executable(run-tests ${run-tests__c_srcs} ${run-tests__other_srcs})
set_target_properties(run-tests PROPERTIES EXCLUDE_FROM_ALL "TRUE")
set_source_files_properties(${run-tests__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(run-tests PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(run-tests PROPERTIES PREFIX "")
set_target_properties(run-tests PROPERTIES RUNTIME_OUTPUT_NAME "run-tests")
set_target_properties(run-tests PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/run-tests PROPERTIES GENERATED "TRUE")
set(run-tests__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/uv/include")
set_property(TARGET run-tests APPEND PROPERTY INCLUDE_DIRECTORIES ${run-tests__include_dirs})
set_target_properties(run-tests PROPERTIES COMPILE_DEFINITIONS "_LARGEFILE_SOURCE;_FILE_OFFSET_BITS=64;_DARWIN_USE_64_BIT_INODE=1;_GNU_SOURCE;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(run-tests PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -fvisibility=hidden -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wextra -Wno-unused-parameter -Wstrict-prototypes -Wall -Wendif-labels -W -Wno-unused-parameter -Wno-long-long -g --std=gnu89 -pedantic -fno-strict-aliasing ")
set_target_properties(run-tests PROPERTIES LINK_FLAGS "-pthread ")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-g --std=gnu89 -pedantic -fno-strict-aliasing ")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wextra -Wno-unused-parameter -Wstrict-prototypes -Wall -Wendif-labels -W -Wno-unused-parameter -Wno-long-long ")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_GCC_SYMBOLS_PRIVATE_EXTERN "YES")
set_target_properties(run-tests PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
target_link_libraries(run-tests
  libuv
  "-lutil"
  "-lm"
)
unset(TOOLSET)
unset(TARGET)

#/deps/uv/uv.gyp:run-benchmarks#target
set(TARGET "run-benchmarks")
set(TOOLSET "target")
list(APPEND run-benchmarks__c_srcs
  "./deps/uv/test/benchmark-async.c"
  "./deps/uv/test/benchmark-async-pummel.c"
  "./deps/uv/test/benchmark-fs-stat.c"
  "./deps/uv/test/benchmark-getaddrinfo.c"
  "./deps/uv/test/benchmark-loop-count.c"
  "./deps/uv/test/benchmark-million-async.c"
  "./deps/uv/test/benchmark-million-timers.c"
  "./deps/uv/test/benchmark-multi-accept.c"
  "./deps/uv/test/benchmark-ping-pongs.c"
  "./deps/uv/test/benchmark-pound.c"
  "./deps/uv/test/benchmark-pump.c"
  "./deps/uv/test/benchmark-sizes.c"
  "./deps/uv/test/benchmark-spawn.c"
  "./deps/uv/test/benchmark-thread.c"
  "./deps/uv/test/benchmark-tcp-write-batch.c"
  "./deps/uv/test/benchmark-udp-pummel.c"
  "./deps/uv/test/dns-server.c"
  "./deps/uv/test/echo-server.c"
  "./deps/uv/test/blackhole-server.c"
  "./deps/uv/test/run-benchmarks.c"
  "./deps/uv/test/runner.c"
  "./deps/uv/test/runner-unix.c")
list(APPEND run-benchmarks__other_srcs
  "./deps/uv/test/benchmark-list.h"
  "./deps/uv/test/runner.h"
  "./deps/uv/test/task.h"
  "./deps/uv/test/runner-unix.h")
add_executable(run-benchmarks ${run-benchmarks__c_srcs} ${run-benchmarks__other_srcs})
set_target_properties(run-benchmarks PROPERTIES EXCLUDE_FROM_ALL "TRUE")
set_source_files_properties(${run-benchmarks__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(run-benchmarks PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(run-benchmarks PROPERTIES PREFIX "")
set_target_properties(run-benchmarks PROPERTIES RUNTIME_OUTPUT_NAME "run-benchmarks")
set_target_properties(run-benchmarks PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/run-benchmarks PROPERTIES GENERATED "TRUE")
set(run-benchmarks__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/uv/include")
set_property(TARGET run-benchmarks APPEND PROPERTY INCLUDE_DIRECTORIES ${run-benchmarks__include_dirs})
set_target_properties(run-benchmarks PROPERTIES COMPILE_DEFINITIONS "_LARGEFILE_SOURCE;_FILE_OFFSET_BITS=64;_DARWIN_USE_64_BIT_INODE=1;_GNU_SOURCE;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(run-benchmarks PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -fvisibility=hidden -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wextra -Wno-unused-parameter -Wstrict-prototypes -Wall -Wendif-labels -W -Wno-unused-parameter -g --std=gnu89 -pedantic -fno-strict-aliasing ")
set_target_properties(run-benchmarks PROPERTIES LINK_FLAGS "-pthread ")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-g --std=gnu89 -pedantic -fno-strict-aliasing ")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wextra -Wno-unused-parameter -Wstrict-prototypes -Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_GCC_SYMBOLS_PRIVATE_EXTERN "YES")
set_target_properties(run-benchmarks PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
target_link_libraries(run-benchmarks
  libuv
  "-lm"
)
unset(TOOLSET)
unset(TARGET)

#/deps/openssl/openssl.gyp:openssl#target
set(TARGET "openssl")
set(TOOLSET "target")
list(APPEND openssl__asm_srcs
  "./deps/openssl/asm/x64-macosx-gas/aes/aes-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/aes/aesni-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/aes/vpaes-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/aes/aesni-mb-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/aes/aesni-sha256-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/aes/bsaes-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/aes/aesni-sha1-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/bn/rsaz-avx2.s"
  "./deps/openssl/asm/x64-macosx-gas/bn/rsaz-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/bn/x86_64-mont.s"
  "./deps/openssl/asm/x64-macosx-gas/bn/x86_64-mont5.s"
  "./deps/openssl/asm/x64-macosx-gas/bn/x86_64-gf2m.s"
  "./deps/openssl/asm/x64-macosx-gas/camellia/cmll-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/ec/ecp_nistz256-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/md5/md5-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/sha/sha1-mb-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/sha/sha1-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/sha/sha256-mb-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/sha/sha256-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/sha/sha512-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/whrlpool/wp-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/modes/aesni-gcm-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/modes/ghash-x86_64.s"
  "./deps/openssl/asm/x64-macosx-gas/x86_64cpuid.s")
list(APPEND openssl__c_srcs
  "./deps/openssl/openssl/ssl/bio_ssl.c"
  "./deps/openssl/openssl/ssl/d1_both.c"
  "./deps/openssl/openssl/ssl/d1_clnt.c"
  "./deps/openssl/openssl/ssl/d1_lib.c"
  "./deps/openssl/openssl/ssl/d1_meth.c"
  "./deps/openssl/openssl/ssl/d1_pkt.c"
  "./deps/openssl/openssl/ssl/d1_srtp.c"
  "./deps/openssl/openssl/ssl/d1_srvr.c"
  "./deps/openssl/openssl/ssl/kssl.c"
  "./deps/openssl/openssl/ssl/s23_clnt.c"
  "./deps/openssl/openssl/ssl/s23_lib.c"
  "./deps/openssl/openssl/ssl/s23_meth.c"
  "./deps/openssl/openssl/ssl/s23_pkt.c"
  "./deps/openssl/openssl/ssl/s23_srvr.c"
  "./deps/openssl/openssl/ssl/s2_clnt.c"
  "./deps/openssl/openssl/ssl/s2_enc.c"
  "./deps/openssl/openssl/ssl/s2_lib.c"
  "./deps/openssl/openssl/ssl/s2_meth.c"
  "./deps/openssl/openssl/ssl/s2_pkt.c"
  "./deps/openssl/openssl/ssl/s2_srvr.c"
  "./deps/openssl/openssl/ssl/s3_both.c"
  "./deps/openssl/openssl/ssl/s3_cbc.c"
  "./deps/openssl/openssl/ssl/s3_clnt.c"
  "./deps/openssl/openssl/ssl/s3_enc.c"
  "./deps/openssl/openssl/ssl/s3_lib.c"
  "./deps/openssl/openssl/ssl/s3_meth.c"
  "./deps/openssl/openssl/ssl/s3_pkt.c"
  "./deps/openssl/openssl/ssl/s3_srvr.c"
  "./deps/openssl/openssl/ssl/ssl_algs.c"
  "./deps/openssl/openssl/ssl/ssl_asn1.c"
  "./deps/openssl/openssl/ssl/ssl_cert.c"
  "./deps/openssl/openssl/ssl/ssl_ciph.c"
  "./deps/openssl/openssl/ssl/ssl_conf.c"
  "./deps/openssl/openssl/ssl/ssl_err.c"
  "./deps/openssl/openssl/ssl/ssl_err2.c"
  "./deps/openssl/openssl/ssl/ssl_lib.c"
  "./deps/openssl/openssl/ssl/ssl_rsa.c"
  "./deps/openssl/openssl/ssl/ssl_sess.c"
  "./deps/openssl/openssl/ssl/ssl_stat.c"
  "./deps/openssl/openssl/ssl/ssl_txt.c"
  "./deps/openssl/openssl/ssl/ssl_utst.c"
  "./deps/openssl/openssl/ssl/t1_clnt.c"
  "./deps/openssl/openssl/ssl/t1_enc.c"
  "./deps/openssl/openssl/ssl/t1_ext.c"
  "./deps/openssl/openssl/ssl/t1_lib.c"
  "./deps/openssl/openssl/ssl/t1_meth.c"
  "./deps/openssl/openssl/ssl/t1_reneg.c"
  "./deps/openssl/openssl/ssl/t1_srvr.c"
  "./deps/openssl/openssl/ssl/t1_trce.c"
  "./deps/openssl/openssl/ssl/tls_srp.c"
  "./deps/openssl/openssl/crypto/aes/aes_cfb.c"
  "./deps/openssl/openssl/crypto/aes/aes_ctr.c"
  "./deps/openssl/openssl/crypto/aes/aes_ecb.c"
  "./deps/openssl/openssl/crypto/aes/aes_ige.c"
  "./deps/openssl/openssl/crypto/aes/aes_misc.c"
  "./deps/openssl/openssl/crypto/aes/aes_ofb.c"
  "./deps/openssl/openssl/crypto/aes/aes_wrap.c"
  "./deps/openssl/openssl/crypto/asn1/a_bitstr.c"
  "./deps/openssl/openssl/crypto/asn1/a_bool.c"
  "./deps/openssl/openssl/crypto/asn1/a_bytes.c"
  "./deps/openssl/openssl/crypto/asn1/a_d2i_fp.c"
  "./deps/openssl/openssl/crypto/asn1/a_digest.c"
  "./deps/openssl/openssl/crypto/asn1/a_dup.c"
  "./deps/openssl/openssl/crypto/asn1/a_enum.c"
  "./deps/openssl/openssl/crypto/asn1/a_gentm.c"
  "./deps/openssl/openssl/crypto/asn1/a_i2d_fp.c"
  "./deps/openssl/openssl/crypto/asn1/a_int.c"
  "./deps/openssl/openssl/crypto/asn1/a_mbstr.c"
  "./deps/openssl/openssl/crypto/asn1/a_object.c"
  "./deps/openssl/openssl/crypto/asn1/a_octet.c"
  "./deps/openssl/openssl/crypto/asn1/a_print.c"
  "./deps/openssl/openssl/crypto/asn1/a_set.c"
  "./deps/openssl/openssl/crypto/asn1/a_sign.c"
  "./deps/openssl/openssl/crypto/asn1/a_strex.c"
  "./deps/openssl/openssl/crypto/asn1/a_strnid.c"
  "./deps/openssl/openssl/crypto/asn1/a_time.c"
  "./deps/openssl/openssl/crypto/asn1/a_type.c"
  "./deps/openssl/openssl/crypto/asn1/a_utctm.c"
  "./deps/openssl/openssl/crypto/asn1/a_utf8.c"
  "./deps/openssl/openssl/crypto/asn1/a_verify.c"
  "./deps/openssl/openssl/crypto/asn1/ameth_lib.c"
  "./deps/openssl/openssl/crypto/asn1/asn1_err.c"
  "./deps/openssl/openssl/crypto/asn1/asn1_gen.c"
  "./deps/openssl/openssl/crypto/asn1/asn1_lib.c"
  "./deps/openssl/openssl/crypto/asn1/asn1_par.c"
  "./deps/openssl/openssl/crypto/asn1/asn_mime.c"
  "./deps/openssl/openssl/crypto/asn1/asn_moid.c"
  "./deps/openssl/openssl/crypto/asn1/asn_pack.c"
  "./deps/openssl/openssl/crypto/asn1/bio_asn1.c"
  "./deps/openssl/openssl/crypto/asn1/bio_ndef.c"
  "./deps/openssl/openssl/crypto/asn1/d2i_pr.c"
  "./deps/openssl/openssl/crypto/asn1/d2i_pu.c"
  "./deps/openssl/openssl/crypto/asn1/evp_asn1.c"
  "./deps/openssl/openssl/crypto/asn1/f_enum.c"
  "./deps/openssl/openssl/crypto/asn1/f_int.c"
  "./deps/openssl/openssl/crypto/asn1/f_string.c"
  "./deps/openssl/openssl/crypto/asn1/i2d_pr.c"
  "./deps/openssl/openssl/crypto/asn1/i2d_pu.c"
  "./deps/openssl/openssl/crypto/asn1/n_pkey.c"
  "./deps/openssl/openssl/crypto/asn1/nsseq.c"
  "./deps/openssl/openssl/crypto/asn1/p5_pbe.c"
  "./deps/openssl/openssl/crypto/asn1/p5_pbev2.c"
  "./deps/openssl/openssl/crypto/asn1/p8_pkey.c"
  "./deps/openssl/openssl/crypto/asn1/t_bitst.c"
  "./deps/openssl/openssl/crypto/asn1/t_crl.c"
  "./deps/openssl/openssl/crypto/asn1/t_pkey.c"
  "./deps/openssl/openssl/crypto/asn1/t_req.c"
  "./deps/openssl/openssl/crypto/asn1/t_spki.c"
  "./deps/openssl/openssl/crypto/asn1/t_x509.c"
  "./deps/openssl/openssl/crypto/asn1/t_x509a.c"
  "./deps/openssl/openssl/crypto/asn1/tasn_dec.c"
  "./deps/openssl/openssl/crypto/asn1/tasn_enc.c"
  "./deps/openssl/openssl/crypto/asn1/tasn_fre.c"
  "./deps/openssl/openssl/crypto/asn1/tasn_new.c"
  "./deps/openssl/openssl/crypto/asn1/tasn_prn.c"
  "./deps/openssl/openssl/crypto/asn1/tasn_typ.c"
  "./deps/openssl/openssl/crypto/asn1/tasn_utl.c"
  "./deps/openssl/openssl/crypto/asn1/x_algor.c"
  "./deps/openssl/openssl/crypto/asn1/x_attrib.c"
  "./deps/openssl/openssl/crypto/asn1/x_bignum.c"
  "./deps/openssl/openssl/crypto/asn1/x_crl.c"
  "./deps/openssl/openssl/crypto/asn1/x_exten.c"
  "./deps/openssl/openssl/crypto/asn1/x_info.c"
  "./deps/openssl/openssl/crypto/asn1/x_long.c"
  "./deps/openssl/openssl/crypto/asn1/x_name.c"
  "./deps/openssl/openssl/crypto/asn1/x_nx509.c"
  "./deps/openssl/openssl/crypto/asn1/x_pkey.c"
  "./deps/openssl/openssl/crypto/asn1/x_pubkey.c"
  "./deps/openssl/openssl/crypto/asn1/x_req.c"
  "./deps/openssl/openssl/crypto/asn1/x_sig.c"
  "./deps/openssl/openssl/crypto/asn1/x_spki.c"
  "./deps/openssl/openssl/crypto/asn1/x_val.c"
  "./deps/openssl/openssl/crypto/asn1/x_x509.c"
  "./deps/openssl/openssl/crypto/asn1/x_x509a.c"
  "./deps/openssl/openssl/crypto/bf/bf_cfb64.c"
  "./deps/openssl/openssl/crypto/bf/bf_ecb.c"
  "./deps/openssl/openssl/crypto/bf/bf_ofb64.c"
  "./deps/openssl/openssl/crypto/bf/bf_skey.c"
  "./deps/openssl/openssl/crypto/bio/b_dump.c"
  "./deps/openssl/openssl/crypto/bio/b_print.c"
  "./deps/openssl/openssl/crypto/bio/b_sock.c"
  "./deps/openssl/openssl/crypto/bio/bf_buff.c"
  "./deps/openssl/openssl/crypto/bio/bf_nbio.c"
  "./deps/openssl/openssl/crypto/bio/bf_null.c"
  "./deps/openssl/openssl/crypto/bio/bio_cb.c"
  "./deps/openssl/openssl/crypto/bio/bio_err.c"
  "./deps/openssl/openssl/crypto/bio/bio_lib.c"
  "./deps/openssl/openssl/crypto/bio/bss_acpt.c"
  "./deps/openssl/openssl/crypto/bio/bss_bio.c"
  "./deps/openssl/openssl/crypto/bio/bss_conn.c"
  "./deps/openssl/openssl/crypto/bio/bss_dgram.c"
  "./deps/openssl/openssl/crypto/bio/bss_fd.c"
  "./deps/openssl/openssl/crypto/bio/bss_file.c"
  "./deps/openssl/openssl/crypto/bio/bss_log.c"
  "./deps/openssl/openssl/crypto/bio/bss_mem.c"
  "./deps/openssl/openssl/crypto/bio/bss_null.c"
  "./deps/openssl/openssl/crypto/bio/bss_sock.c"
  "./deps/openssl/openssl/crypto/bn/bn_add.c"
  "./deps/openssl/openssl/crypto/bn/bn_blind.c"
  "./deps/openssl/openssl/crypto/bn/bn_const.c"
  "./deps/openssl/openssl/crypto/bn/bn_ctx.c"
  "./deps/openssl/openssl/crypto/bn/bn_depr.c"
  "./deps/openssl/openssl/crypto/bn/bn_div.c"
  "./deps/openssl/openssl/crypto/bn/bn_err.c"
  "./deps/openssl/openssl/crypto/bn/bn_exp.c"
  "./deps/openssl/openssl/crypto/bn/bn_exp2.c"
  "./deps/openssl/openssl/crypto/bn/bn_gcd.c"
  "./deps/openssl/openssl/crypto/bn/bn_gf2m.c"
  "./deps/openssl/openssl/crypto/bn/bn_kron.c"
  "./deps/openssl/openssl/crypto/bn/bn_lib.c"
  "./deps/openssl/openssl/crypto/bn/bn_mod.c"
  "./deps/openssl/openssl/crypto/bn/bn_mont.c"
  "./deps/openssl/openssl/crypto/bn/bn_mpi.c"
  "./deps/openssl/openssl/crypto/bn/bn_mul.c"
  "./deps/openssl/openssl/crypto/bn/bn_nist.c"
  "./deps/openssl/openssl/crypto/bn/bn_prime.c"
  "./deps/openssl/openssl/crypto/bn/bn_print.c"
  "./deps/openssl/openssl/crypto/bn/bn_rand.c"
  "./deps/openssl/openssl/crypto/bn/bn_recp.c"
  "./deps/openssl/openssl/crypto/bn/bn_shift.c"
  "./deps/openssl/openssl/crypto/bn/bn_sqr.c"
  "./deps/openssl/openssl/crypto/bn/bn_sqrt.c"
  "./deps/openssl/openssl/crypto/bn/bn_word.c"
  "./deps/openssl/openssl/crypto/bn/bn_x931p.c"
  "./deps/openssl/openssl/crypto/buffer/buf_err.c"
  "./deps/openssl/openssl/crypto/buffer/buf_str.c"
  "./deps/openssl/openssl/crypto/buffer/buffer.c"
  "./deps/openssl/openssl/crypto/camellia/cmll_cfb.c"
  "./deps/openssl/openssl/crypto/camellia/cmll_ctr.c"
  "./deps/openssl/openssl/crypto/camellia/cmll_ecb.c"
  "./deps/openssl/openssl/crypto/camellia/cmll_ofb.c"
  "./deps/openssl/openssl/crypto/camellia/cmll_utl.c"
  "./deps/openssl/openssl/crypto/cast/c_cfb64.c"
  "./deps/openssl/openssl/crypto/cast/c_ecb.c"
  "./deps/openssl/openssl/crypto/cast/c_ofb64.c"
  "./deps/openssl/openssl/crypto/cast/c_skey.c"
  "./deps/openssl/openssl/crypto/cmac/cm_ameth.c"
  "./deps/openssl/openssl/crypto/cmac/cm_pmeth.c"
  "./deps/openssl/openssl/crypto/cmac/cmac.c"
  "./deps/openssl/openssl/crypto/cms/cms_asn1.c"
  "./deps/openssl/openssl/crypto/cms/cms_att.c"
  "./deps/openssl/openssl/crypto/cms/cms_cd.c"
  "./deps/openssl/openssl/crypto/cms/cms_dd.c"
  "./deps/openssl/openssl/crypto/cms/cms_enc.c"
  "./deps/openssl/openssl/crypto/cms/cms_env.c"
  "./deps/openssl/openssl/crypto/cms/cms_err.c"
  "./deps/openssl/openssl/crypto/cms/cms_ess.c"
  "./deps/openssl/openssl/crypto/cms/cms_io.c"
  "./deps/openssl/openssl/crypto/cms/cms_kari.c"
  "./deps/openssl/openssl/crypto/cms/cms_lib.c"
  "./deps/openssl/openssl/crypto/cms/cms_pwri.c"
  "./deps/openssl/openssl/crypto/cms/cms_sd.c"
  "./deps/openssl/openssl/crypto/cms/cms_smime.c"
  "./deps/openssl/openssl/crypto/conf/conf_api.c"
  "./deps/openssl/openssl/crypto/conf/conf_def.c"
  "./deps/openssl/openssl/crypto/conf/conf_err.c"
  "./deps/openssl/openssl/crypto/conf/conf_lib.c"
  "./deps/openssl/openssl/crypto/conf/conf_mall.c"
  "./deps/openssl/openssl/crypto/conf/conf_mod.c"
  "./deps/openssl/openssl/crypto/conf/conf_sap.c"
  "./deps/openssl/openssl/crypto/cpt_err.c"
  "./deps/openssl/openssl/crypto/cryptlib.c"
  "./deps/openssl/openssl/crypto/cversion.c"
  "./deps/openssl/openssl/crypto/des/cbc_cksm.c"
  "./deps/openssl/openssl/crypto/des/cbc_enc.c"
  "./deps/openssl/openssl/crypto/des/cfb64ede.c"
  "./deps/openssl/openssl/crypto/des/cfb64enc.c"
  "./deps/openssl/openssl/crypto/des/cfb_enc.c"
  "./deps/openssl/openssl/crypto/des/des_old.c"
  "./deps/openssl/openssl/crypto/des/des_old2.c"
  "./deps/openssl/openssl/crypto/des/ecb3_enc.c"
  "./deps/openssl/openssl/crypto/des/ecb_enc.c"
  "./deps/openssl/openssl/crypto/des/ede_cbcm_enc.c"
  "./deps/openssl/openssl/crypto/des/enc_read.c"
  "./deps/openssl/openssl/crypto/des/enc_writ.c"
  "./deps/openssl/openssl/crypto/des/fcrypt.c"
  "./deps/openssl/openssl/crypto/des/ofb64ede.c"
  "./deps/openssl/openssl/crypto/des/ofb64enc.c"
  "./deps/openssl/openssl/crypto/des/ofb_enc.c"
  "./deps/openssl/openssl/crypto/des/pcbc_enc.c"
  "./deps/openssl/openssl/crypto/des/qud_cksm.c"
  "./deps/openssl/openssl/crypto/des/rand_key.c"
  "./deps/openssl/openssl/crypto/des/read2pwd.c"
  "./deps/openssl/openssl/crypto/des/rpc_enc.c"
  "./deps/openssl/openssl/crypto/des/set_key.c"
  "./deps/openssl/openssl/crypto/des/str2key.c"
  "./deps/openssl/openssl/crypto/des/xcbc_enc.c"
  "./deps/openssl/openssl/crypto/dh/dh_ameth.c"
  "./deps/openssl/openssl/crypto/dh/dh_asn1.c"
  "./deps/openssl/openssl/crypto/dh/dh_check.c"
  "./deps/openssl/openssl/crypto/dh/dh_depr.c"
  "./deps/openssl/openssl/crypto/dh/dh_err.c"
  "./deps/openssl/openssl/crypto/dh/dh_gen.c"
  "./deps/openssl/openssl/crypto/dh/dh_kdf.c"
  "./deps/openssl/openssl/crypto/dh/dh_key.c"
  "./deps/openssl/openssl/crypto/dh/dh_lib.c"
  "./deps/openssl/openssl/crypto/dh/dh_pmeth.c"
  "./deps/openssl/openssl/crypto/dh/dh_prn.c"
  "./deps/openssl/openssl/crypto/dh/dh_rfc5114.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_ameth.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_asn1.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_depr.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_err.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_gen.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_key.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_lib.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_ossl.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_pmeth.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_prn.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_sign.c"
  "./deps/openssl/openssl/crypto/dsa/dsa_vrf.c"
  "./deps/openssl/openssl/crypto/dso/dso_beos.c"
  "./deps/openssl/openssl/crypto/dso/dso_dl.c"
  "./deps/openssl/openssl/crypto/dso/dso_dlfcn.c"
  "./deps/openssl/openssl/crypto/dso/dso_err.c"
  "./deps/openssl/openssl/crypto/dso/dso_lib.c"
  "./deps/openssl/openssl/crypto/dso/dso_null.c"
  "./deps/openssl/openssl/crypto/dso/dso_openssl.c"
  "./deps/openssl/openssl/crypto/dso/dso_vms.c"
  "./deps/openssl/openssl/crypto/dso/dso_win32.c"
  "./deps/openssl/openssl/crypto/ebcdic.c"
  "./deps/openssl/openssl/crypto/ec/ec2_mult.c"
  "./deps/openssl/openssl/crypto/ec/ec2_oct.c"
  "./deps/openssl/openssl/crypto/ec/ec2_smpl.c"
  "./deps/openssl/openssl/crypto/ec/ec_ameth.c"
  "./deps/openssl/openssl/crypto/ec/ec_asn1.c"
  "./deps/openssl/openssl/crypto/ec/ec_check.c"
  "./deps/openssl/openssl/crypto/ec/ec_curve.c"
  "./deps/openssl/openssl/crypto/ec/ec_cvt.c"
  "./deps/openssl/openssl/crypto/ec/ec_err.c"
  "./deps/openssl/openssl/crypto/ec/ec_key.c"
  "./deps/openssl/openssl/crypto/ec/ec_lib.c"
  "./deps/openssl/openssl/crypto/ec/ec_mult.c"
  "./deps/openssl/openssl/crypto/ec/ec_oct.c"
  "./deps/openssl/openssl/crypto/ec/ec_pmeth.c"
  "./deps/openssl/openssl/crypto/ec/ec_print.c"
  "./deps/openssl/openssl/crypto/ec/eck_prn.c"
  "./deps/openssl/openssl/crypto/ec/ecp_mont.c"
  "./deps/openssl/openssl/crypto/ec/ecp_nist.c"
  "./deps/openssl/openssl/crypto/ec/ecp_nistp224.c"
  "./deps/openssl/openssl/crypto/ec/ecp_nistp256.c"
  "./deps/openssl/openssl/crypto/ec/ecp_nistp521.c"
  "./deps/openssl/openssl/crypto/ec/ecp_nistputil.c"
  "./deps/openssl/openssl/crypto/ec/ecp_oct.c"
  "./deps/openssl/openssl/crypto/ec/ecp_smpl.c"
  "./deps/openssl/openssl/crypto/ecdh/ech_err.c"
  "./deps/openssl/openssl/crypto/ecdh/ech_kdf.c"
  "./deps/openssl/openssl/crypto/ecdh/ech_key.c"
  "./deps/openssl/openssl/crypto/ecdh/ech_lib.c"
  "./deps/openssl/openssl/crypto/ecdh/ech_ossl.c"
  "./deps/openssl/openssl/crypto/ecdsa/ecs_asn1.c"
  "./deps/openssl/openssl/crypto/ecdsa/ecs_err.c"
  "./deps/openssl/openssl/crypto/ecdsa/ecs_lib.c"
  "./deps/openssl/openssl/crypto/ecdsa/ecs_ossl.c"
  "./deps/openssl/openssl/crypto/ecdsa/ecs_sign.c"
  "./deps/openssl/openssl/crypto/ecdsa/ecs_vrf.c"
  "./deps/openssl/openssl/crypto/engine/eng_all.c"
  "./deps/openssl/openssl/crypto/engine/eng_cnf.c"
  "./deps/openssl/openssl/crypto/engine/eng_cryptodev.c"
  "./deps/openssl/openssl/crypto/engine/eng_ctrl.c"
  "./deps/openssl/openssl/crypto/engine/eng_dyn.c"
  "./deps/openssl/openssl/crypto/engine/eng_err.c"
  "./deps/openssl/openssl/crypto/engine/eng_fat.c"
  "./deps/openssl/openssl/crypto/engine/eng_init.c"
  "./deps/openssl/openssl/crypto/engine/eng_lib.c"
  "./deps/openssl/openssl/crypto/engine/eng_list.c"
  "./deps/openssl/openssl/crypto/engine/eng_openssl.c"
  "./deps/openssl/openssl/crypto/engine/eng_pkey.c"
  "./deps/openssl/openssl/crypto/engine/eng_rdrand.c"
  "./deps/openssl/openssl/crypto/engine/eng_table.c"
  "./deps/openssl/openssl/crypto/engine/tb_asnmth.c"
  "./deps/openssl/openssl/crypto/engine/tb_cipher.c"
  "./deps/openssl/openssl/crypto/engine/tb_dh.c"
  "./deps/openssl/openssl/crypto/engine/tb_digest.c"
  "./deps/openssl/openssl/crypto/engine/tb_dsa.c"
  "./deps/openssl/openssl/crypto/engine/tb_ecdh.c"
  "./deps/openssl/openssl/crypto/engine/tb_ecdsa.c"
  "./deps/openssl/openssl/crypto/engine/tb_pkmeth.c"
  "./deps/openssl/openssl/crypto/engine/tb_rand.c"
  "./deps/openssl/openssl/crypto/engine/tb_rsa.c"
  "./deps/openssl/openssl/crypto/engine/tb_store.c"
  "./deps/openssl/openssl/crypto/err/err.c"
  "./deps/openssl/openssl/crypto/err/err_all.c"
  "./deps/openssl/openssl/crypto/err/err_prn.c"
  "./deps/openssl/openssl/crypto/evp/bio_b64.c"
  "./deps/openssl/openssl/crypto/evp/bio_enc.c"
  "./deps/openssl/openssl/crypto/evp/bio_md.c"
  "./deps/openssl/openssl/crypto/evp/bio_ok.c"
  "./deps/openssl/openssl/crypto/evp/c_all.c"
  "./deps/openssl/openssl/crypto/evp/c_allc.c"
  "./deps/openssl/openssl/crypto/evp/c_alld.c"
  "./deps/openssl/openssl/crypto/evp/digest.c"
  "./deps/openssl/openssl/crypto/evp/e_aes.c"
  "./deps/openssl/openssl/crypto/evp/e_aes_cbc_hmac_sha1.c"
  "./deps/openssl/openssl/crypto/evp/e_aes_cbc_hmac_sha256.c"
  "./deps/openssl/openssl/crypto/evp/e_bf.c"
  "./deps/openssl/openssl/crypto/evp/e_camellia.c"
  "./deps/openssl/openssl/crypto/evp/e_cast.c"
  "./deps/openssl/openssl/crypto/evp/e_des.c"
  "./deps/openssl/openssl/crypto/evp/e_des3.c"
  "./deps/openssl/openssl/crypto/evp/e_idea.c"
  "./deps/openssl/openssl/crypto/evp/e_null.c"
  "./deps/openssl/openssl/crypto/evp/e_old.c"
  "./deps/openssl/openssl/crypto/evp/e_rc2.c"
  "./deps/openssl/openssl/crypto/evp/e_rc4.c"
  "./deps/openssl/openssl/crypto/evp/e_rc4_hmac_md5.c"
  "./deps/openssl/openssl/crypto/evp/e_rc5.c"
  "./deps/openssl/openssl/crypto/evp/e_seed.c"
  "./deps/openssl/openssl/crypto/evp/e_xcbc_d.c"
  "./deps/openssl/openssl/crypto/evp/encode.c"
  "./deps/openssl/openssl/crypto/evp/evp_acnf.c"
  "./deps/openssl/openssl/crypto/evp/evp_cnf.c"
  "./deps/openssl/openssl/crypto/evp/evp_enc.c"
  "./deps/openssl/openssl/crypto/evp/evp_err.c"
  "./deps/openssl/openssl/crypto/evp/evp_key.c"
  "./deps/openssl/openssl/crypto/evp/evp_lib.c"
  "./deps/openssl/openssl/crypto/evp/evp_pbe.c"
  "./deps/openssl/openssl/crypto/evp/evp_pkey.c"
  "./deps/openssl/openssl/crypto/evp/m_dss.c"
  "./deps/openssl/openssl/crypto/evp/m_dss1.c"
  "./deps/openssl/openssl/crypto/evp/m_ecdsa.c"
  "./deps/openssl/openssl/crypto/evp/m_md2.c"
  "./deps/openssl/openssl/crypto/evp/m_md4.c"
  "./deps/openssl/openssl/crypto/evp/m_md5.c"
  "./deps/openssl/openssl/crypto/evp/m_mdc2.c"
  "./deps/openssl/openssl/crypto/evp/m_null.c"
  "./deps/openssl/openssl/crypto/evp/m_ripemd.c"
  "./deps/openssl/openssl/crypto/evp/m_sha.c"
  "./deps/openssl/openssl/crypto/evp/m_sha1.c"
  "./deps/openssl/openssl/crypto/evp/m_sigver.c"
  "./deps/openssl/openssl/crypto/evp/m_wp.c"
  "./deps/openssl/openssl/crypto/evp/names.c"
  "./deps/openssl/openssl/crypto/evp/p5_crpt.c"
  "./deps/openssl/openssl/crypto/evp/p5_crpt2.c"
  "./deps/openssl/openssl/crypto/evp/p_dec.c"
  "./deps/openssl/openssl/crypto/evp/p_enc.c"
  "./deps/openssl/openssl/crypto/evp/p_lib.c"
  "./deps/openssl/openssl/crypto/evp/p_open.c"
  "./deps/openssl/openssl/crypto/evp/p_seal.c"
  "./deps/openssl/openssl/crypto/evp/p_sign.c"
  "./deps/openssl/openssl/crypto/evp/p_verify.c"
  "./deps/openssl/openssl/crypto/evp/pmeth_fn.c"
  "./deps/openssl/openssl/crypto/evp/pmeth_gn.c"
  "./deps/openssl/openssl/crypto/evp/pmeth_lib.c"
  "./deps/openssl/openssl/crypto/ex_data.c"
  "./deps/openssl/openssl/crypto/fips_ers.c"
  "./deps/openssl/openssl/crypto/hmac/hm_ameth.c"
  "./deps/openssl/openssl/crypto/hmac/hm_pmeth.c"
  "./deps/openssl/openssl/crypto/hmac/hmac.c"
  "./deps/openssl/openssl/crypto/idea/i_cbc.c"
  "./deps/openssl/openssl/crypto/idea/i_cfb64.c"
  "./deps/openssl/openssl/crypto/idea/i_ecb.c"
  "./deps/openssl/openssl/crypto/idea/i_ofb64.c"
  "./deps/openssl/openssl/crypto/idea/i_skey.c"
  "./deps/openssl/openssl/crypto/krb5/krb5_asn.c"
  "./deps/openssl/openssl/crypto/lhash/lh_stats.c"
  "./deps/openssl/openssl/crypto/lhash/lhash.c"
  "./deps/openssl/openssl/crypto/md4/md4_dgst.c"
  "./deps/openssl/openssl/crypto/md4/md4_one.c"
  "./deps/openssl/openssl/crypto/md5/md5_dgst.c"
  "./deps/openssl/openssl/crypto/md5/md5_one.c"
  "./deps/openssl/openssl/crypto/mdc2/mdc2_one.c"
  "./deps/openssl/openssl/crypto/mdc2/mdc2dgst.c"
  "./deps/openssl/openssl/crypto/mem.c"
  "./deps/openssl/openssl/crypto/mem_dbg.c"
  "./deps/openssl/openssl/crypto/modes/cbc128.c"
  "./deps/openssl/openssl/crypto/modes/ccm128.c"
  "./deps/openssl/openssl/crypto/modes/cfb128.c"
  "./deps/openssl/openssl/crypto/modes/ctr128.c"
  "./deps/openssl/openssl/crypto/modes/cts128.c"
  "./deps/openssl/openssl/crypto/modes/gcm128.c"
  "./deps/openssl/openssl/crypto/modes/ofb128.c"
  "./deps/openssl/openssl/crypto/modes/wrap128.c"
  "./deps/openssl/openssl/crypto/modes/xts128.c"
  "./deps/openssl/openssl/crypto/o_dir.c"
  "./deps/openssl/openssl/crypto/o_fips.c"
  "./deps/openssl/openssl/crypto/o_init.c"
  "./deps/openssl/openssl/crypto/o_str.c"
  "./deps/openssl/openssl/crypto/o_time.c"
  "./deps/openssl/openssl/crypto/objects/o_names.c"
  "./deps/openssl/openssl/crypto/objects/obj_dat.c"
  "./deps/openssl/openssl/crypto/objects/obj_err.c"
  "./deps/openssl/openssl/crypto/objects/obj_lib.c"
  "./deps/openssl/openssl/crypto/objects/obj_xref.c"
  "./deps/openssl/openssl/crypto/ocsp/ocsp_asn.c"
  "./deps/openssl/openssl/crypto/ocsp/ocsp_cl.c"
  "./deps/openssl/openssl/crypto/ocsp/ocsp_err.c"
  "./deps/openssl/openssl/crypto/ocsp/ocsp_ext.c"
  "./deps/openssl/openssl/crypto/ocsp/ocsp_ht.c"
  "./deps/openssl/openssl/crypto/ocsp/ocsp_lib.c"
  "./deps/openssl/openssl/crypto/ocsp/ocsp_prn.c"
  "./deps/openssl/openssl/crypto/ocsp/ocsp_srv.c"
  "./deps/openssl/openssl/crypto/ocsp/ocsp_vfy.c"
  "./deps/openssl/openssl/crypto/pem/pem_all.c"
  "./deps/openssl/openssl/crypto/pem/pem_err.c"
  "./deps/openssl/openssl/crypto/pem/pem_info.c"
  "./deps/openssl/openssl/crypto/pem/pem_lib.c"
  "./deps/openssl/openssl/crypto/pem/pem_oth.c"
  "./deps/openssl/openssl/crypto/pem/pem_pk8.c"
  "./deps/openssl/openssl/crypto/pem/pem_pkey.c"
  "./deps/openssl/openssl/crypto/pem/pem_seal.c"
  "./deps/openssl/openssl/crypto/pem/pem_sign.c"
  "./deps/openssl/openssl/crypto/pem/pem_x509.c"
  "./deps/openssl/openssl/crypto/pem/pem_xaux.c"
  "./deps/openssl/openssl/crypto/pem/pvkfmt.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_add.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_asn.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_attr.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_crpt.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_crt.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_decr.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_init.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_key.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_kiss.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_mutl.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_npas.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_p8d.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_p8e.c"
  "./deps/openssl/openssl/crypto/pkcs12/p12_utl.c"
  "./deps/openssl/openssl/crypto/pkcs12/pk12err.c"
  "./deps/openssl/openssl/crypto/pkcs7/bio_pk7.c"
  "./deps/openssl/openssl/crypto/pkcs7/pk7_asn1.c"
  "./deps/openssl/openssl/crypto/pkcs7/pk7_attr.c"
  "./deps/openssl/openssl/crypto/pkcs7/pk7_doit.c"
  "./deps/openssl/openssl/crypto/pkcs7/pk7_lib.c"
  "./deps/openssl/openssl/crypto/pkcs7/pk7_mime.c"
  "./deps/openssl/openssl/crypto/pkcs7/pk7_smime.c"
  "./deps/openssl/openssl/crypto/pkcs7/pkcs7err.c"
  "./deps/openssl/openssl/crypto/pqueue/pqueue.c"
  "./deps/openssl/openssl/crypto/rand/md_rand.c"
  "./deps/openssl/openssl/crypto/rand/rand_egd.c"
  "./deps/openssl/openssl/crypto/rand/rand_err.c"
  "./deps/openssl/openssl/crypto/rand/rand_lib.c"
  "./deps/openssl/openssl/crypto/rand/rand_nw.c"
  "./deps/openssl/openssl/crypto/rand/rand_os2.c"
  "./deps/openssl/openssl/crypto/rand/rand_unix.c"
  "./deps/openssl/openssl/crypto/rand/rand_win.c"
  "./deps/openssl/openssl/crypto/rand/randfile.c"
  "./deps/openssl/openssl/crypto/rc2/rc2_cbc.c"
  "./deps/openssl/openssl/crypto/rc2/rc2_ecb.c"
  "./deps/openssl/openssl/crypto/rc2/rc2_skey.c"
  "./deps/openssl/openssl/crypto/rc2/rc2cfb64.c"
  "./deps/openssl/openssl/crypto/rc2/rc2ofb64.c"
  "./deps/openssl/openssl/crypto/rc4/rc4_utl.c"
  "./deps/openssl/openssl/crypto/ripemd/rmd_dgst.c"
  "./deps/openssl/openssl/crypto/ripemd/rmd_one.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_ameth.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_asn1.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_chk.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_crpt.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_depr.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_eay.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_err.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_gen.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_lib.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_none.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_null.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_oaep.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_pk1.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_pmeth.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_prn.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_pss.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_saos.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_sign.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_ssl.c"
  "./deps/openssl/openssl/crypto/rsa/rsa_x931.c"
  "./deps/openssl/openssl/crypto/seed/seed.c"
  "./deps/openssl/openssl/crypto/seed/seed_cbc.c"
  "./deps/openssl/openssl/crypto/seed/seed_cfb.c"
  "./deps/openssl/openssl/crypto/seed/seed_ecb.c"
  "./deps/openssl/openssl/crypto/seed/seed_ofb.c"
  "./deps/openssl/openssl/crypto/sha/sha1_one.c"
  "./deps/openssl/openssl/crypto/sha/sha1dgst.c"
  "./deps/openssl/openssl/crypto/sha/sha256.c"
  "./deps/openssl/openssl/crypto/sha/sha512.c"
  "./deps/openssl/openssl/crypto/sha/sha_dgst.c"
  "./deps/openssl/openssl/crypto/sha/sha_one.c"
  "./deps/openssl/openssl/crypto/srp/srp_lib.c"
  "./deps/openssl/openssl/crypto/srp/srp_vfy.c"
  "./deps/openssl/openssl/crypto/stack/stack.c"
  "./deps/openssl/openssl/crypto/ts/ts_asn1.c"
  "./deps/openssl/openssl/crypto/ts/ts_conf.c"
  "./deps/openssl/openssl/crypto/ts/ts_err.c"
  "./deps/openssl/openssl/crypto/ts/ts_lib.c"
  "./deps/openssl/openssl/crypto/ts/ts_req_print.c"
  "./deps/openssl/openssl/crypto/ts/ts_req_utils.c"
  "./deps/openssl/openssl/crypto/ts/ts_rsp_print.c"
  "./deps/openssl/openssl/crypto/ts/ts_rsp_sign.c"
  "./deps/openssl/openssl/crypto/ts/ts_rsp_utils.c"
  "./deps/openssl/openssl/crypto/ts/ts_rsp_verify.c"
  "./deps/openssl/openssl/crypto/ts/ts_verify_ctx.c"
  "./deps/openssl/openssl/crypto/txt_db/txt_db.c"
  "./deps/openssl/openssl/crypto/ui/ui_err.c"
  "./deps/openssl/openssl/crypto/ui/ui_lib.c"
  "./deps/openssl/openssl/crypto/ui/ui_openssl.c"
  "./deps/openssl/openssl/crypto/ui/ui_util.c"
  "./deps/openssl/openssl/crypto/uid.c"
  "./deps/openssl/openssl/crypto/whrlpool/wp_dgst.c"
  "./deps/openssl/openssl/crypto/x509/by_dir.c"
  "./deps/openssl/openssl/crypto/x509/by_file.c"
  "./deps/openssl/openssl/crypto/x509/x509_att.c"
  "./deps/openssl/openssl/crypto/x509/x509_cmp.c"
  "./deps/openssl/openssl/crypto/x509/x509_d2.c"
  "./deps/openssl/openssl/crypto/x509/x509_def.c"
  "./deps/openssl/openssl/crypto/x509/x509_err.c"
  "./deps/openssl/openssl/crypto/x509/x509_ext.c"
  "./deps/openssl/openssl/crypto/x509/x509_lu.c"
  "./deps/openssl/openssl/crypto/x509/x509_obj.c"
  "./deps/openssl/openssl/crypto/x509/x509_r2x.c"
  "./deps/openssl/openssl/crypto/x509/x509_req.c"
  "./deps/openssl/openssl/crypto/x509/x509_set.c"
  "./deps/openssl/openssl/crypto/x509/x509_trs.c"
  "./deps/openssl/openssl/crypto/x509/x509_txt.c"
  "./deps/openssl/openssl/crypto/x509/x509_v3.c"
  "./deps/openssl/openssl/crypto/x509/x509_vfy.c"
  "./deps/openssl/openssl/crypto/x509/x509_vpm.c"
  "./deps/openssl/openssl/crypto/x509/x509cset.c"
  "./deps/openssl/openssl/crypto/x509/x509name.c"
  "./deps/openssl/openssl/crypto/x509/x509rset.c"
  "./deps/openssl/openssl/crypto/x509/x509spki.c"
  "./deps/openssl/openssl/crypto/x509/x509type.c"
  "./deps/openssl/openssl/crypto/x509/x_all.c"
  "./deps/openssl/openssl/crypto/x509v3/pcy_cache.c"
  "./deps/openssl/openssl/crypto/x509v3/pcy_data.c"
  "./deps/openssl/openssl/crypto/x509v3/pcy_lib.c"
  "./deps/openssl/openssl/crypto/x509v3/pcy_map.c"
  "./deps/openssl/openssl/crypto/x509v3/pcy_node.c"
  "./deps/openssl/openssl/crypto/x509v3/pcy_tree.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_addr.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_akey.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_akeya.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_alt.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_asid.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_bcons.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_bitst.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_conf.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_cpols.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_crld.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_enum.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_extku.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_genn.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_ia5.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_info.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_int.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_lib.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_ncons.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_ocsp.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_pci.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_pcia.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_pcons.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_pku.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_pmaps.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_prn.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_purp.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_scts.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_skey.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_sxnet.c"
  "./deps/openssl/openssl/crypto/x509v3/v3_utl.c"
  "./deps/openssl/openssl/crypto/x509v3/v3err.c"
  "./deps/openssl/openssl/engines/e_4758cca.c"
  "./deps/openssl/openssl/engines/e_aep.c"
  "./deps/openssl/openssl/engines/e_atalla.c"
  "./deps/openssl/openssl/engines/e_capi.c"
  "./deps/openssl/openssl/engines/e_chil.c"
  "./deps/openssl/openssl/engines/e_cswift.c"
  "./deps/openssl/openssl/engines/e_gmp.c"
  "./deps/openssl/openssl/engines/e_nuron.c"
  "./deps/openssl/openssl/engines/e_sureware.c"
  "./deps/openssl/openssl/engines/e_ubsec.c"
  "./deps/openssl/openssl/crypto/bn/asm/x86_64-gcc.c"
  "./deps/openssl/openssl/crypto/bf/bf_enc.c"
  "./deps/openssl/openssl/crypto/bn/rsaz_exp.c"
  "./deps/openssl/openssl/crypto/cast/c_enc.c"
  "./deps/openssl/openssl/crypto/camellia/cmll_misc.c"
  "./deps/openssl/openssl/crypto/des/des_enc.c"
  "./deps/openssl/openssl/crypto/des/fcrypt_b.c"
  "./deps/openssl/openssl/crypto/ec/ecp_nistz256.c"
  "./deps/openssl/openssl/crypto/ui/ui_compat.c"
  "./deps/openssl/openssl/crypto/rc4/rc4_skey.c"
  "./deps/openssl/openssl/crypto/rc4/rc4_enc.c")
add_library(openssl STATIC ${openssl__asm_srcs} ${openssl__c_srcs})
set_target_properties(openssl PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(openssl PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/openssl")
set_target_properties(openssl PROPERTIES PREFIX "lib")
set_target_properties(openssl PROPERTIES ARCHIVE_OUTPUT_NAME "openssl")
set_target_properties(openssl PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/openssl/libopenssl.a PROPERTIES GENERATED "TRUE")
list(APPEND openssl__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/asn1"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/evp"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/md2"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/modes"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/store"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/include")
set_property(TARGET openssl APPEND PROPERTY INCLUDE_DIRECTORIES ${openssl__include_dirs})
set_target_properties(openssl PROPERTIES COMPILE_DEFINITIONS "_REENTRANT;PURIFY;OPENSSL_NO_COMP;OPENSSL_NO_SSL3;OPENSSL_NO_HEARTBEATS;OPENSSL_NO_HW;ENGINESDIR=\"/dev/null\";TERMIOS;OPENSSLDIR=\"/System/Library/OpenSSL/\";_DARWIN_USE_64_BIT_INODE=1;L_ENDIAN;AES_ASM;CPUID_ASM;OPENSSL_BN_ASM_MONT;OPENSSL_CPUID_OBJ;SHA1_ASM;SHA256_ASM;SHA512_ASM;GHASH_ASM;VPAES_ASM;BN_ASM;BF_ASM;BNCO_ASM;DES_ASM;LIB_BN_ASM;MD5_ASM;OPENSSL_BN_ASM;RIP_ASM;RMD160_ASM;WHIRLPOOL_ASM;WP_ASM;OPENSSL_BN_ASM_MONT5;OPENSSL_BN_ASM_GF2m;OPENSSL_IA32_SSE2;BSAES_ASM;DSO_DLFCN;HAVE_DLFCN_H;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_source_files_properties(${openssl__asm_srcs} PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter ")
set_source_files_properties(${openssl__c_srcs} PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(openssl PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/openssl/openssl.gyp:openssl-cli#target
set(TARGET "openssl-cli")
set(TOOLSET "target")
list(APPEND openssl-cli__c_srcs
  "./deps/openssl/openssl/apps/app_rand.c"
  "./deps/openssl/openssl/apps/apps.c"
  "./deps/openssl/openssl/apps/asn1pars.c"
  "./deps/openssl/openssl/apps/ca.c"
  "./deps/openssl/openssl/apps/ciphers.c"
  "./deps/openssl/openssl/apps/cms.c"
  "./deps/openssl/openssl/apps/crl.c"
  "./deps/openssl/openssl/apps/crl2p7.c"
  "./deps/openssl/openssl/apps/dgst.c"
  "./deps/openssl/openssl/apps/dh.c"
  "./deps/openssl/openssl/apps/dhparam.c"
  "./deps/openssl/openssl/apps/dsa.c"
  "./deps/openssl/openssl/apps/dsaparam.c"
  "./deps/openssl/openssl/apps/ec.c"
  "./deps/openssl/openssl/apps/ecparam.c"
  "./deps/openssl/openssl/apps/enc.c"
  "./deps/openssl/openssl/apps/engine.c"
  "./deps/openssl/openssl/apps/errstr.c"
  "./deps/openssl/openssl/apps/gendh.c"
  "./deps/openssl/openssl/apps/gendsa.c"
  "./deps/openssl/openssl/apps/genpkey.c"
  "./deps/openssl/openssl/apps/genrsa.c"
  "./deps/openssl/openssl/apps/nseq.c"
  "./deps/openssl/openssl/apps/ocsp.c"
  "./deps/openssl/openssl/apps/openssl.c"
  "./deps/openssl/openssl/apps/passwd.c"
  "./deps/openssl/openssl/apps/pkcs12.c"
  "./deps/openssl/openssl/apps/pkcs7.c"
  "./deps/openssl/openssl/apps/pkcs8.c"
  "./deps/openssl/openssl/apps/pkey.c"
  "./deps/openssl/openssl/apps/pkeyparam.c"
  "./deps/openssl/openssl/apps/pkeyutl.c"
  "./deps/openssl/openssl/apps/prime.c"
  "./deps/openssl/openssl/apps/rand.c"
  "./deps/openssl/openssl/apps/req.c"
  "./deps/openssl/openssl/apps/rsa.c"
  "./deps/openssl/openssl/apps/rsautl.c"
  "./deps/openssl/openssl/apps/s_cb.c"
  "./deps/openssl/openssl/apps/s_client.c"
  "./deps/openssl/openssl/apps/s_server.c"
  "./deps/openssl/openssl/apps/s_socket.c"
  "./deps/openssl/openssl/apps/s_time.c"
  "./deps/openssl/openssl/apps/sess_id.c"
  "./deps/openssl/openssl/apps/smime.c"
  "./deps/openssl/openssl/apps/speed.c"
  "./deps/openssl/openssl/apps/spkac.c"
  "./deps/openssl/openssl/apps/srp.c"
  "./deps/openssl/openssl/apps/ts.c"
  "./deps/openssl/openssl/apps/verify.c"
  "./deps/openssl/openssl/apps/version.c"
  "./deps/openssl/openssl/apps/x509.c")
add_executable(openssl-cli ${openssl-cli__c_srcs})
set_target_properties(openssl-cli PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(openssl-cli PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(openssl-cli PROPERTIES PREFIX "")
set_target_properties(openssl-cli PROPERTIES RUNTIME_OUTPUT_NAME "openssl-cli")
set_target_properties(openssl-cli PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/openssl-cli PROPERTIES GENERATED "TRUE")
list(APPEND openssl-cli__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/asn1"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/evp"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/md2"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/modes"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/crypto/store"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/include")
set_property(TARGET openssl-cli APPEND PROPERTY INCLUDE_DIRECTORIES ${openssl-cli__include_dirs})
set_target_properties(openssl-cli PROPERTIES COMPILE_DEFINITIONS "_REENTRANT;PURIFY;OPENSSL_NO_COMP;OPENSSL_NO_SSL3;OPENSSL_NO_HEARTBEATS;OPENSSL_NO_HW;ENGINESDIR=\"/dev/null\";TERMIOS;OPENSSLDIR=\"/System/Library/OpenSSL/\";_DARWIN_USE_64_BIT_INODE=1;MONOLITH;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(openssl-cli PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(openssl-cli PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
target_link_libraries(openssl-cli
  openssl
)
unset(TOOLSET)
unset(TARGET)

#/deps/http_parser/http_parser.gyp:http_parser_strict#target
set(TARGET "http_parser_strict")
set(TOOLSET "target")
set(http_parser_strict__c_srcs "./deps/http_parser/http_parser.c")
add_library(http_parser_strict STATIC ${http_parser_strict__c_srcs})
set_target_properties(http_parser_strict PROPERTIES EXCLUDE_FROM_ALL "TRUE")
set_target_properties(http_parser_strict PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/http_parser")
set_target_properties(http_parser_strict PROPERTIES PREFIX "lib")
set_target_properties(http_parser_strict PROPERTIES ARCHIVE_OUTPUT_NAME "http_parser_strict")
set_target_properties(http_parser_strict PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/http_parser/libhttp_parser_strict.a PROPERTIES GENERATED "TRUE")
set(http_parser_strict__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/http_parser")
set_property(TARGET http_parser_strict APPEND PROPERTY INCLUDE_DIRECTORIES ${http_parser_strict__include_dirs})
set_target_properties(http_parser_strict PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;HTTP_PARSER_STRICT=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(http_parser_strict PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(http_parser_strict PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/http_parser/http_parser.gyp:test-strict#target
set(TARGET "test-strict")
set(TOOLSET "target")
set(test-strict__c_srcs "./deps/http_parser/test.c")
add_executable(test-strict ${test-strict__c_srcs})
set_target_properties(test-strict PROPERTIES EXCLUDE_FROM_ALL "TRUE")
set_target_properties(test-strict PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(test-strict PROPERTIES PREFIX "")
set_target_properties(test-strict PROPERTIES RUNTIME_OUTPUT_NAME "test-strict")
set_target_properties(test-strict PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/test-strict PROPERTIES GENERATED "TRUE")
set(test-strict__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/http_parser")
set_property(TARGET test-strict APPEND PROPERTY INCLUDE_DIRECTORIES ${test-strict__include_dirs})
set_target_properties(test-strict PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;HTTP_PARSER_STRICT=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(test-strict PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(test-strict PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
target_link_libraries(test-strict
  http_parser_strict
)
unset(TOOLSET)
unset(TARGET)

#/deps/http_parser/http_parser.gyp:http_parser#target
set(TARGET "http_parser")
set(TOOLSET "target")
set(http_parser__c_srcs "./deps/http_parser/http_parser.c")
add_library(http_parser STATIC ${http_parser__c_srcs})
set_target_properties(http_parser PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_target_properties(http_parser PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/http_parser")
set_target_properties(http_parser PROPERTIES PREFIX "lib")
set_target_properties(http_parser PROPERTIES ARCHIVE_OUTPUT_NAME "http_parser")
set_target_properties(http_parser PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/http_parser/libhttp_parser.a PROPERTIES GENERATED "TRUE")
set(http_parser__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/http_parser")
set_property(TARGET http_parser APPEND PROPERTY INCLUDE_DIRECTORIES ${http_parser__include_dirs})
set_target_properties(http_parser PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;HTTP_PARSER_STRICT=0;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(http_parser PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(http_parser PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/http_parser/http_parser.gyp:test-nonstrict#target
set(TARGET "test-nonstrict")
set(TOOLSET "target")
set(test-nonstrict__c_srcs "./deps/http_parser/test.c")
add_executable(test-nonstrict ${test-nonstrict__c_srcs})
set_target_properties(test-nonstrict PROPERTIES EXCLUDE_FROM_ALL "TRUE")
set_target_properties(test-nonstrict PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(test-nonstrict PROPERTIES PREFIX "")
set_target_properties(test-nonstrict PROPERTIES RUNTIME_OUTPUT_NAME "test-nonstrict")
set_target_properties(test-nonstrict PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/test-nonstrict PROPERTIES GENERATED "TRUE")
set(test-nonstrict__include_dirs "${CMAKE_CURRENT_LIST_DIR}/deps/http_parser")
set_property(TARGET test-nonstrict APPEND PROPERTY INCLUDE_DIRECTORIES ${test-nonstrict__include_dirs})
set_target_properties(test-nonstrict PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;HTTP_PARSER_STRICT=0;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(test-nonstrict PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(test-nonstrict PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
target_link_libraries(test-nonstrict
  http_parser
)
unset(TOOLSET)
unset(TARGET)

#/deps/gtest/gtest.gyp:gtest#target
set(TARGET "gtest")
set(TOOLSET "target")
list(APPEND gtest__cxx_srcs
  "./deps/gtest/src/gtest-death-test.cc"
  "./deps/gtest/src/gtest-filepath.cc"
  "./deps/gtest/src/gtest-port.cc"
  "./deps/gtest/src/gtest-printers.cc"
  "./deps/gtest/src/gtest-test-part.cc"
  "./deps/gtest/src/gtest-typed-test.cc"
  "./deps/gtest/src/gtest.cc"
  "./deps/gtest/src/gtest_main.cc")
set(gtest__other_srcs "./deps/gtest/src/gtest-internal-inl.h")
add_library(gtest STATIC ${gtest__cxx_srcs} ${gtest__other_srcs})
set_target_properties(gtest PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${gtest__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(gtest PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/gtest")
set_target_properties(gtest PROPERTIES PREFIX "lib")
set_target_properties(gtest PROPERTIES ARCHIVE_OUTPUT_NAME "gtest")
set_target_properties(gtest PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/gtest/libgtest.a PROPERTIES GENERATED "TRUE")
list(APPEND gtest__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/gtest"
  "${CMAKE_CURRENT_LIST_DIR}/deps/gtest/include")
set_property(TARGET gtest APPEND PROPERTY INCLUDE_DIRECTORIES ${gtest__include_dirs})
set_target_properties(gtest PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(gtest PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(gtest PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/deps/cares/cares.gyp:cares#target
set(TARGET "cares")
set(TOOLSET "target")
list(APPEND cares__c_srcs
  "./deps/cares/src/ares_cancel.c"
  "./deps/cares/src/ares__close_sockets.c"
  "./deps/cares/src/ares_create_query.c"
  "./deps/cares/src/ares_data.c"
  "./deps/cares/src/ares_destroy.c"
  "./deps/cares/src/ares_expand_name.c"
  "./deps/cares/src/ares_expand_string.c"
  "./deps/cares/src/ares_fds.c"
  "./deps/cares/src/ares_free_hostent.c"
  "./deps/cares/src/ares_free_string.c"
  "./deps/cares/src/ares_gethostbyaddr.c"
  "./deps/cares/src/ares_gethostbyname.c"
  "./deps/cares/src/ares__get_hostent.c"
  "./deps/cares/src/ares_getnameinfo.c"
  "./deps/cares/src/ares_getopt.c"
  "./deps/cares/src/ares_getsock.c"
  "./deps/cares/src/ares_init.c"
  "./deps/cares/src/ares_library_init.c"
  "./deps/cares/src/ares_llist.c"
  "./deps/cares/src/ares_mkquery.c"
  "./deps/cares/src/ares_nowarn.c"
  "./deps/cares/src/ares_options.c"
  "./deps/cares/src/ares_parse_aaaa_reply.c"
  "./deps/cares/src/ares_parse_a_reply.c"
  "./deps/cares/src/ares_parse_mx_reply.c"
  "./deps/cares/src/ares_parse_naptr_reply.c"
  "./deps/cares/src/ares_parse_ns_reply.c"
  "./deps/cares/src/ares_parse_ptr_reply.c"
  "./deps/cares/src/ares_parse_soa_reply.c"
  "./deps/cares/src/ares_parse_srv_reply.c"
  "./deps/cares/src/ares_parse_txt_reply.c"
  "./deps/cares/src/ares_process.c"
  "./deps/cares/src/ares_query.c"
  "./deps/cares/src/ares__read_line.c"
  "./deps/cares/src/ares_search.c"
  "./deps/cares/src/ares_send.c"
  "./deps/cares/src/ares_strcasecmp.c"
  "./deps/cares/src/ares_strdup.c"
  "./deps/cares/src/ares_strerror.c"
  "./deps/cares/src/ares_timeout.c"
  "./deps/cares/src/ares__timeval.c"
  "./deps/cares/src/ares_version.c"
  "./deps/cares/src/ares_writev.c"
  "./deps/cares/src/bitncmp.c"
  "./deps/cares/src/inet_net_pton.c"
  "./deps/cares/src/inet_ntop.c")
list(APPEND cares__other_srcs
  "./deps/cares/common.gypi"
  "./deps/cares/include/ares.h"
  "./deps/cares/include/ares_rules.h"
  "./deps/cares/include/ares_version.h"
  "./deps/cares/include/nameser.h"
  "./deps/cares/src/ares_data.h"
  "./deps/cares/src/ares_dns.h"
  "./deps/cares/src/ares_getenv.h"
  "./deps/cares/src/ares_getopt.h"
  "./deps/cares/src/ares_ipv6.h"
  "./deps/cares/src/ares_library_init.h"
  "./deps/cares/src/ares_llist.h"
  "./deps/cares/src/ares_nowarn.h"
  "./deps/cares/src/ares_platform.h"
  "./deps/cares/src/ares_private.h"
  "./deps/cares/src/ares_setup.h"
  "./deps/cares/src/ares_strcasecmp.h"
  "./deps/cares/src/ares_strdup.h"
  "./deps/cares/src/ares_writev.h"
  "./deps/cares/src/bitncmp.h"
  "./deps/cares/src/ares_inet_net_pton.h"
  "./deps/cares/src/setup_once.h"
  "./deps/cares/config/darwin/ares_config.h")
add_library(cares STATIC ${cares__c_srcs} ${cares__other_srcs})
set_target_properties(cares PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${cares__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(cares PROPERTIES ARCHIVE_OUTPUT_DIRECTORY "${obj}.${TOOLSET}/deps/cares")
set_target_properties(cares PROPERTIES PREFIX "lib")
set_target_properties(cares PROPERTIES ARCHIVE_OUTPUT_NAME "cares")
set_target_properties(cares PROPERTIES SUFFIX ".a")
set_source_files_properties(${obj}.${TOOLSET}/deps/cares/libcares.a PROPERTIES GENERATED "TRUE")
list(APPEND cares__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/deps/cares/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/cares/src"
  "${CMAKE_CURRENT_LIST_DIR}/deps/cares/config/darwin")
set_property(TARGET cares APPEND PROPERTY INCLUDE_DIRECTORIES ${cares__include_dirs})
set_target_properties(cares PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;_LARGEFILE_SOURCE;_FILE_OFFSET_BITS=64;_GNU_SOURCE;CARES_STATICLIB;HAVE_CONFIG_H;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(cares PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing ")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(cares PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
unset(TOOLSET)
unset(TARGET)

#/node.gyp:node#target
set(TARGET "node")
set(TOOLSET "target")
list(APPEND node__cxx_srcs
  "./src/async-wrap.cc"
  "./src/cares_wrap.cc"
  "./src/connection_wrap.cc"
  "./src/connect_wrap.cc"
  "./src/env.cc"
  "./src/fs_event_wrap.cc"
  "./src/handle_wrap.cc"
  "./src/js_stream.cc"
  "./src/node.cc"
  "./src/node_api.cc"
  "./src/node_buffer.cc"
  "./src/node_config.cc"
  "./src/node_constants.cc"
  "./src/node_contextify.cc"
  "./src/node_debug_options.cc"
  "./src/node_file.cc"
  "./src/node_http_parser.cc"
  "./src/node_main.cc"
  "./src/node_os.cc"
  "./src/node_revert.cc"
  "./src/node_serdes.cc"
  "./src/node_url.cc"
  "./src/node_util.cc"
  "./src/node_v8.cc"
  "./src/node_stat_watcher.cc"
  "./src/node_watchdog.cc"
  "./src/node_zlib.cc"
  "./src/node_i18n.cc"
  "./src/pipe_wrap.cc"
  "./src/process_wrap.cc"
  "./src/signal_wrap.cc"
  "./src/spawn_sync.cc"
  "./src/string_bytes.cc"
  "./src/string_search.cc"
  "./src/stream_base.cc"
  "./src/stream_wrap.cc"
  "./src/tcp_wrap.cc"
  "./src/timer_wrap.cc"
  "./src/tracing/agent.cc"
  "./src/tracing/node_trace_buffer.cc"
  "./src/tracing/node_trace_writer.cc"
  "./src/tracing/trace_event.cc"
  "./src/tty_wrap.cc"
  "./src/udp_wrap.cc"
  "./src/util.cc"
  "./src/uv.cc"
  "${obj}/gen/node_javascript.cc"
  "./src/inspector_agent.cc"
  "./src/inspector_io.cc"
  "./src/inspector_socket.cc"
  "./src/inspector_socket_server.cc"
  "./src/node_crypto.cc"
  "./src/node_crypto_bio.cc"
  "./src/node_crypto_clienthello.cc"
  "./src/tls_wrap.cc"
  "./src/node_dtrace.cc"
  "./src/backtrace_posix.cc")
list(APPEND node__other_srcs
  "./src/node_api.h"
  "./src/node_api_types.h"
  "./src/async-wrap.h"
  "./src/async-wrap-inl.h"
  "./src/base-object.h"
  "./src/base-object-inl.h"
  "./src/connection_wrap.h"
  "./src/connect_wrap.h"
  "./src/env.h"
  "./src/env-inl.h"
  "./src/handle_wrap.h"
  "./src/js_stream.h"
  "./src/node.h"
  "./src/node_buffer.h"
  "./src/node_constants.h"
  "./src/node_debug_options.h"
  "./src/node_internals.h"
  "./src/node_javascript.h"
  "./src/node_mutex.h"
  "./src/node_root_certs.h"
  "./src/node_version.h"
  "./src/node_watchdog.h"
  "./src/node_wrap.h"
  "./src/node_revert.h"
  "./src/node_i18n.h"
  "./src/pipe_wrap.h"
  "./src/tty_wrap.h"
  "./src/tcp_wrap.h"
  "./src/udp_wrap.h"
  "./src/req-wrap.h"
  "./src/req-wrap-inl.h"
  "./src/string_bytes.h"
  "./src/stream_base.h"
  "./src/stream_base-inl.h"
  "./src/stream_wrap.h"
  "./src/tracing/agent.h"
  "./src/tracing/node_trace_buffer.h"
  "./src/tracing/node_trace_writer.h"
  "./src/tracing/trace_event.h"
  "./src/tree.h"
  "./src/util.h"
  "./src/util-inl.h"
  "./deps/http_parser/http_parser.h"
  "./deps/v8/include/v8.h"
  "./deps/v8/include/v8-debug.h"
  "./lib/internal/bootstrap_node.js"
  "./lib/async_hooks.js"
  "./lib/assert.js"
  "./lib/buffer.js"
  "./lib/child_process.js"
  "./lib/console.js"
  "./lib/constants.js"
  "./lib/crypto.js"
  "./lib/cluster.js"
  "./lib/dgram.js"
  "./lib/dns.js"
  "./lib/domain.js"
  "./lib/events.js"
  "./lib/fs.js"
  "./lib/http.js"
  "./lib/_http_agent.js"
  "./lib/_http_client.js"
  "./lib/_http_common.js"
  "./lib/_http_incoming.js"
  "./lib/_http_outgoing.js"
  "./lib/_http_server.js"
  "./lib/https.js"
  "./lib/inspector.js"
  "./lib/module.js"
  "./lib/net.js"
  "./lib/os.js"
  "./lib/path.js"
  "./lib/process.js"
  "./lib/punycode.js"
  "./lib/querystring.js"
  "./lib/readline.js"
  "./lib/repl.js"
  "./lib/stream.js"
  "./lib/_stream_readable.js"
  "./lib/_stream_writable.js"
  "./lib/_stream_duplex.js"
  "./lib/_stream_transform.js"
  "./lib/_stream_passthrough.js"
  "./lib/_stream_wrap.js"
  "./lib/string_decoder.js"
  "./lib/sys.js"
  "./lib/timers.js"
  "./lib/tls.js"
  "./lib/_tls_common.js"
  "./lib/_tls_legacy.js"
  "./lib/_tls_wrap.js"
  "./lib/tty.js"
  "./lib/url.js"
  "./lib/util.js"
  "./lib/v8.js"
  "./lib/vm.js"
  "./lib/zlib.js"
  "./lib/internal/buffer.js"
  "./lib/internal/child_process.js"
  "./lib/internal/cluster/child.js"
  "./lib/internal/cluster/master.js"
  "./lib/internal/cluster/round_robin_handle.js"
  "./lib/internal/cluster/shared_handle.js"
  "./lib/internal/cluster/utils.js"
  "./lib/internal/cluster/worker.js"
  "./lib/internal/errors.js"
  "./lib/internal/freelist.js"
  "./lib/internal/fs.js"
  "./lib/internal/http.js"
  "./lib/internal/linkedlist.js"
  "./lib/internal/net.js"
  "./lib/internal/module.js"
  "./lib/internal/process/next_tick.js"
  "./lib/internal/process/promises.js"
  "./lib/internal/process/stdio.js"
  "./lib/internal/process/warning.js"
  "./lib/internal/process.js"
  "./lib/internal/querystring.js"
  "./lib/internal/process/write-coverage.js"
  "./lib/internal/readline.js"
  "./lib/internal/repl.js"
  "./lib/internal/socket_list.js"
  "./lib/internal/test/unicode.js"
  "./lib/internal/url.js"
  "./lib/internal/util.js"
  "./lib/internal/v8_prof_polyfill.js"
  "./lib/internal/v8_prof_processor.js"
  "./lib/internal/streams/lazy_transform.js"
  "./lib/internal/streams/BufferList.js"
  "./lib/internal/streams/legacy.js"
  "./lib/internal/streams/destroy.js"
  "./deps/v8/tools/splaytree.js"
  "./deps/v8/tools/codemap.js"
  "./deps/v8/tools/consarray.js"
  "./deps/v8/tools/csvparser.js"
  "./deps/v8/tools/profile.js"
  "./deps/v8/tools/profile_view.js"
  "./deps/v8/tools/logreader.js"
  "./deps/v8/tools/tickprocessor.js"
  "./deps/v8/tools/SourceMap.js"
  "./deps/v8/tools/tickprocessor-driver.js"
  "./deps/node-inspect/lib/_inspect.js"
  "./deps/node-inspect/lib/internal/inspect_client.js"
  "./deps/node-inspect/lib/internal/inspect_repl.js"
  "./common.gypi"
  "./src/inspector_agent.h"
  "./src/inspector_io.h"
  "./src/inspector_socket.h"
  "./src/inspector_socket_server.h"
  "./src/node_crypto.h"
  "./src/node_crypto_bio.h"
  "./src/node_crypto_clienthello.h"
  "./src/tls_wrap.h")
add_executable(node ${node__cxx_srcs} ${node__other_srcs})
set_target_properties(node PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${node__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(node PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(node PROPERTIES PREFIX "")
set_target_properties(node PROPERTIES RUNTIME_OUTPUT_NAME "node")
set_target_properties(node PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/node PROPERTIES GENERATED "TRUE")
list(APPEND node__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/src"
  "${CMAKE_CURRENT_LIST_DIR}/tools/msvs/genfiles"
  "${CMAKE_CURRENT_LIST_DIR}/deps/uv/src/ares"
  "${obj}/gen"
  "${obj}/gen/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/zlib"
  "${CMAKE_CURRENT_LIST_DIR}/deps/http_parser"
  "${CMAKE_CURRENT_LIST_DIR}/deps/cares/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/uv/include")
set_property(TARGET node APPEND PROPERTY INCLUDE_DIRECTORIES ${node__include_dirs})
set_target_properties(node PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;NODE_ARCH=\"x64\";NODE_WANT_INTERNALS=1;V8_DEPRECATION_WARNINGS=1;NODE_USE_V8_PLATFORM=1;NODE_HAVE_I18N_SUPPORT=1;NODE_HAVE_SMALL_ICU=1;HAVE_INSPECTOR=1;HAVE_OPENSSL=1;HAVE_DTRACE=1;__POSIX__;NODE_PLATFORM=\"darwin\";UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_STATIC_IMPLEMENTATION=1;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;HTTP_PARSER_STRICT=0;_LARGEFILE_SOURCE;_FILE_OFFSET_BITS=64;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(node PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(node PROPERTIES LINK_FLAGS "-pthread ")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-force_load,${builddir}/libopenssl.a -Wl,-force_load,${builddir}/libv8_base.a -Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(node PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(node
  node_js2c_host
  v8
  icuuc
  v8_inspector_compress_protocol_json_host
  openssl-cli
  node_dtrace_header
  specialize_node_d
  postmortem-metadata
  v8_maybe_snapshot
  protocol_generated_sources
  protocol_compatibility
  inspector_injected_script
  inspector_debugger_script
  icu_implementation
  icu_uconfig
  icu_uconfig_target
  js2c
)
target_link_libraries(node
  v8_libplatform
  icui18n
  openssl
  zlib
  http_parser
  cares
  libuv
  v8_base
  v8_libbase
  v8_libsampler
  icuucx
  icudata
  icustubdata
  v8_snapshot
  "-framework CoreFoundation"
  "-lm"
)
unset(TOOLSET)
unset(TARGET)

#/node.gyp:cctest#target
set(TARGET "cctest")
set(TOOLSET "target")
list(APPEND cctest__cxx_srcs
  "./test/cctest/test_base64.cc"
  "./test/cctest/test_environment.cc"
  "./test/cctest/test_util.cc"
  "./test/cctest/test_url.cc"
  "./test/cctest/test_inspector_socket.cc"
  "./test/cctest/test_inspector_socket_server.cc"
  "./src/inspector_agent.cc"
  "./src/inspector_io.cc"
  "./src/inspector_socket.cc"
  "./src/inspector_socket_server.cc"
  "./src/node_crypto.cc"
  "./src/node_crypto_bio.cc"
  "./src/node_crypto_clienthello.cc"
  "./src/tls_wrap.cc"
  "./src/node_dtrace.cc"
  "./src/backtrace_posix.cc")
list(APPEND cctest__other_srcs
  "./src/inspector_agent.h"
  "./src/inspector_io.h"
  "./src/inspector_socket.h"
  "./src/inspector_socket_server.h"
  "./src/node_crypto.h"
  "./src/node_crypto_bio.h"
  "./src/node_crypto_clienthello.h"
  "./src/tls_wrap.h")
add_executable(cctest ${cctest__cxx_srcs} ${cctest__other_srcs})
set_target_properties(cctest PROPERTIES EXCLUDE_FROM_ALL "FALSE")
set_source_files_properties(${cctest__other_srcs} PROPERTIES HEADER_FILE_ONLY "TRUE")
set_target_properties(cctest PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${builddir}")
set_target_properties(cctest PROPERTIES PREFIX "")
set_target_properties(cctest PROPERTIES RUNTIME_OUTPUT_NAME "cctest")
set_target_properties(cctest PROPERTIES SUFFIX "")
set_source_files_properties(${builddir}/cctest PROPERTIES GENERATED "TRUE")
list(APPEND cctest__include_dirs
  "${CMAKE_CURRENT_LIST_DIR}/src"
  "${CMAKE_CURRENT_LIST_DIR}/tools/msvs/genfiles"
  "${CMAKE_CURRENT_LIST_DIR}/deps/v8/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/cares/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/uv/include"
  "${obj}/gen"
  "${obj}/gen/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/gtest/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/zlib"
  "${CMAKE_CURRENT_LIST_DIR}/deps/openssl/openssl/include"
  "${CMAKE_CURRENT_LIST_DIR}/deps/http_parser"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/i18n"
  "${CMAKE_CURRENT_LIST_DIR}/deps/icu-small/source/common")
set_property(TARGET cctest APPEND PROPERTY INCLUDE_DIRECTORIES ${cctest__include_dirs})
set_target_properties(cctest PROPERTIES COMPILE_DEFINITIONS "_DARWIN_USE_64_BIT_INODE=1;GTEST_DONT_DEFINE_ASSERT_EQ=1;GTEST_DONT_DEFINE_ASSERT_GE=1;GTEST_DONT_DEFINE_ASSERT_GT=1;GTEST_DONT_DEFINE_ASSERT_LE=1;GTEST_DONT_DEFINE_ASSERT_LT=1;GTEST_DONT_DEFINE_ASSERT_NE=1;NODE_WANT_INTERNALS=1;NODE_USE_V8_PLATFORM=1;NODE_HAVE_I18N_SUPPORT=1;NODE_HAVE_SMALL_ICU=1;HAVE_INSPECTOR=1;HAVE_OPENSSL=1;HAVE_DTRACE=1;__POSIX__;NODE_PLATFORM=\"darwin\";HTTP_PARSER_STRICT=0;_LARGEFILE_SOURCE;_FILE_OFFSET_BITS=64;UCONFIG_NO_SERVICE=1;UCONFIG_NO_REGULAR_EXPRESSIONS=1;U_ENABLE_DYLOAD=0;U_STATIC_IMPLEMENTATION=1;U_HAVE_STD_STRING=0;UCONFIG_NO_BREAK_ITERATION=0;UCONFIG_NO_LEGACY_CONVERSION=1;DEBUG;_DEBUG;V8_ENABLE_CHECKS;")
set_target_properties(cctest PROPERTIES COMPILE_FLAGS "-O0 -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++0x -stdlib=libc++ -fno-rtti -fno-exceptions -fno-threadsafe-statics -fno-strict-aliasing ")
set_target_properties(cctest PROPERTIES LINK_FLAGS "-pthread ")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_OTHER_CFLAGS "-fno-strict-aliasing ")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LANGUAGE_STANDARD "gnu++0x")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_OTHER_LDFLAGS "-Wl,-force_load,${builddir}/libopenssl.a -Wl,-force_load,${builddir}/libv8_base.a -Wl,-no_pie -Wl,-search_paths_first ")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_PREBINDING "NO")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_USE_HEADERMAP "NO")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_GCC_OPTIMIZATION_LEVEL "0")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_ARCHS "x86_64 ")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_GCC_VERSION "com.apple.compilers.llvm.clang.1_0")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_CLANG_CXX_LIBRARY "libc++")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_EXCEPTIONS "NO")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_MACOSX_DEPLOYMENT_TARGET "10.7")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_CPP_RTTI "NO")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_ALWAYS_SEARCH_USER_PATHS "NO")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_GCC_DYNAMIC_NO_PIC "NO")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_GCC_ENABLE_PASCAL_STRINGS "NO")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_GCC_CW_ASM_SYNTAX "NO")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_WARNING_CFLAGS "-Wall -Wendif-labels -W -Wno-unused-parameter ")
set_target_properties(cctest PROPERTIES XCODE_ATTRIBUTE_GCC_THREADSAFE_STATICS "NO")
add_dependencies(cctest
  node
  node_js2c_host
  node_dtrace_header
  node_dtrace_ustack
  node_dtrace_provider
  v8
  icuuc
  v8_inspector_compress_protocol_json_host
  openssl-cli
  specialize_node_d
  postmortem-metadata
  v8_maybe_snapshot
  protocol_generated_sources
  protocol_compatibility
  inspector_injected_script
  inspector_debugger_script
  icu_implementation
  icu_uconfig
  icu_uconfig_target
  js2c
)
target_link_libraries(cctest
  gtest
  zlib
  openssl
  http_parser
  libuv
  v8_libplatform
  icui18n
  cares
  v8_libbase
  v8_base
  v8_libsampler
  icuucx
  icudata
  icustubdata
  v8_snapshot
  "${builddir}/obj.target/node/gen/node_javascript.o"
  "${builddir}/obj.target/node/src/node_debug_options.o"
  "${builddir}/obj.target/node/src/async-wrap.o"
  "${builddir}/obj.target/node/src/env.o"
  "${builddir}/obj.target/node/src/node.o"
  "${builddir}/obj.target/node/src/node_buffer.o"
  "${builddir}/obj.target/node/src/node_i18n.o"
  "${builddir}/obj.target/node/src/node_url.o"
  "${builddir}/obj.target/node/src/util.o"
  "${builddir}/obj.target/node/src/string_bytes.o"
  "${builddir}/obj.target/node/src/string_search.o"
  "${builddir}/obj.target/node/src/stream_base.o"
  "${builddir}/obj.target/node/src/node_constants.o"
  "${builddir}/obj.target/node/src/node_revert.o"
  "${builddir}/obj.target/node/src/tracing/agent.o"
  "${builddir}/obj.target/node/src/tracing/node_trace_buffer.o"
  "${builddir}/obj.target/node/src/tracing/node_trace_writer.o"
  "${builddir}/obj.target/node/src/tracing/trace_event.o"
  "-framework CoreFoundation"
  "-lm"
)
unset(TOOLSET)
unset(TARGET)

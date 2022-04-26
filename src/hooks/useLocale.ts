import { useStorage } from "@vueuse/core"

export function useLocale(init: "en" | "cn" = "en") {
  let locale = useStorage("xieyezi-locale", init)

  const setLocale = (val: "en" | "cn") => {
    locale.value = val
    window.location.href = val === "en" ? "/" : "/index_CN"
  }

  return {
    locale,
    setLocale
  }
}

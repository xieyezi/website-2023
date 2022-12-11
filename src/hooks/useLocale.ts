import { useStorage } from "@vueuse/core"

export function useLocale(init: "en" | "cn" = "en") {
  let locale = useStorage("xieyezi-locale", init)

  const setLocale = (val: "en" | "cn") => {
    locale.value = val
    window.location.href = val === "en" ? "http://www.xieyezi.com" : "http://www.xieyezi.com/index_CN.html"
  }

  return {
    locale,
    setLocale
  }
}

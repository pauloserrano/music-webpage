import useSWR from "swr"

export const useFetch = <T = any> (url: string) => {
  const res = useSWR<T>(url, (url: string) => (
    fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + url).then(res => res.json())
  ))

  return res
}

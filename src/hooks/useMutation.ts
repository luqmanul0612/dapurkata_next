import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const initHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

type TUseMutation = <T extends object>(props: {
  url: string;
  method: "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
  skip?: boolean;
  headers?: { [name: string]: string | boolean };
  body?: { [name: string]: string };
}) => {
  data: T | any, error: any, loading: boolean,
  mutation: (props: {
    headers?: { [name: string]: string | boolean };
    body?: { [name: string]: string | boolean | number };
  }) => void
}

const useMutation: TUseMutation = ({ url, method, body: customBody = {}, headers: customHeaders = {}, skip }) => {
  const [data, setData] = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const [error, setError] = useState(null);
  const [headers, setHeaders] = useState(customHeaders);
  const [body, setBody] = useState({});
  const [startMutation, setStartMutation] = useState(false);
  const [loading, setLoading] = useState(false);

  const mutation = ({ body: refetchBody = body, headers: refetchHeaders = {} } = {}) => {
    setBody(refetchBody)
    setHeaders({ ...initHeaders, ...refetchHeaders })
    setStartMutation(true)
  };

  useEffect(() => {
    let unmount = false;
    const source = axios.CancelToken.source();

    const request = async () => {
      try {
        if (!unmount) setLoading(true);
        const res = await axios.request({
          url,
          method,
          headers: { ...initHeaders, ...headers },
          data: { ...customBody, ...body },
          cancelToken: source.token,
        });
        if (!unmount) setData(res.data);
      } catch (err: any) {
        if (err.response && err.response.status === 401) {
          sessionStorage.removeItem("token")
          window.location.assign("/login")
        }
        if (!unmount) setError(err);
      } finally {
        if (!unmount) {
          setLoading(false)
          setStartMutation(false)
        }
        if (!unmount && !isDirty) setIsDirty(true);
      }
    };
    if (!skip && startMutation) {
      setError(null);
      setData(null);
      request();
    };
    return () => {
      unmount = true;
      source.cancel(`cancel req ${url}`);
    };
  }, [skip, body, headers]);

  return { data, error, loading, mutation };
};

export default useMutation
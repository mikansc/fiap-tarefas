import { useState } from "react";

export type StatusTypes = "idle" | "loading" | "success" | "error";

type UseStatus = {
  status: StatusTypes;
  setStatusIdle: () => void;
  setStatusLoading: () => void;
  setStatusSuccess: () => void;
  setStatusError: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isIdle: boolean;
};

export const useStatus = (): UseStatus => {
  const [status, setStatus] = useState<StatusTypes>("idle");

  const setStatusIdle = () => setStatus("idle");
  const setStatusLoading = () => setStatus("loading");
  const setStatusSuccess = () => setStatus("success");
  const setStatusError = () => setStatus("error");

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";
  const isIdle = status === "idle";

  return { status, setStatusLoading, setStatusSuccess, setStatusError, setStatusIdle, isLoading, isSuccess, isError, isIdle };
};

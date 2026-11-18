"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => null;

export default function CopyrightYear() {
  const year = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return <>{year}</>;
}

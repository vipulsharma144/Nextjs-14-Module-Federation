"use client";
import dynamic from "next/dynamic";
import RemotionPlayer from "./RemotionPlayer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
//get query params
//https://github.com/remotion-dev/remotion/issues/1326
// https://github.com/musafiroon/remotion-remote-composition
export default function Page() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("id");
  const [template, setTemplate] = useState<any>(null);
  const [component, setcomponent] = useState<any>(null);
  useEffect(() => {
    const getTemplate = async () => {
      const template = await fetch("/api/template-path?id=" + templateId, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => "error loading component");
      setTemplate(template);
    };
    getTemplate();
  }, []);

  useEffect(() => {
    const component = dynamic(async () => {
      if (template && template.path)
        return import(template.path).then((mod) => mod[template.componentName]);
    });
    setcomponent(component);
  }, [template]);
  if (!component)
    return (
      <div>
        Loading...<Spinner></Spinner>
      </div>
    );
  return (
    <>
      <RemotionPlayer
        component={async () => await component}
        inputProps={{}}
      ></RemotionPlayer>
    </>
  );
}

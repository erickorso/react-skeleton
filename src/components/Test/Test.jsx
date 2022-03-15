import React, { useContext, useEffect } from "react";
import { MainContext } from "../../context/Main/MainProvider";

const Test = () => {
  const context = useContext(MainContext);

  useEffect(() => {
    context.setSimpleState({ simpleValue: 90 });
  }, [context.getSimpleState]);

  return (
    <div>
      <h2>Test</h2>
      <code>{JSON.stringify(context)}</code>
    </div>
  );
};

export default Test;

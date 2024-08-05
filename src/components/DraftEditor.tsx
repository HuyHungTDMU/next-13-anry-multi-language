"use client";

import React, { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import { apiUpdateNews } from "../lib/api-request";

type EditorDemoProps = {
  content: string;
};

type EditorDemoState = {
  documents: Array<string>;
  documentID: number;
  editor: ClassicEditor | null;
};

export default function EditorDemo(props: EditorDemoProps): JSX.Element {
  const [isWatchdogDisabled, setIsWatchdogDisabled] = useState(false);
  const [state, setState] = useState<EditorDemoState>({
    documents: [props.content],
    documentID: 0,
    editor: null,
  });

  const updateData = () => {
    setState((prevState) => ({
      ...prevState,
      documents: state.documents.map((data, index) => {
        if (index === state.documentID) {
          return state.editor!.getData();
        }

        return data;
      }),
    }));
  };

  const onSaveData = async () => {
    const data = await apiUpdateNews(state.documents[0]);
    alert("update success");
  };

  return (
    <div className="space-y-4">
      {/*<CKEditor*/}
      {/*  editor={ClassicEditor}*/}
      {/*  id={state.documentID}*/}
      {/*  disableWatchdog={isWatchdogDisabled}*/}
      {/*  data={state.documents[state.documentID]}*/}
      {/*  watchdogConfig={{ crashNumberLimit: 10 }}*/}
      {/*  onReady={(editor) => {*/}
      {/*    // let window: any;*/}
      {/*    // window.editor = editor;*/}
      {/*    setState((prevState) => ({ ...prevState, editor }));*/}
      {/*  }}*/}
      {/*  onChange={(event, editor) => {*/}
      {/*    updateData();*/}
      {/*  }}*/}
      {/*/>*/}

      <button
        className="border-b-cyan-900 border py-2 px-4 rounded"
        onClick={onSaveData}
      >
        Save News
      </button>
    </div>
  );
}

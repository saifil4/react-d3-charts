import React, { useState } from "react";
import CodeBlock from "components/CodeBlock";

type Props = {
  heading: string;
  chart: React.FC<any>;
  files: { code: string; name: string }[];
  isInProgress: boolean;
};

const InProgressIndication: React.FC = () => (
  <div>
    <br />
    <div
      style={{
        background: "#F7F8F9",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <h1 className="font-bold text-4xl">In Progress</h1>
    </div>
    <br />
  </div>
);

const ChartSection: React.FC<Props> = ({
  chart: Chart,
  heading,
  files,
  isInProgress = true,
}) => {
  if (isInProgress) return <InProgressIndication />;

  const [selectedFile, setSelectedFile] = useState(files[0].name || null);

  return (
    <>
      <h1 className="font-bold text-4xl">{heading}</h1>
      <br />
      <div className="bg-gray-100 text-center rounded-xl">
        <Chart />
      </div>
      <br />
      <div className="rounded-xl overflow-hidden bg-gray-700">
        <ul className=" flex px-5">
          {files.map((file) => (
            <li
              className={`px-5 py-3 text-white ${
                file.name === selectedFile && "border-b-4 border-b-cyan-600"
              }`}
              key={file.name}
            >
              <button onClick={() => setSelectedFile(file.name)}>
                {file.name}
              </button>
            </li>
          ))}
        </ul>
        {files.map(
          (file) => file.name === selectedFile && <CodeBlock code={file.code} />
        )}
      </div>
    </>
  );
};

export default ChartSection;

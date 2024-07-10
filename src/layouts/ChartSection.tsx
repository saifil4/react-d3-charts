import React, { useState } from "react";
import CodeBlock from "components/CodeBlock";

type Props = {
  heading: string;
  chart: React.FC<any>;
  files: { code: string; name: string }[];
  isInProgress: boolean;
};

const InProgressIndication: React.FC = () => (
  <div className="inline-block px-3 py-1 bg-orange-400 text-white text-sm rounded-full">
    <p>In Progress</p>
  </div>
);

const ChartSection: React.FC<Props> = ({
  chart: Chart,
  heading,
  files,
  isInProgress = true,
}) => {
  // if (isInProgress) return <InProgressIndication />;

  const [selectedFile, setSelectedFile] = useState(files[0].name || null);

  return (
    <>
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-3xl">{heading}</h1>
        {isInProgress && <InProgressIndication />}
      </div>

      <br />
      <div className="bg-gray-100 text-center rounded-xl">
        <Chart />
      </div>
      <br />
      {!isInProgress && (
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
            (file) =>
              file.name === selectedFile && <CodeBlock code={file.code} />
          )}
        </div>
      )}
    </>
  );
};

export default ChartSection;

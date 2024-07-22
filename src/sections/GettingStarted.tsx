import React from "react";
import CodeBlock from "../components/CodeBlock";

const GettingStarted: React.FC = () => {
  // Implement your component logic here

  return (
    <div>
      <h1 className="text-3xl font-bold">Getting Started</h1>
      <br />
      <p>
        React D3 Charts is a compilation of visualization chart examples built
        with React, D3, TypeScript and Framer Motion. The project aims to
        provide a declarative method for creating D3 charts with beautiful
        animations.
      </p>

      <SubHeading>Installation</SubHeading>
      <CodeBlock code={`npm install d3 @types/d3 framer-motion`} />

      <SubHeading>Why</SubHeading>
      <p>
        When searching for D3 implementations online, I often come across common
        mistakes, such as relying on DOM manipulation, which is not suitable for
        React. I've made these mistakes myself in the past and therefore, I
        wanted to create examples that display writing declarative code for
        creating charts using D3.
      </p>
      <SubHeading>How to use?</SubHeading>
      <p>
        I wanted to keep this as unopinionated as possible, so instead of
        creating a library, I compiled a collection of examples with minimal
        abstractions. You can simply install the dependencies and copy the code
        from these examples to create your own charts.
      </p>
      <SubHeading>Feedback</SubHeading>
      <p>
        I am currently in process of setting up feedback page. In the meantime
        you can reach out to me on email at <b>saifilmomin4@gmail.com</b> or
        message me on{" "}
        <a
          className="underline text-blue-500"
          href="https://www.linkedin.com/in/saifilmomin/"
        >
          linkedin
        </a>
      </p>
    </div>
  );
};

export default GettingStarted;

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="text-xl font-bold mb-2 mt-5">{children}</h2>;
};

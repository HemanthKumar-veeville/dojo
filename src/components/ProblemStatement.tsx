import React from "react";
import { useNavigate } from "react-router-dom";

const ProblemStatement: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="min-h-screen w-full p-8 bg-deepMaroon text-white overflow-y-auto scrollable">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mb-4 bg-mediumRed hover:bg-lightRed text-white font-bold py-2 px-4 rounded"
      >
        Back
      </button>

      {/* Problem Section */}
      <h2 className="text-2xl font-bold mb-4">Problem</h2>
      <p className="mb-4 leading-relaxed">
        A student is taking a cryptography class and has found anagrams to be
        very useful. Two strings are anagrams of each other if the first
        string's letters can be rearranged to form the second string. In other
        words, both strings must contain the same exact letters in the same
        exact frequency. For example, <strong>bacdc</strong> and
        <strong> dcbac</strong> are anagrams, but <strong>bacdc</strong> and{" "}
        <strong>dcbad</strong> are not.
      </p>
      <p className="mb-8 leading-relaxed">
        The student decides on an encryption scheme that involves two large
        strings. The encryption is dependent on the minimum number of character
        deletions required to make the two strings anagrams. Determine this
        number.
      </p>

      {/* Example Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Example</h3>
      <p className="mb-8">
        <strong>a =</strong> 'cde'
        <br />
        <strong>b =</strong> 'dcf'
        <br />
        Delete <code>e</code> from <code>a</code> and <code>f</code> from{" "}
        <code>b</code> so that the remaining strings are <code>cd</code> and{" "}
        <code>dc</code>, which are anagrams. This takes 2 character deletions.
      </p>

      {/* Function Description Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Function Description</h3>
      <p className="mb-4 leading-relaxed">
        Complete the <code>makeAnagram</code> function in the editor below.
        <br />
        <code>makeAnagram</code> has the following parameter(s):
      </p>
      <ul className="list-disc list-inside ml-6 mb-8">
        <li>
          <code>string a</code>: a string to compare
        </li>
        <li>
          <code>string b</code>: another string to compare
        </li>
      </ul>

      {/* Returns Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Returns</h3>
      <p className="mb-8">
        <code>int</code>: the minimum number of deletions needed to make the
        strings anagrams.
      </p>

      {/* Input Format Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Input Format</h3>
      <p className="mb-8">
        The first line contains a single string, <code>a</code>.<br />
        The second line contains a single string, <code>b</code>.
      </p>

      {/* Constraints Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Constraints</h3>
      <ul className="list-disc list-inside ml-6 mb-8">
        <li>
          <code>
            1 ≤ |a|, |b| ≤ 10<sup>4</sup>
          </code>
        </li>
        <li>
          The strings <code>a</code> and <code>b</code> consist of lowercase
          English alphabetic letters, ascii[a-z].
        </li>
      </ul>

      {/* Sample Input Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Sample Input</h3>
      <div className="bg-darkRed p-4 rounded mb-8">
        <code>
          cde
          <br />
          abc
        </code>
      </div>

      {/* Sample Output Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Sample Output</h3>
      <div className="bg-darkRed p-4 rounded mb-8">
        <code>4</code>
      </div>

      {/* Explanation Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Explanation</h3>
      <p className="leading-relaxed">
        Delete the following characters from the strings to make them anagrams:
      </p>
      <ul className="list-decimal list-inside ml-6 mb-8">
        <li>
          Remove <code>d</code> and <code>e</code> from <code>cde</code> to get{" "}
          <code>c</code>.
        </li>
        <li>
          Remove <code>a</code> and <code>b</code> from <code>abc</code> to get{" "}
          <code>c</code>.
        </li>
      </ul>
      <p>It takes 4 deletions to make both strings anagrams.</p>
    </div>
  );
};

export default ProblemStatement;

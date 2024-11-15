// src/constants/skeletons.ts
const skeletons: { [key: string]: string } = {
    javascript: `// JavaScript Skeleton Code\n\nfunction main(input) {\n  console.log("User Input:", input);\n}\n\nmain("{{input}}");`,
    python: `# Python Skeleton Code\ndef main(input):\n    print("User Input:", input)\n\nif __name__ == "__main__":\n    main("{{input}}")`,
    cpp: `// C++ Skeleton Code\n#include <iostream>\n#include <string>\n\nint main() {\n    std::string input = "{{input}}";\n    std::cout << "User Input: " << input << std::endl;\n    return 0;\n}`,
  }
  
  export default skeletons
  
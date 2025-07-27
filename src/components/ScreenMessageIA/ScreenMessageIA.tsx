import type { ScreenMessageIAProps } from "./ScreenMessageIATypes";

/**
* Name           : ScreenMessageIA
* Purpose        : Renders a list of AI-generated messages, processing Markdown-style links into HTML anchor tags
*                  and preserving line breaks.
* Parameters     :
*    - messages (string[]) : Array of message strings to be displayed. Each message may contain line breaks and
*                            Markdown-style links (e.g., [text](url)).
* Returns        : JSX.Element - A fragment containing a list of formatted message elements.
*/
export const ScreenMessageIA = ({ messages }: ScreenMessageIAProps) => {
  return (
    <>
      {
        messages.map((message, index) => {
          // Splits the message into lines using the newline character, then processes each line:
          // - Replaces Markdown-style links [text](url) with HTML anchor tags.
          // - Uses dangerouslySetInnerHTML to render the parsed HTML safely within a <span> element.
          const processedLines = message.split('\n').map((line, lineIndex) => {
            const parsedLine = line.replace(
              /\[([^\]]+)\]\(([^)]+)\)/g,
              '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
            );

            return (
              <span
                key={lineIndex}
                dangerouslySetInnerHTML={{ __html: parsedLine }}
              />
            );
          });

          // Renders each processed message line inside a <p> element with the class "screen-ia__message".
          // Each line is wrapped in a <span> followed by a <br /> to preserve line breaks visually.
          return (
            <p className="screen-ia__message" key={index}>
              {processedLines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          );
        })
      }
    </>
  );
}

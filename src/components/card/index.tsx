import * as React from "react";
import IconFont from "../icon_font";

interface Props {
  type?: string;
  isRow?: boolean;
  isColumn?: boolean;
  content: string | React.ReactNode;
  bgcolor?: string;
  size?:string
}
const Card= ({
  type = "",
  isRow = false,
  isColumn = false,
  content,
  bgcolor = "#fff",
  size=''
}: Props): React.ReactElement<React.ReactNode> => {
  return (
    <div
      className={`card-component ${
        isRow ? "flex-row" : isColumn ? "flex-column" : ""
      }`}
      style={{ background: bgcolor }}
    >
      {type != "" && <IconFont className="iconfont" size={size} type={type} />}
      <div>
      {content}
      </div>
    </div>
  );
};
export default Card;